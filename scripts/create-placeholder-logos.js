const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'images', 'brands');

// Placeholder logos to create
const placeholders = [
  { name: 'dickies.png', text: 'Dickies', width: 200, height: 60, fontSize: 40 },
  { name: 'north-face.png', text: 'THE NORTH FACE', width: 300, height: 60, fontSize: 30 },
  { name: 'champion.png', text: 'Champion', width: 200, height: 60, fontSize: 36, italic: true },
  { name: 'guess.png', text: 'GUESS', width: 150, height: 60, fontSize: 42 },
];

function createPlaceholderLogo(config) {
  const canvas = createCanvas(config.width, config.height);
  const ctx = canvas.getContext('2d');

  // Clear canvas with transparent background
  ctx.clearRect(0, 0, config.width, config.height);

  // Set font
  const fontStyle = config.italic ? 'italic' : 'normal';
  ctx.font = `${fontStyle} bold ${config.fontSize}px Arial`;
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw text
  ctx.fillText(config.text, config.width / 2, config.height / 2);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  const filePath = path.join(brandsDir, config.name);
  fs.writeFileSync(filePath, buffer);
  
  console.log(`✓ Created placeholder: ${config.name}`);
}

console.log('Creating placeholder logos...\n');

// Check if canvas module is available
try {
  placeholders.forEach(createPlaceholderLogo);
  console.log('\nPlaceholder logos created!');
} catch (error) {
  console.error('Error: canvas module not found. Installing...');
  const { execSync } = require('child_process');
  
  try {
    execSync('npm install canvas', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    console.log('\nCanvas installed. Please run this script again.');
  } catch (installError) {
    console.error('Failed to install canvas:', installError.message);
    
    // Create simple text files as placeholders instead
    console.log('\nCreating simple text placeholders...');
    placeholders.forEach(config => {
      const filePath = path.join(brandsDir, config.name);
      // Create a tiny 1x1 transparent PNG
      const tinyPNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
      fs.writeFileSync(filePath, tinyPNG);
      console.log(`✓ Created minimal placeholder: ${config.name}`);
    });
  }
}