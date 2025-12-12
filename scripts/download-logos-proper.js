const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);
const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

// Clean up old files
const files = fs.readdirSync(brandsDir);
files.forEach(file => {
  if (file.endsWith('.png')) {
    fs.unlinkSync(path.join(brandsDir, file));
  }
});

// URLs with simpler sources
const logos = [
  { name: 'nike', url: 'https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-png-transparent.png' },
  { name: 'dickies', url: 'https://1000logos.net/wp-content/uploads/2021/05/Dickies-logo.png' },
  { name: 'north-face', url: 'https://1000logos.net/wp-content/uploads/2019/12/The-North-Face-Logo.png' },
  { name: 'champion', url: 'https://1000logos.net/wp-content/uploads/2021/04/Champion-logo.png' },
  { name: 'guess', url: 'https://1000logos.net/wp-content/uploads/2021/04/Guess-logo.png' },
  { name: 'harley-davidson', url: 'https://1000logos.net/wp-content/uploads/2019/05/Harley-Davidson-Logo.png' }
];

async function downloadLogos() {
  for (const logo of logos) {
    const outputPath = path.join(brandsDir, `${logo.name}.png`);
    const command = `curl -L -o "${outputPath}" "${logo.url}"`;
    
    try {
      await execPromise(command);
      console.log(`Downloaded ${logo.name} logo`);
    } catch (error) {
      console.error(`Failed to download ${logo.name}:`, error.message);
    }
  }
}

downloadLogos();