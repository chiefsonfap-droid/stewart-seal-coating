# How to Replace Hero Images

## Quick Reference

**Image locations:**
- Regional images: `/public/images/regions/{slug}-hero.webp`
- City images: `/public/images/cities/{slug}-hero.webp`

**Image requirements:**
- Format: WebP (preferred) or JPG/PNG (will auto-convert)
- Dimensions: 1920×1080 (16:9 ratio) minimum
- Size: Under 500KB recommended

---

## Method 1: Drop-in Replacement (Easiest)

### For a Single Image:

1. Find/download your new image
2. Rename it to match the slug: `{slug}-hero.webp`
3. Drop it into the correct folder:
   - Regions: `/public/images/regions/`
   - Cities: `/public/images/cities/`
4. Refresh your browser - done!

**Example - Replacing London:**
```
Your new image: london-aerial.jpg
Rename to: london-hero.webp
Place in: /public/images/cities/london-hero.webp
```

---

## Method 2: Bulk Replacement Script

### If you have many images to replace:

1. Place all your new images in a folder: `/temp-images/`
2. Name them with city slugs: `london.jpg`, `ottawa.png`, etc.
3. Run the conversion script:

```powershell
node scripts/convert-images.mjs
```

The script will:
- Convert to WebP
- Resize to 1920×1080
- Add gradient overlay
- Move to correct locations

---

## Image Naming Reference

### Regional Slugs:
- `southwestern-ontario-hero.webp`
- `central-ontario-hero.webp`
- `golden-horseshoe-niagara-hero.webp`
- `eastern-ontario-hero.webp`
- `northern-ontario-hero.webp`

### City Slugs (Examples):
- London → `london-hero.webp`
- Ottawa → `ottawa-hero.webp`
- Thunder Bay → `thunder-bay-hero.webp`
- St. Catharines → `st-catharines-hero.webp`
- Greater Sudbury → `greater-sudbury-hero.webp`

**Rule:** Lowercase, spaces become hyphens, remove periods

---

## Images Currently Needing Replacement

### Broken/Missing Images (25 total):

**Regional:**
- Central Ontario
- Golden Horseshoe/Niagara

**Central Ontario Cities (using broken fallback):**
- Lindsay
- Kawartha Lakes
- Midland
- Penetanguishene
- Gravenhurst
- Bracebridge
- Huntsville  
- Parry Sound
- Port Hope
- Campbellford
- Alliston
- Bradford
- Innisfil
- New Tecumseth
- Wasaga Beach

**Golden Horseshoe Cities (using broken fallback):**
- Grimsby
- Fort Erie
- Pelham
- Lincoln
- Orangeville
- Ancaster
- Dundas
- Stoney Creek

**Priority:** Fix the 2 regional images first, then the cities will inherit them.

---

## Tips for Finding Images

### Good Sources:
- **Unsplash.com** - Free, high quality
- **Pexels.com** - Free, high quality
- **Your own photos** - Use drone/aerial shots if available

### Search Terms:
- `[City Name] Ontario aerial`
- `[City Name] Ontario downtown`
- `[City Name] Ontario landscape`

### What to Avoid:
- ❌ Churches, mosques, synagogues, temples
- ❌ Religious symbols
- ❌ Toronto/CN Tower
- ❌ Images from other countries
- ❌ Low resolution (under 1920px wide)

---

## Testing Your Changes

### Locally:
```bash
npm run dev
# Visit: http://localhost:3000/regions/southwestern-ontario
# Visit: http://localhost:3000/locations/london-on
```

### Production:
```bash
git add public/images
git commit -m "Update hero images"
git push origin main
# Vercel auto-deploys in ~2 minutes
```

---

## Need Help?

**Common issues:**

**Image not showing?**
- Check file name matches slug exactly
- Check file is in correct folder (regions vs cities)
- Hard refresh browser (Ctrl+F5)

**Image looks stretched?**
- Original image should be 16:9 ratio (1920×1080, 3840×2160, etc.)
- Use conversion script to auto-resize

**File too large?**
- Convert to WebP format
- Use conversion script (auto-optimizes to ~100-300KB)

---

## Conversion Script Reference

Create `/scripts/convert-images.mjs` if needed:

```javascript
// Converts images in /temp-images/ to WebP and places them correctly
// Usage: node scripts/convert-images.mjs
```

Coming soon - will auto-create if you need it!








