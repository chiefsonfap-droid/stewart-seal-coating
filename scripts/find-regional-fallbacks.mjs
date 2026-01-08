#!/usr/bin/env node

/**
 * Find 5 PERFECT regional fallback images
 * These will be used for any city without a city-specific image
 */

import fs from 'fs';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';

// Forbidden keywords
const FORBIDDEN = [
  'church', 'cathedral', 'mosque', 'synagogue', 'temple', 'religious',
  'toronto', 'cn tower', 'niagara falls', 'parliament',
  'norway', 'maldives', 'vancouver', 'montreal'
];

function isForbidden(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return FORBIDDEN.some(keyword => lower.includes(keyword));
}

async function searchUnsplash(query, perPage = 10) {
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
        return !isForbidden(desc);
      })
      .map(photo => ({
        id: photo.id,
        url: photo.urls.regular,
        downloadUrl: photo.urls.raw,
        thumb: photo.urls.thumb,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
        description: photo.description || photo.alt_description,
        source: 'unsplash'
      }));
  } catch (error) {
    return [];
  }
}

async function searchPexels(query, perPage = 10) {
  if (!PEXELS_API_KEY) return [];
  
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
    const response = await fetch(url, {
      headers: { 'Authorization': PEXELS_API_KEY }
    });
    
    if (!response.ok) return [];
    
    const data = await response.json();
    return data.photos
      .filter(photo => !isForbidden(photo.alt || ''))
      .map(photo => ({
        id: photo.id,
        url: photo.src.large,
        downloadUrl: photo.src.original,
        thumb: photo.src.small,
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        description: photo.alt,
        source: 'pexels'
      }));
  } catch (error) {
    return [];
  }
}

async function findBestRegionalImage(regionName, searchTerms) {
  console.log(`\n📍 ${regionName}`);
  console.log('-'.repeat(60));
  
  for (const term of searchTerms) {
    console.log(`   Searching: "${term}"`);
    
    let results = await searchUnsplash(term, 10);
    if (results.length === 0) {
      results = await searchPexels(term, 10);
    }
    
    if (results.length > 0) {
      console.log(`   ✅ Found ${results.length} options`);
      return { region: regionName, searchTerm: term, options: results };
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`   ❌ No suitable images found`);
  return { region: regionName, options: [] };
}

async function main() {
  console.log('🎨 FINDING 5 PERFECT REGIONAL FALLBACK IMAGES\n');
  console.log('='.repeat(60));
  
  const regions = [
    {
      name: 'Southwestern Ontario',
      slug: 'southwestern-ontario',
      searches: [
        'Ontario farmland aerial view',
        'agricultural fields Ontario Canada',
        'Ontario countryside rural landscape',
        'Ontario farm country aerial'
      ]
    },
    {
      name: 'Central Ontario',
      slug: 'central-ontario',
      searches: [
        'Muskoka Ontario lake aerial',
        'Ontario cottage country forest lake',
        'Georgian Bay Ontario landscape',
        'Ontario wilderness lake aerial'
      ]
    },
    {
      name: 'Golden Horseshoe/Niagara',
      slug: 'golden-horseshoe-niagara',
      searches: [
        'Ontario vineyard aerial view',
        'Ontario Escarpment landscape',
        'rural Ontario rolling hills',
        'Ontario wine country aerial'
      ]
    },
    {
      name: 'Eastern Ontario',
      slug: 'eastern-ontario',
      searches: [
        'St Lawrence River Ontario aerial',
        'Eastern Ontario countryside landscape',
        'Ontario pastoral river landscape',
        'Ottawa River Ontario landscape'
      ]
    },
    {
      name: 'Northern Ontario',
      slug: 'northern-ontario',
      searches: [
        'Northern Ontario boreal forest aerial',
        'Canadian Shield Ontario landscape',
        'Northern Ontario wilderness aerial',
        'Ontario boreal forest lake'
      ]
    }
  ];
  
  const results = [];
  
  for (const region of regions) {
    const result = await findBestRegionalImage(region.name, region.searches);
    result.slug = region.slug;
    results.push(result);
  }
  
  // Save results
  fs.writeFileSync('scripts/regional-fallback-options.json', JSON.stringify(results, null, 2));
  
  console.log('\n\n✅ REGIONAL FALLBACK OPTIONS SAVED');
  console.log('='.repeat(60));
  console.log('📄 File: scripts/regional-fallback-options.json');
  console.log('\n📋 Summary:');
  results.forEach(r => {
    console.log(`   ${r.region}: ${r.options.length} options found`);
  });
  console.log('\n⏭️  Next: Review options and select ONE best image per region');
}

main().catch(console.error);










