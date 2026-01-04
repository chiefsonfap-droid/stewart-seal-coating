import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { CheckCircle2, Shield, Camera, FileText, Award, MapPin, Clock, Users } from "lucide-react"
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

  // Deterministic template selection based on city slug + section
  const getTemplateNumber = (slug: string, section: string) => {
    const combined = slug + section;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) % 10 + 1;
  };

  const introTemplate = getTemplateNumber(city.slug, "intro");
  const servicesTemplate = getTemplateNumber(city.slug, "services");
  const packageTemplate = getTemplateNumber(city.slug, "package");
  const howItWorksTemplate = getTemplateNumber(city.slug, "howitworks");
  const communitiesTemplate = getTemplateNumber(city.slug, "communities");

  // Climate-specific content
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

  // SECTION 1: INTRO / WHY CHOOSE US (10 Variations)
  const IntroSection = () => {
    const templates = {
      1: ( // Professional & Standard
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Why {city.name} Faith Communities Choose Steward Seal Coating
              </h2>
              <div className="prose prose-lg max-w-none space-y-6 text-neutral-700 leading-relaxed">
                <p className="text-xl">{getClimateIntro()}</p>
                <p>Ontario's Accessibility for Ontarians with Disabilities Act (AODA) requires faith communities to maintain accessible parking spaces with clear, high-visibility markings. For boards and committees in {city.name}, this isn't just a legal requirement—it's a matter of welcoming all members of your congregation safely and with dignity.</p>
                <p>Faith community boards in {city.name} face a unique challenge: limited budgets stretched across building maintenance, programming, and community outreach. Most contractors don't understand that faith communities need more than just a quote—they need documentation, timelines, and clarity that makes committee approval straightforward.</p>
                <p>Churches, synagogues, mosques, and temples across {city.name} trust us because we understand stewardship. We're not here to upsell unnecessary services or push expensive resurfacing projects when seal coating and crack repair can extend your asphalt's life by years.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      2: ( // Problem-Focused
        <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">The Challenge Facing {city.name} Congregations</h2>
                <p className="text-neutral-700">{getClimateIntro()} Without proactive maintenance, minor issues escalate into budget emergencies.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">Our Solution for {city.name}</h2>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Prevention over reaction:</strong> Seal coating costs pennies per square foot vs dollars for emergency resurfacing</li>
                  <li><strong>Board-ready documentation:</strong> Complete approval kits with aerial footage, costs, and timelines</li>
                  <li><strong>Worship calendar coordination:</strong> We schedule around your programming</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      ),

      3: ( // Stats & Facts
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Faith Community Parking Lot Maintenance in {city.name}</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-black text-primary mb-2">3-5x</div>
                  <div className="text-sm text-neutral-600">Seal coating extends pavement life</div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-black text-primary mb-2">24-48hrs</div>
                  <div className="text-sm text-neutral-600">Cure time before traffic</div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-black text-primary mb-2">100%</div>
                  <div className="text-sm text-neutral-600">WSIB certified contractors</div>
                </div>
              </div>
              <div className="space-y-4 text-neutral-700">
                <p>{getClimateIntro()}</p>
                <p>For faith communities in {city.name}, professional parking lot maintenance isn't optional—it's stewardship. AODA compliance protects your congregation. Documentation protects your board. Proactive maintenance protects your budget.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      4: ( // Testimonial Style
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-black text-neutral-900">Trusted by {city.name} Faith Communities</h2>
              <p className="text-xl text-neutral-700">{getClimateIntro()}</p>
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
                <p className="text-lg italic text-neutral-700 mb-4">"Most contractors don't understand faith communities. We needed documentation for board approval, worship calendar coordination, and WSIB certification. Steward provided everything."</p>
                <p className="text-sm text-neutral-600">— Property Committee Chair, {city.region}</p>
              </div>
              <p className="text-neutral-700">Churches, synagogues, mosques, and temples across {city.name} choose us because we understand that limited budgets require smart stewardship, not aggressive sales tactics. Board approval requires documentation, not just quotes. And worship schedules matter—we coordinate service so your lot is ready when your community gathers.</p>
            </div>
          </div>
        </section>
      ),

      5: ( // List-Based
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Professional Parking Lot Services for {city.name} Faith Communities</h2>
              <p className="text-xl text-neutral-700 mb-8">{getClimateIntro()}</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AODA Compliance for {city.name}</h3>
                    <p className="text-neutral-600">Ontario law requires accessible parking with proper markings. We ensure compliance and provide documentation.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Board Approval Made Easy</h3>
                    <p className="text-neutral-600">Every project includes aerial photos, cost breakdown, timeline, and WSIB certificate—everything your committee needs.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Stewardship-Focused Service</h3>
                    <p className="text-neutral-600">Repair before replacement. Transparency over sales pressure. Worship calendar coordination always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      6: ( // Question-Answer Format
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-black text-neutral-900">Why Do {city.name} Faith Communities Need Professional Parking Lot Service?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">What makes {city.name}'s climate challenging for asphalt?</h3>
                  <p className="text-neutral-700">{getClimateIntro()}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Why do boards need more than just a quote?</h3>
                  <p className="text-neutral-700">Faith community committees need documentation to make informed decisions. Our Board Approval Kit includes aerial damage reports, cost breakdowns, timelines, and WSIB certification—everything required for confident approval.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">What about AODA compliance in {city.name}?</h3>
                  <p className="text-neutral-700">Ontario's accessibility legislation requires faith communities to maintain properly marked accessible parking. We ensure compliance and provide documentation that protects your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      7: ( // Visual Grid
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">Serving Faith Communities in {city.name}</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Climate Protection</h3>
                  <p className="text-neutral-700">{getClimateIntro()}</p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg">
                  <FileText className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Board Documentation</h3>
                  <p className="text-neutral-700">Complete approval kits with photos, costs, timelines, and WSIB certification for {city.name} committees.</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">AODA Compliance</h3>
                  <p className="text-neutral-700">Accessible parking markings that meet Ontario standards and protect your {city.name} congregation.</p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-lg">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">All Faith Traditions</h3>
                  <p className="text-neutral-700">Churches, synagogues, mosques, temples—every {city.name} congregation receives priority service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      8: ( // Conversational
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6 text-neutral-700 text-lg leading-relaxed">
              <h2 className="text-3xl font-black text-neutral-900">Let's Talk About Your {city.name} Parking Lot</h2>
              <p>If you're on a property committee or board in {city.name}, you know the challenge: your parking lot needs work, but getting approval means navigating budgets, timelines, documentation, and competing priorities.</p>
              <p>{getClimateIntro()}</p>
              <p>Here's what makes us different for {city.name} faith communities: we built our entire service model around board decision-making. You don't just get a quote—you get aerial drone footage showing exactly what needs repair, a clear cost breakdown, a realistic timeline, and WSIB certification that protects your organization.</p>
              <p>We schedule around worship calendars. We respect limited budgets by recommending repair before replacement. And we understand that faith communities aren't just another job—they're the reason we started this business.</p>
              <p>Churches, synagogues, mosques, temples, and gurdwaras across {city.name} trust us because we speak your language: stewardship, transparency, and service.</p>
            </div>
          </div>
        </section>
      ),

      9: ( // Comparison Style
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Why {city.name} Faith Communities Choose Steward Over Other Contractors</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2 divide-x divide-neutral-200">
                  <div className="p-6 bg-red-50">
                    <h3 className="font-bold text-lg mb-4 text-neutral-900">Typical Contractors</h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>❌ Quote only (no documentation)</li>
                      <li>❌ Push expensive resurfacing</li>
                      <li>❌ No WSIB certification</li>
                      <li>❌ Schedule when convenient for them</li>
                      <li>❌ Treat churches like commercial jobs</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-green-50">
                    <h3 className="font-bold text-lg mb-4 text-neutral-900">Steward Seal Coating</h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li>✅ Complete Board Approval Kit</li>
                      <li>✅ Repair before replacement philosophy</li>
                      <li>✅ WSIB certificate with every contract</li>
                      <li>✅ Worship calendar coordination</li>
                      <li>✅ Faith community priority always</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-neutral-700">{getClimateIntro()} In {city.name}, you need a contractor who understands both the climate challenges and the unique needs of faith organizations.</p>
          </div>
        </div>
      </section>
      ),

      10: ( // Urgent/Action
        <section className="py-20 bg-gradient-to-br from-primary-dark/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-black mb-6 text-neutral-900">Is Your {city.name} Parking Lot Showing These Warning Signs?</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">⚠️</span>
                    <span className="text-neutral-700">Visible cracks wider than a quarter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">⚠️</span>
                    <span className="text-neutral-700">Standing water after rain</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">⚠️</span>
                    <span className="text-neutral-700">Faded or missing line markings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">⚠️</span>
                    <span className="text-neutral-700">Sunken or uneven surfaces</span>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">{getClimateIntro()}</p>
                <p className="text-neutral-700">Don't wait for small problems to become expensive emergencies. Free drone inspection reveals damage you can't see from the ground. Board Approval Kit makes committee approval straightforward. WSIB certification protects your {city.name} organization.</p>
                <div className="mt-6">
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <Link href="#contact">Book Free Inspection</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    };

    return templates[introTemplate as keyof typeof templates];
  };

  // SECTION 2: SERVICES (10 Variations)
  const ServicesSection = () => {
    const templates = {
      1: ( // Detailed Cards
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Professional Services in {city.name}</h2>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Seal Coating</h3>
                <p className="text-neutral-700">Seal coating is the single most cost-effective way to protect your parking lot investment. In {city.name}'s climate, asphalt faces constant assault from UV radiation, water penetration, and {city.climate.join(", ")}.</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Blocks UV damage and surface oxidation</li>
                  <li>Seals against water infiltration and freeze-thaw damage</li>
                  <li>Resists oil and gas spills</li>
                <li>Extends pavement life by 3-5 years per application</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Hot Rubber Crack Filling</h3>
                <p className="text-neutral-700">Cracks are where parking lot failure begins. In {city.name}, {city.climate[0]} means minor cracks become major problems fast.</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>Bonds directly to asphalt at high temperature</li>
                  <li>Remains flexible through extreme temperature swings</li>
                  <li>Creates watertight seal preventing infiltration</li>
                  <li>Lasts 3-5 years under normal traffic</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">AODA-Compliant Line Markings</h3>
                <p className="text-neutral-700">Ontario's AODA legislation mandates accessible parking with specific dimensional and visibility requirements for {city.name} faith communities.</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
                  <li>High-visibility traffic paint engineered for durability</li>
                  <li>Accessible parking symbols meeting provincial standards</li>
                  <li>Proper spacing (8-foot width plus 5-foot access aisle)</li>
                  <li>Fire route and pedestrian walkway delineation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      ),

      2: ( // Grid Icons
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">Three Core Services for {city.name}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Seal Coating</h3>
                  <p className="text-neutral-600 text-sm">Protective barrier against {city.climate[0]}, UV damage, and water infiltration. Extends life 3-5 years per application.</p>
                </div>
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Crack Repair</h3>
                  <p className="text-neutral-600 text-sm">Hot-applied rubberized filler that remains flexible through Ontario temperature extremes. Stops small problems before they escalate.</p>
                </div>
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">AODA Markings</h3>
                  <p className="text-neutral-600 text-sm">Compliant line striping for accessible parking that meets provincial standards and protects your {city.name} congregation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      3: ( // Numbered Steps
        <section id="services" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Complete Parking Lot Protection for {city.name}</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Seal Coating</h3>
                    <p className="text-neutral-700">Premium coal tar or asphalt emulsion sealer creates a protective barrier against {city.climate.join(", ")} common to {city.name}. Application takes 24-48 hours to cure, and we coordinate around your worship schedule.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hot Rubber Crack Filling</h3>
                    <p className="text-neutral-700">Hot-applied rubberized crack filler bonds directly to asphalt and remains flexible through temperature swings from -30°C to +40°C. Essential for preventing water infiltration in {city.name}'s climate.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AODA-Compliant Markings</h3>
                    <p className="text-neutral-700">High-visibility line striping that meets Ontario accessibility standards. Includes accessible parking symbols, proper spacing, and certification documentation for your {city.name} board.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      4: ( // Before/After Style
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-3xl font-black text-neutral-900">What We Fix in {city.name} Parking Lots</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-red-900">Without Seal Coating:</h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>❌ UV oxidation causes brittleness</li>
                    <li>❌ Water infiltration accelerates damage</li>
                    <li>❌ Oil spills break down asphalt binder</li>
                    <li>❌ Surface fades to gray</li>
                    <li>❌ Pavement life cut short by years</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-green-900">With Professional Seal Coating:</h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>✅ UV protection preserves flexibility</li>
                    <li>✅ Water-resistant barrier</li>
                    <li>✅ Oil and gas resistance</li>
                    <li>✅ Rich black appearance restored</li>
                    <li>✅ 3-5 years added life per application</li>
                  </ul>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Why Hot Rubber Crack Filling Matters in {city.name}</h3>
                <p className="text-neutral-700 mb-3">In {city.name}, {city.climate[0]} means cracks expand rapidly. A hairline crack becomes a pothole in one season without proper repair.</p>
                <p className="text-neutral-700">Our hot-applied rubberized formula bonds at high temperature and remains flexible through extreme temperature swings, preventing the freeze-thaw damage that destroys {city.name} parking lots.</p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3">AODA Compliance for {city.name} Faith Communities</h3>
                <p className="text-neutral-700">Ontario law requires accessible parking with specific markings. We ensure compliance and provide documentation that protects your organization from liability.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      5: ( // FAQ Style
        <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-black text-neutral-900">Services for {city.name} Faith Communities</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">What is seal coating and why does {city.name} need it?</h3>
                  <p className="text-neutral-700">Seal coating creates a protective barrier against UV damage, water infiltration, and {city.climate.join(", ")}. For pennies per square foot, you extend your pavement life by 3-5 years. It's the most cost-effective maintenance available.</p>
            </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">Why hot rubber crack filling instead of cold-pour products?</h3>
                  <p className="text-neutral-700">Cold-pour products harden and fail within months. Hot rubber bonds directly to asphalt at high temperature and remains flexible through {city.name}'s temperature extremes (-30°C to +40°C). It lasts 3-5 years and creates a watertight seal.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">What makes line markings "AODA-compliant" in {city.name}?</h3>
                  <p className="text-neutral-700">Ontario's Accessibility for Ontarians with Disabilities Act requires specific dimensions, visibility, and placement for accessible parking. We meet all provincial standards and provide certification documentation for your board.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      6: ( // Pricing Focus
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Smart Stewardship for {city.name} Congregations</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">$0.10-0.20</div>
                  <div className="text-sm text-neutral-600">per sq ft</div>
                  <div className="font-bold mt-2">Seal Coating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">$2-4</div>
                  <div className="text-sm text-neutral-600">per linear foot</div>
                  <div className="font-bold mt-2">Crack Filling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">$5-8</div>
                  <div className="text-sm text-neutral-600">per sq ft</div>
                  <div className="font-bold mt-2">Resurfacing</div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <p className="font-bold mb-2">For a typical 10,000 sq ft {city.name} faith community parking lot:</p>
                <p className="text-neutral-700">Preventative seal coating + crack repair: $1,500-2,500</p>
                <p className="text-neutral-700">Emergency resurfacing (if deferred): $50,000-80,000</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What's Included:</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li><strong>Seal Coating:</strong> UV and water protection engineered for {city.climate[0]}</li>
                  <li><strong>Crack Filling:</strong> Hot rubber application that prevents freeze-thaw damage</li>
                  <li><strong>Line Markings:</strong> AODA-compliant striping with certification documentation</li>
                  <li><strong>Board Approval Kit:</strong> Aerial photos, costs, timeline, WSIB certificate</li>
                  <li><strong>3-Year Guarantee:</strong> Workmanship warranty plus annual drone inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ),

      7: ( // Timeline Focus
        <section id="services" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Service Timeline for {city.name}</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Seal Coating Application</h3>
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">1 Day</span>
                  </div>
                  <p className="text-neutral-700 mb-2">Professional application of coal tar or asphalt emulsion sealer. Protects against UV damage, water infiltration, and {city.climate[0]} common to {city.name}.</p>
                  <p className="text-sm text-neutral-600">Cure time: 24-48 hours before traffic</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Hot Rubber Crack Filling</h3>
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">2-4 Hours</span>
                  </div>
                  <p className="text-neutral-700 mb-2">Hot-applied rubberized filler bonds to asphalt and remains flexible through temperature swings. Essential for preventing freeze-thaw damage.</p>
                  <p className="text-sm text-neutral-600">Cure time: Immediate traffic (cools in minutes)</p>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">AODA Line Striping</h3>
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">3-5 Hours</span>
                  </div>
                  <p className="text-neutral-700 mb-2">High-visibility markings meeting Ontario accessibility standards. Includes accessible parking symbols, fire routes, and pedestrian walkways.</p>
                  <p className="text-sm text-neutral-600">Cure time: 1-2 hours (paint dries quickly)</p>
                </div>
              </div>

              <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Coordinated Around Your {city.name} Worship Schedule</h3>
                <p className="text-neutral-700">We schedule Monday-Thursday when possible, ensuring surfaces are fully cured before weekend services. If your congregation has mid-week programming, we coordinate around that too.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      8: ( // Benefits-Focused
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">Protect Your {city.name} Parking Lot Investment</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Shield className="h-6 w-6 text-primary" />
                      Seal Coating Benefits
                    </h3>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>✓ Blocks UV damage and oxidation</li>
                      <li>✓ Prevents water infiltration</li>
                      <li>✓ Resists oil and gas spills</li>
                      <li>✓ Restores rich black appearance</li>
                      <li>✓ Extends life 3-5 years per application</li>
                      <li>✓ Costs pennies per square foot</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                      Crack Filling Benefits
                    </h3>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>✓ Prevents freeze-thaw damage</li>
                      <li>✓ Stops small cracks from becoming potholes</li>
                      <li>✓ Remains flexible through temperature extremes</li>
                      <li>✓ Lasts 3-5 years under normal traffic</li>
                      <li>✓ Protects asphalt base and subgrade</li>
                      <li>✓ Avoids expensive emergency repairs</li>
                    </ul>
                    </div>
                  </div>

                <div className="space-y-6">
                    <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <FileText className="h-6 w-6 text-primary" />
                      AODA Marking Benefits
                    </h3>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>✓ Meets Ontario accessibility requirements</li>
                      <li>✓ Protects organization from liability</li>
                      <li>✓ Ensures safety for all congregants</li>
                      <li>✓ High-visibility for drivers and pedestrians</li>
                      <li>✓ Includes certification documentation</li>
                      <li>✓ Demonstrates community commitment</li>
                    </ul>
                    </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h3 className="font-bold mb-2">Why {city.name} Matters</h3>
                    <p className="text-sm text-neutral-700">Climate challenges specific to {city.name}—{city.climate.join(", ")}—make professional maintenance essential, not optional.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      9: ( // Problem-Prevention
        <section id="services" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Preventing Parking Lot Failure in {city.name}</h2>
              
              <div className="space-y-8">
                    <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Problem: UV Damage & Oxidation</h3>
                      <p className="text-neutral-700 mb-2">Unprotected asphalt in {city.name} breaks down under UV exposure, becoming brittle and prone to cracking.</p>
                    </div>
                  </div>
                  <div className="ml-16 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="font-bold text-green-900 mb-1">Solution: Professional Seal Coating</p>
                    <p className="text-sm text-neutral-700">Creates UV-resistant barrier that preserves asphalt flexibility and extends life by years.</p>
                    </div>
                  </div>

                    <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Problem: Water Infiltration & Freeze-Thaw</h3>
                      <p className="text-neutral-700 mb-2">In {city.name}, {city.climate[0]} causes water to freeze, expand, and create structural damage from minor cracks.</p>
                    </div>
                  </div>
                  <div className="ml-16 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="font-bold text-green-900 mb-1">Solution: Hot Rubber Crack Filling</p>
                    <p className="text-sm text-neutral-700">Watertight seal prevents infiltration. Remains flexible through temperature extremes to prevent re-cracking.</p>
                    </div>
                  </div>

                    <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Problem: AODA Non-Compliance</h3>
                      <p className="text-neutral-700 mb-2">Faded or missing accessible parking markings expose {city.name} faith communities to liability and accessibility issues.</p>
                    </div>
                  </div>
                  <div className="ml-16 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="font-bold text-green-900 mb-1">Solution: AODA-Compliant Line Striping</p>
                    <p className="text-sm text-neutral-700">High-visibility markings meet provincial standards. Includes certification documentation for your board.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      10: ( // Compact List
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Complete Service Package for {city.name}</h2>
              
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">1. Professional Seal Coating</h3>
                  <p className="text-neutral-700 text-sm mb-2">UV-resistant barrier against {city.climate[0]} and water damage. Extends pavement life 3-5 years. Application costs pennies per square foot vs dollars for resurfacing.</p>
                  <p className="text-xs text-neutral-600">Cure time: 24-48 hours | Best season: May-September</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">2. Hot Rubber Crack Filling</h3>
                  <p className="text-neutral-700 text-sm mb-2">Flexible, watertight seal prevents freeze-thaw damage common to {city.name}. Bonds at high temperature for superior adhesion. Stops small problems before they become expensive.</p>
                  <p className="text-xs text-neutral-600">Cure time: Immediate | Lasts: 3-5 years</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">3. AODA-Compliant Markings</h3>
                  <p className="text-neutral-700 text-sm mb-2">High-visibility line striping meeting Ontario accessibility standards. Includes accessible parking symbols, proper spacing, fire routes, and certification documentation for your board.</p>
                  <p className="text-xs text-neutral-600">Cure time: 1-2 hours | Standards: AODA 2005</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold mb-1">Every Project Includes:</p>
                  <p className="text-sm text-neutral-700">Free drone inspection • Board Approval Kit • WSIB certificate • 3-Year Stewardship Guarantee • Worship calendar coordination</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    };

    return templates[servicesTemplate as keyof typeof templates];
  };

  // SECTION 3: STEWARD PACKAGE (10 Variations)
  const PackageSection = () => {
    const templates = {
      1: ( // Comprehensive List
        <section id="package" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-8">The Steward Protection Package™</h2>
              <div className="bg-white text-neutral-900 rounded-lg p-8 space-y-6">
                <p className="text-lg">Complete parking lot protection designed for {city.name} faith communities.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div><p className="font-bold">Professional Seal Coating</p><p className="text-sm text-neutral-600">UV and water protection</p></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div><p className="font-bold">Hot Rubber Crack Filling</p><p className="text-sm text-neutral-600">Prevents water infiltration</p></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div><p className="font-bold">AODA-Compliant Markings</p><p className="text-sm text-neutral-600">Provincial accessibility standards</p></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div><p className="font-bold">3-Year Guarantee</p><p className="text-sm text-neutral-600">Workmanship warranty + inspections</p></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Camera className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div><p className="font-bold">Aerial Damage Report</p><p className="text-sm text-neutral-600">Drone footage reveals hidden issues</p></div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <FileText className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div><p className="font-bold">Board Approval Kit</p><p className="text-sm text-neutral-600">Photos, costs, timeline, WSIB cert</p></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      ),

      2: ( // Simple Benefits
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Everything {city.name} Faith Communities Need</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm"><Shield className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Protection</h3><p className="text-sm text-neutral-600">Seal coating, crack filling, line markings</p></div>
                <div className="bg-white p-6 rounded-lg shadow-sm"><FileText className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Documentation</h3><p className="text-sm text-neutral-600">Board Approval Kit with all paperwork</p></div>
                <div className="bg-white p-6 rounded-lg shadow-sm"><Award className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Guarantee</h3><p className="text-sm text-neutral-600">3-year workmanship warranty</p></div>
              </div>
            </div>
          </div>
        </section>
      ),

      3: ( // Feature-Focused
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Complete Service Package for {city.name}</h2>
              <div className="space-y-4">
                <div className="bg-primary/5 p-6 rounded-lg"><h3 className="font-bold text-lg mb-2">Free Drone Inspection</h3><p className="text-neutral-700 text-sm">Aerial footage reveals damage invisible from ground level. No obligation.</p></div>
                <div className="bg-primary/5 p-6 rounded-lg"><h3 className="font-bold text-lg mb-2">Board Approval Kit</h3><p className="text-neutral-700 text-sm">Photos, cost breakdown, timeline, WSIB certificate—everything your committee needs.</p></div>
                <div className="bg-primary/5 p-6 rounded-lg"><h3 className="font-bold text-lg mb-2">3-Year Stewardship Guarantee™</h3><p className="text-neutral-700 text-sm">Workmanship warranty plus annual drone inspections at no extra cost.</p></div>
              </div>
            </div>
          </div>
        </section>
      ),

      4: ( // Value Proposition
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">More Than Just Service—It's Stewardship</h2>
              <p className="text-lg text-neutral-700 mb-6">Every {city.name} faith community project includes comprehensive documentation, guarantees, and support:</p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Complete Board Approval Kit (photos, costs, timeline)</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>WSIB Clearance Certificate with every contract</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>3-Year Stewardship Guarantee + annual inspections</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Worship calendar coordination always</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Faith community priority scheduling</span></li>
              </ul>
            </div>
          </div>
        </section>
      ),

      5: ( // Icon Grid
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">{city.name} Faith Communities Get Complete Protection</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "Seal Coating", desc: "UV & water barrier" },
                  { icon: CheckCircle2, title: "Crack Filling", desc: "Hot rubber application" },
                  { icon: FileText, title: "AODA Markings", desc: "Compliant line striping" },
                  { icon: Camera, title: "Drone Report", desc: "Aerial damage assessment" },
                  { icon: Award, title: "3-Year Guarantee", desc: "Workmanship warranty" },
                  { icon: Shield, title: "WSIB Certificate", desc: "Liability protection" },
                ].map((item, i) => (
                  <div key={i} className="bg-neutral-50 p-6 rounded-lg text-center">
                    <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ),

      6: ( // Guarantee-Focused
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-lg p-10 text-center">
                <Award className="h-16 w-16 mx-auto mb-4 text-accent" />
                <h2 className="text-3xl font-black mb-4">3-Year Stewardship Guarantee™</h2>
                <p className="text-lg mb-6 opacity-95">For {city.name} faith communities, we stand behind our work—not just with words, but with annual inspections and comprehensive warranty coverage.</p>
                <div className="bg-white text-neutral-900 rounded-lg p-6 text-left">
                  <h3 className="font-bold mb-3">What's Covered:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Seal coating adhesion and coverage</li>
                    <li>✓ Crack fill integrity and flexibility</li>
                    <li>✓ Line marking visibility and compliance</li>
                    <li>✓ Annual drone inspections (Years 1, 2, 3)</li>
                    <li>✓ Touch-up repairs at no extra cost</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      7: ( // Timeline Package
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">What {city.name} Faith Communities Receive</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="flex-1"><h3 className="font-bold mb-1">Before Project: Complete Documentation</h3><p className="text-sm text-neutral-700">Aerial Damage Report, Board Approval Kit, cost breakdown, timeline, WSIB certificate</p></div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="flex-1"><h3 className="font-bold mb-1">During Project: Professional Service</h3><p className="text-sm text-neutral-700">Seal coating, crack filling, AODA-compliant markings—coordinated around your worship schedule</p></div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="flex-1"><h3 className="font-bold mb-1">After Project: 3-Year Guarantee</h3><p className="text-sm text-neutral-700">Workmanship warranty, annual drone inspections, touch-up repairs included</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      8: ( // Trust Badge Style
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Trusted by {city.name} Faith Communities</h2>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg"><div className="text-3xl font-black text-primary mb-2">100%</div><div className="text-sm text-neutral-600">WSIB Certified</div></div>
                <div className="bg-white p-6 rounded-lg"><div className="text-3xl font-black text-primary mb-2">3-Year</div><div className="text-sm text-neutral-600">Guarantee</div></div>
                <div className="bg-white p-6 rounded-lg"><div className="text-3xl font-black text-primary mb-2">$2M</div><div className="text-sm text-neutral-600">Liability Insurance</div></div>
                <div className="bg-white p-6 rounded-lg"><div className="text-3xl font-black text-primary mb-2">Free</div><div className="text-sm text-neutral-600">Drone Inspection</div></div>
              </div>
              <p className="text-neutral-700">Every project includes complete Board Approval Kit, AODA compliance certification, and worship calendar coordination.</p>
            </div>
          </div>
        </section>
      ),

      9: ( // Problem-Solution Package
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Built for {city.name} Faith Community Boards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-red-900">What Boards Struggle With:</h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>❌ Contractors who don't provide documentation</li>
                    <li>❌ No WSIB certificates (liability risk)</li>
                    <li>❌ Unclear timelines and hidden costs</li>
                    <li>❌ Service during worship times</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-green-900">What Steward Provides:</h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>✅ Complete Board Approval Kit with everything</li>
                    <li>✅ WSIB certificate with every contract</li>
                    <li>✅ Clear pricing, timelines, guarantees</li>
                    <li>✅ Worship calendar coordination always</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      10: ( // CTA-Heavy
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-black mb-4 text-neutral-900">Ready to Protect Your {city.name} Parking Lot?</h2>
              <p className="text-lg text-neutral-700 mb-6">Every faith community project includes our complete protection package: professional services, documentation, guarantees, and support.</p>
              <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">You Get Everything:</h3>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-700">
                  <div>✓ Free drone inspection</div>
                  <div>✓ Seal coating + crack filling</div>
                  <div>✓ Board Approval Kit</div>
                  <div>✓ AODA-compliant markings</div>
                  <div>✓ WSIB certificate</div>
                  <div>✓ 3-Year guarantee</div>
                </div>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto"><Link href="#contact">Get Your Free Board Approval Kit</Link></Button>
            </div>
          </div>
        </section>
      ),
    };

    return templates[packageTemplate as keyof typeof templates];
  };

  // SECTION 4: HOW IT WORKS (10 Variations)
  const HowItWorksSection = () => {
    const templates = {
      1: ( // 3-Step Cards
        <section id="how-it-works" className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">How It Works in {city.name}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><span className="text-2xl font-black text-primary">1</span></div>
                  <h3 className="text-xl font-bold mb-3">Free Drone Inspection</h3>
                  <p className="text-neutral-700 text-sm">Aerial footage reveals damage invisible from ground. Completely free, no obligation.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><span className="text-2xl font-black text-primary">2</span></div>
                  <h3 className="text-xl font-bold mb-3">Board Approval Kit</h3>
                  <p className="text-neutral-700 text-sm">Photos, cost breakdown, timeline, WSIB certificate—everything your committee needs.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"><span className="text-2xl font-black text-primary">3</span></div>
                  <h3 className="text-xl font-bold mb-3">Scheduled Service</h3>
                  <p className="text-neutral-700 text-sm">We coordinate around your worship schedule. Surfaces cure in 24-48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      2: ( // Timeline Visual
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-neutral-900">Simple Process for {city.name} Faith Communities</h2>
              <div className="space-y-8">
                {[
                  { num: 1, title: "Contact Us", desc: "Request free drone inspection for your " + city.name + " parking lot", time: "Day 1" },
                  { num: 2, title: "Aerial Assessment", desc: "We fly your property and create detailed damage report", time: "Day 2-3" },
                  { num: 3, title: "Board Approval Kit", desc: "Receive complete documentation package with costs and timeline", time: "Day 4-5" },
                  { num: 4, title: "Committee Review", desc: "Your board reviews at their own pace (we coordinate with timelines)", time: "1-4 weeks" },
                  { num: 5, title: "Service Delivery", desc: "Professional seal coating, crack filling, line markings", time: "1-2 days" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-black text-2xl">{step.num}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <span className="text-sm text-neutral-500 font-semibold">{step.time}</span>
                      </div>
                      <p className="text-neutral-700">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ),

      3: ( // FAQ Style
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-black text-neutral-900">Getting Started in {city.name}</h2>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Step 1: Request Free Drone Inspection</h3>
                <p className="text-neutral-700 text-sm">Contact us to schedule aerial assessment of your {city.name} parking lot. No obligation, completely free.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Step 2: Receive Board Approval Kit</h3>
                <p className="text-neutral-700 text-sm">We deliver comprehensive documentation: aerial photos, damage report, cost breakdown, timeline, and WSIB certificate.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Step 3: Committee Reviews & Approves</h3>
                <p className="text-neutral-700 text-sm">Your board reviews at their pace. We're available for questions and can attend committee meetings if helpful.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Step 4: We Schedule Around Your Calendar</h3>
                <p className="text-neutral-700 text-sm">Service coordinated to avoid worship times. Surfaces cure in 24-48 hours and are ready for use.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      4: ( // Simple List
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Three Easy Steps for {city.name}</h2>
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-black text-primary/20">1</div>
                  <div><h3 className="font-bold text-lg">Free Drone Inspection</h3><p className="text-neutral-600 text-sm">Aerial assessment reveals hidden damage</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-black text-primary/20">2</div>
                  <div><h3 className="font-bold text-lg">Board Approval Kit</h3><p className="text-neutral-600 text-sm">Complete documentation for committee decision</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-6xl font-black text-primary/20">3</div>
                  <div><h3 className="font-bold text-lg">Professional Service</h3><p className="text-neutral-600 text-sm">Coordinated around your worship schedule</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      5: ( // Benefits After Each Step
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">From Inspection to Completion in {city.name}</h2>
              <div className="space-y-6">
                {[
                  { step: "Drone Inspection", benefit: "You see exactly what needs repair—no surprises, no upselling" },
                  { step: "Board Approval Kit", benefit: "Your committee has everything needed for confident decision-making" },
                  { step: "Scheduled Service", benefit: "Work happens around your calendar, not contractor convenience" },
                  { step: "3-Year Guarantee", benefit: "Annual inspections and touch-ups give you peace of mind" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                  <div>
                      <h3 className="font-bold mb-1">{item.step}</h3>
                      <p className="text-sm text-neutral-700">→ {item.benefit}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ),

      6: ( // Icon-Based
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-black text-center mb-12 text-neutral-900">Your Path to a Protected Parking Lot</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center"><Camera className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Inspect</h3><p className="text-xs text-neutral-600">Free drone assessment</p></div>
                <div className="text-center"><FileText className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Document</h3><p className="text-xs text-neutral-600">Board Approval Kit</p></div>
                <div className="text-center"><CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Protect</h3><p className="text-xs text-neutral-600">Professional service</p></div>
                <div className="text-center"><Shield className="h-12 w-12 text-primary mx-auto mb-3" /><h3 className="font-bold mb-2">Guarantee</h3><p className="text-xs text-neutral-600">3-year warranty</p></div>
              </div>
              <p className="text-center mt-8 text-neutral-700">Serving {city.name} faith communities with transparency, documentation, and respect for your stewardship responsibilities.</p>
          </div>
        </div>
      </section>
      ),

      7: ( // Comparison Style
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Why {city.name} Boards Choose Our Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-red-900">Typical Contractor Process:</h3>
                  <ol className="space-y-2 text-sm text-neutral-700">
                    <li>1. Phone quote (no visuals)</li>
                    <li>2. Basic estimate (no documentation)</li>
                    <li>3. Show up when convenient for them</li>
                    <li>4. No follow-up or warranty</li>
                  </ol>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-green-900">Steward Process:</h3>
                  <ol className="space-y-2 text-sm text-neutral-700">
                    <li>1. Free drone inspection (aerial visuals)</li>
                    <li>2. Board Approval Kit (complete docs)</li>
                    <li>3. Schedule around your worship calendar</li>
                    <li>4. 3-year guarantee + annual inspections</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),

      8: ( // Detailed Timeline
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8 text-neutral-900">Complete Timeline for {city.name}</h2>
              <div className="border-l-4 border-primary pl-6 space-y-8">
                <div><div className="text-sm font-bold text-primary mb-1">WEEK 1</div><h3 className="font-bold text-lg mb-2">Initial Contact & Inspection</h3><p className="text-neutral-700 text-sm">Request inspection → we schedule drone flight → aerial assessment completed → damage report created</p></div>
                <div><div className="text-sm font-bold text-primary mb-1">WEEK 1-2</div><h3 className="font-bold text-lg mb-2">Documentation Delivery</h3><p className="text-neutral-700 text-sm">Receive Board Approval Kit with photos, costs, timeline, WSIB certificate, and AODA compliance info</p></div>
                <div><div className="text-sm font-bold text-primary mb-1">WEEK 2-6</div><h3 className="font-bold text-lg mb-2">Board Review Period</h3><p className="text-neutral-700 text-sm">Your committee reviews at their pace. We're available for questions or to attend meetings if helpful.</p></div>
                <div><div className="text-sm font-bold text-primary mb-1">WEEK 7</div><h3 className="font-bold text-lg mb-2">Service Delivery</h3><p className="text-neutral-700 text-sm">Professional seal coating, crack filling, line markings—coordinated around worship schedule. Cure time: 24-48 hours.</p></div>
                <div><div className="text-sm font-bold text-primary mb-1">YEARS 1-3</div><h3 className="font-bold text-lg mb-2">Stewardship Guarantee</h3><p className="text-neutral-700 text-sm">Annual drone inspections, touch-up repairs included, workmanship warranty honored</p></div>
              </div>
            </div>
          </div>
        </section>
      ),

      9: ( // Question-Focused
        <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-black text-neutral-900">How Do {city.name} Faith Communities Get Started?</h2>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-2">What's the first step?</h3>
                <p className="text-neutral-700 text-sm">Contact us to request a free drone inspection. We'll schedule an aerial assessment of your {city.name} parking lot at your convenience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-2">What will I receive?</h3>
                <p className="text-neutral-700 text-sm">Complete Board Approval Kit with aerial photos, damage report, cost breakdown, timeline, and WSIB certificate—everything your committee needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-2">How long does service take?</h3>
                <p className="text-neutral-700 text-sm">Application typically takes 1-2 days. Seal coating cures in 24-48 hours. We coordinate around your worship schedule so surfaces are ready when needed.</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-2">What happens after the project?</h3>
                <p className="text-neutral-700 text-sm">Our 3-Year Stewardship Guarantee includes annual drone inspections and touch-up repairs at no extra cost. We stay connected with your congregation.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      10: ( // CTA-Focused
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Ready to Get Started in {city.name}?</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div><div className="text-4xl font-black text-primary mb-2">1</div><h3 className="font-bold mb-1">Request Inspection</h3><p className="text-sm text-neutral-600">Free drone assessment</p></div>
                <div><div className="text-4xl font-black text-primary mb-2">2</div><h3 className="font-bold mb-1">Review Documentation</h3><p className="text-sm text-neutral-600">Board Approval Kit delivered</p></div>
                <div><div className="text-4xl font-black text-primary mb-2">3</div><h3 className="font-bold mb-1">Schedule Service</h3><p className="text-sm text-neutral-600">Around your calendar</p></div>
              </div>
              <Button asChild size="lg"><Link href="#contact">Book Your Free Drone Inspection</Link></Button>
              <p className="text-sm text-neutral-600 mt-4">Serving faith communities in {city.name} with priority scheduling and complete documentation</p>
            </div>
          </div>
        </section>
      ),
    };

    return templates[howItWorksTemplate as keyof typeof templates];
  };

  // SECTION 5: SURROUNDING COMMUNITIES (10 Variations)
  const SurroundingCommunitiesSection = () => {
    if (!city.surroundingCommunities) return null;

    const communities = city.surroundingCommunities;
    const templates = {
      1: (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Serving {city.name} and Surrounding Communities</h2>
              <p className="text-neutral-700 mb-4">When we schedule projects in {city.name}, our service routes efficiently cover nearby communities including <span className="font-semibold">{communities}</span>.</p>
              <p className="text-neutral-700">This regional routing allows us to offer competitive pricing while maintaining the highest service standards for faith communities across {city.region}. <Link href="#contact" className="text-primary font-semibold hover:underline">Contact us</Link> to add your location to our next route.</p>
            </div>
          </div>
        </section>
      ),

      2: (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Complete {city.region} Coverage</h2>
              <p className="text-neutral-700">Congregations in <span className="font-semibold">{communities}</span> trust Steward Seal Coating for professional parking lot maintenance. We coordinate scheduling across the entire {city.name} region, ensuring efficient service delivery to urban, suburban, and rural faith communities alike.</p>
            </div>
          </div>
        </section>
      ),

      3: (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-black mb-4 text-neutral-900">Regional Service for Maximum Efficiency</h2>
              <p className="text-neutral-700 mb-4">Smart stewardship means efficient routing. When we serve {city.name}, we coordinate projects throughout <span className="font-semibold">{communities}</span> to minimize travel time and maximize value.</p>
              <p className="text-neutral-700">This approach means better pricing for your congregation and faster scheduling for all communities in the region.</p>
                </div>
          </div>
        </section>
      ),

      4: (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black mb-3 text-neutral-900">Beyond {city.name}: We Serve the Entire Region</h2>
                  <p className="text-neutral-700">Our {city.region} service area extends well beyond city limits. Faith communities in <span className="font-semibold">{communities}</span> receive the same professional service, documentation, and priority scheduling as larger urban congregations.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      ),

      5: (
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">{city.name} + Nearby Communities We Serve</h2>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-700 font-semibold mb-3">{communities}</p>
                <p className="text-neutral-700 text-sm">When we schedule routes through {city.name}, we coordinate service for all nearby congregations. This means better pricing through efficiency and faster scheduling through coordination.</p>
              </div>
            </div>
          </div>
        </section>
      ),

      6: (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Can't Find a Contractor? We Serve the Entire {city.name} Region</h2>
              <p className="text-neutral-700 mb-4">Many faith communities outside {city.name} proper struggle to find contractors willing to travel. We solve this by grouping projects regionally—serving {city.name} alongside <span className="font-semibold">{communities}</span> on coordinated routes.</p>
              <p className="text-neutral-700">You get the same quality service whether you're in downtown {city.name} or a rural congregation 30 minutes away.</p>
                </div>
              </div>
        </section>
      ),

      7: (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Trusted Throughout {city.name} and Surrounding Areas</h2>
              <p className="text-neutral-700">Faith communities across the {city.name} region—including <span className="font-semibold">{communities}</span>—choose us because we understand the unique needs of religious organizations. Limited budgets, board approval processes, worship calendar coordination, and community expectations all factor into how we schedule and execute projects.</p>
                </div>
              </div>
        </section>
      ),

      8: (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Better Pricing Through Regional Service</h2>
              <p className="text-neutral-700 mb-4">How do we keep costs down? Regional routing. When we're in {city.name}, we also serve congregations in <span className="font-semibold">{communities}</span>. You're not charged for a one-off trip—you benefit from efficient scheduling across the region.</p>
              <p className="text-neutral-700">Lower travel costs mean better project pricing for your faith community.</p>
                </div>
              </div>
        </section>
      ),

      9: (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Comprehensive {city.region} Service Area</h2>
              <p className="text-neutral-700 mb-4">Steward Seal Coating serves the complete {city.name} region, coordinating projects across multiple municipalities. Our active service area includes {city.name} and extends to communities such as <span className="font-semibold">{communities}</span>.</p>
              <p className="text-neutral-700">Whether your congregation is in a major center or a smaller rural community, you receive identical service quality and documentation.</p>
            </div>
          </div>
        </section>
      ),

      10: (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-6 text-neutral-900">Yes, We Come to Your Community Too!</h2>
              <p className="text-neutral-700 mb-4">Located outside {city.name} proper? No problem. When we schedule routes through the region, we serve congregations in <span className="font-semibold">{communities}</span> and beyond.</p>
              <p className="text-neutral-700">Many of our best relationships are with rural and small-town congregations who appreciate that we don't treat them as "too small" or "too far." If you're in the {city.name} region and have been told you're "too far" by other contractors, <Link href="#contact" className="text-primary font-semibold hover:underline">give us a try</Link>.</p>
          </div>
        </div>
      </section>
      ),
    };

    return templates[communitiesTemplate as keyof typeof templates];
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section - Same for all */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/cities/${city.slug}-hero.webp`}
            alt={`Aerial view of ${city.name}, Ontario - Steward Seal Coating service area`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/70 to-primary/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                <Link href="#services">See Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <IntroSection />
      <ServicesSection />
      <PackageSection />
      <HowItWorksSection />
      <SurroundingCommunitiesSection />

      {/* Contact Section - Same for all */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Serving Faith Communities in {city.name}
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
