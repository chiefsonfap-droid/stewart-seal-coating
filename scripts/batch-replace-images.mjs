#!/usr/bin/env node

/**
 * Batch Image Replacement Script
 * 
 * Place images in /temp-images/ folder named with slugs:
 *   london.jpg → london-hero.webp
 *   central-ontario.png → central-ontario-hero.webp
 * 
 * Usage: node scripts/batch-replace-images.mjs
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, '..', 'temp-images');

if (!fs.existsSync(tempDir)) {
  console.error('❌ Error: /temp-images/ folder not found');
  console.error('\n📁 Create it and place your images there:');
  console.error('   - Name them with slugs: london.jpg, ottawa.png, etc.');
  console.error('   - Then run this script again');
  process.exit(1);
}

const REGIONS = ['southwestern-ontario', 'central-ontario', 'golden-horseshoe-niagara', 'eastern-ontario', 'northern-ontario'];

const gradientOverlay = Buffer.from(`
  <svg width="1920" height="1080">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.5" />
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#grad)" />
  </svg>
`);

async function processImage(sourceImage, slug) {
  const isRegion = REGIONS.includes(slug);
  const outputDir = isRegion 
    ? path.join(__dirname, '..', 'public', 'images', 'regions')
    : path.join(__dirname, '..', 'public', 'images', 'cities');
  
  const outputPath = path.join(outputDir, `${slug}-hero.webp`);
  
  try {
    await sharp(sourceImage)
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .composite([{ input: gradientOverlay, blend: 'over' }])
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const sizeKB = Math.round(stats.size / 1024);
    return { success: true, sizeKB };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

(async () => {
  console.log('🎨 Batch Image Replacement\n');
  console.log('='.repeat(60));
  
  const files = fs.readdirSync(tempDir).filter(f => 
    f.match(/\.(jpg|jpeg|png|webp)$/i)
  );
  
  if (files.length === 0) {
    console.error('❌ No images found in /temp-images/');
    console.error('\n💡 Add images named with slugs:');
    console.error('   london.jpg, ottawa.png, central-ontario.jpg, etc.');
    process.exit(1);
  }
  
  console.log(`Found ${files.length} images to process\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of files) {
    const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const sourcePath = path.join(tempDir, file);
    
    console.log(`Processing: ${file} → ${slug}-hero.webp`);
    const result = await processImage(sourcePath, slug);
    
    if (result.success) {
      console.log(`   ✅ Success (${result.sizeKB}KB)\n`);
      successCount++;
    } else {
      console.log(`   ❌ Failed: ${result.error}\n`);
      failCount++;
    }
  }
  
  console.log('='.repeat(60));
  console.log(`\n📊 Results:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`\n💡 Test your changes:`);
  console.log(`   npm run dev`);
})();





