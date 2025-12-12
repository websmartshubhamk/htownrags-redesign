const https = require('https');
const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

// Ensure directory exists
if (!fs.existsSync(brandsDir)) {
  fs.mkdirSync(brandsDir, { recursive: true });
}

// Brand logo URLs from reliable sources
const brandLogos = [
  {
    name: 'nike',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
    filename: 'nike.png'
  },
  {
    name: 'dickies',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dickies_logo.svg/2560px-Dickies_logo.svg.png',
    filename: 'dickies.png'
  },
  {
    name: 'north-face',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TheNorthFace_logo.svg/2560px-TheNorthFace_logo.svg.png',
    filename: 'north-face.png'
  },
  {
    name: 'champion',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Champion_textlogo.svg/2560px-Champion_textlogo.svg.png',
    filename: 'champion.png'
  },
  {
    name: 'guess',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Guess_logo.svg/2560px-Guess_logo.svg.png',
    filename: 'guess.png'
  },
  {
    name: 'harley-davidson',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/2560px-Harley-Davidson_logo.svg.png',
    filename: 'harley-davidson.png'
  }
];

// Function to download a logo
function downloadLogo(logo) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(brandsDir, logo.filename));
    
    https.get(logo.url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${logo.name} logo`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(brandsDir, logo.filename), () => {});
      console.error(`Error downloading ${logo.name} logo:`, err.message);
      reject(err);
    });
  });
}

// Download all logos
async function downloadAllLogos() {
  console.log('Starting brand logo downloads...');
  
  for (const logo of brandLogos) {
    try {
      await downloadLogo(logo);
    } catch (err) {
      console.error(`Failed to download ${logo.name}:`, err.message);
    }
  }
  
  console.log('Brand logo download complete!');
}

downloadAllLogos();