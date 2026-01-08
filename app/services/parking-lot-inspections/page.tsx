import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Camera, FileText, Shield, Plane, AlertTriangle } from "lucide-react"
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
  title: "Free Drone Parking Lot Inspections Ontario | Aerial Assessments | Steward Seal Coating",
  description: "Professional drone parking lot inspections for Ontario faith communities. Identify damage, drainage issues, and maintenance needs with aerial assessments. Free with service quotes.",
  keywords: [
    "drone parking lot inspection Ontario",
    "aerial asphalt assessment",
    "parking lot inspection church",
    "asphalt inspection Ontario",
    "parking lot condition assessment"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/services/parking-lot-inspections"
  },
  openGraph: {
    title: "Free Drone Parking Lot Inspections Ontario | Steward Seal Coating",
    description: "Professional drone parking lot inspections for Ontario properties. Identify damage and maintenance needs with aerial assessments.",
    type: "website",
    locale: "en_CA",
  },
}

export default function ParkingLotInspectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-drone-inspection.webp"
            alt="Professional drone parking lot inspection in Ontario"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Free Drone Parking Lot Inspections in Ontario
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-8">
              See your parking lot from above. Our aerial drone inspections reveal hidden damage, drainage issues, and maintenance needs that ground-level assessments miss—completely free with service quotes.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-cta="inspection-quote"
              data-location="service-page-hero"
            >
              <Link href="#contact">Schedule Your Free Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Drone Inspections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Why Drone Inspections Reveal More Than Ground Assessments
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-4">
              <p>
                Walking a parking lot gives you a ground-level view of obvious problems—visible cracks, potholes, faded markings. But some of the most critical issues are invisible from the ground.
              </p>
              
              <p>
                <strong>Aerial drone inspections reveal:</strong>
              </p>
              
              <ul className="space-y-3">
                <li><strong>Ponding water and drainage failures</strong> — Areas where water pools after rain, indicating base settling or improper grading that accelerates freeze-thaw damage</li>
                <li><strong>Cracking patterns</strong> — Alligatoring, longitudinal cracks, and structural issues that indicate base failure vs. surface wear</li>
                <li><strong>UV oxidation severity</strong> — Gray, faded areas where asphalt has lost protective oils and is vulnerable to rapid deterioration</li>
                <li><strong>Traffic pattern wear</strong> — High-stress zones (entrances, turning areas) that need priority attention</li>
                <li><strong>Line striping condition</strong> — Faded or missing markings that affect safety and accessibility compliance</li>
              </ul>
              
              <p>
                For church boards and facility committees, aerial assessments provide clear, visual documentation that supports budget requests and long-term planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                What's Included in Your Drone Inspection
              </h2>
              <p className="text-xl text-neutral-600">
                Comprehensive aerial assessment with documentation ready for boards and committees
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Aerial Photo & Video Documentation
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  High-resolution photos and 4K video of your entire parking lot from multiple angles. Perfect for board presentations, facility planning, and before/after comparisons. You keep all files for your records and marketing use.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Detailed Condition Report
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Written assessment identifying all damage, drainage issues, and maintenance priorities. Includes severity ratings (minor/moderate/urgent) and photographic evidence for each concern. Board-ready format with executive summary.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Honest Recommendations
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Clear guidance on what needs attention now vs. later. If your lot doesn't need seal coating yet, we'll tell you. If crack repair is urgent but striping can wait, you'll know. No pressure, just stewardship-focused advice.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Bonus: Property Marketing Photos
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Professional aerial photos of your entire property—church building, parking lot, landscaping—perfect for websites, newsletters, and community outreach. A $350 value included free with every inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              When to Schedule a Parking Lot Inspection
            </h2>

            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Spring (April-May) — Post-Winter Assessment</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>Best time to identify winter damage.</strong> Freeze-thaw cycles leave new cracks, potholes, and base failures visible. Early detection allows planning and budgeting for summer repairs. Spring inspections help churches prioritize maintenance before peak wedding and event season.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Fall (September-October) — Pre-Winter Planning</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>Ideal for long-term planning.</strong> Fall inspections assess current condition before winter and help budget for next year's maintenance. Perfect timing for board presentations, capital planning, and securing contractor commitments for early-season work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Before Major Decisions — Assessment for Boards</h3>
                    <p className="text-neutral-700 leading-relaxed">
                      <strong>When you need clarity on options.</strong> Seal coating vs. resurfacing? Repair now or wait? Aerial inspections provide objective documentation that helps boards make informed decisions. Visual evidence removes guesswork from facility planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspection Process */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              How Our Inspection Process Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Schedule Your Inspection</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Contact us with your property location and any specific concerns. We'll schedule a time that works around your worship services and events. Inspections typically take 30-45 minutes with no disruption to property use.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">On-Site Aerial Assessment</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We fly our commercial drone over your entire parking lot and property, capturing high-resolution photos and video from multiple angles and altitudes. We also conduct a ground-level walkthrough to assess specific problem areas up close.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Analysis & Report Preparation</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We review all footage, identify damage and maintenance needs, and prepare a comprehensive condition report with prioritized recommendations. Reports are written in clear, non-technical language suitable for board presentations.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Detailed Quote & Consultation</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    You receive the full inspection report, all photos/video, and a detailed service quote. We're available to present findings to your board or committee and answer questions. No pressure—just clear information to support smart decisions.
                  </p>
                </div>
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
              Parking Lot Inspection Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1">
                <AccordionTrigger>
                  Is the drone inspection really free?
                </AccordionTrigger>
                <AccordionContent>
                  Yes—completely free when you request a service quote for seal coating, crack filling, or line striping. There's no obligation to proceed with any work. Even if you decide not to move forward, you keep all photos, video, and the written condition report.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger>
                  How long does an inspection take?
                </AccordionTrigger>
                <AccordionContent>
                  On-site time is typically 30-45 minutes. The drone flight itself takes 15-20 minutes, and we spend additional time on ground-level assessment. You'll receive the full report and quote within 2-3 business days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3">
                <AccordionTrigger>
                  Do we need to close the parking lot during inspection?
                </AccordionTrigger>
                <AccordionContent>
                  No. Drone inspections are conducted safely over active parking lots. We simply ask that you let us know when your property has the least traffic (typically mid-week) for the clearest aerial footage. Normal operations can continue throughout the inspection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger>
                  What if the drone reveals expensive damage we can't afford right now?
                </AccordionTrigger>
                <AccordionContent>
                  We prioritize recommendations into "urgent," "recommended," and "future planning" categories. Not everything needs to be done at once. Often, addressing one or two critical issues (like crack repair) can buy you years before more expensive work is needed. We help you create a phased plan that fits your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5">
                <AccordionTrigger>
                  Can we use the aerial photos and video for other purposes?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. All photos and video we capture are yours to use however you'd like—website, social media, newsletters, facility planning presentations, fundraising materials. Many churches use aerial footage for community outreach and donor communications.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6">
                <AccordionTrigger>
                  How often should parking lots be inspected?
                </AccordionTrigger>
                <AccordionContent>
                  Annually is ideal for proactive maintenance planning. Spring inspections catch winter damage early, and fall inspections support budget planning for the next year. For churches with older parking lots or known issues, twice-yearly inspections (spring and fall) provide better monitoring and earlier intervention.
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
              Drone Inspections Across Ontario
            </h2>
            <p className="text-xl text-neutral-600 text-center">
              Professional aerial parking lot assessments for all Ontario regions
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
                Schedule Your Free Drone Inspection
              </h2>
              <p className="text-xl text-neutral-600">
                See your parking lot from a new perspective—no cost, no obligation
              </p>
            </div>

            <ContactForm page="parking-lot-inspections-service" />
          </div>
        </div>
      </section>
    </>
  )
}



