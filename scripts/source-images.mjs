#!/usr/bin/env node

/**
 * Image Sourcing Script for Stewart Seal Coating
 * 
 * Searches Unsplash and Pexels for 92 hero images (5 regional + 87 city)
 * with strict religious imagery filtering.
 * 
 * Usage: node scripts/source-images.mjs [--region=all|southwestern|etc] [--city=london|etc]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';

// CRITICAL: Religious imagery keywords to filter out
const FORBIDDEN_KEYWORDS = [
  'church', 'cathedral', 'chapel', 'basilica', 'abbey',
  'mosque', 'minaret', 'islamic',
  'synagogue', 'temple',  
  'gurdwara', 'shrine',
  'religious', 'worship', 'faith', 'holy',
  'steeple', 'dome', 'cross', 'crucifix',
  'buddha', 'hindu', 'sikh'
];

// CRITICAL: Ban Toronto/CN Tower (we don't serve Toronto)
const BANNED_LOCATIONS = [
  'toronto', 'cn tower', 'cn-tower', 'rogers centre',
  'toronto skyline', 'gta', 'greater toronto',
  // Wrong countries/provinces
  'norway', 'lofoten', 'maldives', 'fuvahmulah',
  'vancouver', 'montreal', 'quebec', 'alberta',
  'british columbia', 'usa', 'united states'
];

// Regional search configurations
const REGIONS = [
  {
    slug: 'southwestern-ontario',
    name: 'Southwestern Ontario',
    searchTerms: [
      'Ontario farmland aerial',
      'agricultural fields Ontario',
      'Ontario countryside rural landscape',
      'farm fields aerial view'
    ]
  },
  {
    slug: 'central-ontario',
    name: 'Central Ontario',
    searchTerms: [
      'Muskoka Ontario lakes aerial',
      'Ontario cottage country Muskoka',
      'Georgian Bay Ontario Canada',
      'Lake Simcoe Ontario aerial'
    ]
  },
  {
    slug: 'golden-horseshoe-niagara',
    name: 'Golden Horseshoe/Niagara',
    searchTerms: [
      'Niagara Escarpment aerial',
      'Ontario vineyards landscape',
      'Niagara wine country aerial',
      'Hamilton escarpment view'
    ]
  },
  {
    slug: 'eastern-ontario',
    name: 'Eastern Ontario',
    searchTerms: [
      'St Lawrence River Ontario aerial',
      'Eastern Ontario countryside',
      'Thousand Islands Ontario aerial',
      'Ottawa River landscape'
    ]
  },
  {
    slug: 'northern-ontario',
    name: 'Northern Ontario',
    searchTerms: [
      'Northern Ontario forest aerial',
      'Canadian Shield landscape',
      'Northern Ontario wilderness',
      'Ontario boreal forest aerial'
    ]
  }
];

// Load cities from constants
const CITIES = [
  // Southwestern Ontario
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
  { name: 'Owen Sound', slug: 'owen-sound', region: 'southwestern-ontario' },
  { name: 'Hanover', slug: 'hanover', region: 'southwestern-ontario' },
  
  // Central Ontario
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
  
  // Golden Horseshoe
  { name: 'Hamilton', slug: 'hamilton', region: 'golden-horseshoe-niagara' },
  { name: 'Burlington', slug: 'burlington', region: 'golden-horseshoe-niagara' },
  { name: 'Oakville', slug: 'oakville', region: 'golden-horseshoe-niagara' },
  { name: 'Mississauga', slug: 'mississauga', region: 'golden-horseshoe-niagara' },
  { name: 'Brampton', slug: 'brampton', region: 'golden-horseshoe-niagara' },
  { name: 'St. Catharines', slug: 'st-catharines', region: 'golden-horseshoe-niagara' },
  { name: 'Niagara Falls', slug: 'niagara-falls', region: 'golden-horseshoe-niagara' },
  { name: 'Welland', slug: 'welland', region: 'golden-horseshoe-niagara' },
  { name: 'Grimsby', slug: 'grimsby', region: 'golden-horseshoe-niagara' },
  { name: 'Milton', slug: 'milton', region: 'golden-horseshoe-niagara' },
  { name: 'Georgetown', slug: 'georgetown', region: 'golden-horseshoe-niagara' },
  { name: 'Orangeville', slug: 'orangeville', region: 'golden-horseshoe-niagara' },
  
  // Eastern Ontario
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
  
  // Northern Ontario
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

/**
 * Check if image description contains forbidden religious keywords or banned locations
 */
function containsReligiousImagery(text) {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  
  // Check religious keywords
  if (FORBIDDEN_KEYWORDS.some(keyword => lowerText.includes(keyword))) {
    return true;
  }
  
  // Check banned locations (Toronto, wrong countries, etc.)
  if (BANNED_LOCATIONS.some(location => lowerText.includes(location))) {
    return true;
  }
  
  return false;
}

/**
 * Search Unsplash for images
 */
async function searchUnsplash(query, perPage = 5) {
  if (!UNSPLASH_ACCESS_KEY) {
    console.log('⚠️  No Unsplash API key found. Set UNSPLASH_ACCESS_KEY environment variable.');
    return [];
  }

  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter out religious imagery
    const filtered = data.results.filter(photo => {
      const description = `${photo.description || ''} ${photo.alt_description || ''} ${photo.tags?.map(t => t.title).join(' ') || ''}`;
      return !containsReligiousImagery(description);
    });

    return filtered.map(photo => ({
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
    console.error(`Unsplash search error for "${query}":`, error.message);
    return [];
  }
}

/**
 * Search Pexels for images
 */
async function searchPexels(query, perPage = 5) {
  if (!PEXELS_API_KEY) {
    console.log('⚠️  No Pexels API key found. Set PEXELS_API_KEY environment variable.');
    return [];
  }

  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter out religious imagery
    const filtered = data.photos.filter(photo => {
      const description = `${photo.alt || ''}`;
      return !containsReligiousImagery(description);
    });

    return filtered.map(photo => ({
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
    console.error(`Pexels search error for "${query}":`, error.message);
    return [];
  }
}

/**
 * Find best image for a location
 */
async function findBestImage(searchTerms, location) {
  console.log(`\n🔍 Searching for: ${location}`);
  
  for (const term of searchTerms) {
    console.log(`   Trying: "${term}"`);
    
    // Try Unsplash first
    let results = await searchUnsplash(term, 3);
    if (results.length > 0) {
      console.log(`   ✅ Found ${results.length} suitable images on Unsplash`);
      return results[0]; // Return best match
    }
    
    // Fallback to Pexels
    results = await searchPexels(term, 3);
    if (results.length > 0) {
      console.log(`   ✅ Found ${results.length} suitable images on Pexels`);
      return results[0];
    }
    
    // Small delay to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`   ❌ No suitable images found`);
  return null;
}

/**
 * Main execution
 */
async function main() {
  console.log('🎨 Stewart Seal Coating - Image Sourcing\n');
  console.log('=' .repeat(60));
  console.log('CRITICAL: Religious imagery filtering ACTIVE');
  console.log('Forbidden keywords:', FORBIDDEN_KEYWORDS.join(', '));
  console.log('=' .repeat(60));

  const manifest = {
    generated: new Date().toISOString(),
    regions: [],
    cities: []
  };

  // Source regional images
  console.log('\n\n📍 PHASE 1: Regional Images (5)');
  console.log('-'.repeat(60));
  
  for (const region of REGIONS) {
    const image = await findBestImage(region.searchTerms, region.name);
    if (image) {
      manifest.regions.push({
        slug: region.slug,
        name: region.name,
        ...image
      });
    } else {
      manifest.regions.push({
        slug: region.slug,
        name: region.name,
        error: 'No suitable image found'
      });
    }
  }

  // Source city images
  console.log(`\n\n🏙️  PHASE 2: City Images (${CITIES.length})`);
  console.log('-'.repeat(60));
  console.log('This will take ~10 minutes with rate limiting...\n');
  
  for (let i = 0; i < CITIES.length; i++) {
    const city = CITIES[i];
    const progress = `[${i + 1}/${CITIES.length}]`;
    
    // TIER 1: City-specific searches
    const tier1 = [
      `${city.name} Ontario aerial view`,
      `${city.name} Ontario downtown`,
      `${city.name} Ontario cityscape`
    ];
    
    // TIER 2: City landmarks (if applicable)
    const tier2 = [];
    if (city.name === 'Sarnia') tier2.push('Sarnia waterfront', 'Sarnia Lake Huron');
    if (city.name === 'Windsor') tier2.push('Windsor waterfront', 'Windsor Detroit River');
    if (city.name === 'Barrie') tier2.push('Barrie waterfront', 'Kempenfelt Bay');
    if (city.name === 'Hamilton') tier2.push('Hamilton escarpment', 'Hamilton waterfront');
    if (city.name === 'Kingston') tier2.push('Kingston waterfront', 'Kingston Ontario');
    if (city.name === 'Ottawa') tier2.push('Ottawa Rideau Canal', 'Ottawa downtown');
    if (city.name === 'Thunder Bay') tier2.push('Thunder Bay waterfront', 'Thunder Bay Sleeping Giant');
    if (city.name === 'Greater Sudbury') tier2.push('Sudbury downtown', 'Sudbury Ontario');
    
    // TIER 3: Regional generic
    let regionType = 'landscape';
    if (city.region === 'southwestern-ontario') regionType = 'Southwestern Ontario farmland';
    if (city.region === 'central-ontario') regionType = 'Central Ontario lakes';
    if (city.region === 'golden-horseshoe-niagara') regionType = 'Ontario Niagara region';
    if (city.region === 'eastern-ontario') regionType = 'Eastern Ontario countryside';
    if (city.region === 'northern-ontario') regionType = 'Northern Ontario forest';
    
    const tier3 = [
      'Ontario small town aerial',
      'Ontario downtown street',
      regionType
    ];
    
    // Try all search tiers
    const searchTerms = [...tier1, ...tier2, ...tier3];
    
    const image = await findBestImage(searchTerms, `${progress} ${city.name}`);
    
    if (image) {
      manifest.cities.push({
        slug: city.slug,
        name: city.name,
        region: city.region,
        ...image
      });
    } else {
      manifest.cities.push({
        slug: city.slug,
        name: city.name,
        region: city.region,
        error: 'No suitable image found'
      });
    }
    
    // Rate limiting: 1 request per second
    await new Promise(resolve => setTimeout(resolve, 1200));
  }

  // Save manifest
  const manifestPath = path.join(__dirname, 'image-sources.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('\n\n✅ IMAGE SOURCING COMPLETE');
  console.log('=' .repeat(60));
  console.log(`📄 Manifest saved: ${manifestPath}`);
  console.log(`\n📊 Summary:`);
  console.log(`   Regions: ${manifest.regions.filter(r => !r.error).length}/5 found`);
  console.log(`   Cities: ${manifest.cities.filter(c => !c.error).length}/${CITIES.length} found`);
  console.log(`   Missing: ${manifest.regions.filter(r => r.error).length + manifest.cities.filter(c => c.error).length}`);
  console.log(`\n🛡️  Protection:`);
  console.log(`   ✓ Religious imagery filtered`);
  console.log(`   ✓ Toronto/CN Tower banned`);
  console.log(`   ✓ Wrong countries filtered`);
  console.log('\n⏭️  Next step: node scripts/preview-images.mjs');
}

main().catch(console.error);

