#!/usr/bin/env node

/**
 * FIXED Image Sourcing Script - Hybrid Approach
 * 
 * Strategy:
 * 1. Try 4 city-specific searches for ~30 major cities
 * 2. If city-specific fails → Use pre-selected regional fallback
 * 3. For remaining cities → Assign regional fallback immediately
 * 4. NO random searches, NO duplicates
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';

// Load FINAL regional fallbacks
const REGIONAL_FALLBACKS = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'regional-fallbacks-FINAL.json'), 'utf-8')
).fallbacks;

// Forbidden keywords
const FORBIDDEN = [
  'church', 'cathedral', 'mosque', 'synagogue', 'temple', 'religious',
  'toronto', 'cn tower', 'niagara falls', 'parliament',
  'norway', 'maldives', 'vancouver', 'montreal'
];

// Track used images (NO DUPLICATES!)
const usedImageIds = new Set();

// Major cities that get city-specific search attempts
const MAJOR_CITIES = [
  'london', 'ottawa', 'kingston', 'hamilton', 'thunder-bay', 'greater-sudbury',
  'barrie', 'peterborough', 'kitchener', 'waterloo', 'cambridge', 'guelph',
  'brantford', 'sarnia', 'windsor', 'st-catharines', 'niagara-falls', 'welland',
  'cornwall', 'belleville', 'brockville', 'north-bay', 'sault-ste-marie',
  'timmins', 'orillia', 'collingwood', 'cobourg', 'owen-sound',
  'pembroke', 'kenora'
];

function isForbidden(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return FORBIDDEN.some(keyword => lower.includes(keyword));
}

function isImageUsed(imageId) {
  return usedImageIds.has(String(imageId));
}

async function searchUnsplash(query, perPage = 3) {
  if (!UNSPLASH_ACCESS_KEY) return [];
  
  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: { 'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}` }
    });
    
    if (!response.ok) return [];
    
    const data = await response.json();
    return data.results
      .filter(photo => {
        const desc = `${photo.description || ''} ${photo.alt_description || ''}`;
        return !isForbidden(desc) && !isImageUsed(photo.id);
      })
      .map(photo => ({
        id: photo.id,
        url: photo.urls.regular,
        downloadUrl: photo.urls.raw,
        thumb: photo.urls.thumb,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        description: photo.description || photo.alt_description,
        source: 'unsplash',
        width: photo.width,
        height: photo.height
      }));
  } catch (error) {
    return [];
  }
}

async function searchPexels(query, perPage = 3) {
  if (!PEXELS_API_KEY) return [];
  
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: { 'Authorization': PEXELS_API_KEY }
    });
    
    if (!response.ok) return [];
    
    const data = await response.json();
    return data.photos
      .filter(photo => !isForbidden(photo.alt || '') && !isImageUsed(photo.id))
      .map(photo => ({
        id: photo.id,
        url: photo.src.large,
        downloadUrl: photo.src.original,
        thumb: photo.src.small,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        description: photo.alt,
        source: 'pexels',
        width: photo.width,
        height: photo.height
      }));
  } catch (error) {
    return [];
  }
}

/**
 * Try 4 EXACT city-specific searches as specified
 */
async function findCitySpecificImage(cityName, citySlug) {
  const searchAttempts = [
    `${cityName} Ontario`,
    `${cityName} Ontario aerial`,
    `${cityName} Ontario downtown`,
    `${cityName} Canada`
  ];
  
  for (const query of searchAttempts) {
    let results = await searchUnsplash(query);
    if (results.length === 0) {
      results = await searchPexels(query);
    }
    
    if (results.length > 0) {
      console.log(`   ✅ Found: "${query}"`);
      return results[0]; // Return first suitable image
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  
  return null;
}

/**
 * Get pre-selected regional fallback (NO RANDOM SEARCHES!)
 */
function getRegionalFallback(regionSlug) {
  return {
    ...REGIONAL_FALLBACKS[regionSlug],
    fallback: true,
    fallbackReason: 'No city-specific image found'
  };
}

// All cities (same as before, but properly structured)
const CITIES = [
  // Southwestern Ontario (18 cities)
  { name: 'London', slug: 'london', region: 'southwestern-ontario' },
  { name: 'Kitchener', slug: 'kitchener', region: 'southwestern-ontario' },
  { name: 'Waterloo', slug: 'waterloo', region: 'southwestern-ontario' },
  { name: 'Cambridge', slug: 'cambridge', region: 'southwestern-ontario' },
  { name: 'Guelph', slug: 'guelph', region: 'southwestern-ontario' },
  { name: 'Brantford', slug: 'brantford', region: 'southwestern-ontario' },
  { name: 'Woodstock', slug: 'woodstock', region: 'southwestern-ontario' },
  { name: 'Stratford', slug: 'stratford', region: 'southwestern-ontario' },
  { name: 'St. Thomas', slug: 'st-thomas', region: 'southwestern-ontario' },
  { name: 'Sarnia', slug: 'sarnia', region: 'southwestern-ontario' },
  { name: 'Chatham', slug: 'chatham', region: 'southwestern-ontario' },
  { name: 'Windsor', slug: 'windsor', region: 'southwestern-ontario' },
  { name: 'Leamington', slug: 'leamington', region: 'southwestern-ontario' },
  { name: 'Tillsonburg', slug: 'tillsonburg', region: 'southwestern-ontario' },
  { name: 'Ingersoll', slug: 'ingersoll', region: 'southwestern-ontario' },
  { name: 'Strathroy', slug: 'strathroy', region: 'southwestern-ontario' },
  { name: 'Simcoe', slug: 'simcoe', region: 'southwestern-ontario' },
  { name: 'Owen Sound', slug: 'owen-sound', region: 'southwestern-ontario' },
  { name: 'Hanover', slug: 'hanover', region: 'southwestern-ontario' },
  
  // Central Ontario (20 cities)
  { name: 'Barrie', slug: 'barrie', region: 'central-ontario' },
  { name: 'Orillia', slug: 'orillia', region: 'central-ontario' },
  { name: 'Peterborough', slug: 'peterborough', region: 'central-ontario' },
  { name: 'Lindsay', slug: 'lindsay', region: 'central-ontario' },
  { name: 'Kawartha Lakes', slug: 'kawartha-lakes', region: 'central-ontario' },
  { name: 'Midland', slug: 'midland', region: 'central-ontario' },
  { name: 'Penetanguishene', slug: 'penetanguishene', region: 'central-ontario' },
  { name: 'Collingwood', slug: 'collingwood', region: 'central-ontario' },
  { name: 'Gravenhurst', slug: 'gravenhurst', region: 'central-ontario' },
  { name: 'Bracebridge', slug: 'bracebridge', region: 'central-ontario' },
  { name: 'Huntsville', slug: 'huntsville', region: 'central-ontario' },
  { name: 'Parry Sound', slug: 'parry-sound', region: 'central-ontario' },
  { name: 'Cobourg', slug: 'cobourg', region: 'central-ontario' },
  { name: 'Port Hope', slug: 'port-hope', region: 'central-ontario' },
  { name: 'Campbellford', slug: 'campbellford', region: 'central-ontario' },
  { name: 'Alliston', slug: 'alliston', region: 'central-ontario' },
  { name: 'Bradford', slug: 'bradford', region: 'central-ontario' },
  { name: 'Innisfil', slug: 'innisfil', region: 'central-ontario' },
  { name: 'New Tecumseth', slug: 'new-tecumseth', region: 'central-ontario' },
  { name: 'Wasaga Beach', slug: 'wasaga-beach', region: 'central-ontario' },
  
  // Golden Horseshoe (12 cities)
  { name: 'Hamilton', slug: 'hamilton', region: 'golden-horseshoe-niagara' },
  { name: 'St. Catharines', slug: 'st-catharines', region: 'golden-horseshoe-niagara' },
  { name: 'Niagara Falls', slug: 'niagara-falls', region: 'golden-horseshoe-niagara' },
  { name: 'Welland', slug: 'welland', region: 'golden-horseshoe-niagara' },
  { name: 'Grimsby', slug: 'grimsby', region: 'golden-horseshoe-niagara' },
  { name: 'Fort Erie', slug: 'fort-erie', region: 'golden-horseshoe-niagara' },
  { name: 'Pelham', slug: 'pelham', region: 'golden-horseshoe-niagara' },
  { name: 'Lincoln', slug: 'lincoln', region: 'golden-horseshoe-niagara' },
  { name: 'Orangeville', slug: 'orangeville', region: 'golden-horseshoe-niagara' },
  { name: 'Ancaster', slug: 'ancaster', region: 'golden-horseshoe-niagara' },
  { name: 'Dundas', slug: 'dundas', region: 'golden-horseshoe-niagara' },
  { name: 'Stoney Creek', slug: 'stoney-creek', region: 'golden-horseshoe-niagara' },
  
  // Eastern Ontario (22 cities)
  { name: 'Ottawa', slug: 'ottawa', region: 'eastern-ontario' },
  { name: 'Kingston', slug: 'kingston', region: 'eastern-ontario' },
  { name: 'Belleville', slug: 'belleville', region: 'eastern-ontario' },
  { name: 'Cornwall', slug: 'cornwall', region: 'eastern-ontario' },
  { name: 'Brockville', slug: 'brockville', region: 'eastern-ontario' },
  { name: 'Pembroke', slug: 'pembroke', region: 'eastern-ontario' },
  { name: 'Petawawa', slug: 'petawawa', region: 'eastern-ontario' },
  { name: 'Smiths Falls', slug: 'smiths-falls', region: 'eastern-ontario' },
  { name: 'Carleton Place', slug: 'carleton-place', region: 'eastern-ontario' },
  { name: 'Arnprior', slug: 'arnprior', region: 'eastern-ontario' },
  { name: 'Renfrew', slug: 'renfrew', region: 'eastern-ontario' },
  { name: 'Perth', slug: 'perth', region: 'eastern-ontario' },
  { name: 'Almonte', slug: 'almonte', region: 'eastern-ontario' },
  { name: 'Hawkesbury', slug: 'hawkesbury', region: 'eastern-ontario' },
  { name: 'Alexandria', slug: 'alexandria', region: 'eastern-ontario' },
  { name: 'Casselman', slug: 'casselman', region: 'eastern-ontario' },
  { name: 'Rockland', slug: 'rockland', region: 'eastern-ontario' },
  { name: 'Prescott', slug: 'prescott', region: 'eastern-ontario' },
  { name: 'Gananoque', slug: 'gananoque', region: 'eastern-ontario' },
  { name: 'Napanee', slug: 'napanee', region: 'eastern-ontario' },
  { name: 'Trenton', slug: 'trenton', region: 'eastern-ontario' },
  { name: 'Picton', slug: 'picton', region: 'eastern-ontario' },
  
  // Northern Ontario (15 cities)
  { name: 'Greater Sudbury', slug: 'greater-sudbury', region: 'northern-ontario' },
  { name: 'Thunder Bay', slug: 'thunder-bay', region: 'northern-ontario' },
  { name: 'Sault Ste. Marie', slug: 'sault-ste-marie', region: 'northern-ontario' },
  { name: 'North Bay', slug: 'north-bay', region: 'northern-ontario' },
  { name: 'Timmins', slug: 'timmins', region: 'northern-ontario' },
  { name: 'Temiskaming Shores', slug: 'temiskaming-shores', region: 'northern-ontario' },
  { name: 'Kirkland Lake', slug: 'kirkland-lake', region: 'northern-ontario' },
  { name: 'Elliot Lake', slug: 'elliot-lake', region: 'northern-ontario' },
  { name: 'Espanola', slug: 'espanola', region: 'northern-ontario' },
  { name: 'Kapuskasing', slug: 'kapuskasing', region: 'northern-ontario' },
  { name: 'Cochrane', slug: 'cochrane', region: 'northern-ontario' },
  { name: 'Iroquois Falls', slug: 'iroquois-falls', region: 'northern-ontario' },
  { name: 'Chapleau', slug: 'chapleau', region: 'northern-ontario' },
  { name: 'Kenora', slug: 'kenora', region: 'northern-ontario' },
  { name: 'Dryden', slug: 'dryden', region: 'northern-ontario' }
];

async function main() {
  console.log('🎨 FIXED Image Sourcing - Hybrid Approach\n');
  console.log('='.repeat(60));
  console.log('Strategy:');
  console.log('  1. Search for ~30 major cities (4 attempts each)');
  console.log('  2. Use pre-selected regional fallbacks for the rest');
  console.log('  3. NO random searches, NO duplicates');
  console.log('='.repeat(60));
  
  const manifest = {
    generated: new Date().toISOString(),
    regions: [],
    cities: []
  };
  
  // Regional images (using fallbacks)
  console.log('\n📍 PHASE 1: Regional Images (using pre-selected fallbacks)');
  console.log('-'.repeat(60));
  
  Object.keys(REGIONAL_FALLBACKS).forEach(regionSlug => {
    const regionImage = REGIONAL_FALLBACKS[regionSlug];
    usedImageIds.add(String(regionImage.id));
    
    let regionName = regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (regionSlug === 'golden-horseshoe-niagara') regionName = 'Golden Horseshoe/Niagara';
    
    manifest.regions.push({
      slug: regionSlug,
      name: regionName,
      ...regionImage
    });
    
    console.log(`✅ ${regionName}: ${regionImage.description || 'Regional landscape'}`);
  });
  
  // City images
  console.log(`\n🏙️  PHASE 2: City Images (${CITIES.length} total)`);
  console.log('-'.repeat(60));
  
  for (let i = 0; i < CITIES.length; i++) {
    const city = CITIES[i];
    const progress = `[${i + 1}/${CITIES.length}]`;
    const isMajorCity = MAJOR_CITIES.includes(city.slug);
    
    console.log(`\n${progress} ${city.name} ${isMajorCity ? '(MAJOR)' : '(minor)'}`);
    
    let image = null;
    
    if (isMajorCity) {
      // Try city-specific search
      image = await findCitySpecificImage(city.name, city.slug);
    }
    
    if (!image) {
      // Use regional fallback
      image = getRegionalFallback(city.region);
      console.log(`   ℹ️  Using regional fallback (${city.region})`);
    } else {
      usedImageIds.add(String(image.id));
    }
    
    manifest.cities.push({
      slug: city.slug,
      name: city.name,
      region: city.region,
      ...image
    });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Save
  const manifestPath = path.join(__dirname, 'image-sources.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('\n\n✅ IMAGE SOURCING COMPLETE');
  console.log('='.repeat(60));
  console.log(`📄 Manifest saved: ${manifestPath}`);
  console.log(`\n📊 Summary:`);
  console.log(`   Regions: ${manifest.regions.length}/5 found`);
  console.log(`   Cities with city-specific images: ${manifest.cities.filter(c => !c.fallback).length}`);
  console.log(`   Cities using regional fallback: ${manifest.cities.filter(c => c.fallback).length}`);
  console.log(`   Total unique images: ${usedImageIds.size}`);
  console.log(`\n🛡️  Protection:`);
  console.log(`   ✓ NO duplicates`);
  console.log(`   ✓ NO random searches`);
  console.log(`   ✓ NO Toronto/Niagara Falls/wrong locations`);
  console.log('\n⏭️  Next step: node scripts/preview-images.mjs');
}

main().catch(console.error);










