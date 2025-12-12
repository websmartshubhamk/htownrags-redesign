const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);
const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

// More reliable logo sources
const logos = [
  {
    name: 'dickies',
    url: 'https://cdn.worldvectorlogo.com/logos/dickies.svg',
    type: 'svg'
  },
  {
    name: 'north-face',
    url: 'https://cdn.worldvectorlogo.com/logos/the-north-face-2.svg',
    type: 'svg'
  },
  {
    name: 'champion',
    url: 'https://cdn.worldvectorlogo.com/logos/champion-sportswear.svg',
    type: 'svg'
  },
  {
    name: 'guess',
    url: 'https://cdn.worldvectorlogo.com/logos/guess-2.svg',
    type: 'svg'
  },
  {
    name: 'harley-davidson',
    url: 'https://cdn.worldvectorlogo.com/logos/harley-davidson-1.svg',
    type: 'svg'
  }
];

async function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function downloadLogos() {
  for (const logo of logos) {
    const outputPath = path.join(brandsDir, `${logo.name}.${logo.type}`);
    
    try {
      console.log(`Downloading ${logo.name} logo...`);
      await downloadFile(logo.url, outputPath);
      console.log(`✓ Downloaded ${logo.name} logo`);
    } catch (error) {
      console.error(`✗ Failed to download ${logo.name}:`, error.message);
      // Try alternative method with curl
      try {
        await execPromise(`curl -L -o "${outputPath}" "${logo.url}"`);
        console.log(`✓ Downloaded ${logo.name} logo (via curl)`);
      } catch (curlError) {
        console.error(`✗ Curl also failed for ${logo.name}`);
      }
    }
  }
}

downloadLogos().catch(console.error);