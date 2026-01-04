# Hero Images Status

## ✅ What's Working Now

**68 images downloaded and processed:**
- 3 regional images (Southwestern Ontario, Eastern Ontario, Northern Ontario)
- 65 city images

All working images are:
- Converted to WebP format
- Resized to 1920×1080 (16:9)
- Optimized to ~100-300KB each
- Have gradient overlays for text legibility
- Ready to use as placeholders

## ❌ What Needs Replacement

**25 images need manual sourcing:**

### Regional (2):
- **Central Ontario** (affects 15 cities using this fallback)
- **Golden Horseshoe/Niagara** (affects 8 cities using this fallback)

### Cities (23):
**Central Ontario Cities:**
- Lindsay, Kawartha Lakes, Midland, Penetanguishene
- Gravenhurst, Bracebridge, Huntsville, Parry Sound
- Port Hope, Campbellford, Alliston, Bradford
- Innisfil, New Tecumseth, Wasaga Beach

**Golden Horseshoe Cities:**
- Grimsby, Fort Erie, Pelham, Lincoln
- Orangeville, Ancaster, Dundas, Stoney Creek

## 🎯 Priority Replacement Order

**1. Fix Regional Images First (High Priority):**
- Replace `central-ontario-hero.webp`
- Replace `golden-horseshoe-niagara-hero.webp`

This will automatically fix 23 cities that use these fallbacks!

**2. Major Cities Next (Medium Priority):**
Cities that likely need unique images:
- Orangeville, Ancaster, Dundas, Stoney Creek (Golden Horseshoe)
- Huntsville, Collingwood, Wasaga Beach (Central Ontario)

**3. Minor Cities Last (Low Priority):**
Smaller cities can share regional fallbacks:
- Bradford, Alliston, Innisfil, New Tecumseth
- Pelham, Lincoln, Grimsby, Fort Erie

## 📝 How to Replace Images

### Quick Single Replacement:

```powershell
# Example: Replace London's image
node scripts/replace-image.mjs my-london-photo.jpg london

# Example: Replace Central Ontario regional image
node scripts/replace-image.mjs new-central-ontario.jpg central-ontario
```

### Batch Replacement:

1. Create folder: `/temp-images/`
2. Add images named with slugs: `london.jpg`, `ottawa.png`, etc.
3. Run:
```powershell
node scripts/batch-replace-images.mjs
```

## 🔍 Finding Images

### Recommended Sources:
- **Unsplash.com** - Search "[City] Ontario"
- **Pexels.com** - Search "[City] Ontario aerial"
- **Your own photos** - Drone/aerial shots work best

### Search Tips:
✅ GOOD searches:
- "Central Ontario lake aerial"
- "Huntsville Ontario"
- "Ontario vineyard landscape" (for Golden Horseshoe)

❌ AVOID:
- Any religious buildings
- Toronto/CN Tower
- Other countries (Norway, Maldives, etc.)

## 📂 File Locations

**Regional images:**
```
/public/images/regions/
  - southwestern-ontario-hero.webp ✅
  - central-ontario-hero.webp ❌ NEEDS REPLACEMENT
  - golden-horseshoe-niagara-hero.webp ❌ NEEDS REPLACEMENT
  - eastern-ontario-hero.webp ✅
  - northern-ontario-hero.webp ✅
```

**City images:**
```
/public/images/cities/
  - london-hero.webp ✅
  - ottawa-hero.webp ✅
  - thunder-bay-hero.webp ✅
  - huntsville-hero.webp ❌ NEEDS REPLACEMENT
  - ... (65 working, 23 need replacement)
```

## 🚀 Current Status

**Site Status:**
- ✅ 68 images display correctly
- ⚠️ 25 images show broken/need replacement
- ✅ All page structure works
- ✅ Easy replacement system ready

**Next Steps:**
1. Source 2 regional images (Central Ontario + Golden Horseshoe)
2. Replace them using `replace-image.mjs`
3. Optionally: Source individual city images for major cities
4. Test locally: `npm run dev`
5. Deploy: `git add . && git commit -m "Add hero images" && git push`

## 📚 Documentation

- **HOW-TO-REPLACE-IMAGES.md** - Full replacement guide
- **scripts/replace-image.mjs** - Single image replacement
- **scripts/batch-replace-images.mjs** - Bulk replacement

---

**Bottom Line:** 68/93 images work as placeholders. Replace the 2 broken regional images first, then optionally source unique images for major cities over time.





