# Steward Seal Coating - Marketing Website

A production-ready Next.js 14 marketing website for Steward Seal Coating, Ontario's faith-community-first parking lot maintenance specialist. Built with TypeScript, Tailwind CSS, and shadcn/ui.

## 🎯 Project Overview

This website serves **30+ pages** of unique, SEO-optimized content:
- **Homepage** with 9 conversion-focused sections
- **25 city pages** (1,500+ words each) with climate-specific content
- **5 region pages** (2,000+ words each) covering all service areas
- **Contact forms** with validation and GHL webhook integration
- **Mobile-first responsive design** optimized for faith community decision-makers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- (Optional) Git for version control

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
stewart-seal-coating/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── locations/[city]/         # Dynamic city pages (25 total)
│   │   └── page.tsx
│   ├── regions/[slug]/           # Dynamic region pages (5 total)
│   │   └── page.tsx
│   └── api/contact/              # Form submission API
│       └── route.ts
├── components/
│   ├── layout/                   # Header, Footer, MobileNav
│   ├── sections/                 # Homepage sections (Hero, About, FAQ, etc.)
│   ├── forms/                    # ContactForm with validation
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── constants.ts              # Cities, regions, contact info
│   ├── metadata.ts               # SEO metadata generators
│   ├── schema.ts                 # JSON-LD schema generators
│   ├── validations.ts            # Zod form schemas
│   └── utils.ts                  # Utility functions
├── public/images/                # Static assets (placeholders use Unsplash)
├── .env.local                    # Environment variables (create from .env.example)
├── package.json
├── tailwind.config.ts            # Design system configuration
├── tsconfig.json
└── README.md
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# GHL Webhook URL for form submissions
NEXT_PUBLIC_GHL_WEBHOOK_URL=https://your-ghl-webhook-url.com

# Founding Communities Program Counter (update as spots fill)
NEXT_PUBLIC_FOUNDING_COUNT=12

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://stewardsealcoating.com
NEXT_PUBLIC_PHONE=(555) 123-4567
NEXT_PUBLIC_EMAIL=info@stewardsealcoating.com
NEXT_PUBLIC_ADDRESS=Ontario, Canada
```

### Updating the Founding Communities Counter

The Founding Communities program displays a live counter showing spots filled out of 50 total.

**To update the counter:**
1. Edit `.env.local` and change `NEXT_PUBLIC_FOUNDING_COUNT` to the new number
2. Restart the development server or rebuild for production
3. The counter will automatically update across the site

**When all 50 spots are filled:**
The component automatically switches to display:
- "Founding Communities Program—Now Closed" headline
- Waitlist messaging
- "Join the Waitlist" CTA button

No code changes needed—the logic is built into `components/sections/FoundingCommunities.tsx`.

## 🎨 Design System

### Color Palette

- **Primary (Deep Blue)**: `#1e40af` - Headlines, CTAs, brand elements
- **Accent (Warm Gold)**: `#f59e0b` - Highlights, trust badges, secondary CTAs
- **Neutral Grays**: `#f8fafc` to `#0f172a` - Backgrounds, text, borders

### Typography

- **Font Family**: Inter (400, 600, 900 weights)
- **Headlines**: Font weight 900, line-height 1.2, letter-spacing -0.02em
- **Subheads**: Font weight 600, line-height 1.3
- **Body**: Font weight 400, line-height 1.7, font-size 1.125rem (18px)

### Spacing

- **Section Padding**: `py-20` (80px desktop), `py-12` (48px mobile)
- **Container**: `max-w-7xl` (1280px), `mx-auto`, `px-6`
- **Border Radius**: 8px (buttons, cards)
- **Transitions**: 200ms ease-in-out

## 📱 Features

### Homepage Sections (in order)

1. **Hero** - "Faith Community Parking Lot Care—Handled With Stewardship"
2. **Who We Serve** - Multi-faith inclusivity statement
3. **The Steward Protection Package™** - Core offering
4. **How It Works** - 3-step process
5. **Services Overview** - Seal coating, crack fill, markings
6. **About Us** - "Stewardship, Not Shortcuts" story
7. **Founding Communities Program** - Exclusive early-partner benefits
8. **FAQ** - 10 Q&As with shadcn Accordion
9. **Contact Form** - With validation and GHL webhook

### City Pages (25 Cities)

Each city page includes:
- **1,500+ words** of unique, SEO-optimized content
- **Climate-specific details** adapted to regional conditions
- **LocalBusiness JSON-LD schema** for local SEO
- **City name used 8-12 times naturally** throughout content
- **Unique metadata** (title, description, OG tags)

Cities covered:
- **Southwestern Ontario**: Guelph, Cambridge, Brantford, Woodstock, Stratford
- **Central Ontario**: Barrie, Peterborough, Orillia, Newmarket, Kawartha Lakes
- **Golden Horseshoe/Niagara**: Burlington, Oakville, St. Catharines, Niagara Falls, Grimsby
- **Eastern Ontario**: Kingston, Belleville, Cornwall, Brockville, Pembroke
- **Northern Ontario**: Greater Sudbury, North Bay, Sault Ste. Marie, Thunder Bay, Timmins

URL format: `/locations/[city-slug]-on` (e.g., `/locations/guelph-on`)

### Region Pages (5 Regions)

Each region page includes:
- **2,000+ words** of unique, SEO-optimized content
- **Region name used 15-20 times** throughout content
- **Links to all 5 cities** in the region
- **Service JSON-LD schema** with areaServed array
- **Region-specific FAQ** (3-5 questions)

URL format: `/regions/[region-slug]` (e.g., `/regions/southwestern-ontario`)

### Contact Form

- **React Hook Form** for state management
- **Zod validation** with inline error messages
- **Loading states** (disabled form, spinner on button)
- **Success state** (replaces form with thank you message)
- **Error handling** (displays fallback phone number)
- **GHL webhook integration** (configurable via env var)
- **Hidden fields** for tracking (program, source, page)

## 🔍 SEO Implementation

### Metadata

Every page includes:
- Unique `<title>` tags (60-70 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### JSON-LD Structured Data

- **Homepage**: Organization schema (name, logo, contact, areaServed)
- **City pages**: LocalBusiness schema with serviceArea
- **Region pages**: Service schema with areaServed array

### Performance

- **next/image** component for all images (automatic optimization)
- **Dynamic imports** for FAQ and heavy components
- **Inter font optimization** with `display: swap`
- **Smooth scroll** behavior enabled globally
- **Mobile-first responsive** design

Target: **90+ PageSpeed Insights** score on mobile and desktop.

## 📞 Contact Form Integration

The contact form submits to GHL (Go High Level) via webhook.

### Setup

1. Get your GHL webhook URL from your account
2. Add to `.env.local` as `NEXT_PUBLIC_GHL_WEBHOOK_URL`
3. Form submissions will POST to this URL with validated data

### Form Fields Sent

```json
{
  "orgName": "First United Church",
  "name": "John Smith",
  "email": "john@church.org",
  "phone": "(555) 123-4567",
  "city": "Guelph",
  "message": "We need seal coating for our parking lot...",
  "program": "founding",  // If from Founding Communities section
  "source": "website",
  "page": "homepage"  // or "city-guelph", "region-southwestern-ontario"
}
```

### Testing Without GHL

If `NEXT_PUBLIC_GHL_WEBHOOK_URL` is not set or is the placeholder value, form submissions will log to the console instead of sending to a webhook.

## 🎯 Analytics Tracking

All CTA buttons include data attributes for future Google Tag Manager / GA4 integration:

```html
<Button 
  data-cta="drone-inspection"
  data-location="hero"
  data-event="cta-click"
>
  Book Free Inspection
</Button>
```

**CTA Types:**
- `drone-inspection` (primary)
- `how-it-works` (secondary)
- `founding-community`
- `form-submit`

**Locations:**
- `hero`, `package-section`, `city-page-[city]`, `region-page-[region]`, `footer`

These attributes make it easy to set up conversion tracking without modifying code.

## 🛠️ Development Commands

```bash
# Development server with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Add environment variables from `.env.local`
4. Deploy

Vercel automatically:
- Builds on every push
- Provides preview deployments for PRs
- Handles CDN and SSL
- Optimizes images automatically

### Other Platforms

This is a standard Next.js 14 app and can deploy to:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform
- Self-hosted Node.js server

## 📝 Content Updates

### Adding a New City

1. Edit `lib/constants.ts`
2. Add new city to `CITIES` array with proper region mapping
3. City page will auto-generate at `/locations/[new-city-slug]-on`

### Adding a New Region

1. Edit `lib/constants.ts`
2. Add new region to `REGIONS` array
3. Region page will auto-generate at `/regions/[new-region-slug]`

### Updating Copy

All required copy is in component files:
- Hero: `components/sections/Hero.tsx`
- About: `components/sections/AboutUs.tsx`
- Package: `components/sections/StewardPackage.tsx`
- FAQ: `components/sections/FAQ.tsx`

### Updating Images

Images use Unsplash URLs as placeholders. Replace with your own:
1. Add images to `public/images/`
2. Update `src` props in components
3. Maintain next/image component for optimization

## 🆘 Troubleshooting

### Forms Not Submitting

- Check `NEXT_PUBLIC_GHL_WEBHOOK_URL` is set in `.env.local`
- Verify webhook URL is correct in GHL account
- Check browser console for error messages
- Verify API route is accessible at `/api/contact`

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npx tsc --noEmit`
- Verify all environment variables are set

### Styling Issues

- Ensure Tailwind CSS is compiling correctly
- Check `tailwind.config.ts` includes all content paths
- Verify `globals.css` is imported in `app/layout.tsx`

### Images Not Loading

- Verify image URLs are correct
- Check `next.config.js` includes Unsplash in `remotePatterns`
- Add your own domain if hosting images elsewhere

## 📄 License

© 2024 Steward Seal Coating. All rights reserved.

## 🤝 Support

For questions or support:
- **Email**: ${process.env.NEXT_PUBLIC_EMAIL}
- **Phone**: ${process.env.NEXT_PUBLIC_PHONE}

---

Built with ❤️ for faith communities across Ontario.

