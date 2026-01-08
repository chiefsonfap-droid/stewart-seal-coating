# Image Sourcing Scripts - Stewart Seal Coating

Automated system to source, download, and process 92 hero images for the website.

## Quick Start

### 1. Get API Keys (Free)

**Unsplash (Recommended):**
1. Go to https://unsplash.com/developers
2. Sign up / Log in
3. Create a new application
4. Copy your "Access Key"

**Pexels (Fallback):**
1. Go to https://www.pexels.com/api/
2. Sign up / Log in
3. Copy your API key

### 2. Set Environment Variables

**Windows PowerShell:**
```powershell
$env:UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
$env:PEXELS_API_KEY="your_pexels_key_here"
```

**Windows CMD:**
```cmd
set UNSPLASH_ACCESS_KEY=your_unsplash_key_here
set PEXELS_API_KEY=your_pexels_key_here
```

**Mac/Linux:**
```bash
export UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
export PEXELS_API_KEY="your_pexels_key_here"
```

### 3. Run the Process

```bash
# Step 1: Source images from APIs (~10 minutes with rate limiting)
node scripts/source-images.mjs

# Step 2: Generate preview page for manual review
node scripts/preview-images.mjs

# Step 3: Open the preview HTML in your browser
# Review ALL images for religious imagery
# File location: scripts/image-preview.html

# Step 4: If approved, download and process all images (~5 minutes)
node scripts/download-images.mjs
```

## 🚨 CRITICAL: Religious Imagery Filter

**WHY:** Stewart Seal Coating serves ALL faith communities (churches, synagogues, mosques, temples, gurdwaras, etc.). We must NEVER feature one faith's religious buildings in hero images as it could alienate others.

**AUTOMATED FILTERING:**
The `source-images.mjs` script automatically filters out images containing keywords like:
- church, cathedral, mosque, synagogue, temple, gurdwara
- religious, worship, steeple, minaret, dome
- And more...

**MANUAL REVIEW (REQUIRED):**
The preview page is your safety checkpoint. Even with automated filtering, some religious buildings might slip through (e.g., a cathedral in the background of a city skyline). Review EVERY image before downloading.

## Scripts Overview

### `source-images.mjs`
- Searches Unsplash and Pexels APIs
- Finds best images for 5 regions + 87 cities
- Applies religious imagery filtering
- Saves results to `image-sources.json`
- Takes ~10 minutes (rate limiting)

### `preview-images.mjs`
- Reads `image-sources.json`
- Generates HTML preview page with all images
- Provides manual review interface
- Instant execution

### `download-images.mjs`
- Downloads all images from `image-sources.json`
- Resizes to 1920x1080 (16:9 aspect ratio)
- Converts to WebP format (85% quality)
- Adds dark gradient overlay for text legibility
- Saves to `/public/images/regions/` and `/public/images/cities/`
- Takes ~5 minutes

## Output

**Manifest:**
- `scripts/image-sources.json` - Complete list of sourced images with metadata

**Preview:**
- `scripts/image-preview.html` - Visual preview for manual review

**Final Images:**
- `/public/images/regions/{slug}-hero.webp` (5 files)
- `/public/images/cities/{slug}-hero.webp` (87 files)
- Each ~100-300KB (optimized WebP)

## Troubleshooting

**"No API key found"**
- Make sure environment variables are set in the SAME terminal session
- Try running all commands in one session after setting the variables

**"Rate limit exceeded"**
- Unsplash: 50 requests/hour
- Pexels: 200 requests/hour
- Wait an hour and try again, or use both APIs

**"No suitable images found" for a city**
- Script automatically falls back to regional landscape
- These will be marked as "REGIONAL FALLBACK" in preview

**Religious imagery in preview**
- Edit `scripts/image-sources.json`
- Remove the problematic entries
- Run `download-images.mjs` again (will skip removed entries)

## Licensing

All images from Unsplash and Pexels are **free for commercial use**:
- ✅ No attribution required (but we track photographer names)
- ✅ Can modify, resize, add overlays
- ✅ No licensing fees
- ✅ Can use on commercial websites

See:
- https://unsplash.com/license
- https://www.pexels.com/license

## Next Steps After Download

1. Update page components (see main project README)
2. Test locally: `npm run dev`
3. Commit images to Git
4. Push to GitHub
5. Vercel auto-deploys
6. Verify images display correctly in production










