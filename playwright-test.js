const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  console.log('Navigating to homepage...');
  await page.goto('https://htownrags-redesign.vercel.app/', { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
  
  // Wait a bit for any lazy-loaded content
  await page.waitForTimeout(3000);
  
  // Take full page screenshot of homepage
  await page.screenshot({ 
    path: 'homepage-screenshot.png', 
    fullPage: true 
  });
  console.log('Homepage screenshot saved');
  
  // Also take a viewport screenshot to see what's immediately visible
  await page.screenshot({ 
    path: 'homepage-viewport.png', 
    fullPage: false 
  });
  
  console.log('Navigating to about page...');
  await page.goto('https://htownrags-redesign.vercel.app/about', { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
  
  // Wait a bit for any lazy-loaded content
  await page.waitForTimeout(3000);
  
  // Take screenshots of about page
  await page.screenshot({ 
    path: 'about-screenshot.png', 
    fullPage: true 
  });
  console.log('About page screenshot saved');
  
  // Viewport screenshot of about page
  await page.screenshot({ 
    path: 'about-viewport.png', 
    fullPage: false 
  });
  
  await browser.close();
  console.log('All screenshots captured');
})();