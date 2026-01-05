import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Calendar, TrendingDown, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Asphalt Seal Coating Ontario | Churches & Faith Communities | Steward Seal Coating",
  description: "Professional parking lot seal coating for Ontario faith communities, commercial properties, and residential driveways. Protect against UV damage, water penetration, and freeze-thaw cycles. WSIB certified with 3-year guarantee.",
  keywords: [
    "asphalt seal coating Ontario",
    "parking lot sealer",
    "driveway seal coating",
    "church parking lot sealing",
    "commercial seal coating",
    "seal coat application Ontario"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/services/seal-coating"
  },
  openGraph: {
    title: "Asphalt Seal Coating Ontario | Steward Seal Coating",
    description: "Professional parking lot seal coating for Ontario faith communities. Protect against UV damage, water penetration, and freeze-thaw cycles.",
    type: "website",
    locale: "en_CA",
  },
}

export default function SealCoatingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-seal-coating.webp"
            alt="Professional asphalt seal coating application in Ontario"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Professional Asphalt Seal Coating in Ontario
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-8">
              Protect your parking lot from UV damage, water penetration, and Ontario's harsh freeze-thaw cycles with commercial-grade seal coating.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-cta="seal-coating-quote"
              data-location="service-page-hero"
            >
              <Link href="#contact">Get Your Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Seal Coating */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              What Is Seal Coating?
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-4">
              <p>
                Seal coating is a protective liquid coating applied to asphalt pavement to extend its lifespan and prevent deterioration. Think of it as sunscreen for your parking lot—it creates a barrier against the elements that damage asphalt: UV rays, water, oils, and oxidation.
              </p>
              
              <p>
                In Ontario, seal coating is particularly critical because of our extreme climate. Summer UV exposure breaks down asphalt binder, making the surface brittle. Fall and spring rain infiltrates small cracks, and when temperatures drop below freezing in winter, that water expands—creating larger cracks, potholes, and surface failure.
              </p>
              
              <p>
                <strong>Professional seal coating done right</strong> stops this cycle. Applied every 2-3 years, it's the single most cost-effective way to protect your asphalt investment. The alternative? Watching your parking lot deteriorate until the only option left is expensive resurfacing or replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Why Ontario Properties Need Seal Coating
              </h2>
              <p className="text-xl text-neutral-600">
                Protection that pays for itself by preventing expensive repairs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Protects Against UV Damage
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Ontario summers are hard on asphalt. UV rays break down the binding agents that hold aggregate together, causing oxidation and surface deterioration. Seal coating blocks UV penetration and keeps your asphalt flexible.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Prevents Water Infiltration
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Water is asphalt's biggest enemy. When it seeps into small cracks and freezes during Ontario winters, it expands and creates larger damage. Seal coating creates a waterproof barrier that stops infiltration before it starts.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Slows Oxidation & Aging
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Unsealed asphalt turns gray and brittle as it ages. This is oxidation—exposure to oxygen breaks down the asphalt binder. Seal coating slows this process dramatically, keeping your pavement dark, flexible, and resilient for years longer.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Extends Pavement Life 2-3x
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  An unsealed parking lot in Ontario might last 10-12 years before needing replacement. With regular seal coating every 2-3 years, that same lot can last 20-30 years. The math is simple: pennies per square foot now saves dollars later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Our Seal Coating Process
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Surface Preparation</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We start with a thorough cleaning using industrial blowers and power brooms to remove dirt, debris, and loose material. Any vegetation growing in cracks is removed, and oil spots are treated with primer. Proper prep is 50% of a quality seal coat job.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Crack Filling First</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    All cracks ¼" or wider are filled with hot-pour rubberized crack filler before seal coating. This prevents water infiltration and gives you a smooth, uniform surface. Cracks must be addressed—seal coating alone won't fix them.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Commercial-Grade Sealer Application</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We apply two coats of commercial-grade coal tar or asphalt emulsion sealer using professional spray equipment. Each coat is applied evenly at manufacturer-specified thickness (not watered down). High-traffic areas get extra coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Curing & Protection</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Seal coating needs 24-48 hours to cure depending on weather conditions. We coordinate timing with your worship schedule and events so your lot is ready when you need it. We also monitor weather forecasts—no work starts if rain is predicted within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Timing */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Seal Coating Cost & Timing
            </h2>

            <div className="bg-white rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Typical Ontario Pricing</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Most Ontario parking lots cost <strong>$0.20-$0.35 per square foot</strong> for professional two-coat seal coating, including surface prep and crack filling. Faith communities typically pay:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Small lots (5,000-10,000 sq ft):</strong> $1,500-$3,000</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Medium lots (10,000-20,000 sq ft):</strong> $3,000-$6,000</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Large lots (20,000+ sq ft):</strong> $6,000-$12,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Important:</strong> Every lot is different. Size, condition, accessibility, and amount of required crack repair all affect final cost. Our free drone inspection provides an accurate quote with no surprises.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Best Time for Seal Coating in Ontario</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Seal coating requires temperatures above 10°C (50°F) and low humidity for proper curing. In Ontario, this means <strong>May through September</strong> is your seal coating season. We typically book faith communities in late spring (May-June) and late summer (August-September) to avoid peak heat and ensure optimal curing conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 text-center">
              Seal Coating Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1">
                <AccordionTrigger>
                  How often should Ontario parking lots be seal coated?
                </AccordionTrigger>
                <AccordionContent>
                  Every 2-3 years for most properties. Ontario's freeze-thaw cycles and UV exposure accelerate asphalt aging, making regular seal coating critical. We inspect your lot during the free drone assessment and provide an honest recommendation—sometimes that means "wait another year" if your lot is still in good condition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger>
                  What's the difference between coal tar and asphalt emulsion sealers?
                </AccordionTrigger>
                <AccordionContent>
                  Coal tar sealer is more durable and resistant to gas/oil spills, but has environmental concerns in some jurisdictions. Asphalt emulsion is eco-friendlier and still provides excellent protection. We recommend the best option for your specific property and local regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3">
                <AccordionTrigger>
                  Can you seal coat in cool weather?
                </AccordionTrigger>
                <AccordionContent>
                  Seal coating requires temperatures above 10°C (50°F) during application and for 24-48 hours after. Below this temperature, sealer won't cure properly and can fail prematurely. We monitor forecasts carefully and won't start work if conditions aren't ideal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger>
                  How long until we can use the parking lot after seal coating?
                </AccordionTrigger>
                <AccordionContent>
                  24-48 hours depending on weather. We coordinate timing with your worship schedule and events to ensure your lot is ready when you need it. Most faith communities schedule work Monday-Tuesday so the lot is fully cured by Friday/Saturday services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5">
                <AccordionTrigger>
                  Does seal coating fix cracks?
                </AccordionTrigger>
                <AccordionContent>
                  No. Seal coating protects asphalt but doesn't repair structural damage. Cracks ¼" or wider must be filled with hot-pour rubberized filler before seal coating. We include comprehensive crack filling in our proposals—seal coating alone won't fix cracks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6">
                <AccordionTrigger>
                  Is seal coating worth it for older parking lots?
                </AccordionTrigger>
                <AccordionContent>
                  It depends on the base condition. If your asphalt has extensive alligatoring (web-like cracking), potholes, or base failure, seal coating won't help—you need resurfacing or replacement. But if the base is sound and you just have surface wear and minor cracking, seal coating can extend its life significantly. Our drone inspection assesses whether seal coating makes sense or if you need a different solution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 text-center">
              Seal Coating Services Across Ontario
            </h2>
            <p className="text-xl text-neutral-600 text-center">
              We serve faith communities, commercial properties, and residential driveways in all Ontario regions
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/regions/southwestern-ontario" className="text-primary hover:underline font-semibold">
                Southwestern Ontario
              </Link>
              <Link href="/regions/central-ontario" className="text-primary hover:underline font-semibold">
                Central Ontario
              </Link>
              <Link href="/regions/golden-horseshoe-niagara" className="text-primary hover:underline font-semibold">
                Golden Horseshoe / Niagara
              </Link>
              <Link href="/regions/eastern-ontario" className="text-primary hover:underline font-semibold">
                Eastern Ontario
              </Link>
              <Link href="/regions/northern-ontario" className="text-primary hover:underline font-semibold">
                Northern Ontario
              </Link>
              <Link href="/service-areas" className="text-primary hover:underline font-semibold">
                View All Service Areas →
              </Link>
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
                Get Your Free Seal Coating Assessment
              </h2>
              <p className="text-xl text-neutral-600">
                Professional drone inspection with detailed quote—no surprises
              </p>
            </div>

            <ContactForm page="seal-coating-service" />
          </div>
        </div>
      </section>
    </>
  )
}

