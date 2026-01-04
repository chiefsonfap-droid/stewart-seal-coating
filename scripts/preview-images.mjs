#!/usr/bin/env node

/**
 * Image Preview Generator for Stewart Seal Coating
 * 
 * Generates an HTML preview page showing all sourced images
 * for manual review before downloading.
 * 
 * CRITICAL: Manual review for religious imagery that automated filtering missed
 * 
 * Usage: node scripts/preview-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.join(__dirname, 'image-sources.json');
const outputPath = path.join(__dirname, 'image-preview.html');

if (!fs.existsSync(manifestPath)) {
  console.error('❌ Error: image-sources.json not found');
  console.error('   Run: node scripts/source-images.mjs first');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stewart Seal Coating - Image Preview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .header {
      background: #1e40af;
      color: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .header h1 { margin-bottom: 10px; }
    .warning {
      background: #dc2626;
      color: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    .warning ul { margin-left: 20px; margin-top: 10px; }
    .stats {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }
    .stat { text-align: center; }
    .stat-number { font-size: 2em; font-weight: bold; color: #1e40af; }
    .stat-label { color: #666; margin-top: 5px; }
    .section {
      background: white;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .section h2 {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #1e40af;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .card {
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .card.error {
      border-color: #dc2626;
      background: #fee;
    }
    .card.fallback {
      border-color: #f59e0b;
      background: #fffbeb;
    }
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background: #e5e7eb;
    }
    .card-content {
      padding: 15px;
    }
    .card-title {
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 8px;
    }
    .card-meta {
      font-size: 0.9em;
      color: #666;
      margin-bottom: 5px;
    }
    .card-description {
      font-size: 0.85em;
      color: #888;
      font-style: italic;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #e5e7eb;
    }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75em;
      font-weight: bold;
      margin-top: 8px;
    }
    .badge-unsplash { background: #000; color: #fff; }
    .badge-pexels { background: #05A081; color: #fff; }
    .badge-error { background: #dc2626; color: #fff; }
    .badge-fallback { background: #f59e0b; color: #fff; }
    .footer {
      background: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin-top: 30px;
    }
    .approve-btn {
      background: #10b981;
      color: white;
      border: none;
      padding: 15px 40px;
      font-size: 1.1em;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
    }
    .approve-btn:hover {
      background: #059669;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎨 Stewart Seal Coating - Image Preview</h1>
    <p>Manual review required before downloading</p>
    <p style="margin-top: 10px; opacity: 0.9;">Generated: ${manifest.generated}</p>
  </div>

  <div class="warning">
    ⚠️ CRITICAL: Review ALL images for religious imagery
    <ul>
      <li>NO churches, cathedrals, mosques, synagogues, temples, or gurdwaras</li>
      <li>NO religious symbols (crosses, crescents, stars, etc.)</li>
      <li>NO identifiable religious architecture</li>
    </ul>
    <p style="margin-top: 10px;">If you see ANY religious imagery, DO NOT proceed. Edit image-sources.json to remove that entry.</p>
  </div>

  <div class="stats">
    <div class="stat">
      <div class="stat-number">${manifest.regions.filter(r => !r.error).length}/5</div>
      <div class="stat-label">Regional Images</div>
    </div>
    <div class="stat">
      <div class="stat-number">${manifest.cities.filter(c => !c.error).length}/87</div>
      <div class="stat-label">City Images</div>
    </div>
    <div class="stat">
      <div class="stat-number">${manifest.cities.filter(c => c.fallback).length}</div>
      <div class="stat-label">Fallback Images</div>
    </div>
    <div class="stat">
      <div class="stat-number">${manifest.regions.filter(r => r.error).length + manifest.cities.filter(c => c.error).length}</div>
      <div class="stat-label">Missing</div>
    </div>
  </div>

  <div class="section">
    <h2>📍 Regional Images (5)</h2>
    <div class="grid">
      ${manifest.regions.map(region => `
        <div class="card ${region.error ? 'error' : ''}">
          ${region.thumb ? `<img src="${region.thumb}" alt="${region.name}" class="card-image">` : '<div class="card-image"></div>'}
          <div class="card-content">
            <div class="card-title">${region.name}</div>
            ${region.photographer ? `<div class="card-meta">📸 ${region.photographer}</div>` : ''}
            ${region.source ? `<span class="badge badge-${region.source}">${region.source.toUpperCase()}</span>` : ''}
            ${region.error ? `<span class="badge badge-error">ERROR: ${region.error}</span>` : ''}
            ${region.description ? `<div class="card-description">${region.description}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="section">
    <h2>🏙️ City Images (87)</h2>
    <div class="grid">
      ${manifest.cities.map(city => `
        <div class="card ${city.error ? 'error' : ''} ${city.fallback ? 'fallback' : ''}">
          ${city.thumb ? `<img src="${city.thumb}" alt="${city.name}" class="card-image">` : '<div class="card-image"></div>'}
          <div class="card-content">
            <div class="card-title">${city.name}</div>
            <div class="card-meta">${city.region}</div>
            ${city.photographer ? `<div class="card-meta">📸 ${city.photographer}</div>` : ''}
            ${city.source ? `<span class="badge badge-${city.source}">${city.source.toUpperCase()}</span>` : ''}
            ${city.fallback ? `<span class="badge badge-fallback">REGIONAL FALLBACK</span>` : ''}
            ${city.error ? `<span class="badge badge-error">ERROR: ${city.error}</span>` : ''}
            ${city.description ? `<div class="card-description">${city.description}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="footer">
    <h3>✅ Next Steps</h3>
    <p style="margin-top: 10px;">If ALL images are acceptable (NO religious imagery):</p>
    <div>
      <button class="approve-btn" onclick="alert('Run this command:\\n\\nnode scripts/download-images.mjs\\n\\nThis will download and process all ${manifest.regions.filter(r => !r.error).length + manifest.cities.filter(c => !c.error).length} images.')">
        APPROVE & PROCEED TO DOWNLOAD
      </button>
    </div>
    <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
      If you see ANY religious imagery, edit <code>scripts/image-sources.json</code> to remove those entries before downloading.
    </p>
  </div>
</body>
</html>`;

fs.writeFileSync(outputPath, html);

console.log('✅ Preview page generated!');
console.log(`📄 Open: ${outputPath}`);
console.log('\n🔍 MANUAL REVIEW REQUIRED:');
console.log('   1. Open the HTML file in your browser');
console.log('   2. Review EVERY image for religious imagery');
console.log('   3. If you see ANY religious buildings/symbols, edit image-sources.json');
console.log('   4. Once approved, run: node scripts/download-images.mjs');





