# Image Collection Guide - H-Town Rags

## Current Status
✅ **85 placeholder images created** with proper naming and directory structure
❌ **Actual images need to be downloaded** from the live website

## How to Collect Real Images

### 1. Manual Collection Method
Visit each page of https://htownragsvintageclothing.co.uk/ and:
1. Right-click on images
2. Select "Save image as..."
3. Save to the corresponding folder
4. Replace the placeholder with the real image

### 2. Browser Extension Method
Use a bulk image downloader extension:
- "DownThemAll" for Firefox
- "Image Downloader" for Chrome
- Download all images from each page
- Sort and rename according to our structure

### 3. Web Scraping Tool
```bash
# Using wget (if available)
wget -r -P ./temp-images -A jpeg,jpg,png,gif https://htownragsvintageclothing.co.uk/

# Using curl (manual for each image)
curl -o assets/images/home/hero-banner.jpg [IMAGE_URL]
```

## Image Requirements

### Homepage Images Needed:
- [ ] Hero banner - Main homepage banner image
- [ ] Category images - One for each category (denim, workwear, etc.)
- [ ] Store front photo - Exterior of physical store
- [ ] Instagram feed - Recent 8 posts

### About Page Images:
- [ ] Team photo - Staff group photo
- [ ] Store interior shots - Inside the store (2 angles)
- [ ] Founder/history image
- [ ] Process images - How they source/authenticate

### Gallery Images:
- [ ] Product showcase - 20 best product photos
- [ ] Customer styles - 10 customer outfit photos
- [ ] Event photos - 5 store event images

### Brand Logos:
- [ ] H-Town Rags logo - All variations
- [ ] Partner brand logos - High resolution PNGs

### Other Pages:
- [ ] Blog featured images
- [ ] Author headshots
- [ ] Contact page store photo
- [ ] Map screenshot

## Image Optimization

After collecting real images:
1. **Resize** for web (max 1920px width for heroes, 800px for products)
2. **Compress** using tools like TinyPNG or ImageOptim
3. **Convert** to WebP format with JPEG fallbacks
4. **Name** according to our convention

## Quick Checklist

- [ ] Homepage: 16 images
- [ ] About: 7 images  
- [ ] Gallery: 35 images
- [ ] Blog: 8 images
- [ ] Contact: 4 images
- [ ] Logos: 15 files
- [ ] **Total: 85 images**

## Note for Development

The placeholder images are valid image files that won't break the build process. However, they're 1x1 pixel placeholders that need to be replaced with actual content before launch.

**Priority Images** (needed first):
1. H-Town Rags logo variations
2. Homepage hero banner
3. Category images
4. Store photos