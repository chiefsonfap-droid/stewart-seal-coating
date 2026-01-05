import { Metadata } from "next"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Steward Seal Coating",
  description: "Get answers to common questions about seal coating, crack repair, line striping, pricing, scheduling, and our 3-Year Stewardship Guarantee for Ontario faith communities.",
  keywords: [
    "seal coating FAQ",
    "parking lot maintenance questions",
    "asphalt repair Ontario",
    "church parking lot FAQ"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/faq"
  },
  openGraph: {
    title: "Frequently Asked Questions | Steward Seal Coating",
    description: "Get answers to common questions about seal coating, crack repair, line striping, pricing, and scheduling for Ontario faith communities.",
    type: "website",
    locale: "en_CA",
  },
}

export default function FAQPage() {
  // Generate FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does seal coating actually do for asphalt parking lots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seal coating protects asphalt from water penetration, UV oxidation, road salt, and surface wear. It helps extend the life of a parking lot and improves appearance but does not fix structural damage."
        }
      },
      {
        "@type": "Question",
        "name": "How long does seal coating last in Ontario's climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Ontario, seal coating typically lasts 2-3 years, depending on traffic levels, sun exposure, and whether cracks are properly maintained."
        }
      },
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
        "name": "What's included in the Steward Protection Package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The package includes seal coating, hot rubber crack filling, AODA-compliant line striping, free drone inspection with property photos, a 3-Year Stewardship Guarantee, and priority scheduling for Founding Communities."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a seal coating project take to complete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most church and commercial parking lots can be seal coated in one day, with 24-48 hours required for curing before vehicle traffic resumes."
        }
      },
      {
        "@type": "Question",
        "name": "Can seal coating be scheduled around church services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Seal coating is commonly scheduled mid-week to avoid weekends, worship services, and special events, minimizing disruption."
        }
      },
      {
        "@type": "Question",
        "name": "What exactly does 'workmanship warranty' mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee that our seal coating, crack filling, and line striping will perform as expected for 3 years. If our work fails prematurely due to application issues, we'll redo it at no charge. What we DON'T guarantee is that your asphalt won't develop new problems from weather, traffic, or age—because no contractor can control Ontario's freeze-thaw cycles."
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
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl leading-relaxed opacity-95">
              Everything you need to know about parking lot maintenance, seal coating, and our services for Ontario faith communities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Services & Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-neutral-900 mb-8 pb-4 border-b-2 border-primary">
              Services & Process
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="sp1">
                <AccordionTrigger>
                  <h3 className="text-left">What does seal coating actually do for asphalt parking lots?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Seal coating protects asphalt from water penetration, UV oxidation, road salt, and surface wear. It helps extend the life of a parking lot and improves appearance but does not fix structural damage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sp2">
                <AccordionTrigger>
                  <h3 className="text-left">How long does seal coating last in Ontario's climate?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    In Ontario, seal coating typically lasts 2–3 years, depending on traffic levels, sun exposure, and whether cracks are properly maintained.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sp3">
                <AccordionTrigger>
                  <h3 className="text-left">Why is crack repair important for parking lots in Ontario?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Crack repair prevents water from entering the asphalt, where freeze-thaw cycles can cause rapid expansion and structural damage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sp4">
                <AccordionTrigger>
                  <h3 className="text-left">When is the best time of year for asphalt crack repair?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Crack repair is most effective from late spring through early fall, when temperatures allow repair materials to properly bond.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sp5">
                <AccordionTrigger>
                  <h3 className="text-left">Do churches need AODA-compliant parking lot striping in Ontario?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Most churches in Ontario are required to comply with AODA standards when providing parking for the public, including proper accessible spaces and signage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sp6">
                <AccordionTrigger>
                  <h3 className="text-left">What makes line striping AODA-compliant?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    AODA-compliant striping includes correct space dimensions, access aisles, high-contrast pavement markings, and required vertical signage.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Pricing & Steward Protection Package */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-neutral-900 mb-8 pb-4 border-b-2 border-primary">
              Pricing & Steward Protection Package™
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pp1">
                <AccordionTrigger>
                  <h3 className="text-left">What's included in the Steward Protection Package™?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed mb-3">
                    The package includes:
                  </p>
                  <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
                    <li>Two-coat seal coating application</li>
                    <li>Hot rubber crack filling (all cracks ¼" or wider)</li>
                    <li>AODA-compliant line striping</li>
                    <li>Free drone inspection with professional property photos ($350 value)</li>
                    <li>3-Year Stewardship Guarantee</li>
                    <li>Priority scheduling for Founding Communities</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pp2">
                <AccordionTrigger>
                  <h3 className="text-left">Is there a Founding Communities program?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes! The first 50 faith communities receive a 5-year price lock (with 3% annual cap after), priority scheduling, higher referral bonuses ($600/$300 vs $400/$200), and $1,000 milestone bonuses every 5 referrals. Currently 12 spots remaining.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pp3">
                <AccordionTrigger>
                  <h3 className="text-left">Do you have a referral program?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes! Standard clients earn $400 for referring projects over $5,000 ($200 for smaller projects). Founding Communities earn $600 for projects over $5,000 ($300 for smaller), plus $1,000 milestone bonuses every 5 referrals. The referred community gets $100 off their first project. Credits can be used for future services or donated to your building fund.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Scheduling, Seasons & Disruption */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-neutral-900 mb-8 pb-4 border-b-2 border-primary">
              Scheduling, Seasons & Disruption
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="ss1">
                <AccordionTrigger>
                  <h3 className="text-left">How long does a seal coating project take to complete?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Most church and commercial parking lots can be seal coated in one day, with 24–48 hours required for curing before vehicle traffic resumes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ss2">
                <AccordionTrigger>
                  <h3 className="text-left">Can seal coating be scheduled around church services?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    Yes. Seal coating is commonly scheduled mid-week to avoid weekends, worship services, and special events, minimizing disruption.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ss3">
                <AccordionTrigger>
                  <h3 className="text-left">When is the best time to seal coat in Ontario?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    The best time to seal coat in Ontario is typically between June and August, when temperatures are consistently above 10°C and rainfall risk is lower. These conditions allow proper curing and longer-lasting protection.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Warranty & Guarantees */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-neutral-900 mb-8 pb-4 border-b-2 border-primary">
              Warranty & Guarantees
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="wg1">
                <AccordionTrigger>
                  <h3 className="text-left">What exactly does 'workmanship warranty' mean?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    We guarantee that our seal coating, crack filling, and line striping will perform as expected for 3 years. If our work fails prematurely due to application issues, we'll redo it at no charge. What we DON'T guarantee is that your asphalt won't develop new problems from weather, traffic, or age—because no contractor can control Ontario's freeze-thaw cycles.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="wg2">
                <AccordionTrigger>
                  <h3 className="text-left">What if cracks re-open after filling?</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-neutral-700 leading-relaxed">
                    If a crack re-opens in the exact same spot we filled, that's covered by our workmanship warranty and we'll repair it. If NEW cracks form in different areas (common as asphalt ages), those would be quoted separately. Our annual drone inspections catch new cracks early when they're cheapest to fix.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
            Still Have Questions?
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Schedule a free drone inspection and we'll answer all your questions with a clear, honest assessment of your parking lot.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Book Free Inspection
          </Link>
        </div>
      </section>
    </>
  )
}

