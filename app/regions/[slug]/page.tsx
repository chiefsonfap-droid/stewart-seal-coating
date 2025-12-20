import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { MapPin, CheckCircle2, Shield, Users, FileText } from "lucide-react"
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
          q: "Do you service all cities in Southwestern Ontario?",
          a: "Yes. We serve London, Kitchener-Waterloo, Guelph, Cambridge, Brantford, and all surrounding communities from Lake Huron to Hamilton. Our hub-and-spoke routing model allows us to efficiently reach faith communities throughout the region."
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
          a: "Every Southwestern Ontario project includes a Board Approval Kit: aerial photos, damage assessment, clear cost breakdown, timeline, WSIB Clearance Certificate, and technical specifications. Everything your board or committee needs to make an informed decision."
        },
        {
          q: "Are you insured and licensed in Ontario?",
          a: "Yes. We carry full commercial liability insurance and maintain WSIB compliance. Every contract includes a current WSIB Clearance Certificate naming your organization—your primary protection if a worker is injured on your property."
        },
        {
          q: "Do you serve residential or commercial clients?",
          a: "While faith communities are our priority, we serve residential driveways and small commercial properties in the same regions. If we're routing through your area for a church project, we're happy to add your property to the schedule."
        },
        {
          q: "What's the '3-Year Stewardship Guarantee'?",
          a: "We return to your facility for annual drone inspections in Years 1, 2, and 3. If we find any workmanship issues, we fix them free of charge. We also provide an updated condition report each year to help your board plan future maintenance budgets."
        }
      ]
    } else if (region.slug === "northern-ontario") {
      return [
        {
          q: "Do you service remote communities in Northern Ontario?",
          a: "Yes. We plan regional routes that cover all five Northern Ontario service areas. While we group projects for efficiency, we don't skip communities because of distance. If you're in Greater Sudbury, North Bay, Sault Ste. Marie, Thunder Bay, or Timmins, we'll serve you with the same priority and quality as any other faith community."
        },
        {
          q: "How do harsh Northern Ontario winters affect seal coating schedules?",
          a: "Seal coating requires temperatures above 10°C (50°F) for proper curing. In Northern Ontario, this typically means a service window from late May through early September. We schedule Northern routes early in the season to ensure projects complete before fall weather arrives. Our Board Approval Kits include realistic timelines that account for Northern Ontario's shorter maintenance season."
        },
        {
          q: "Can seal coating withstand Northern Ontario's extreme cold?",
          a: "Yes, when applied correctly. Our sealers are engineered for Canadian climates and regularly perform in temperatures down to -40°C. The key is proper application during the cure window and allowing full cure time (24-48 hours) before traffic. Once cured, the sealer creates a flexible, durable barrier that protects asphalt through extreme temperature swings."
        }
      ]
    } else if (region.slug === "golden-horseshoe-niagara") {
      return [
        {
          q: "How do you handle high-traffic parking lots in the Golden Horseshoe?",
          a: "High traffic requires more durable materials and strategic scheduling. We use premium sealers with higher solids content for better wear resistance, apply heavier coats to high-traffic areas, and recommend more frequent maintenance cycles (every 2-3 years instead of 3-5). For Golden Horseshoe congregations with schools or heavy programming, we also coordinate scheduling to minimize disruption."
        },
        {
          q: "What about salt damage from winter road maintenance?",
          a: "Salt accelerates asphalt deterioration by breaking down the binder that holds aggregate together. Our seal coating creates a protective barrier that resists salt penetration. We also recommend spring crack inspection and repair, since salt-laden water finds and exploits every crack. For Golden Horseshoe communities near major roads with heavy salt usage, annual inspections catch problems before they become expensive."
        },
        {
          q: "Do you serve smaller residential areas between major cities?",
          a: "Absolutely. While faith communities receive priority scheduling, we serve residential and commercial properties along our routes. If you're between Burlington, Oakville, St. Catharines, Niagara Falls, or Grimsby, we can likely add your driveway or commercial lot to a regional route efficiently."
        }
      ]
    } else {
      return [
        {
          q: `How often should ${region.displayName} parking lots be seal coated?`,
          a: `Most parking lots in ${region.displayName} benefit from seal coating every 3-5 years, depending on traffic volume and sun exposure. High-traffic lots may need attention every 2-3 years. Our 3-Year Stewardship Guarantee includes annual drone inspections, so we'll let you know when your next service is truly needed—not just when it's profitable for us.`
        },
        {
          q: "What's the best time of year for seal coating?",
          a: `Late spring through early fall (May-September) provides ideal conditions. Seal coating requires temperatures above 10°C (50°F) and low humidity for proper curing. We schedule regional routes to hit ${region.displayName} during optimal weather windows and always provide backup dates in case of unexpected rain.`
        },
        {
          q: `Do you service all cities in ${region.displayName}?`,
          a: `Yes. We currently serve ${region.cities.join(", ")}. We group projects into regional routes for efficiency, which keeps our pricing competitive while ensuring prompt service. Faith communities always receive priority scheduling within each route.`
        }
      ]
    }
  }

  const faqItems = getRegionalFAQ()

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

            <div className="prose prose-lg max-w-none space-y-6 text-neutral-700 leading-relaxed">
              <p className="text-xl">{overview?.intro}</p>
              <p>{overview?.climate}</p>
              <p>{overview?.why}</p>
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
                Cities We Serve in {region.displayName}
              </h2>
              <p className="text-xl text-neutral-600">
                Click any city to learn about local climate challenges and faith community services
              </p>
            </div>

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
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {city.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
                  Every {region.displayName} faith community receives a free drone inspection that reveals damage invisible from the ground. Your Board Approval Kit includes aerial photos, damage assessment, clear cost breakdown, timeline, and WSIB certificate—everything your committee needs to make an informed decision without multiple contractor visits.
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

