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
    const res = await mongoose.connection.collection('reviews').deleteMany({
      $or: [
        { name: { $regex: /qa|test|browser|dummy/i } },
        { text: { $regex: /test|verified!|turbopack/i } }
      ]
    });
    console.log('DELETED_COUNT:', res.deletedCount);
    await mongoose.disconnect();
  } catch (e) {
    console.error('Error:', e.message);
  }
}
run();
