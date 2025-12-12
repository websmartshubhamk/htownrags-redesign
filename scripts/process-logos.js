const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

async function processLogos() {
  try {
    const files = await fs.readdir(brandsDir);
    const pngFiles = files.filter(file => file.endsWith('.png') && !file.includes('-processed'));

    for (const file of pngFiles) {
      const inputPath = path.join(brandsDir, file);
      
      try {
        // Read and process each logo
        await sharp(inputPath)
          .resize({ height: 100, withoutEnlargement: true }) // Max height 100px for quality
          .png({ 
            quality: 95,
            compressionLevel: 9,
            adaptiveFiltering: true 
          })
          .toFile(path.join(brandsDir, file.replace('.png', '-processed.png')));

        // Replace original with processed version
        await fs.unlink(inputPath);
        await fs.rename(
          path.join(brandsDir, file.replace('.png', '-processed.png')),
          inputPath
        );

        console.log(`Processed ${file}`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        // If processing fails, keep the original
      }
    }

    console.log('Logo processing complete!');
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

processLogos();