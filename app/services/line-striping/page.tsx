import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Accessibility, Shield, Ruler, Users } from "lucide-react"
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
  title: "AODA-Compliant Line Striping Ontario | Parking Lot Markings | Steward Seal Coating",
  description: "Professional parking lot line striping and AODA-compliant accessibility markings for Ontario faith communities and commercial properties. High-visibility paint, proper sizing, and accessibility standards compliance.",
  keywords: [
    "line striping Ontario",
    "AODA compliant markings",
    "parking lot striping",
    "accessible parking symbols",
    "line painting Ontario",
    "parking lot markings"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/services/line-striping"
  },
  openGraph: {
    title: "AODA-Compliant Line Striping Ontario | Steward Seal Coating",
    description: "Professional parking lot line striping and AODA-compliant accessibility markings for Ontario properties.",
    type: "website",
    locale: "en_CA",
  },
}

export default function LineStripingPage() {
  // Generate FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should parking lot line striping be refreshed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Line striping is typically refreshed every 1–2 years, or whenever markings fade, layouts change, or seal coating is applied."
        }
      },
      {
        "@type": "Question",
        "name": "Do churches need AODA-compliant parking lot striping in Ontario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most churches in Ontario are required to comply with AODA standards when providing parking for the public, including proper accessible spaces and signage."
        }
      },
      {
        "@type": "Question",
        "name": "What makes line striping AODA-compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AODA-compliant striping includes correct space dimensions, access aisles, high-contrast pavement markings, and required vertical signage."
        }
      },
      {
        "@type": "Question",
        "name": "Is line striping affected by Ontario winters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Snowplowing, road salt, and freeze-thaw cycles can wear down markings, making periodic restriping necessary for visibility and safety."
        }
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-line-striping.webp"
            alt="Professional AODA-compliant line striping in Ontario"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              AODA-Compliant Line Striping in Ontario
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-8">
              Professional parking lot line striping with proper sizing, high-visibility paint, and full compliance with Ontario's Accessibility for Ontarians with Disabilities Act (AODA).
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-cta="line-striping-quote"
              data-location="service-page-hero"
            >
              <Link href="#contact">Get Your Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Line Striping Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Why Proper Line Striping Matters
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-4">
              <p>
                Faded, worn, or improperly sized parking lot lines aren't just an eyesore—they're a safety issue, a legal liability, and a barrier to accessibility.
              </p>
              
              <p>
                <strong>For faith communities specifically:</strong> Ontario's Accessibility for Ontarians with Disabilities Act (AODA) requires accessible parking spaces with proper width, clear markings, and correctly sized International Symbol of Access (ISA). Non-compliant markings can result in complaints, accessibility issues for congregants with mobility challenges, and in some cases, fines.
              </p>
              
              <p>
                Beyond compliance, clear line striping improves traffic flow, maximizes parking capacity, and creates a professional, well-maintained appearance. When people pull into your parking lot, fresh, bright lines communicate "this organization cares about details and maintains their property properly."
              </p>
              
              <p className="font-semibold text-neutral-900">
                Professional line striping with AODA compliance included is an investment in safety, accessibility, and your organization's reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AODA Compliance */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-bold">
                <Accessibility className="h-6 w-6" />
                <span>AODA Compliance Included</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                What AODA-Compliant Markings Require
              </h2>
              <p className="text-xl text-neutral-600">
                We ensure your parking lot meets all Ontario accessibility standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Ruler className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Proper Space Sizing
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>3.4m (11.2 ft) wide minimum</strong> for accessible spaces</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>2.0m (6.6 ft) wide</strong> access aisle between spaces</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>6.0m (19.7 ft) deep minimum</strong> for all accessible parking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Accessibility className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  ISA Symbol Requirements
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Minimum 914mm (36") height</strong> for ground-painted symbols</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>High-contrast colors</strong> (typically white on blue background)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Clearly visible</strong> from both driving and walking approach</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Location & Quantity
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Closest to accessible entrances</strong> with the shortest route</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Minimum quantity:</strong> 1 accessible space per 12-25 regular spaces</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Level surface</strong> with proper slope (max 1:50)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Van-Accessible Spaces
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>At least one van-accessible space</strong> for larger vehicles</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Wider access aisle</strong> (2.4m / 7.9 ft) for wheelchair lifts</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>"Van Accessible" signage</strong> in addition to ISA symbol</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">We Handle All Compliance Details:</strong> You don't need to know AODA specifications—we do. Every line striping project includes compliant accessible parking automatically. We measure, mark, and paint to exact Ontario accessibility standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Our Line Striping Process
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Layout Planning & Design</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We review your existing layout or design a new one that maximizes parking capacity while meeting AODA requirements. Accessible spaces are positioned closest to entrances with proper approach routes. Fire lanes, loading zones, and directional arrows are planned for optimal traffic flow.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Surface Preparation</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    The parking lot is thoroughly cleaned and swept to remove dirt, debris, and loose material. New seal coating must be fully cured (minimum 30 days) before striping. Any old, worn paint is power-washed or removed as needed for clean, professional results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Precision Marking & Measurement</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Every line is measured and marked using professional layout tools. Parking spaces are typically 2.7m × 5.5m (9ft × 18ft) for standard spaces, with accessible spaces at compliant 3.4m × 6.0m dimensions. Chalk lines or marking paint guides application for straight, uniform results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Professional Paint Application</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We use commercial-grade traffic paint applied with professional airless striping equipment. Lines are 100mm (4") wide minimum, with accessible markings using high-visibility white paint. ISA symbols are stenciled at proper size with reflective paint for maximum visibility. Paint dries in 30-60 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Line Striping Cost & Timing
            </h2>

            <div className="bg-white rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Typical Ontario Pricing</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Line striping is priced per space or per linear foot depending on project scope:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$25-$40 per parking space</strong> for full lot re-striping</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$75-$125 per accessible space</strong> (wider dimensions + ISA symbol)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$500-$800 minimum</strong> for small jobs (mobilization costs)</span>
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  Most Ontario faith community parking lots with 20-40 spaces cost <strong>$1,200-$2,500</strong> for complete re-striping including AODA-compliant accessible parking.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Included in All Projects:</strong> AODA compliance review, accessible parking layout, ISA symbols, high-visibility paint, and professional equipment application. No hidden fees for accessibility compliance—it's standard on every job.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">When to Re-Stripe Your Parking Lot</h3>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Lines should be re-striped every 2-3 years in Ontario, or whenever markings become faded or difficult to see. Ideal timing:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>After seal coating:</strong> Wait 30+ days for sealer to fully cure before striping</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Late spring/summer/early fall:</strong> Warm, dry weather for best paint adhesion</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Coordinate with worship schedule:</strong> We work around your events and services</span>
                  </li>
                </ul>
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
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  How often should parking lot line striping be refreshed?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Line striping is typically refreshed every 1–2 years, or whenever markings fade, layouts change, or seal coating is applied.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Do churches need AODA-compliant parking lot striping in Ontario?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Most churches in Ontario are required to comply with AODA standards when providing parking for the public, including proper accessible spaces and signage.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  What makes line striping AODA-compliant?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  AODA-compliant striping includes correct space dimensions, access aisles, high-contrast pavement markings, and required vertical signage.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Is line striping affected by Ontario winters?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Yes. Snowplowing, road salt, and freeze-thaw cycles can wear down markings, making periodic restriping necessary for visibility and safety.
                </p>
              </div>
            </div>

            {/* Keep existing detailed FAQs in Accordion below global FAQs */}
            <div className="mt-12 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Additional Technical Questions
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1">
                <AccordionTrigger>
                  How many accessible parking spaces do we need?
                </AccordionTrigger>
                <AccordionContent>
                  AODA requires a minimum number based on total spaces: 1-12 spaces = 1 accessible; 13-100 spaces = 1 per 25 spaces; 101-200 = 4 plus 1 per 50 additional; 200+ = 6 plus 1 per 100 additional. At least one must be van-accessible. We calculate exact requirements during your free assessment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger>
                  Can line striping be done in cool weather?
                </AccordionTrigger>
                <AccordionContent>
                  Traffic paint requires temperatures above 10°C (50°F) for proper adhesion and drying. Below this temperature, paint doesn't bond well and can peel prematurely. Ontario line striping season is typically May-October.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3">
                <AccordionTrigger>
                  How long does line striping last in Ontario?
                </AccordionTrigger>
                <AccordionContent>
                  Professional traffic paint on properly sealed asphalt typically lasts 2-3 years with normal traffic. High-traffic areas (entrances, fire lanes) may fade faster and need touch-ups sooner. Winter plowing, salt usage, and UV exposure all affect longevity. We recommend re-striping every 2-3 years or when lines become difficult to see.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger>
                  Do we need new striping if we just seal coated?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Seal coating covers existing lines—they need to be re-applied. This is standard in parking lot maintenance and should be budgeted as part of seal coating projects. We include line striping in our comprehensive packages, with seal coating and striping sequenced properly (30+ day gap between).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5">
                <AccordionTrigger>
                  Can you change our parking lot layout?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. Many properties benefit from layout optimization—better traffic flow, more spaces, improved accessible parking placement. We can redesign your layout to maximize capacity while meeting all AODA requirements. This is included in your free drone assessment and proposal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6">
                <AccordionTrigger>
                  What about fire lanes and no-parking zones?
                </AccordionTrigger>
                <AccordionContent>
                  We mark fire lanes, no-parking zones, loading zones, and restricted areas as part of comprehensive line striping. Fire lanes typically use red or yellow markings with "NO PARKING FIRE LANE" text. These are critical for emergency access and Ontario Fire Code compliance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 text-center">
              Line Striping Services Across Ontario
            </h2>
            <p className="text-xl text-neutral-600 text-center">
              AODA-compliant parking lot markings for all Ontario regions
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
                Get Your Free Striping Assessment
              </h2>
              <p className="text-xl text-neutral-600">
                We'll review AODA compliance and provide exact pricing—no surprises
              </p>
            </div>

            <ContactForm page="line-striping-service" />
          </div>
        </div>
      </section>
    </>
  )
}

