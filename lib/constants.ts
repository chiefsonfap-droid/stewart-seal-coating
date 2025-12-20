/**
 * Business Constants and Data Structures
 */

export interface City {
  name: string
  slug: string
  region: string
  regionSlug: string
  climate: string[]
  description: string
}

export interface Region {
  name: string
  slug: string
  displayName: string
  cities: string[]
  climate: string[]
  description: string
}

// All 25 cities across Ontario
export const CITIES: City[] = [
  // Southwestern Ontario
  {
    name: "Guelph",
    slug: "guelph",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "UV damage"],
    description: "Historic university city with active faith communities"
  },
  {
    name: "Cambridge",
    slug: "cambridge",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil expansion", "water penetration"],
    description: "Growing city with diverse worship communities"
  },
  {
    name: "Brantford",
    slug: "brantford",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "moisture damage", "seasonal cracking"],
    description: "Heritage city with established congregations"
  },
  {
    name: "Woodstock",
    slug: "woodstock",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "clay soil movement", "winter damage"],
    description: "Tight-knit community with strong faith presence"
  },
  {
    name: "Stratford",
    slug: "stratford",
    region: "Southwestern Ontario",
    regionSlug: "southwestern-ontario",
    climate: ["freeze-thaw cycles", "drainage challenges", "subsurface movement"],
    description: "Arts community with active worship traditions"
  },
  
  // Central Ontario
  {
    name: "Barrie",
    slug: "barrie",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "seasonal stress", "snow load damage"],
    description: "Growing lakeside city with expanding congregations"
  },
  {
    name: "Peterborough",
    slug: "peterborough",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "water damage", "freeze-thaw impact"],
    description: "Established city with historic places of worship"
  },
  {
    name: "Orillia",
    slug: "orillia",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["seasonal stress", "moisture penetration", "winter cracking"],
    description: "Lakeside community with close-knit congregations"
  },
  {
    name: "Newmarket",
    slug: "newmarket",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["temperature swings", "drainage issues", "seasonal expansion"],
    description: "Fast-growing town with modern faith communities"
  },
  {
    name: "Kawartha Lakes",
    slug: "kawartha-lakes",
    region: "Central Ontario",
    regionSlug: "central-ontario",
    climate: ["seasonal stress", "rural drainage patterns", "frost heaving"],
    description: "Scenic region with rural and town congregations"
  },
  
  // Golden Horseshoe / Niagara
  {
    name: "Burlington",
    slug: "burlington",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic volume", "urban drainage challenges", "salt damage"],
    description: "Affluent lakeside city with diverse faith traditions"
  },
  {
    name: "Oakville",
    slug: "oakville",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic volume", "urban drainage", "moisture exposure"],
    description: "Prosperous community with growing worship centers"
  },
  {
    name: "St. Catharines",
    slug: "st-catharines",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic", "urban challenges", "winter salt exposure"],
    description: "Niagara's largest city with established congregations"
  },
  {
    name: "Niagara Falls",
    slug: "niagara-falls",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["high traffic volume", "moisture from falls", "tourist-area stress"],
    description: "Tourism hub with active local faith communities"
  },
  {
    name: "Grimsby",
    slug: "grimsby",
    region: "Golden Horseshoe / Niagara",
    regionSlug: "golden-horseshoe-niagara",
    climate: ["urban drainage", "lakefront moisture", "seasonal wear"],
    description: "Lakeside town with strong community worship"
  },
  
  // Eastern Ontario
  {
    name: "Kingston",
    slug: "kingston",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage from winter maintenance", "freeze-thaw"],
    description: "Historic limestone city with centuries-old congregations"
  },
  {
    name: "Belleville",
    slug: "belleville",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage", "drainage challenges"],
    description: "Bay of Quinte hub with diverse worship communities"
  },
  {
    name: "Cornwall",
    slug: "cornwall",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt exposure", "border-region winters"],
    description: "Riverfront city with bilingual faith communities"
  },
  {
    name: "Brockville",
    slug: "brockville",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["lakefront moisture", "salt damage", "waterfront exposure"],
    description: "Thousand Islands gateway with heritage churches"
  },
  {
    name: "Pembroke",
    slug: "pembroke",
    region: "Eastern Ontario",
    regionSlug: "eastern-ontario",
    climate: ["salt damage", "river moisture", "rural freeze-thaw"],
    description: "Ottawa Valley center with close-knit congregations"
  },
  
  // Northern Ontario
  {
    name: "Greater Sudbury",
    slug: "greater-sudbury",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "heavy snow load"],
    description: "Mining capital with multi-cultural faith communities"
  },
  {
    name: "North Bay",
    slug: "north-bay",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "harsh conditions"],
    description: "Gateway to the North with resilient congregations"
  },
  {
    name: "Sault Ste. Marie",
    slug: "sault-ste-marie",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "lake effect snow", "extreme cold"],
    description: "Border city with strong multicultural worship presence"
  },
  {
    name: "Thunder Bay",
    slug: "thunder-bay",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "severe temperature swings", "heavy snow accumulation"],
    description: "Northwestern Ontario's largest city with diverse faiths"
  },
  {
    name: "Timmins",
    slug: "timmins",
    region: "Northern Ontario",
    regionSlug: "northern-ontario",
    climate: ["extended winters", "extreme cold", "remote climate challenges"],
    description: "Resource town with dedicated faith communities"
  },
]

// 5 regions
export const REGIONS: Region[] = [
  {
    name: "Southwestern Ontario",
    slug: "southwestern-ontario",
    displayName: "Southwestern Ontario",
    cities: ["Guelph", "Cambridge", "Brantford", "Woodstock", "Stratford"],
    climate: ["freeze-thaw cycles", "clay soil expansion", "seasonal moisture"],
    description: "Agricultural heartland with historic communities and modern growth"
  },
  {
    name: "Central Ontario",
    slug: "central-ontario",
    displayName: "Central Ontario",
    cities: ["Barrie", "Peterborough", "Orillia", "Newmarket", "Kawartha Lakes"],
    climate: ["temperature swings", "seasonal stress", "lake effect patterns"],
    description: "Cottage country and commuter communities north of the GTA"
  },
  {
    name: "Golden Horseshoe / Niagara",
    slug: "golden-horseshoe-niagara",
    displayName: "Golden Horseshoe / Niagara",
    cities: ["Burlington", "Oakville", "St. Catharines", "Niagara Falls", "Grimsby"],
    climate: ["high traffic volume", "urban drainage challenges", "salt damage"],
    description: "Ontario's most densely populated region with diverse communities"
  },
  {
    name: "Eastern Ontario",
    slug: "eastern-ontario",
    displayName: "Eastern Ontario",
    cities: ["Kingston", "Belleville", "Cornwall", "Brockville", "Pembroke"],
    climate: ["lakefront moisture", "salt damage from winter maintenance", "freeze-thaw"],
    description: "Historic region along the St. Lawrence and Ottawa rivers"
  },
  {
    name: "Northern Ontario",
    slug: "northern-ontario",
    displayName: "Northern Ontario",
    cities: ["Greater Sudbury", "North Bay", "Sault Ste. Marie", "Thunder Bay", "Timmins"],
    climate: ["extended winters", "severe temperature swings", "heavy snow load"],
    description: "Vast resource-based region with resilient communities"
  },
]

// Helper functions
export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(city => city.slug === slug)
}

export function getRegionBySlug(slug: string): Region | undefined {
  return REGIONS.find(region => region.slug === slug)
}

export function getCitiesByRegion(regionSlug: string): City[] {
  return CITIES.filter(city => city.regionSlug === regionSlug)
}

// Contact information
export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_PHONE || "(555) 123-4567",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@stewardsealcoating.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Ontario, Canada",
}

// Founding Communities Program
export const FOUNDING_PROGRAM = {
  totalSpots: 50,
  currentCount: parseInt(process.env.NEXT_PUBLIC_FOUNDING_COUNT || "12"),
  get spotsRemaining() {
    return this.totalSpots - this.currentCount
  },
  get isClosed() {
    return this.spotsRemaining <= 0
  }
}

