import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { MapPin, CheckCircle2, Shield, Users, FileText, Calendar, Camera } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { REGIONS, getCitiesByRegion, getRegionBySlug } from "@/lib/constants"
import { generateRegionMetadata } from "@/lib/metadata"
import { generateServiceSchema } from "@/lib/schema"

interface RegionPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return REGIONS.map((region) => ({
    slug: region.slug,
  }))
}

export async function generateMetadata({ params }: RegionPageProps) {
  const region = getRegionBySlug(params.slug)
  
  if (!region) {
    return {}
  }

  return generateRegionMetadata(region)
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getRegionBySlug(params.slug)

  if (!region) {
    notFound()
  }

  const cities = getCitiesByRegion(region.slug)
  const schema = generateServiceSchema(region)

  // Regional overview content generator
  const getRegionalOverview = () => {
    if (region.slug === "southwestern-ontario") {
      return {
        condensed: `Southwestern Ontario's agricultural heartland experiences aggressive freeze-thaw cycles, with temperatures crossing above and below freezing throughout late fall, winter, and early spring. Clay-heavy soils common to this region expand and contract with moisture changes, placing additional stress on asphalt foundations. UV damage in summer, water infiltration in spring and fall, and freeze-thaw destruction in winter create an environment where parking lots deteriorate faster than other parts of Ontario.

For faith communities across this region, proactive maintenance is the difference between a parking lot lasting 20+ years versus failing in 10. Preventative seal coating and crack repair cost pennies per square foot—emergency resurfacing costs dollars per square foot.`
      }
    } else if (region.slug === "central-ontario") {
      return {
        condensed: `Central Ontario's proximity to Lake Simcoe, the Kawartha Lakes, and Georgian Bay creates microclimates with enhanced snow accumulation, rapid temperature changes, and increased moisture exposure. Parking lots face seasonal stress from heavy snow loads in winter, aggressive UV exposure in summer, and constant moisture cycling that accelerates asphalt aging.

Faith communities from Barrie to Peterborough face the challenge of maintaining aging infrastructure with limited budgets. Proactive seal coating, comprehensive crack repair, and AODA-compliant markings extend pavement life and prevent catastrophic failure that requires expensive replacement.`
      }
    } else if (region.slug === "golden-horseshoe-niagara") {
      return {
        condensed: `The Golden Horseshoe experiences parking lot stress unlike anywhere else in Ontario. High traffic volumes, salt damage from intensive winter road maintenance, and urban drainage challenges combine to create an aggressive environment for asphalt. The region's proximity to Lake Ontario increases moisture exposure, while salt runoff accelerates surface deterioration and heavy usage compounds wear patterns.

Faith communities serving diverse, multicultural populations face unique pressures. Parking lots must accommodate weekend worship, mid-week programming, community events, and school activities. These high-usage patterns demand professional maintenance with comprehensive surface assessment, strategic crack repair, and durable line markings.`
      }
    } else if (region.slug === "eastern-ontario") {
      return {
        condensed: `Eastern Ontario's lakefront and riverside locations mean increased moisture exposure, enhanced freeze-thaw cycles, and salt damage from winter road maintenance. The St. Lawrence River creates persistent humidity that accelerates asphalt aging. Winter brings reliable snow cover and sub-zero temperatures, while summer sun and UV exposure break down unprotected surfaces.

Eastern Ontario's faith communities often occupy historic buildings with aging infrastructure. Churches from the 1800s, synagogues serving generations of families, and newer mosques and temples all face maintaining parking lots that serve contemporary needs while fitting limited maintenance budgets.`
      }
    } else if (region.slug === "northern-ontario") {
      return {
        condensed: `Northern Ontario's extended winters with temperatures regularly reaching -30°C or colder, heavy snow accumulation, and severe temperature swings create the most aggressive environment for asphalt in Ontario. Spring thaw brings rapid temperature increases and heavy water infiltration. Short summers mean compressed maintenance windows. The freeze-thaw cycle here isn't measured in days—it's measured in hours as temperatures swing above and below freezing multiple times in a single week.

Northern Ontario faith communities understand resilience. Congregations maintaining buildings through six-month winters know the value of proactive maintenance. We've built our service model specifically for Northern Ontario: regional route planning, products engineered for extreme temperatures, and realistic cure-time scheduling.`
      }
    }
  }

  const overview = getRegionalOverview()

  // Regional FAQ questions
  const getRegionalFAQ = () => {
    if (region.slug === "southwestern-ontario") {
      return [
        {
          q: "How often should Southwestern Ontario parking lots be seal coated?",
          a: "Every 2-3 years for most faith communities. Southwestern Ontario's freeze-thaw cycles accelerate asphalt degradation, making regular maintenance critical. We inspect your lot during the free drone assessment and provide an honest recommendation—sometimes that means 'wait another year' if your lot is still in good condition."
        },
        {
          q: "What's the best time of year for seal coating in Southwestern Ontario?",
          a: "May through September, when overnight temperatures stay above 10°C (50°F) and rain isn't forecasted for 24-48 hours. We typically book Southwestern Ontario routes in late spring (May-June) and late summer (August-September) to avoid peak heat and ensure proper curing."
        },
        {
          q: "Do you service all cities and towns in Southwestern Ontario?",
          a: "Yes. We serve London, Kitchener-Waterloo, Guelph, Cambridge, Brantford, Windsor, Sarnia, Stratford, and all surrounding communities from Lake Huron to Hamilton, from the 401 corridor to Grey-Bruce. Our hub-and-spoke routing model allows us to efficiently reach faith communities throughout the region."
        },
        {
          q: "What makes Southwestern Ontario parking lots different?",
          a: "Clay-heavy soils expand and contract with moisture, placing extra stress on asphalt foundations. Combined with pronounced freeze-thaw cycles, parking lots here experience faster deterioration than other parts of Ontario. Proactive maintenance is essential."
        },
        {
          q: "Do you provide pricing over the phone?",
          a: "We provide ballpark ranges after a free drone inspection. Every parking lot is different—size, condition, drainage issues, and required repairs all affect cost. Most Southwestern Ontario church lots (20-40 cars) range from $3,000-$7,000 depending on scope. We'll never surprise you with hidden costs."
        },
        {
          q: "How long does the work take?",
          a: "Most faith community parking lots take 1-2 days for seal coating, crack filling, and line striping. We coordinate around your worship schedule and mid-week programming. The seal coat cures in 24-48 hours, so we typically start work Monday or Tuesday to ensure lots are ready by Sunday."
        },
        {
          q: "What documentation do you provide for board approval?",
          a: "Every Southwestern Ontario project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS). Everything your board or committee needs to make an informed decision."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "Are the materials you use safe for our congregation?",
          a: "Yes. We use commercial-grade products that meet Canadian safety standards and WHMIS workplace safety requirements. All materials are safe once cured (24-48 hours) and suitable for facilities where children and families gather. We provide complete Material Safety Data Sheets (MSDS) for your records."
        },
        {
          q: "Do you serve residential or commercial clients?",
          a: "While faith communities are our priority, we serve residential driveways and small commercial properties in the same regions. If we're routing through your area for a church project, we're happy to add your property to the schedule."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        },
        {
          q: "What happens if it rains after you apply seal coating?",
          a: "Rain within 24 hours can damage uncured sealer. We monitor weather forecasts carefully and won't start work if rain is predicted. If unexpected rain occurs, we return to assess and repair any affected areas at no charge—that's part of our workmanship guarantee."
        },
        {
          q: "How do you schedule projects across such a large region?",
          a: "We group projects into regional routes to keep costs down and service prompt. Faith communities always receive priority scheduling. When we have 3-5 projects in Southwestern Ontario, we schedule a route through the region. This efficiency allows us to offer better pricing than contractors who travel for single jobs."
        }
      ]
    } else if (region.slug === "northern-ontario") {
      return [
        {
          q: "Do you service remote communities in Northern Ontario?",
          a: "Yes. We plan regional routes that cover Greater Sudbury, North Bay, Sault Ste. Marie, Thunder Bay, Timmins, and surrounding communities. While we group projects for efficiency, we don't skip communities because of distance. Northern Ontario faith communities receive the same priority and quality service as any other region."
        },
        {
          q: "How do harsh Northern Ontario winters affect seal coating schedules?",
          a: "Seal coating requires temperatures above 10°C (50°F) for proper curing. In Northern Ontario, this typically means a service window from late May through early September. We schedule Northern routes early in the season to ensure projects complete before fall weather arrives. Our Board Approval Kits include realistic timelines that account for Northern Ontario's shorter maintenance season."
        },
        {
          q: "Can seal coating withstand Northern Ontario's extreme cold?",
          a: "Yes, when applied correctly. Our sealers are engineered for Canadian climates and regularly perform in temperatures down to -40°C. The key is proper application during the cure window and allowing full cure time (24-48 hours) before traffic. Once cured, the sealer creates a flexible, durable barrier that protects asphalt through extreme temperature swings."
        },
        {
          q: "Why does Northern Ontario pricing differ from southern regions?",
          a: "Travel distance, shorter work season, and extreme climate challenges affect pricing. Most Northern Ontario church lots (20-40 cars) range from $4,000-$9,000 depending on location and scope—approximately 20-30% higher than southern Ontario due to logistics. We're transparent about regional pricing differences and never surprise you with hidden travel fees."
        },
        {
          q: "How often should Northern Ontario parking lots be seal coated?",
          a: "Every 2-3 years for most faith communities. Northern Ontario's severe freeze-thaw cycles, extended winters, and heavy snow loads accelerate asphalt deterioration. Regular maintenance is critical to prevent catastrophic failure that requires expensive replacement."
        },
        {
          q: "What documentation do you provide for board approval?",
          a: "Every Northern Ontario project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS). We understand remote communities need complete documentation before committing."
        },
        {
          q: "Do you serve residential or commercial clients in Northern Ontario?",
          a: "While faith communities are our priority, we serve residential driveways and small commercial properties along our routes. If we're traveling to your area for a church project, we can add your property to the schedule efficiently."
        },
        {
          q: "How do you handle the short maintenance season?",
          a: "We prioritize Northern Ontario routes in late spring and early summer. Faith communities receive priority booking to ensure work completes before fall. We also maintain backup scheduling in case early cold weather forces rescheduling to the following season."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance across all regions. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee' in Northern Ontario?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. For Northern Ontario communities, we schedule these inspections during regional routes to minimize your costs."
        },
        {
          q: "How do you schedule projects across such vast distances?",
          a: "We group projects into regional routes covering Greater Sudbury, Sault Ste. Marie, North Bay, Thunder Bay, and Timmins areas. When we have 3-5 projects in a region, we schedule a route. This efficiency keeps costs reasonable while ensuring quality service to remote communities."
        },
        {
          q: "Can you work around our short summer programming season?",
          a: "Absolutely. Many Northern Ontario congregations run intensive summer programming. We coordinate scheduling around VBS, summer camps, and community events. Our goal is to have your lot cured and ready when you need it, not when it's convenient for us."
        },
        {
          q: "What happens if unexpected cold weather arrives early?",
          a: "If temperatures drop below safe application levels before completion, we pause work and reschedule for the following season at no penalty. Your deposit is fully refundable or transferable. Northern Ontario's climate is unpredictable—we build that flexibility into our contracts."
        }
      ]
    } else if (region.slug === "golden-horseshoe-niagara") {
      return [
        {
          q: "How often should Golden Horseshoe/Niagara parking lots be seal coated?",
          a: "Every 2-3 years for most high-traffic faith communities. The Golden Horseshoe's urban density, heavy traffic, and salt usage accelerate deterioration. Regular maintenance prevents expensive replacement and keeps your lot safe and accessible."
        },
        {
          q: "What's the best time of year for seal coating in the Golden Horseshoe?",
          a: "Late spring through early fall (May-September). We avoid peak summer heat and coordinate around your busy programming schedule. For Hamilton, St. Catharines, and Niagara Falls congregations, we schedule routes to minimize disruption during tourist season."
        },
        {
          q: "Do you service all cities in the Golden Horseshoe and Niagara?",
          a: "Yes. We serve Hamilton, St. Catharines, Niagara Falls, Welland, Fort Erie, Grimsby, and all surrounding communities from Burlington to Niagara-on-the-Lake. Our regional routing keeps pricing competitive while ensuring prompt service."
        },
        {
          q: "How do you handle high-traffic parking lots in the Golden Horseshoe?",
          a: "High traffic requires more durable materials and strategic scheduling. We use premium sealers with higher solids content for better wear resistance, apply heavier coats to high-traffic areas, and recommend more frequent maintenance cycles (every 2-3 years instead of 3-5). For congregations with schools or heavy programming, we coordinate scheduling to minimize disruption."
        },
        {
          q: "What about salt damage from winter road maintenance?",
          a: "Salt accelerates asphalt deterioration by breaking down the binder that holds aggregate together. Our seal coating creates a protective barrier that resists salt penetration. We also recommend spring crack inspection and repair, since salt-laden water finds and exploits every crack. For communities near major roads with heavy salt usage, annual inspections catch problems before they become expensive."
        },
        {
          q: "Do you provide pricing estimates?",
          a: "We provide ballpark ranges after a free drone inspection. Most Golden Horseshoe church lots (20-40 cars) range from $3,500-$8,000 depending on size, condition, and traffic volume. Urban lots with heavy wear may require more extensive prep work, which we identify during the drone assessment."
        },
        {
          q: "How long does the work take?",
          a: "Most faith community parking lots take 1-2 days for seal coating, crack filling, and line striping. We coordinate around your worship schedule and weekday programming. The seal coat cures in 24-48 hours, so we typically start Monday or Tuesday to ensure readiness by Sunday."
        },
        {
          q: "What documentation do you provide for board approval?",
          a: "Every project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS). Everything your board needs for an informed decision."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "Do you serve residential or commercial clients?",
          a: "While faith communities receive priority scheduling, we serve residential driveways and commercial properties along our routes. If you're in the Golden Horseshoe or Niagara region, we're happy to add your property to our schedule."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        },
        {
          q: "How do you handle scheduling in such a densely populated region?",
          a: "We group projects into efficient routes throughout the Golden Horseshoe and Niagara. Faith communities always receive priority scheduling. High project density in this region actually helps us offer competitive pricing and faster service than more remote areas."
        },
        {
          q: "Can you accommodate tight parking lot access in urban settings?",
          a: "Yes. Many Golden Horseshoe congregations have compact lots with limited access. We've successfully completed projects in tight urban settings throughout Hamilton, St. Catharines, and Niagara Falls. Our equipment is sized appropriately for urban facilities."
        }
      ]
    } else if (region.slug === "central-ontario") {
      return [
        {
          q: "How often should Central Ontario parking lots be seal coated?",
          a: "Every 2-3 years for most faith communities. Central Ontario's lake-effect weather patterns, temperature swings, and seasonal moisture cycling accelerate asphalt aging. Regular maintenance prevents catastrophic failure and extends pavement life significantly."
        },
        {
          q: "What's the best time of year for seal coating in Central Ontario?",
          a: "May through September, when temperatures stay above 10°C (50°F) and humidity is manageable. We schedule Central Ontario routes in late spring and late summer to avoid peak cottage season traffic and ensure optimal curing conditions."
        },
        {
          q: "Do you service all cities and towns in Central Ontario?",
          a: "Yes. We serve Barrie, Orillia, Peterborough, Newmarket, Muskoka communities (Gravenhurst, Bracebridge, Huntsville), Georgian Bay towns, and all surrounding areas. Our regional routing efficiently reaches faith communities from Lake Simcoe to the Kawarthas to Georgian Bay."
        },
        {
          q: "What makes Central Ontario parking lots different?",
          a: "Proximity to Lake Simcoe, Kawartha Lakes, and Georgian Bay creates microclimates with enhanced moisture exposure and rapid temperature changes. Parking lots face seasonal stress from heavy snow loads, aggressive UV exposure, and constant moisture cycling that accelerates deterioration."
        },
        {
          q: "Do you provide pricing estimates?",
          a: "We provide ballpark ranges after a free drone inspection. Most Central Ontario church lots (20-40 cars) range from $3,000-$7,500 depending on size, condition, and location. Muskoka and Georgian Bay properties may have slightly higher costs due to travel distance."
        },
        {
          q: "How long does the work take?",
          a: "Most faith community parking lots take 1-2 days for seal coating, crack filling, and line striping. We coordinate around your worship schedule and summer programming. The seal coat cures in 24-48 hours, so we typically start Monday or Tuesday to ensure readiness by weekend services."
        },
        {
          q: "What documentation do you provide for board approval?",
          a: "Every Central Ontario project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS)."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "Do you work around cottage country summer schedules?",
          a: "Absolutely. Many Central Ontario congregations experience increased attendance during summer months. We coordinate scheduling around VBS, summer camps, weddings, and community events. Your lot will be cured and ready when your community needs it."
        },
        {
          q: "Do you serve residential or commercial clients?",
          a: "While faith communities receive priority scheduling, we serve residential driveways and commercial properties along our routes. If we're traveling through Central Ontario for a church project, we're happy to add your property to the schedule."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        },
        {
          q: "How do you handle seasonal access to cottage country properties?",
          a: "We understand many Muskoka and Georgian Bay properties have seasonal considerations. We schedule these routes during the prime summer window when roads are clear and access is guaranteed. For year-round congregations, we prioritize spring/fall scheduling."
        },
        {
          q: "Can you accommodate the diverse geography of Central Ontario?",
          a: "Yes. We've successfully completed projects from suburban Barrie and Newmarket to rural Peterborough and Kawartha Lakes to remote Muskoka and Parry Sound. Our equipment and expertise adapt to each location's unique challenges."
        }
      ]
    } else if (region.slug === "eastern-ontario") {
      return [
        {
          q: "How often should Eastern Ontario parking lots be seal coated?",
          a: "Every 2-3 years for most faith communities. Eastern Ontario's St. Lawrence and Ottawa River moisture, combined with harsh winters and salt exposure, accelerate asphalt deterioration. Regular maintenance is essential for long-term pavement health."
        },
        {
          q: "What's the best time of year for seal coating in Eastern Ontario?",
          a: "May through September, when temperatures stay above 10°C (50°F). We schedule Eastern Ontario routes in late spring and late summer, coordinating with Ottawa, Kingston, and surrounding communities to hit optimal weather windows."
        },
        {
          q: "Do you service all cities and towns in Eastern Ontario?",
          a: "Yes. We serve Ottawa, Kingston, Cornwall, Belleville, Brockville, Pembroke, and all surrounding communities from the St. Lawrence to the Ottawa Valley. Our regional routing efficiently reaches faith communities throughout this historic region."
        },
        {
          q: "What makes Eastern Ontario parking lots different?",
          a: "Lakefront and river moisture exposure, combined with heavy winter salt usage and freeze-thaw cycles, create challenging conditions. Historic properties often have older asphalt requiring more careful maintenance to extend life and prevent expensive replacement."
        },
        {
          q: "Do you provide pricing estimates?",
          a: "We provide ballpark ranges after a free drone inspection. Most Eastern Ontario church lots (20-40 cars) range from $3,000-$7,500 depending on size, condition, and required repairs. Ottawa Valley properties may have slightly higher costs due to travel distance."
        },
        {
          q: "How long does the work take?",
          a: "Most faith community parking lots take 1-2 days for seal coating, crack filling, and line striping. We coordinate around your worship schedule and bilingual programming needs. The seal coat cures in 24-48 hours, ensuring weekend readiness."
        },
        {
          q: "What documentation do you provide for board approval?",
          a: "Every Eastern Ontario project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS)."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "Do you serve bilingual communities?",
          a: "Absolutely. Many Eastern Ontario faith communities are bilingual (English/French). While we communicate primarily in English, we respect and accommodate bilingual documentation needs and can coordinate with French-speaking board members."
        },
        {
          q: "Do you serve residential or commercial clients?",
          a: "While faith communities receive priority scheduling, we serve residential driveways and commercial properties along our routes. If we're traveling through Eastern Ontario for a church project, we're happy to add your property to the schedule."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        },
        {
          q: "How do you handle historic properties in Eastern Ontario?",
          a: "Many Eastern Ontario congregations occupy century-old buildings with aging parking infrastructure. We specialize in honest assessment—sometimes recommending crack repair and patching instead of full seal coating if the base is too deteriorated. Good stewardship means giving you the truth, not just a sale."
        },
        {
          q: "Can you coordinate with military base schedules?",
          a: "Yes. We've worked with faith communities near CFB Trenton, CFB Petawawa, and other military installations. We understand the unique scheduling needs of military congregations and can coordinate around deployment cycles and base activities."
        }
      ]
    } else {
      return [
        {
          q: `How often should ${region.displayName} parking lots be seal coated?`,
          a: `Most parking lots in ${region.displayName} benefit from seal coating every 2-3 years, depending on traffic volume and climate exposure. Our 3-Year Stewardship Guarantee includes annual drone inspections, so we'll let you know when your next service is truly needed—not just when it's profitable for us.`
        },
        {
          q: "What's the best time of year for seal coating?",
          a: `Late spring through early fall (May-September) provides ideal conditions. Seal coating requires temperatures above 10°C (50°F) and low humidity for proper curing. We schedule regional routes to hit ${region.displayName} during optimal weather windows and always provide backup dates in case of unexpected rain.`
        },
        {
          q: `Do you service all cities in ${region.displayName}?`,
          a: `Yes. We serve all communities across ${region.displayName}. We group projects into regional routes for efficiency, which keeps our pricing competitive while ensuring prompt service. Faith communities always receive priority scheduling within each route.`
        },
        {
          q: "Do you provide pricing estimates?",
          a: `We provide ballpark ranges after a free drone inspection. Every parking lot is different—size, condition, drainage issues, and required repairs all affect cost. Most church lots (20-40 cars) range from $3,000-$7,500 depending on scope.`
        },
        {
          q: "What documentation do you provide for board approval?",
          a: `Every project includes a Board Approval Kit: Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS).`
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        }
      ]
    }
  }

  const faqItems = getRegionalFAQ()

  // Comprehensive community lists per region (100+ communities)
  const getMinorCommunities = () => {
    if (region.slug === "southwestern-ontario") {
      return "Stratford, Woodstock, St. Thomas, Owen Sound, Simcoe, Tillsonburg, Paris, Fergus, Elora, St. Marys, Norwich, Ingersoll, Listowel, Hanover, Mount Forest, Walkerton, Wingham, Clinton, Exeter, Grand Bend, Mitchell, Seaforth, Brussels, Arthur, Palmerston, Durham, Chesley, Kincardine, Port Elgin, Southampton, Meaford, Thornbury, Markdale, Dundalk, Shelburne, Harriston, Mount Elgin, Tavistock, New Hamburg, Wellesley, Elmira, St. Jacobs, Ayr, Waterford, Port Dover, Delhi, Aylmer, Vienna, Dutton, Glencoe, Newbury, Bothwell, Ridgetown, Blenheim, Tilbury, Essex, Kingsville, Amherstburg, LaSalle, Tecumseh, Belle River, St. Clair Beach, Comber, Merlin, Wheatley, Cottam, Maidstone, Rodney, West Lorne, Wardsville, Melbourne, Ailsa Craig, Parkhill, Forest, Watford, Wyoming, Petrolia, Oil Springs, Corunna, Brigden, Mooretown, Sombra, Port Lambton, Wallaceburg, Dresden, Thamesville, Highgate, Duart, Pain Court, Grande Pointe, Stoney Point, Port Stanley, St. Joseph, Fingal, Belmont, Iona Station, Sparta, Port Bruce, Vienna, Corinth, Brownsville, Mount Brydges, Delaware, Komoka, Lambeth, Byron, Dorchester, Thorndale, Crampton"
    } else if (region.slug === "central-ontario") {
      return "Midland, Collingwood, Penetanguishene, Alliston, Bradford West Gwillimbury, Innisfil, Cobourg, Port Hope, Gravenhurst, Bracebridge, Huntsville, Parry Sound, Wasaga Beach, Aurora, Uxbridge, Angus, Borden, Elmvale, Stayner, Creemore, Duntroon, New Lowell, Lisle, Utopia, Victoria Harbour, Coldwater, Waubaushene, Port McNicoll, Perkinsdale, Port Severn, Honey Harbour, Torrance, MacTier, Bala, Port Carling, Rosseau, Windermere, Muskoka Falls, Dorset, Dwight, Baysville, Lake of Bays, Minden, Haliburton, West Guilford, Wilberforce, Cardiff, Gooderham, Bancroft, Maynooth, Combermere, Barry's Bay, Killaloe, Foymount, Madawaska, Whitney, South River, Sundridge, Burk's Falls, Magnetawan, Kearney, Emsdale, Sprucedale, Novar, Arnstein, Commanda, Callander, Astorville, Bonfield, Corbeil, Powassan, Trout Creek, Redbridge, Chisholm, Port Loring, Nobel, Still River, Britt, Byng Inlet, French River, Alban, Markstay, Warren"
    } else if (region.slug === "golden-horseshoe-niagara") {
      return "Hamilton, St. Catharines, Niagara Falls, Welland, Fort Erie, Grimsby, Port Colborne, Niagara-on-the-Lake, Thorold, Pelham, Lincoln, West Lincoln, Beamsville, Vineland, Jordan, Smithville, Fonthill, Fenwick, Ridgeville, Wellandport, Wainfleet, Port Robinson, Stevensville, Crystal Beach, Ridgeway, Sherkston, Bertie, Ridgemount, Stevensville, Bridgeburg, Crowland, Port Dalhousie, St. Davids, Virgil, Queenston, Chippawa, Stamford, Drummond, Lundy's Lane, Victoria, Allanburg, Humberstone, Marshville, Rosedene, Dunnville, Caledonia, Cayuga, Hagersville, Jarvis, Kohler, Nanticoke, Selkirk, Cheapside, Indiana, Nelles Corners, Rainham Centre, York, Binbrook, Glanbrook, Ancaster, Dundas, Waterdown, Flamborough, Freelton, Carlisle, Kilbride, Millgrove, Sheffield, Stoney Creek, Winona, Mount Hope, Tapleytown, Greensville, Rockton, Westover, Lynden, Copetown, Valens, Puslinch, Campbellville, Moffat, Limehouse"
    } else if (region.slug === "eastern-ontario") {
      return "Ottawa, Kingston, Cornwall, Belleville, Brockville, Pembroke, Petawawa, Smiths Falls, Trenton, Napanee, Perth, Arnprior, Carleton Place, Renfrew, Gananoque, Kemptville, Almonte, Prescott, Rockland, Hawkesbury, Alexandria, Casselman, Bourget, Clarence Creek, Hammond, Vars, Sarsfield, Navan, Cumberland, Manotick, Greely, Metcalfe, Osgoode, North Gower, Kars, Richmond, Munster, Stittsville, Kanata, Carp, Dunrobin, Constance Bay, Fitzroy Harbour, Kinburn, Pakenham, Calabogie, Burnstown, Douglas, Eganville, Dacre, Golden Lake, Foymount, Wilno, Killaloe Station, Round Lake Centre, Bonnechere, Beachburg, Westmeath, Cobden, Ross, Haley Station, Chalk River, Deep River, Laurentian Hills, Point Alexander, Rolphton, Deux Rivières, Mattawa, Rutherglen, Bonfield, Callander, Chisholm, Lavigne, Cache Bay, Verner, Sturgeon Falls, Field, Hagar, Monetville, Alban, Noelville, Crystal Falls, River Valley, Cartier"
    } else if (region.slug === "northern-ontario") {
      return "Greater Sudbury, Sault Ste. Marie, North Bay, Thunder Bay, Timmins, Temiskaming Shores, Elliot Lake, Kapuskasing, Kirkland Lake, Espanola, Cochrane, Hearst, Iroquois Falls, Blind River, Chapleau, Wawa, Manitouwadge, Marathon, Terrace Bay, Schreiber, Nipigon, Geraldton, Longlac, Nakina, Beardmore, Jellicoe, Caramat, Armstrong, Savant Lake, Ignace, Dryden, Sioux Lookout, Red Lake, Pickle Lake, Ear Falls, Kenora, Fort Frances, Atikokan, Rainy River, Emo, Morson, Mine Centre, Fort Albany, Moosonee, Moose Factory, Attawapiskat, Fort Severn, Peawanuck, Kashechewan, Webequie, Summer Beaver, Bearskin Lake, Sachigo Lake, Sandy Lake, Pikangikum, Cat Lake, Slate Falls, Mishkeegogamang, Kingfisher Lake, Wunnumin Lake, North Spirit Lake, Keewaywin, McDowell Lake, Big Trout Lake, Kasabonika, Muskrat Dam, Deer Lake, Poplar Hill, Pikangikum, Wapekeka, Kitchenuhmaykoosib Inninuwug, Neskantaga, Nibinamik, Eabametoong, Webequie, Marten Falls, Fort Hope, Ogoki, Aroland, Ginoogaming, Long Lake, Constance Lake, English River, Lac Seul, Grassy Narrows, Whitefish Bay, Magnetawan, Mattagami, Gogama, Foleyet, Ramsey, Biscotasing, Sheahan, Benny, Metagama, Westree, Shining Tree, Gowganda, Kearns, Cobalt, Haileybury, New Liskeard, Englehart, Charlton, Earlton, Thornloe, Kenabeek, Dobie, Tomstown, Heaslip, Casey, Harley, Swastika, Larder Lake, Virginiatown, McGarry, McVittie, Pacaud, Bourkes, Kearns, Tarzwell"
    }
    return ""
  }

  const minorCommunities = getMinorCommunities()

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {region.displayName} Faith Community Parking Lot Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-8">
              Serving {region.cities.slice(0, 3).join(", ")}, and more across {region.displayName} with professional seal coating, crack filling, and AODA-compliant markings.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-cta="drone-inspection"
              data-location={`region-page-${region.slug}`}
            >
              <Link href="#contact">Book Free Drone Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Region Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              About {region.displayName}
            </h2>

            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed whitespace-pre-line">
              {overview?.condensed}
            </div>

            {/* Climate Callout */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="font-bold text-lg mb-2 text-neutral-900">
                {region.displayName} Climate Challenges:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-neutral-700">
                {region.climate.map((challenge, idx) => (
                  <li key={idx} className="capitalize">{challenge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Cities & Communities We Serve in {region.displayName}
              </h2>
              <p className="text-xl text-neutral-600">
                Faith community parking lot services across the entire region
              </p>
            </div>

            {/* Major Cities */}
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Major Cities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}-on`}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                          {city.name}
                        </h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Minor Communities */}
            {minorCommunities && (
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Communities We Serve Throughout {region.displayName}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {minorCommunities}
                </p>
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mt-6">
                  <p className="text-neutral-700 leading-relaxed">
                    <strong className="text-neutral-900">Don't see your community listed?</strong> We serve the entire {region.displayName} region. <Link href="#contact" className="text-primary font-semibold hover:underline">Contact us</Link> to confirm scheduling for your location.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Regional Service Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Regional Service Highlights for {region.displayName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Highlight 1: WSIB */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  WSIB Clearance Certificate
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Every contract throughout {region.displayName} includes a fresh WSIB Clearance Certificate—your primary protection against contractor liability. If a worker is injured on your property, this certificate proves the contractor is in good standing and protects your organization from legal and financial risk. We provide updated certification with every project.
                </p>
              </div>

              {/* Highlight 2: Guarantee */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  3-Year Stewardship Guarantee™
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Our guarantee covers workmanship and includes annual drone inspections for three years. We return to your {region.displayName} facility each year to check for early signs of wear, drainage issues, or emerging cracks. Catching problems early prevents expensive emergency repairs and maximizes your asphalt's lifespan.
                </p>
              </div>

              {/* Highlight 3: Multi-faith */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Multi-Faith Scheduling
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We respect worship calendars across all faith traditions in {region.displayName}. Our default scheduling avoids Friday, Saturday, and Sunday to accommodate Sabbath and worship gatherings. We also coordinate around mid-week events, ensuring your parking lot is cured and ready when your community needs it.
                </p>
              </div>

              {/* Highlight 4: Board Kit */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Drone Inspection + Board Approval Kit
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Every {region.displayName} faith community receives a free drone inspection that reveals damage invisible from the ground. Your Board Approval Kit includes Certificate of Insurance naming your organization, WSIB Clearance Certificate, aerial photos, damage assessment, clear cost breakdown, timeline, technical specifications, and Material Safety Data Sheets (MSDS)—everything your committee needs to make an informed decision.
                </p>
              </div>

              {/* Highlight 5: Priority Scheduling */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Priority Scheduling Throughout the Region
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Faith communities across {region.displayName} receive priority scheduling in our route planning. When we schedule regional routes, houses of worship go first. This ensures your project gets completed during optimal weather windows and around your worship calendar.
                </p>
              </div>

              {/* Highlight 6: Professional Property Photography */}
              <div className="bg-neutral-50 rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Professional Property Photography Included
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  During your complimentary drone assessment, we capture high-resolution aerial and ground photos of your entire property, buildings, and grounds. Use these professionally-shot images for your website, newsletters, fundraising materials, or social media—at no additional cost. A $350+ value included free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Faith Communities Choose Us */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Why {region.displayName} Faith Communities Choose Us
            </h2>

            <div className="prose prose-lg max-w-none space-y-6 text-neutral-700 leading-relaxed">
              <p className="text-xl">
                Board committees and facility managers across {region.displayName} tell us the same story: most contractors don't understand faith community needs. They quote a price, do the work, and leave. No documentation for board approval. No respect for worship schedules. No understanding that "the lowest bid" isn't always the best stewardship of community resources.
              </p>

              <p>
                We built Steward Seal Coating specifically to serve faith communities better. That means priority scheduling—when we route through {region.cities.join(", ")}, houses of worship go first. It means Board Approval Kits designed for committee decision-making. It means honest assessment of whether your parking lot needs seal coating this year or if it can wait another season (because good stewardship sometimes means saying "not yet").
              </p>

              <p>
                It also means understanding budget constraints. Faith communities aren't commercial properties with facility management budgets. You're volunteers and small staff teams managing buildings, programming, outreach, and maintenance with donated dollars. When we recommend crack repair instead of resurfacing, or seal coating instead of replacement, it's because we understand that "repair before replacement" is both good maintenance practice and faithful stewardship.
              </p>

              <p className="font-semibold text-neutral-900">
                Congregations across {region.displayName} trust us because we understand that parking lot maintenance isn't just about asphalt—it's about welcoming your community safely, accessibly, and with dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 text-center">
              {region.displayName} Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`q${idx + 1}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Serving Faith Communities Across {region.displayName}
              </h2>
              <p className="text-xl text-neutral-600">
                Book your free drone inspection—available in all {region.cities.length} cities
              </p>
            </div>

            <ContactForm page={`region-${region.slug}`} />
          </div>
        </div>
      </section>
    </>
  )
}

