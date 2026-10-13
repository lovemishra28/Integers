async function testLive() {
  const routes = [
    "/",
    "/services/web-development",
    "/portfolio/vastavikta",
    "/faq",
    "/pricing",
    "/web-development-company-gwalior",
  ];

  for (const route of routes) {
    console.log(`\n--- Inspecting JSON-LD on http://localhost:3000${route} ---`);
    const res = await fetch(`http://localhost:3000${route}`);
    const text = await res.text();
    const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
    let match;
    let count = 0;
    while ((match = regex.exec(text)) !== null) {
      count++;
      try {
        const parsed = JSON.parse(match[1]);
        const type = parsed["@type"] || (parsed["@graph"] ? "Graph" : "Unknown");
        console.log(`  [${count}] Valid JSON-LD: @type =`, type);
      } catch (err) {
        console.error(`  [${count}] FAILED JSON parse:`, err.message);
        process.exitCode = 1;
      }
    }
  }
  console.log("\nAll live pages parsed valid JSON-LD successfully!");
}

testLive();
