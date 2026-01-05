#!/usr/bin/env node

/**
 * Image Download & Processing Script for Stewart Seal Coating
 * 
 * Downloads and processes 92 hero images:
 * - Downloads from Unsplash/Pexels
 * - Resizes to 1920x1080 (16:9)
 * - Converts to WebP format (85% quality)
 * - Adds dark gradient overlay for text legibility
 * - Saves to correct directories
 * 
 * Usage: node scripts/download-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.join(__dirname, 'image-sources.json');
const regionsDir = path.join(__dirname, '..', 'public', 'images', 'regions');
const citiesDir = path.join(__dirname, '..', 'public', 'images', 'cities');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ Error: image-sources.json not found');
  console.error('   Run: node scripts/source-images.mjs first');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

// Target dimensions
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;
const WEBP_QUALITY = 85;

/**
 * Download image from URL
 */
async function downloadImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

/**
 * Process image: resize, convert to WebP, add gradient overlay
 */
async function processImage(buffer, outputPath) {
  try {
    // Create gradient overlay SVG (dark gradient for text legibility)
    const gradientOverlay = Buffer.from(`
      <svg width="${TARGET_WIDTH}" height="${TARGET_HEIGHT}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.5" />
          </linearGradient>
        </defs>
        <rect width="${TARGET_WIDTH}" height="${TARGET_HEIGHT}" fill="url(#grad)" />
      </svg>
    `);

    // Process the image
    await sharp(buffer)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: gradientOverlay,
        blend: 'over'
      }])
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);
    
    // Get file size
    const stats = fs.statSync(outputPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    return sizeKB;
  } catch (error) {
    throw new Error(`Processing failed: ${error.message}`);
  }
}

/**
 * Download and process a single image
 */
async function processOne(item, outputDir, type) {
  if (item.error) {
    console.log(`   ⏭️  Skipping ${item.name} (no source)`);
    return { skipped: true };
  }

  const outputPath = path.join(outputDir, `${item.slug}-hero.webp`);
  
  try {
    console.log(`   📥 Downloading ${item.name}...`);
    const buffer = await downloadImage(item.downloadUrl);
    
    console.log(`   🎨 Processing...`);
    const sizeKB = await processImage(buffer, outputPath);
    
    console.log(`   ✅ Saved: ${sizeKB}KB`);
    return { success: true, sizeKB };
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    return { error: error.message };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Stewart Seal Coating - Image Download & Processing\n');
  console.log('=' .repeat(60));
  console.log(`Source: ${manifestPath}`);
  console.log(`Output: ${regionsDir} & ${citiesDir}`);
  console.log(`Format: WebP ${WEBP_QUALITY}% quality, ${TARGET_WIDTH}x${TARGET_HEIGHT}`);
  console.log('=' .repeat(60));

  const results = {
    regions: { success: 0, failed: 0, skipped: 0, totalKB: 0 },
    cities: { success: 0, failed: 0, skipped: 0, totalKB: 0 }
  };

  // Ensure directories exist
  fs.mkdirSync(regionsDir, { recursive: true });
  fs.mkdirSync(citiesDir, { recursive: true });

  // Process regional images
  console.log('\n\n📍 PHASE 1: Regional Images (5)');
  console.log('-'.repeat(60));
  
  for (const region of manifest.regions) {
    console.log(`\n${region.name}:`);
    const result = await processOne(region, regionsDir, 'region');
    
    if (result.success) {
      results.regions.success++;
      results.regions.totalKB += result.sizeKB;
    } else if (result.skipped) {
      results.regions.skipped++;
    } else {
      results.regions.failed++;
    }
    
    // Small delay to be respectful
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Process city images
  console.log('\n\n🏙️  PHASE 2: City Images (87)');
  console.log('-'.repeat(60));
  console.log('This will take ~5 minutes...\n');
  
  for (let i = 0; i < manifest.cities.length; i++) {
    const city = manifest.cities[i];
    const progress = `[${i + 1}/${manifest.cities.length}]`;
    
    console.log(`\n${progress} ${city.name}:`);
    const result = await processOne(city, citiesDir, 'city');
    
    if (result.success) {
      results.cities.success++;
      results.cities.totalKB += result.sizeKB;
    } else if (result.skipped) {
      results.cities.skipped++;
    } else {
      results.cities.failed++;
    }
    
    // Small delay
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Final report
  console.log('\n\n✅ IMAGE PROCESSING COMPLETE');
  console.log('=' .repeat(60));
  console.log('\n📊 Summary:');
  console.log('\nRegional Images:');
  console.log(`   ✅ Success: ${results.regions.success}`);
  console.log(`   ❌ Failed: ${results.regions.failed}`);
  console.log(`   ⏭️  Skipped: ${results.regions.skipped}`);
  console.log(`   💾 Total Size: ${Math.round(results.regions.totalKB / 1024 * 10) / 10}MB`);
  
  console.log('\nCity Images:');
  console.log(`   ✅ Success: ${results.cities.success}`);
  console.log(`   ❌ Failed: ${results.cities.failed}`);
  console.log(`   ⏭️  Skipped: ${results.cities.skipped}`);
  console.log(`   💾 Total Size: ${Math.round(results.cities.totalKB / 1024 * 10) / 10}MB`);
  
  const totalSuccess = results.regions.success + results.cities.success;
  const totalSize = Math.round((results.regions.totalKB + results.cities.totalKB) / 1024 * 10) / 10;
  
  console.log('\n📦 Grand Total:');
  console.log(`   ${totalSuccess}/92 images processed successfully`);
  console.log(`   ${totalSize}MB total (avg ${Math.round(totalSize / totalSuccess * 10) / 10}MB per image)`);
  
  if (results.regions.failed + results.cities.failed > 0) {
    console.log('\n⚠️  Some images failed. Review the errors above.');
  }
  
  console.log('\n⏭️  Next steps:');
  console.log('   1. Update page components to use the images');
  console.log('   2. Test locally: npm run dev');
  console.log('   3. Commit and push to GitHub');
}

main().catch(console.error);








