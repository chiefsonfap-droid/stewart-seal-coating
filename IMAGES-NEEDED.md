# Images Needed for Steward Seal Coating Website

## Summary
**Total Images Required: 92**
- 5 Regional Page Hero Images
- 87 City Page Hero Images

---

## Image Specifications

### Technical Requirements
- **Format:** WebP (optimized for web)
- **Aspect Ratio:** 16:9 or wider
- **Minimum Width:** 1920px
- **Quality:** Professional photography
- **Overlay:** Dark gradient (30-50% opacity) for text legibility

### Critical Restrictions
❌ **NEVER USE:**
- Churches, mosques, synagogues, temples, or any religious buildings
- Religious symbols, crosses, or faith iconography
- People or crowds

✅ **DO USE:**
- Natural landscapes
- Aerial views
- Downtown/main street views
- Rivers, lakes, parks
- Civic buildings (non-religious)

---

## Regional Page Images (5 Required)

### 1. Southwestern Ontario
**Path:** `/public/images/regions/southwestern-ontario-hero.webp`

**Theme:** Agricultural fields, rolling farmland
**Search Terms:**
- "Ontario farmland"
- "agricultural fields Ontario"
- "Ontario countryside rural"

---

### 2. Central Ontario
**Path:** `/public/images/regions/central-ontario-hero.webp`

**Theme:** Lakes, forests, cottage country
**Search Terms:**
- "Muskoka lakes"
- "Ontario cottage country"
- "Georgian Bay Ontario"
- "Lake Simcoe aerial"

---

### 3. Golden Horseshoe/Niagara
**Path:** `/public/images/regions/golden-horseshoe-niagara-hero.webp`

**Theme:** Niagara Escarpment, vineyards, waterfalls
**Search Terms:**
- "Niagara Escarpment"
- "Ontario vineyards"
- "Niagara wine country"
- "Hamilton escarpment"

---

### 4. Eastern Ontario
**Path:** `/public/images/regions/eastern-ontario-hero.webp`

**Theme:** St. Lawrence River, pastoral landscapes
**Search Terms:**
- "St. Lawrence River Ontario"
- "Eastern Ontario countryside"
- "Thousand Islands Ontario"
- "Ottawa River landscape"

---

### 5. Northern Ontario
**Path:** `/public/images/regions/northern-ontario-hero.webp`

**Theme:** Dense forests, Canadian Shield, rocky terrain
**Search Terms:**
- "Northern Ontario forest"
- "Canadian Shield"
- "Northern Ontario wilderness"
- "Ontario boreal forest"

---

## City Page Images (87 Required)

For each city, create: `/public/images/cities/[city-slug]-hero.webp`

### Search Priority (Try in order):
1. `"[City Name] Ontario aerial view"`
2. `"[City Name] downtown"`
3. `"[City Name] main street"`
4. `"[City Name] waterfront"` (if applicable)
5. Generic regional landscape if city-specific unavailable

### Examples:

**London:**
`/public/images/cities/london-hero.webp`
- Search: "London Ontario aerial view" or "London Ontario downtown"

**Kitchener:**
`/public/images/cities/kitchener-hero.webp`
- Search: "Kitchener Ontario downtown" or "Kitchener aerial"

**Greater Sudbury:**
`/public/images/cities/greater-sudbury-hero.webp`
- Search: "Sudbury Ontario aerial" or "Sudbury downtown"

---

## Image Sources (Recommended)

### 1. Unsplash (Free, High Quality)
- https://unsplash.com/
- Search with city names + "Ontario"
- License: Free for commercial use

### 2. Pexels (Free, High Quality)
- https://www.pexels.com/
- Similar search strategy

### 3. Pixabay (Free)
- https://pixabay.com/

### 4. Adobe Stock / iStock (Paid)
- Higher quality, more selection
- Better city-specific options

---

## Alt Text Format

**Regional Pages:**
```
"[Region Name] landscape - Steward Seal Coating service area"
```
Example: `"Southwestern Ontario agricultural fields - Steward Seal Coating service area"`

**City Pages:**
```
"Aerial view of [City Name], Ontario - Steward Seal Coating service area"
```
Example: `"Aerial view of London, Ontario - Steward Seal Coating service area"`

---

## Implementation Notes

Currently the site has placeholder paths but no actual images. The site will build and deploy successfully, but images won't display until you:

1. Source the 92 images (use recommendations above)
2. Convert to WebP format (use https://squoosh.app/ or similar)
3. Place in `/public/images/` directory following the paths listed
4. Deploy/rebuild

**Priority:** Start with the 5 regional page images, then add city images gradually.

---

## Quick Start Checklist

- [ ] Source 5 regional images
- [ ] Convert to WebP
- [ ] Place in `/public/images/regions/`
- [ ] Source 87 city images (start with major cities)
- [ ] Convert to WebP
- [ ] Place in `/public/images/cities/`
- [ ] Test locally with `npm run dev`
- [ ] Deploy to Vercel

---

## Questions?
Refer back to the master prompt specifications for image restrictions.





