#!/usr/bin/env node

/**
 * Test which image URLs are broken/corrupted
 */

import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('scripts/image-sources.json', 'utf-8'));

async function testImage(imageData, type, name) {
  try {
    const response = await fetch(imageData.thumb || imageData.url);
    if (!response.ok) {
      return { broken: true, name, type, status: response.status, url: imageData.thumb || imageData.url };
    }
    return { broken: false, name };
  } catch (error) {
    return { broken: true, name, type, error: error.message, url: imageData.thumb || imageData.url };
  }
}

async function main() {
  console.log('🔍 Testing image URLs...\n');
  
  const broken = [];
  
  // Test regional images
  console.log('Testing regional images...');
  for (const region of manifest.regions) {
    const result = await testImage(region, 'region', region.name);
    if (result.broken) {
      console.log(`❌ ${region.name}: ${result.status || result.error}`);
      broken.push(result);
    } else {
      console.log(`✅ ${region.name}`);
    }
  }
  
  // Test city images
  console.log('\nTesting city images...');
  for (const city of manifest.cities) {
    const result = await testImage(city, 'city', city.name);
    if (result.broken) {
      console.log(`❌ ${city.name}: ${result.status || result.error}`);
      broken.push(result);
    }
    await new Promise(resolve => setTimeout(resolve, 100)); // Rate limit
  }
  
  console.log(`\n\n📊 Results:`);
  console.log(`   Working: ${manifest.regions.length + manifest.cities.length - broken.length}`);
  console.log(`   Broken: ${broken.length}`);
  
  if (broken.length > 0) {
    console.log('\n❌ Broken images:');
    broken.forEach(b => console.log(`   - ${b.name} (${b.type})`));
  }
}

main().catch(console.error);










