import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { CheckCircle2, Shield, Camera, FileText, Award } from "lucide-react"
import { CITIES, getCityBySlug } from "@/lib/constants"
import { generateCityMetadata } from "@/lib/metadata"
import { generateLocalBusinessSchema } from "@/lib/schema"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: `${city.slug}-on`,
  }))
}

export async function generateMetadata({ params }: CityPageProps) {
  const citySlug = params.city.replace("-on", "")
  const city = getCityBySlug(citySlug)
  
  if (!city) {
    return {}
  }

  return generateCityMetadata(city)
}

export default function CityPage({ params }: CityPageProps) {
  const citySlug = params.city.replace("-on", "")
  const city = getCityBySlug(citySlug)

  if (!city) {
    notFound()
  }

  const schema = generateLocalBusinessSchema(city)

  // Climate-specific intro based on region
  const getClimateIntro = () => {
    if (city.regionSlug === "southwestern-ontario") {
      return `${city.name}'s freeze-thaw cycles place constant stress on asphalt surfaces. Throughout the year, water seeps into minor cracks, freezes, expands, and creates structural damage that compounds with each season. Add clay soil expansion common to Southwestern Ontario, and parking lots face accelerated deterioration without proactive maintenance.`
    } else if (city.regionSlug === "central-ontario") {
      return `${city.name}'s temperature swings and seasonal stress patterns create unique challenges for asphalt maintenance. Located in Central Ontario's lake-effect zone, parking lots experience rapid freeze-thaw cycles that can damage surfaces in a single season without proper protection and repair.`
    } else if (city.regionSlug === "golden-horseshoe-niagara") {
      return `${city.name}'s high traffic volumes and urban drainage challenges put exceptional wear on parking lot surfaces. In the Golden Horseshoe region, salt damage from winter maintenance, combined with dense usage patterns, means asphalt needs regular attention to avoid costly emergency repairs.`
    } else if (city.regionSlug === "eastern-ontario") {
      return `${city.name}'s lakefront moisture and salt damage from winter road maintenance create an aggressive environment for asphalt. Eastern Ontario's proximity to water sources means parking lots absorb more moisture, leading to faster freeze-thaw damage and surface deterioration.`
    } else if (city.regionSlug === "northern-ontario") {
      return `${city.name}'s extended winters and severe temperature swings test parking lot durability like nowhere else in Ontario. With heavy snow loads, extreme cold, and shorter maintenance windows, Northern Ontario faith communities need contractors who understand the unique demands of this climate.`
    }
  }

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
              Faith Community Parking Lot Services in {city.name}, Ontario
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Professional seal coating, crack repair, and AODA-compliant markings for churches, synagogues, mosques, and temples in {city.name}. Priority scheduling, WSIB certified, with Board Approval Kits included.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                data-cta="drone-inspection"
                data-location={`city-page-${city.slug}`}
              >
                <Link href="#contact">Book Free Drone Inspection</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                data-cta="how-it-works"
                data-location={`city-page-${city.slug}`}
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why [City] Faith Communities Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Why {city.name} Faith Communities Choose Steward Seal Coating
            </h2>

            <div className="prose prose-lg max-w-none space-y-6 text-neutral-700 leading-relaxed">
              <p className="text-xl">
                {getClimateIntro()}
              </p>

              <p>
                Ontario's Accessibility for Ontarians with Disabilities Act (AODA) requires faith communities to maintain accessible parking spaces with clear, high-visibility markings. For boards and committees in {city.name}, this isn't just a legal requirement—it's a matter of welcoming all members of your congregation safely and with dignity. Our AODA-compliant line striping ensures your parking lot meets provincial standards while serving your community's needs.
              </p>

              <p>
                Faith community boards in {city.name} face a unique challenge: limited budgets stretched across building maintenance, programming, and community outreach. Most contractors don't understand that faith communities need more than just a quote—they need documentation, timelines, and clarity that makes committee approval straightforward. That's why we developed the Board Approval Kit: a complete package with aerial drone footage, cost breakdowns, timelines, and WSIB certification, specifically designed for board decision-making.
              </p>

              <p>
                Churches, synagogues, mosques, and temples across {city.name} trust us because we understand stewardship. We're not here to upsell unnecessary services or push expensive resurfacing projects when seal coating and crack repair can extend your asphalt's life by years. Our approach is simple: repair before replacement, transparency over sales pressure, and worship calendar coordination so your lot is ready when your community gathers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services in [City] */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Our Services in {city.name}
            </h2>

            {/* Service 1: Seal Coating */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Professional Seal Coating in {city.name}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Seal coating is the single most cost-effective way to protect your parking lot investment. In {city.name}'s climate, asphalt faces constant assault from UV radiation, water penetration, and {city.climate.join(", ")}. Our premium coal tar or asphalt emulsion sealer creates a protective barrier that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>Blocks UV damage that causes surface oxidation and brittleness</li>
                <li>Seals the surface against water infiltration that leads to freeze-thaw damage</li>
                <li>Resists oil and gas spills that break down asphalt binder</li>
                <li>Restores a rich, black appearance that enhances curb appeal</li>
                <li>Extends pavement life by 3-5 years per application</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                For faith communities in {city.name}, seal coating typically costs pennies per square foot—a fraction of what resurfacing or replacement would run. It's preventative maintenance that protects your budget and demonstrates responsible stewardship of community resources.
              </p>
            </div>

            {/* Service 2: Hot Rubber Crack Filling */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Hot Rubber Crack Filling in {city.name}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Cracks are where parking lot failure begins. In {city.name}, {city.climate[0]} means that even minor cracks become major problems fast. Water enters a hairline crack, freezes, expands, and creates structural damage. By spring, that small crack is a pothole, and by next winter, it's a safety hazard and a budget emergency.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Our hot-applied rubberized crack filler is engineered specifically for Ontario's climate. Unlike cold-pour products that harden and fail within months, hot rubber:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>Bonds directly to asphalt at high temperature for superior adhesion</li>
                <li>Remains flexible through temperature swings from -30°C to +40°C</li>
                <li>Creates a watertight seal that prevents subsurface infiltration</li>
                <li>Lasts 3-5 years under normal traffic conditions</li>
                <li>Stops small problems before they require expensive repairs</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                For {city.name} congregations, crack filling is the definition of "repair before replacement." Addressing cracks early keeps your parking lot functional for years longer and avoids the catastrophic failure that forces emergency resurfacing at the worst possible time—like mid-capital campaign.
              </p>
            </div>

            {/* Service 3: AODA-Compliant Markings */}
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                AODA-Compliant Line Markings in {city.name}
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Ontario's AODA legislation mandates that public spaces—including faith community parking lots—provide accessible parking with specific dimensional and visibility requirements. For {city.name} churches, synagogues, mosques, and temples, compliance isn't optional, and it's not just about avoiding fines. Accessible parking is about ensuring every member of your community can enter your doors with dignity and safety.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Our AODA-compliant line striping includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                <li>High-visibility white and yellow traffic paint engineered for durability</li>
                <li>Accessible parking symbols that meet provincial size and placement standards</li>
                <li>Proper spacing (8-foot minimum width plus 5-foot access aisle)</li>
                <li>Van-accessible stall designation where required</li>
                <li>Fire route markings and pedestrian walkway delineation</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                We provide certification documentation that your {city.name} facility meets AODA requirements—paperwork that protects your organization and demonstrates your commitment to accessibility. It's one less thing for your board to worry about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Steward Protection Package for [City] */}
      <section id="package" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black">
                The Steward Protection Package™ for {city.name} Faith Communities
              </h2>
              <p className="text-xl opacity-95">
                Stewardship, not shortcuts.
              </p>
            </div>

            <div className="bg-white text-neutral-900 rounded-lg p-8 md:p-10 space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our all-in-one solution designed specifically for {city.name} faith community parking lots. Everything your board needs to make an informed decision, protect your budget, and extend the life of your asphalt.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">What's Included:</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Professional Seal Coating</p>
                      <p className="text-sm text-neutral-600">UV and water protection engineered for {city.name}'s climate</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Hot Rubber Crack Filling</p>
                      <p className="text-sm text-neutral-600">Durable repair that prevents water infiltration</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">AODA-Compliant Markings</p>
                      <p className="text-sm text-neutral-600">Provincial accessibility standards met</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">3-Year Stewardship Guarantee™</p>
                      <p className="text-sm text-neutral-600">Workmanship warranty + annual drone inspections</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Camera className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Aerial Damage Report</p>
                      <p className="text-sm text-neutral-600">Drone footage reveals hidden drainage and damage issues</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <FileText className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Board Approval Kit</p>
                      <p className="text-sm text-neutral-600">Photos, cost breakdown, timeline, WSIB certificate</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <div className="flex gap-4 items-start">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-2">Full WSIB Clearance Certificate Included</p>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Every contract includes a fresh WSIB Clearance Certificate—your primary protection against contractor liability in {city.name}. This certificate protects your organization from legal and financial risk if a worker is injured on your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Faith Communities We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Faith Communities We Serve in {city.name}
            </h2>

            <div className="prose prose-lg max-w-none space-y-4 text-neutral-700 leading-relaxed">
              <p>
                We serve churches of all denominations, synagogues, mosques, temples, gurdwaras, and other houses of worship throughout {city.name}. While Christian churches make up a significant portion of our client base, we treat every faith tradition with equal respect and priority. Your worship community—whether Protestant, Catholic, Orthodox, Jewish, Muslim, Hindu, Sikh, or any other tradition—receives the same level of professionalism, attention, and priority scheduling.
              </p>

              <p className="font-semibold text-neutral-900">
                Faith community projects always receive priority in our route planning.
              </p>

              <p>
                When we schedule work in {city.name}, houses of worship go first. We group regional projects into efficient routes, but faith communities are never bumped, delayed, or rescheduled for residential or commercial work. This isn't just a policy—it's foundational to why we started Steward Seal Coating.
              </p>

              <p>
                We also respect worship calendars. We know that Friday, Saturday, and Sunday are sacred days for different traditions. Our default approach is Monday-through-Thursday scheduling for faith community parking lots, ensuring your surface is fully cured and ready for worship gatherings. If your community has mid-week services or events, we coordinate around those too.
              </p>

              <p>
                For residential driveways and commercial lots in {city.name}, we're happy to serve you—especially if you're in a neighborhood near one of our faith-based clients. By combining projects regionally, we keep our pricing competitive and our service prompt. But make no mistake: faith communities come first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works in [City] */}
      <section id="how-it-works" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 text-center">
              How It Works in {city.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Free Drone Inspection
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We fly your {city.name} parking lot to capture aerial footage that reveals damage invisible from the ground—ponding water, drainage issues, subsurface problems. Completely free, no obligation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Board-Ready Estimate
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  You'll receive an Aerial Damage Report and Board Approval Kit with photos, clear cost breakdown, timeline, and WSIB certificate. Everything your {city.name} committee needs to make a confident decision.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Scheduled Service
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  We group {city.name} area projects for efficient routing. Seal coat cures in 24–48 hours, and we coordinate around your worship schedule so your lot is ready when your community gathers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Serving Faith Communities in {city.name}—Book Your Free Drone Inspection
              </h2>
              <p className="text-xl text-neutral-600">
                Get a complete aerial assessment and board-ready estimate at no cost
              </p>
            </div>

            <ContactForm page={`city-${city.slug}`} />
          </div>
        </div>
      </section>
    </>
  )
}

