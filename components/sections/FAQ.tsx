import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

/**
 * FAQ Section with shadcn Accordion
 * All 10 Q&A pairs from requirements
 */
export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600">
            Everything you need to know about working with us
          </p>
        </div>

        {/* Services & Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-neutral-900 mb-6">
            Services & Process
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1">
              <AccordionTrigger>
                What is the difference between "seal coating" and "resurfacing"?
              </AccordionTrigger>
              <AccordionContent>
                Seal coating is preventative maintenance that protects and extends the life of your 
                existing asphalt (pennies per square foot). Resurfacing is a major construction project 
                where the top layer is replaced (dollars per square foot). Our goal is to help boards 
                "repair before replacing" to maximize every dollar of their budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>
                What's included in the Steward Protection Package™?
              </AccordionTrigger>
              <AccordionContent>
                It's our "all-in-one" solution: professional seal coating, hot rubber crack filling, 
                and AODA-compliant line striping. You also get our 3-Year Stewardship Guarantee 
                (workmanship warranty + annual drone check-ins), an Aerial Damage Report, and a complete 
                Board Approval Kit to make decision-making easy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>
                What happens during the "Free Drone Inspection"?
              </AccordionTrigger>
              <AccordionContent>
                We fly the lot to get a bird's-eye view that catches damage invisible from the ground, 
                like ponding water or hidden drainage issues. You'll receive an Aerial Damage Report and 
                a Board Approval Kit with photos and a clear cost breakdown. It's a 100% free service to 
                help your committee make an informed decision.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Pricing & Steward Protection Package */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-neutral-900 mb-6">
            Pricing & Steward Protection Package™
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q4">
              <AccordionTrigger>
                What is the 3-Year Stewardship Guarantee™?
              </AccordionTrigger>
              <AccordionContent>
                It's our workmanship warranty that covers seal coat adhesion, crack fill durability, and 
                line marking quality for 3 years. We include annual drone inspections to catch any small 
                surface issues before they turn into expensive problems. If our work fails, we fix it at 
                no charge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>
                Do you have a referral program?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Standard clients earn $400 for referring projects over $5,000 ($200 for smaller projects). 
                Founding Communities earn $600 for projects over $5,000 ($300 for smaller), plus $1,000 milestone 
                bonuses every 5 referrals. The referred community gets $100 off their first project. Credits can 
                be used for future services or donated to your building fund.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Scheduling, Seasons & Disruption */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-neutral-900 mb-6">
            Scheduling, Seasons & Disruption
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q6">
              <AccordionTrigger>
                How long does the seal coating take to cure?
              </AccordionTrigger>
              <AccordionContent>
                Typically 24–48 hours depending on the weather. We always coordinate with your specific 
                worship calendar, mid-week events, and school schedules to ensure your parking lot is dry 
                and ready for use exactly when you need it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger>
                Do you work weekends?
              </AccordionTrigger>
              <AccordionContent>
                It depends on the project. Faith communities typically prefer us not to work Fridays 
                through Sundays out of respect for worship schedules—so we prioritize Monday–Thursday 
                for those clients. This actually opens up our weekends for residential driveways and 
                commercial lots. If you're a homeowner or business owner and weekend service fits your 
                schedule best, we're happy to accommodate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Warranty & Guarantees */}
        <div className="mb-12">
          <h2 className="text-2xl font-black text-neutral-900 mb-6">
            Warranty & Guarantees
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q8">
              <AccordionTrigger>
                What exactly does 'workmanship warranty' mean?
              </AccordionTrigger>
              <AccordionContent>
                We guarantee that our seal coating, crack filling, and line striping will perform as 
                expected for 3 years. If our work fails prematurely due to application issues, we'll 
                redo it at no charge. What we DON'T guarantee is that your asphalt won't develop new 
                problems from weather, traffic, or age—because no contractor can control Ontario's 
                freeze-thaw cycles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9">
              <AccordionTrigger>
                If cracks appear next year, will you fix them for free?
              </AccordionTrigger>
              <AccordionContent>
                It depends. If the cracks RE-OPEN in the same spot we filled (due to our work failing), 
                yes—that's covered by our workmanship warranty. If NEW cracks form in areas that weren't 
                cracked before (common in Ontario winters), those are considered new damage and would be 
                quoted at our preferred client rate (20% off standard pricing). Our annual drone inspection 
                catches new cracks early when they're cheap to fix.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* View All FAQs Link */}
        <div className="text-center mt-8">
          <Link 
            href="/faq" 
            className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}

