# 🚀 Quick Start Guide - Steward Seal Coating Website

## Step 1: Install Node.js (if not already installed)

Download and install Node.js 18+ from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

## Step 2: Install Dependencies

Open a terminal in the project directory and run:
```bash
npm install
```

This will install all required packages (~2-3 minutes).

## Step 3: Configure Environment Variables

The `.env.local` file is already created with placeholder values. Update these before launch:

```bash
# Open .env.local in a text editor and update:

NEXT_PUBLIC_GHL_WEBHOOK_URL=https://your-actual-webhook-url.com
NEXT_PUBLIC_PHONE=(555) 123-4567        # Your real phone
NEXT_PUBLIC_EMAIL=info@stewardsealcoating.com  # Your real email
NEXT_PUBLIC_SITE_URL=https://stewardsealcoating.com  # Your domain
```

**Note**: `NEXT_PUBLIC_FOUNDING_COUNT=12` can stay as-is for now.

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the homepage! 🎉

## Step 5: Test the Website

### Pages to Check:
- **Homepage**: `http://localhost:3000`
- **Guelph City Page**: `http://localhost:3000/locations/guelph-on`
- **Southwestern Ontario Region**: `http://localhost:3000/regions/southwestern-ontario`
- **Contact Form**: Scroll to bottom of homepage

### Test the Contact Form:
1. Fill out all fields
2. Click "Send Message"
3. Should show success message (submission logs to console if webhook not configured)

### Test Mobile View:
1. Open browser dev tools (F12)
2. Click device toolbar icon
3. Select "iPhone 12 Pro" or similar
4. Test hamburger menu in header

## Step 6: Build for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized production build.

Test the production build locally:
```bash
npm start
```

## Step 7: Deploy to Vercel (Recommended)

1. **Create Vercel Account**: Visit [vercel.com](https://vercel.com)
2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   vercel
   ```
   Or connect your GitHub repo in Vercel dashboard

4. **Add Environment Variables** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

## Common Issues

### "npx: command not found"
- Node.js not installed or not in PATH
- Install Node.js from nodejs.org

### Forms Not Submitting
- Check `NEXT_PUBLIC_GHL_WEBHOOK_URL` in `.env.local`
- For testing, leave as placeholder - submissions will log to console

### Images Not Loading
- Images use Unsplash URLs (external)
- Check internet connection
- Replace with your own images in `public/images/` folder

### Build Errors
- Delete `node_modules` folder and `.next` folder
- Run `npm install` again
- Run `npm run build` again

## Updating Content

### Update Founding Communities Counter
1. Edit `.env.local`
2. Change `NEXT_PUBLIC_FOUNDING_COUNT=12` to new number
3. Restart dev server
4. Counter updates automatically across site

### Add Your Logo
1. Add logo image to `public/` folder (e.g., `public/logo.png`)
2. Edit `components/layout/Header.tsx` and `components/layout/Footer.tsx`
3. Replace text logo with `<Image>` component

### Replace Placeholder Images
1. Add images to `public/images/` folder
2. Find components using Unsplash URLs (search for `images.unsplash.com`)
3. Replace with: `src="/images/your-image.jpg"`

### Update Contact Info
- Edit `.env.local` variables
- Restart dev server for changes to take effect

## Need Help?

- **Full Documentation**: See `README.md`
- **Project Summary**: See `PROJECT-SUMMARY.md`
- **Technical Details**: See code comments in each file

## What's Next?

### Before Launch:
- [ ] Update all environment variables with real values
- [ ] Replace placeholder images with actual photos
- [ ] Test contact form with real GHL webhook
- [ ] Test on mobile devices (not just dev tools)
- [ ] Check all 30+ pages for content accuracy
- [ ] Set up Google Analytics (use existing data attributes)

### After Launch:
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor form submissions in GHL
- [ ] Update Founding Communities counter as spots fill
- [ ] Gather testimonials to add to pages
- [ ] Consider adding before/after photo galleries

---

**You're all set!** 🎉

The website is ready to launch as soon as you complete Steps 1-7 above.

