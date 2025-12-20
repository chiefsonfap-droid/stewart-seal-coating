import { Metadata } from "next"
import { City, Region } from "./constants"

/**
 * Generate metadata for city pages
 */
export function generateCityMetadata(city: City): Metadata {
  const title = `Faith Community Parking Lot Services in ${city.name}, ON | Steward Seal Coating`
  const description = `Serving ${city.name} churches, synagogues, mosques, and temples with seal coating, crack repair, and AODA-compliant markings. Priority scheduling, WSIB certified, Board Approval Kits included.`
  
  return {
    title,
    description,
    openGraph: {
      title: `Faith Community Parking Lot Services in ${city.name}, ON`,
      description: `Professional parking lot maintenance for ${city.name} faith communities. Seal coating, crack filling, AODA compliance. 3-Year Stewardship Guarantee included.`,
      images: [
        {
          url: '/images/og-city.jpg',
          width: 1200,
          height: 630,
          alt: `Steward Seal Coating - ${city.name}, Ontario`
        }
      ],
      type: 'website',
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/**
 * Generate metadata for region pages
 */
export function generateRegionMetadata(region: Region): Metadata {
  const title = `${region.displayName} Faith Community Parking Lot Services | Steward Seal Coating`
  const cityList = region.cities.slice(0, 3).join(", ")
  const description = `Serving ${cityList} and more across ${region.displayName}. Professional seal coating, crack repair, and AODA markings for churches, synagogues, mosques, and temples. WSIB certified with 3-Year Stewardship Guarantee.`
  
  return {
    title,
    description,
    openGraph: {
      title: `${region.displayName} Faith Community Parking Lot Services`,
      description,
      images: [
        {
          url: '/images/og-region.jpg',
          width: 1200,
          height: 630,
          alt: `Steward Seal Coating - ${region.displayName}`
        }
      ],
      type: 'website',
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/**
 * Homepage metadata
 */
export const homeMetadata: Metadata = {
  title: "Faith Community Parking Lot Care | Steward Seal Coating",
  description: "Ontario's faith-community-first parking lot maintenance specialist. Seal coating, crack repair, AODA-compliant markings. Serving churches, synagogues, mosques, and temples with priority scheduling. WSIB certified.",
  openGraph: {
    title: "Faith Community Parking Lot Care—Handled With Stewardship",
    description: "Protecting Ontario faith community parking lots—seal coating, crack repair, and accessible markings on your schedule, with no surprises.",
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Steward Seal Coating - Faith Community Parking Lot Care'
      }
    ],
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Faith Community Parking Lot Care | Steward Seal Coating",
    description: "Ontario's faith-community-first parking lot maintenance specialist. Serving all faith traditions with priority scheduling.",
  },
}

