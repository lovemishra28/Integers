const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
env.split('\n').forEach(line => {
  const idx = line.indexOf('=');
  if (idx > 0 && !line.startsWith('#')) {
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    process.env[key] = val;
  }
});

const mongoose = require('mongoose');
async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const reviews = await mongoose.connection.collection('reviews').find({}).toArray();
    console.log('REVIEWS_COUNT:', reviews.length);
    console.log(JSON.stringify(reviews, null, 2));
    await mongoose.disconnect();
  } catch (e) {
    console.error('Error:', e.message);
  }
}
run();
