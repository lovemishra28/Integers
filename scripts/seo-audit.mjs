import http from 'http';

function fetchUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on('error', (err) => {
      resolve({
        statusCode: 0,
        error: err.message,
        body: '',
      });
    });
  });
}

async function runAudit() {
  console.log('Fetching sitemap.xml...');
  const sitemapRes = await fetchUrl('/sitemap.xml');
  if (sitemapRes.statusCode !== 200) {
    console.error('Failed to fetch sitemap.xml, status:', sitemapRes.statusCode);
    return;
  }

  // Extract all URLs from sitemap
  const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(sitemapRes.body)) !== null) {
    const fullUrl = match[1];
    const path = fullUrl.replace(/https?:\/\/[^\/]+/, '') || '/';
    urls.push(path);
  }

  console.log(`Discovered ${urls.length} URLs in sitemap.`);

  // Audit data structures
  const results = {};
  const allInternalLinks = new Set();
  const inboundLinkCount = {};
  urls.forEach(u => inboundLinkCount[u] = 0);

  // Crawl each page
  for (const path of urls) {
    process.stdout.write(`Auditing ${path}... `);
    const res = await fetchUrl(path);
    if (res.statusCode !== 200) {
      console.log(`FAILED (${res.statusCode})`);
      results[path] = { statusCode: res.statusCode, error: 'Non-200 status' };
      continue;
    }
    console.log('OK (200)');

    const body = res.body;

    // 1. Title
    const titleMatch = body.match(/<title[^>]*>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : null;

    // 2. Meta description
    const descMatch = body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                      body.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
    const description = descMatch ? descMatch[1].trim() : null;

    // 3. Canonical
    const canonMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                       body.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
    const canonical = canonMatch ? canonMatch[1].trim() : null;

    // 4. H1 tags
    const h1Matches = [...body.matchAll(/<h1[^>]*>(.*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

    // 5. Heading hierarchy (h1, h2, h3, h4, h5, h6 sequence)
    const headingOrder = [...body.matchAll(/<(h[1-6])[^>]*>(.*?)<\/\1>/gi)].map(m => ({
      level: parseInt(m[1].substring(1)),
      tag: m[1].toUpperCase(),
      text: m[2].replace(/<[^>]+>/g, '').trim(),
    }));

    const hierarchyIssues = [];
    let prevLevel = 0;
    headingOrder.forEach(h => {
      if (prevLevel > 0 && h.level > prevLevel + 1) {
        hierarchyIssues.push(`Skipped from H${prevLevel} directly to H${h.level} ("${h.text.substring(0, 30)}...")`);
      }
      prevLevel = h.level;
    });

    // 6. Images & Alt text
    const imgMatches = [...body.matchAll(/<img([^>]+)>/gi)];
    const images = imgMatches.map(m => {
      const attrs = m[1];
      const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
      const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
      return {
        src: srcMatch ? srcMatch[1] : 'unknown',
        hasAltAttr: Boolean(altMatch),
        alt: altMatch ? altMatch[1] : null,
      };
    });

    const missingAlt = images.filter(img => !img.hasAltAttr || img.alt.trim() === '');

    // 7. Schema markup
    const schemaMatches = [...body.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    const schemas = [];
    const schemaErrors = [];

    schemaMatches.forEach(m => {
      try {
        const parsed = JSON.parse(m[1]);
        if (Array.isArray(parsed)) {
          parsed.forEach(item => schemas.push(item['@type']));
        } else if (parsed['@graph']) {
          parsed['@graph'].forEach(item => schemas.push(item['@type']));
        } else if (parsed['@type']) {
          schemas.push(parsed['@type']);
        }
      } catch (err) {
        schemaErrors.push(err.message);
      }
    });

    // 8. Internal links
    const linkMatches = [...body.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi)];
    const internalLinks = [];
    linkMatches.forEach(m => {
      const href = m[1].trim();
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/_next') && !href.startsWith('/api')) {
        const cleanPath = href.split('#')[0].split('?')[0] || '/';
        internalLinks.push(cleanPath);
        allInternalLinks.add(cleanPath);
        if (inboundLinkCount[cleanPath] !== undefined) {
          inboundLinkCount[cleanPath]++;
        } else {
          inboundLinkCount[cleanPath] = 1;
        }
      }
    });

    // 9. Viewport meta
    const viewportMatch = body.match(/<meta[^>]*name=["']viewport["'][^>]*>/i);

    results[path] = {
      statusCode: res.statusCode,
      title,
      titleLength: title ? title.length : 0,
      description,
      descLength: description ? description.length : 0,
      canonical,
      h1Count: h1Matches.length,
      h1Texts: h1Matches,
      hierarchyIssues,
      totalHeadings: headingOrder.length,
      totalImages: images.length,
      missingAlt,
      schemas,
      schemaErrors,
      outboundInternalLinksCount: internalLinks.length,
      hasViewport: Boolean(viewportMatch),
    };
  }

  // Check for broken links (test any discovered internal links not in sitemap)
  console.log('\nChecking for broken internal links...');
  const brokenLinks = [];
  for (const link of allInternalLinks) {
    if (!results[link]) {
      const checkRes = await fetchUrl(link);
      if (checkRes.statusCode !== 200) {
        brokenLinks.push({ link, status: checkRes.statusCode });
      }
    }
  }

  // Check for duplicate titles and descriptions
  const titleMap = {};
  const descMap = {};

  Object.entries(results).forEach(([path, data]) => {
    if (data.title) {
      if (!titleMap[data.title]) titleMap[data.title] = [];
      titleMap[data.title].push(path);
    }
    if (data.description) {
      if (!descMap[data.description]) descMap[data.description] = [];
      descMap[data.description].push(path);
    }
  });

  const duplicateTitles = Object.entries(titleMap).filter(([_, paths]) => paths.length > 1);
  const duplicateDescriptions = Object.entries(descMap).filter(([_, paths]) => paths.length > 1);

  // Output full summary
  console.log('\n======================================================');
  console.log('              COMPREHENSIVE SEO AUDIT REPORT           ');
  console.log('======================================================\n');

  console.log(`Total URLs Audited: ${Object.keys(results).length}`);
  console.log(`Broken Internal Links: ${brokenLinks.length}`);
  if (brokenLinks.length > 0) {
    console.log('  Broken links found:', brokenLinks);
  } else {
    console.log('  ✓ Zero broken internal links found!');
  }

  console.log(`\nDuplicate Titles: ${duplicateTitles.length}`);
  duplicateTitles.forEach(([t, p]) => {
    console.log(`  "${t}" duplicated across: ${p.join(', ')}`);
  });

  console.log(`\nDuplicate Meta Descriptions: ${duplicateDescriptions.length}`);
  duplicateDescriptions.forEach(([d, p]) => {
    console.log(`  "${d.substring(0, 50)}..." duplicated across: ${p.join(', ')}`);
  });

  console.log('\nH1 Count Issues (Pages without exactly 1 H1):');
  let h1IssuesCount = 0;
  Object.entries(results).forEach(([path, data]) => {
    if (data.h1Count !== 1) {
      h1IssuesCount++;
      console.log(`  [${path}] has ${data.h1Count} H1 tags! H1s: ${JSON.stringify(data.h1Texts)}`);
    }
  });
  if (h1IssuesCount === 0) console.log('  ✓ All pages have exactly 1 H1 tag!');

  console.log('\nCanonical Tag Status:');
  let missingCanonicals = 0;
  Object.entries(results).forEach(([path, data]) => {
    if (!data.canonical) {
      missingCanonicals++;
      console.log(`  [${path}] missing canonical tag!`);
    }
  });
  if (missingCanonicals === 0) console.log('  ✓ All pages have canonical tags!');

  console.log('\nSchema Markup Status:');
  let schemaErrorsCount = 0;
  Object.entries(results).forEach(([path, data]) => {
    if (data.schemaErrors && data.schemaErrors.length > 0) {
      schemaErrorsCount++;
      console.log(`  [${path}] schema errors:`, data.schemaErrors);
    }
  });
  if (schemaErrorsCount === 0) console.log('  ✓ All JSON-LD structured data is syntactically valid!');

  console.log('\nMissing Image Alt Attributes:');
  let missingAltTotal = 0;
  Object.entries(results).forEach(([path, data]) => {
    if (data.missingAlt && data.missingAlt.length > 0) {
      missingAltTotal += data.missingAlt.length;
      console.log(`  [${path}] has ${data.missingAlt.length} images with missing/empty alt:`, data.missingAlt.map(i => i.src));
    }
  });
  if (missingAltTotal === 0) console.log('  ✓ All images have valid alt attributes!');

  console.log('\nHeading Hierarchy Jumps (H1 -> H3 skips):');
  let totalHierarchyIssues = 0;
  Object.entries(results).forEach(([path, data]) => {
    if (data.hierarchyIssues && data.hierarchyIssues.length > 0) {
      totalHierarchyIssues += data.hierarchyIssues.length;
      console.log(`  [${path}]:`);
      data.hierarchyIssues.forEach(iss => console.log(`    - ${iss}`));
    }
  });
  if (totalHierarchyIssues === 0) console.log('  ✓ Perfect heading hierarchy across all pages!');

  console.log('\nInternal Inbound Link Counts (Orphan & Low-Link Page Detection):');
  const sortedInbound = Object.entries(inboundLinkCount).sort((a, b) => a[1] - b[1]);
  sortedInbound.slice(0, 15).forEach(([path, count]) => {
    console.log(`  ${count.toString().padStart(3, ' ')} inbound links <- ${path}`);
  });

  // Save full JSON report for inspection
  import('fs').then(fs => {
    fs.writeFileSync('scripts/audit-report.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        totalAudited: Object.keys(results).length,
        brokenLinksCount: brokenLinks.length,
        duplicateTitlesCount: duplicateTitles.length,
        duplicateDescCount: duplicateDescriptions.length,
        h1IssuesCount,
        missingCanonicals,
        schemaErrorsCount,
        missingAltTotal,
        totalHierarchyIssues,
      },
      brokenLinks,
      duplicateTitles,
      duplicateDescriptions,
      results,
      inboundLinkCount,
    }, null, 2));
    console.log('\nFull detailed audit data saved to scripts/audit-report.json');
  });
}

runAudit();
