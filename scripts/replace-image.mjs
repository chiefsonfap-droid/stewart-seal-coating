#!/usr/bin/env node

/**
 * Simple Image Replacement Script
 * 
 * Usage: node scripts/replace-image.mjs <source-image> <city-or-region-slug>
 * 
 * Examples:
 *   node scripts/replace-image.mjs my-london-photo.jpg london
 *   node scripts/replace-image.mjs new-central-ontario.png central-ontario
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [,, sourceImage, slug] = process.argv;

if (!sourceImage || !slug) {
  console.error('❌ Error: Missing arguments');
  console.error('\nUsage: node scripts/replace-image.mjs <source-image> <slug>');
  console.error('\nExamples:');
  console.error('  node scripts/replace-image.mjs my-photo.jpg london');
  console.error('  node scripts/replace-image.mjs new-region.png central-ontario');
  process.exit(1);
}

if (!fs.existsSync(sourceImage)) {
  console.error(`❌ Error: Source image not found: ${sourceImage}`);
  process.exit(1);
}

// Determine if it's a region or city
const REGIONS = ['southwestern-ontario', 'central-ontario', 'golden-horseshoe-niagara', 'eastern-ontario', 'northern-ontario'];
const isRegion = REGIONS.includes(slug);

const outputDir = isRegion 
  ? path.join(__dirname, '..', 'public', 'images', 'regions')
  : path.join(__dirname, '..', 'public', 'images', 'cities');

const outputPath = path.join(outputDir, `${slug}-hero.webp`);

console.log(`🎨 Replacing ${isRegion ? 'regional' : 'city'} image: ${slug}`);
console.log(`📥 Source: ${sourceImage}`);
console.log(`📤 Output: ${outputPath}`);

// Create gradient overlay
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

// Process image
(async () => {
  try {
    console.log('⚙️  Processing...');
    
    await sharp(sourceImage)
      .resize(1920, 1080, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: gradientOverlay,
        blend: 'over'
      }])
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    console.log(`✅ Success! Image saved (${sizeKB}KB)`);
    console.log(`\n💡 Test it:`);
    console.log(`   npm run dev`);
    console.log(`   Visit: http://localhost:3000/${isRegion ? 'regions' : 'locations'}/${isRegion ? slug : slug + '-on'}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
})();

