import http from 'http';

function checkUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const hasGsc = data.includes('google-site-verification');
        const hasGaScript = data.includes('googletagmanager.com/gtag/js');
        const hasGaInit = data.includes('google-analytics-init');
        const hasConsent = data.includes('Cookie and Privacy Consent Notice') || data.includes('integers_cookie_consent');
        
        const gscMatch = data.match(/<meta[^>]*google-site-verification[^>]*>/);

        console.log(`\nURL: ${urlPath} (HTTP ${res.statusCode})`);
        console.log(`  GSC Meta Tag: ${hasGsc} -> ${gscMatch ? gscMatch[0] : 'Not matched'}`);
        console.log(`  GA4 Remote Script: ${hasGaScript}`);
        console.log(`  GA4 Init Script: ${hasGaInit}`);
        console.log(`  Cookie Consent Markup: ${hasConsent}`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error requesting ${urlPath}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  await checkUrl('/');
  await checkUrl('/pricing');
  await checkUrl('/contact');
  await checkUrl('/blog/how-much-does-a-website-cost-in-india-2026');
}

main();
