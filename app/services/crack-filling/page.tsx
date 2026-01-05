import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, AlertTriangle, Snowflake, DollarSign, Clock } from "lucide-react"
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
  title: "Hot Rubber Crack Filling Ontario | Asphalt Crack Repair | Steward Seal Coating",
  description: "Professional hot-pour rubberized crack filling for Ontario parking lots and driveways. Stop water infiltration and prevent freeze-thaw damage before small cracks become expensive potholes. WSIB certified.",
  keywords: [
    "crack filling Ontario",
    "hot rubber crack repair",
    "asphalt crack sealing",
    "parking lot crack filling",
    "driveway crack repair Ontario",
    "rubberized crack filler"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/services/crack-filling"
  },
  openGraph: {
    title: "Hot Rubber Crack Filling Ontario | Steward Seal Coating",
    description: "Professional hot-pour rubberized crack filling for Ontario parking lots. Stop water infiltration and prevent freeze-thaw damage.",
    type: "website",
    locale: "en_CA",
  },
}

export default function CrackFillingPage() {
  // Generate FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is crack repair important for parking lots in Ontario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crack repair prevents water from entering the asphalt, where freeze-thaw cycles can cause rapid expansion and structural damage."
        }
      },
      {
        "@type": "Question",
        "name": "When is the best time of year for asphalt crack repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crack repair is most effective from late spring through early fall, when temperatures allow repair materials to properly bond."
        }
      },
      {
        "@type": "Question",
        "name": "Does crack repair extend the life of seal coating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sealing cracks before seal coating helps prevent premature failure and significantly improves the effectiveness of the seal coat."
        }
      },
      {
        "@type": "Question",
        "name": "Are small cracks really a concern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Even small cracks can allow moisture into the asphalt base, leading to larger cracks, potholes, and more costly repairs if left untreated."
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
            src="/images/service-crack-filling.webp"
            alt="Professional hot rubber crack filling application in Ontario"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Hot Rubber Crack Filling in Ontario
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-8">
              Stop water infiltration and prevent freeze-thaw damage before small cracks become expensive potholes. Professional hot-pour rubberized crack repair that lasts.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-cta="crack-filling-quote"
              data-location="service-page-hero"
            >
              <Link href="#contact">Get Your Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cracks Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Why Small Cracks Become Big Problems in Ontario
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed space-y-4">
              <p>
                A ¼-inch crack doesn't look like much. But in Ontario's climate, that tiny crack is a countdown timer to expensive damage.
              </p>
              
              <p>
                <strong>Here's what happens:</strong> Water seeps into the crack during rain or snowmelt. When temperatures drop below freezing—which happens constantly throughout Ontario winters—that water expands by about 9% as it turns to ice. This expansion pushes the crack wider. When temperatures rise above freezing, the ice melts and more water flows deeper into the crack. The cycle repeats dozens of times each winter.
              </p>
              
              <p>
                This freeze-thaw cycle is relentless. A ¼-inch crack this fall can become a ½-inch crack by spring. By next fall, it's an inch wide. Within 2-3 years, you have a pothole. The asphalt base is compromised, water is pooling underneath, and you're looking at a $2,000-$5,000 repair instead of a $200-$400 crack fill.
              </p>
              
              <p className="font-semibold text-neutral-900">
                Professional crack filling stops this cycle. It's the single most cost-effective maintenance you can do for Ontario asphalt.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-neutral-900 mb-2">Don't Wait Until Spring</p>
                <p className="text-neutral-700 leading-relaxed">
                  Most property managers think "I'll deal with cracks in spring." By then, the damage is done. Ontario winters destroy cracked asphalt. The best time to fill cracks is fall (before freeze-thaw starts) or late spring (right after winter damage appears).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Pour vs Cold Pour */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Why We Use Hot-Pour Rubberized Crack Filler
              </h2>
              <p className="text-xl text-neutral-600">
                Not all crack filling is created equal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hot Pour - What We Use */}
              <div className="bg-white rounded-lg p-8 space-y-4 border-2 border-accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Hot-Pour Rubberized (What We Use)
                  </h3>
                </div>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Flexible:</strong> Expands and contracts with temperature changes without cracking</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Durable:</strong> Lasts 3-5 years in Ontario conditions when applied correctly</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Bonds Properly:</strong> Applied at 375°F, it melts into crack walls for superior adhesion</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>Waterproof:</strong> Creates a true water barrier that stops freeze-thaw damage</span>
                  </li>
                </ul>
              </div>

              {/* Cold Pour - What Others Use */}
              <div className="bg-neutral-100 rounded-lg p-8 space-y-4 opacity-75">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-neutral-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-700">
                    Cold-Pour (Cheaper Alternative)
                  </h3>
                </div>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brittle:</strong> Cracks and breaks apart during freeze-thaw cycles</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Short-Lived:</strong> Often fails within 1-2 years, requiring re-application</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Poor Adhesion:</strong> Sits on top of cracks instead of bonding to walls</span>
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Water Penetration:</strong> Doesn't seal effectively, allowing continued damage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">The Bottom Line:</strong> Cold-pour crack filler is cheaper upfront, but you'll pay more in the long run when it fails and you have to redo the work—or worse, repair pothole damage. Hot-pour rubberized filler costs more initially but lasts 3-5x longer and actually protects your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Our Crack Filling Process
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Crack Cleaning & Preparation</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We use industrial blowers and wire brushes to remove dirt, vegetation, and loose material from every crack. Any debris left in the crack prevents proper adhesion. Clean preparation is critical for long-lasting results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Hot-Pour Material Heating</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Rubberized crack filler is heated to 375°F in our melter/applicator. This temperature is critical—too cool and it won't bond properly; too hot and it degrades. We monitor temperature constantly throughout application.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Precision Application</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Hot material is poured directly into cracks, filling them completely from bottom to top. We slightly overfill so material settles flush with the surface. Proper application creates a flexible, waterproof seal that moves with the asphalt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900">Surface Treatment & Curing</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Freshly filled cracks are treated with fine sand to prevent tracking and improve traction. Material cools and sets within 30-60 minutes. Unlike seal coating, crack filling can be driven on almost immediately after cooling.
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
              Crack Filling Cost & Timing
            </h2>

            <div className="bg-white rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Typical Ontario Pricing</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Crack filling is priced by <strong>linear footage</strong> (how many feet of cracks you have). Professional hot-pour crack filling typically costs:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex gap-2">
                    <DollarSign className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$3-$5 per linear foot</strong> for standard ¼-½" cracks</span>
                  </li>
                  <li className="flex gap-2">
                    <DollarSign className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$5-$8 per linear foot</strong> for wider cracks (½-1")</span>
                  </li>
                  <li className="flex gap-2">
                    <DollarSign className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span><strong>$200-$500 minimum</strong> for small jobs (mobilization costs)</span>
                  </li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  Most Ontario parking lots have 100-300 linear feet of cracks requiring repair, putting typical projects in the <strong>$500-$1,500 range</strong>.
                </p>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Cost Comparison:</strong> Filling cracks early costs $3-$5/ft. Waiting until they become potholes costs $50-$100 per pothole to repair. The math is simple: fix cracks when they're small.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Best Time for Crack Filling in Ontario</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Spring (April-May)</p>
                      <p className="text-neutral-700">
                        Assess winter damage and fill new cracks before summer heat expands them. Must wait until all frost is out of the ground.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Snowflake className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Fall (September-October)</p>
                      <p className="text-neutral-700">
                        <strong>Best time.</strong> Fill cracks before winter freeze-thaw cycles begin. Protects your asphalt through the harshest season.
                      </p>
                    </div>
                  </div>
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
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Why is crack repair important for parking lots in Ontario?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Crack repair prevents water from entering the asphalt, where freeze-thaw cycles can cause rapid expansion and structural damage.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  When is the best time of year for asphalt crack repair?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Crack repair is most effective from late spring through early fall, when temperatures allow repair materials to properly bond.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Does crack repair extend the life of seal coating?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Yes. Sealing cracks before seal coating helps prevent premature failure and significantly improves the effectiveness of the seal coat.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Are small cracks really a concern?
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Yes. Even small cracks can allow moisture into the asphalt base, leading to larger cracks, potholes, and more costly repairs if left untreated.
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
                  How do I know if cracks need filling?
                </AccordionTrigger>
                <AccordionContent>
                  Any crack ¼" or wider should be filled. Smaller cracks (hairline) can wait but should be monitored. Our free drone inspection identifies all cracks and provides a comprehensive repair plan with honest recommendations about what needs attention now vs. later.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger>
                  Can crack filling be done in winter?
                </AccordionTrigger>
                <AccordionContent>
                  Not effectively. Hot-pour crack filler requires air temperatures above 10°C (50°F) and dry conditions. Below this temperature, material doesn't bond properly and can fail prematurely. Ontario crack filling season is April-October.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3">
                <AccordionTrigger>
                  Should cracks be filled before seal coating?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely. Seal coating won't fill cracks—it just coats the surface. All cracks ¼" or wider must be filled first, then seal coating is applied over everything. This is the proper sequence for comprehensive asphalt protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q4">
                <AccordionTrigger>
                  How long does crack filling last?
                </AccordionTrigger>
                <AccordionContent>
                  Hot-pour rubberized crack filler typically lasts 3-5 years when applied correctly. Cold-pour materials often fail within 1-2 years. Longevity depends on material quality, application technique, and Ontario weather exposure. Our 3-Year Stewardship Guarantee covers workmanship—if our crack fills fail prematurely due to application issues, we repair them at no charge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q5">
                <AccordionTrigger>
                  What if cracks re-open after filling?
                </AccordionTrigger>
                <AccordionContent>
                  If a crack re-opens in the exact same spot we filled, that's covered by our workmanship warranty and we'll repair it. If NEW cracks form in different areas (common as asphalt ages), those would be quoted separately. Our annual drone inspections catch new cracks early when they're cheapest to fix.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q6">
                <AccordionTrigger>
                  Can really wide cracks be filled?
                </AccordionTrigger>
                <AccordionContent>
                  Cracks up to 1-1.5" wide can be filled with hot-pour material. Wider than that, we recommend routing (widening the crack with a saw to create clean edges) before filling, or in severe cases, removing and replacing that section of asphalt. Our assessment identifies the best repair approach for each crack.
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
              Crack Filling Services Across Ontario
            </h2>
            <p className="text-xl text-neutral-600 text-center">
              Professional hot-pour crack repair for all Ontario regions
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
                Get Your Free Crack Assessment
              </h2>
              <p className="text-xl text-neutral-600">
                Drone inspection identifies every crack—we'll tell you what needs attention now vs. later
              </p>
            </div>

            <ContactForm page="crack-filling-service" />
          </div>
        </div>
      </section>
    </>
  )
}

