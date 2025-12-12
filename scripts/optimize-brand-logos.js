const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

async function optimizeLogos() {
  try {
    const files = await fs.readdir(brandsDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    for (const file of pngFiles) {
      const inputPath = path.join(brandsDir, file);
      const outputPath = path.join(brandsDir, file.replace('.png', '-optimized.png'));

      await sharp(inputPath)
        .resize({ height: 80, withoutEnlargement: true }) // Max height 80px
        .png({ 
          quality: 90,
          compressionLevel: 9,
          adaptiveFiltering: true 
        })
        .toFile(outputPath);

      // Replace original with optimized version
      await fs.unlink(inputPath);
      await fs.rename(outputPath, inputPath);

      console.log(`Optimized ${file}`);
    }

    console.log('All logos optimized!');
  } catch (error) {
    console.error('Error optimizing logos:', error);
  }
}

optimizeLogos();