const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  path.join(__dirname, '..', 'public'),
  path.join(__dirname, '..', 'src', 'assets'),
];

function findImages(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        findImages(full, fileList);
      }
    } else if (/\.(png|jpe?g)$/i.test(item)) {
      if (stat.size > 200 * 1024) { // only target images > 200 KB
        fileList.push({ file: full, size: stat.size });
      }
    }
  }
  return fileList;
}

async function compressImage(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();

  try {
    const inputBuffer = fs.readFileSync(filePath);
    let pipeline = sharp(inputBuffer);
    const metadata = await pipeline.metadata();

    const maxWidth = 1600;
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    let compressedBuffer;
    if (ext === '.png') {
      compressedBuffer = await pipeline
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      compressedBuffer = await pipeline
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
    }

    if (compressedBuffer && compressedBuffer.length < originalSize) {
      fs.writeFileSync(filePath, compressedBuffer);
      const newSize = compressedBuffer.length;
      const saved = originalSize - newSize;
      const pct = ((saved / originalSize) * 100).toFixed(1);
      console.log(
        `✓ ${path.relative(path.join(__dirname, '..'), filePath)}: ` +
        `${(originalSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (-${pct}%)`
      );
      return { originalSize, newSize, saved };
    } else {
      console.log(`- ${path.relative(path.join(__dirname, '..'), filePath)}: already optimal`);
      return { originalSize, newSize: originalSize, saved: 0 };
    }
  } catch (err) {
    console.error(`✗ Error compressing ${filePath}:`, err.message);
    return { originalSize, newSize: originalSize, saved: 0 };
  }
}

async function main() {
  console.log('Starting image compression scan...');
  let allImages = [];
  for (const dir of targetDirs) {
    allImages = allImages.concat(findImages(dir));
  }

  allImages.sort((a, b) => b.size - a.size);
  console.log(`Found ${allImages.length} images larger than 200 KB.`);

  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const img of allImages) {
    const res = await compressImage(img.file);
    totalOriginal += res.originalSize;
    totalCompressed += res.newSize;
  }

  const totalSaved = totalOriginal - totalCompressed;
  console.log('==============================================');
  console.log(`Initial Total: ${(totalOriginal / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Compressed Total: ${(totalCompressed / (1024 * 1024)).toFixed(2)} MB`);
  console.log(
    `Total Bandwidth Saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB (-${(
      (totalSaved / totalOriginal) * 100
    ).toFixed(1)}%)`
  );
  console.log('==============================================');
}

main().catch(console.error);
