import { test, expect } from '@playwright/test';

test('Take screenshot of About page', async ({ page }) => {
  // Navigate to the About page
  await page.goto('/about');
  
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Take a full page screenshot
  await page.screenshot({ 
    path: 'about-page-screenshot.png', 
    fullPage: true 
  });

  // Take a screenshot of just the hero section if it exists
  const heroSection = page.locator('section').first();
  if (await heroSection.isVisible()) {
    await heroSection.screenshot({ 
      path: 'about-hero-section.png' 
    });
  }

  // Take a viewport screenshot to see above-the-fold content
  await page.screenshot({ 
    path: 'about-page-viewport.png', 
    fullPage: false 
  });
});