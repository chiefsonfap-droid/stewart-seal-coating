import { City, Region, CONTACT } from "./constants"

interface FAQItem {
  question: string
  answer: string
}

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

/**
 * Generate LocalBusiness JSON-LD schema for homepage
 */
export function generateHomeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Steward Seal Coating",
    "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://stewardsealcoating.ca",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://stewardsealcoating.ca",
    "telephone": CONTACT.phone,
    "email": CONTACT.email,
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Ontario",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
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
 * Generate FAQ JSON-LD schema for homepage
 */
export function generateFAQSchema() {
  const faqItems = [
    {
      question: "Do you serve all of Ontario?",
      answer: "We currently serve five major regions: Southwestern Ontario, Central Ontario, the Golden Horseshoe/Niagara, Eastern Ontario, and Northern Ontario. We group our projects into regional 'routes' to keep our pricing fair and our service prompt."
    },
    {
      question: "Do you only serve Christian churches?",
      answer: "Not at all. We serve faith communities of all traditions—churches of every denomination, synagogues, mosques, temples, gurdwaras, and other houses of worship. While churches make up a large portion of our client base, we treat every faith community with the same level of respect and priority."
    },
    {
      question: "What insurance documentation do you provide?",
      answer: "We provide a complete Certificate of Insurance (COI) naming your church or organization as the certificate holder, along with our current WSIB Clearance Certificate. All documentation is included in your Board Approval Kit before work begins. This protects your organization from contractor liability."
    },
    {
      question: "Are the materials you use safe for our congregation?",
      answer: "Yes. We use commercial-grade products that meet Canadian safety standards and WHMIS workplace safety requirements. All materials are safe once cured (24-48 hours) and suitable for facilities where children and families gather. We provide complete Material Safety Data Sheets (MSDS) for your records."
    },
    {
      question: "What's included in the Steward Protection Package™?",
      answer: "It's our 'all-in-one' solution: professional seal coating, hot rubber crack filling, and AODA-compliant line striping. You also get our 3-Year Stewardship Guarantee (workmanship warranty + annual drone check-ins), an Aerial Damage Report, and a complete Board Approval Kit to make decision-making easy."
    },
    {
      question: "How long does the seal coating take to cure?",
      answer: "Typically 24–48 hours depending on the weather. We always coordinate with your specific worship calendar, mid-week events, and school schedules to ensure your parking lot is dry and ready for use exactly when you need it."
    },
    {
      question: "What exactly is WSIB clearance and why is it mandatory?",
      answer: "WSIB (Workplace Safety and Insurance Board) clearance is your primary protection against contractor liability. If a worker is injured on your property, a clearance certificate proves the contractor is in good standing and protects your organization from legal and financial risk. We provide a fresh WSIB certificate with every contract—never hire a contractor who can't provide one."
    },
    {
      question: "Can you service residential driveways or commercial lots?",
      answer: "Yes! While faith communities receive priority scheduling in our route planning, we serve residential and commercial clients in the same regions. If we're already in your area serving a local church or temple, we're happy to add your driveway or commercial lot to the route—it keeps our pricing competitive and your service fast."
    },
    {
      question: "If cracks appear next year, will you fix them for free?",
      answer: "It depends. If the cracks RE-OPEN in the same spot we filled (due to our work failing), yes—that's covered by our workmanship warranty. If NEW cracks form in areas that weren't cracked before (common in Ontario winters), those are considered new damage and would be quoted at our preferred client rate (20% off standard pricing). Our annual drone inspection catches new cracks early when they're cheap to fix."
    },
    {
      question: "What exactly does 'workmanship warranty' mean?",
      answer: "We guarantee that our seal coating, crack filling, and line striping will perform as expected for 3 years. If our work fails prematurely due to application issues, we'll redo it at no charge. What we DON'T guarantee is that your asphalt won't develop new problems from weather, traffic, or age—because no contractor can control Ontario's freeze-thaw cycles."
    }
  ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

