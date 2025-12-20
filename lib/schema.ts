import { City, Region, CONTACT } from "./constants"

/**
 * Generate Organization JSON-LD schema for homepage
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Steward Seal Coating",
    "description": "Faith-community-first parking lot maintenance specialists serving Ontario, Canada. Professional seal coating, crack filling, and AODA-compliant markings.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://stewardsealcoating.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://stewardsealcoating.com"}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phone,
      "email": CONTACT.email,
      "contactType": "Customer Service",
      "areaServed": "ON",
      "availableLanguage": "English"
    },
    "areaServed": {
      "@type": "State",
      "name": "Ontario",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "slogan": "Stewardship, not shortcuts"
  }
}

/**
 * Generate LocalBusiness JSON-LD schema for city pages
 */
export function generateLocalBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Steward Seal Coating - ${city.name}`,
    "description": `Faith community parking lot maintenance services in ${city.name}, Ontario. Seal coating, crack filling, and AODA-compliant markings for churches, synagogues, mosques, and temples.`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://stewardsealcoating.com"}/locations/${city.slug}-on`,
    "telephone": CONTACT.phone,
    "email": CONTACT.email,
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": city.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Parking Lot Maintenance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seal Coating",
            "description": "Professional asphalt seal coating to protect and extend parking lot life"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Rubber Crack Filling",
            "description": "Durable crack repair to prevent water penetration and freeze-thaw damage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AODA-Compliant Line Markings",
            "description": "Accessible parking markings that meet Ontario accessibility standards"
          }
        }
      ]
    }
  }
}

/**
 * Generate Service JSON-LD schema for region pages
 */
export function generateServiceSchema(region: Region) {
  const cities = region.cities.map(cityName => ({
    "@type": "City",
    "name": cityName
  }))

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Parking Lot Maintenance",
    "name": `Faith Community Parking Lot Services - ${region.displayName}`,
    "description": `Professional parking lot maintenance for faith communities across ${region.displayName}. Seal coating, crack filling, and AODA-compliant markings with priority scheduling for churches, synagogues, mosques, and temples.`,
    "provider": {
      "@type": "Organization",
      "name": "Steward Seal Coating",
      "telephone": CONTACT.phone,
      "email": CONTACT.email
    },
    "areaServed": cities,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "The Steward Protection Package™",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seal Coating",
            "description": "Professional asphalt seal coating"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Rubber Crack Filling",
            "description": "Durable crack repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AODA-Compliant Markings",
            "description": "Accessible parking line striping"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3-Year Stewardship Guarantee",
            "description": "Workmanship warranty with annual drone inspections"
          }
        }
      ]
    }
  }
}

