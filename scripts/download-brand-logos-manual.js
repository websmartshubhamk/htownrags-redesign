const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);
const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

// Direct logo download URLs from various sources
const logoUrls = [
  // Nike - actual swoosh logo
  {
    name: 'nike',
    url: 'https://www.vectorlogo.zone/logos/nike/nike-ar21.png',
    filename: 'nike.png'
  },
  // Dickies
  {
    name: 'dickies',
    url: 'https://seeklogo.com/images/D/dickies-logo-DD02A79518-seeklogo.com.png',
    filename: 'dickies.png'
  },
  // The North Face
  {
    name: 'north-face',
    url: 'https://seeklogo.com/images/T/The_North_Face-logo-5E38371B77-seeklogo.com.png',
    filename: 'north-face.png'
  },
  // Champion
  {
    name: 'champion',
    url: 'https://seeklogo.com/images/C/champion-logo-73E4945C15-seeklogo.com.png',
    filename: 'champion.png'
  },
  // Guess
  {
    name: 'guess',
    url: 'https://seeklogo.com/images/G/guess-logo-098D3CEF58-seeklogo.com.png',
    filename: 'guess.png'
  },
  // Harley Davidson
  {
    name: 'harley-davidson',
    url: 'https://seeklogo.com/images/H/harley-davidson-logo-1B885FEB0A-seeklogo.com.png',
    filename: 'harley-davidson.png'
  }
];

async function downloadWithCurl(url, filename) {
  const outputPath = path.join(brandsDir, filename);
  const command = `curl -L -o "${outputPath}" "${url}" --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"`;
  
  try {
    await execPromise(command);
    console.log(`✓ Downloaded ${filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return false;
  }
}

async function downloadAllLogos() {
  console.log('Starting manual logo downloads...\n');
  
  for (const logo of logoUrls) {
    console.log(`Downloading ${logo.name} logo from: ${logo.url}`);
    await downloadWithCurl(logo.url, logo.filename);
    
    // Add a small delay between downloads
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\nLogo download complete!');
}

downloadAllLogos();