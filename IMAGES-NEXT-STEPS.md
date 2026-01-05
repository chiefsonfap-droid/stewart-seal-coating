# 🎨 Image Sourcing - Ready to Execute!

## What's Been Built

✅ **Complete automated image sourcing system:**
- `scripts/source-images.mjs` - Searches Unsplash/Pexels with religious imagery filtering
- `scripts/preview-images.mjs` - Generates HTML preview for manual review
- `scripts/download-images.mjs` - Downloads, resizes, converts to WebP, adds overlays
- **Religious imagery protection built into every layer**

✅ **Page components updated:**
- Regional pages (`app/regions/[slug]/page.tsx`) - Hero images with overlays
- City pages (`app/locations/[city]/page.tsx`) - Hero images with overlays
- All 92 pages ready to display images once downloaded

✅ **Infrastructure ready:**
- `/public/images/regions/` directory created
- `/public/images/cities/` directory created
- Sharp library installed for image processing

## Your Next Steps (15-20 minutes total)

### 1. Get Free API Keys (5 minutes)

**Unsplash (Primary):**
1. Go to https://unsplash.com/developers
2. Sign up/login → Create new application
3. Copy your "Access Key"

**Pexels (Backup - optional):**
1. Go to https://www.pexels.com/api/
2. Sign up/login → Copy API key

### 2. Run the Process (10-15 minutes)

Open PowerShell in this project directory and run these commands:

```powershell
# Set API keys (replace with your actual keys)
$env:UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
$env:PEXELS_API_KEY="your_pexels_key_here"

# Step 1: Source images (~10 min with rate limiting)
node scripts/source-images.mjs

# Step 2: Generate preview page (~1 sec)
node scripts/preview-images.mjs

# Step 3: Open scripts/image-preview.html in browser
# MANUALLY REVIEW ALL IMAGES for religious imagery
# If you see ANY churches/mosques/temples/synagogues, remove them from image-sources.json

# Step 4: Download and process images (~5 min)
node scripts/download-images.mjs

# Step 5: Test locally
npm run dev
# Visit http://localhost:3000/regions/southwestern-ontario
# Visit http://localhost:3000/locations/london-on

# Step 6: Commit and deploy
git add .
git commit -m "Add 92 hero images for regional and city pages"
git push origin main
```

## Detailed Guide

See `scripts/SETUP-GUIDE.txt` for step-by-step instructions with troubleshooting.

See `scripts/README.md` for technical details about each script.

## Critical: Religious Imagery Review

**WHY THIS MATTERS:**
Stewart Seal Coating serves ALL faith communities (churches, synagogues, mosques, temples, gurdwaras). We must NEVER feature one faith's religious buildings in hero images as it could alienate others.

**Three-Layer Protection:**
1. **Automated keyword filtering** - Scripts reject images with "church", "mosque", etc.
2. **Search term selection** - Using neutral terms like "landscape", "aerial view"
3. **Manual review checkpoint** - YOU review the preview page before downloading

**The preview page (Step 3) is your safety net.** Even if automated filtering works perfectly, you should still review every image to ensure no religious buildings slipped through (e.g., a cathedral in the background of a city skyline).

## Expected Results

- **92 images total**: 5 regional + 87 city
- **File size**: ~100-300KB per image (WebP optimized)
- **Total size**: ~15-25MB (very reasonable for 92 professional images)
- **Format**: WebP with dark gradient overlay for text legibility
- **Dimensions**: 1920×1080 (perfect 16:9 aspect ratio)

## Licensing

✅ All images are **free for commercial use** (Unsplash + Pexels licenses)
✅ **No attribution required** (but photographer credits are tracked)
✅ **No licensing fees**, ever
✅ Modify, resize, add overlays - all allowed

## Need Help?

See troubleshooting section in `scripts/SETUP-GUIDE.txt`

---

**Ready to start?** Open PowerShell and follow the commands above! 🚀








