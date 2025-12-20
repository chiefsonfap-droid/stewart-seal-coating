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

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="q1">
            <AccordionTrigger>
              Do you serve all of Ontario?
            </AccordionTrigger>
            <AccordionContent>
              We currently serve five major regions: Southwestern Ontario, Central Ontario, the Golden 
              Horseshoe/Niagara, Eastern Ontario, and Northern Ontario. We group our projects into 
              regional "routes" to keep our pricing fair and our service prompt.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>
              Do you only serve Christian churches?
            </AccordionTrigger>
            <AccordionContent>
              Not at all. We serve faith communities of all traditions—churches of every denomination, 
              synagogues, mosques, temples, gurdwaras, and other houses of worship. While churches make 
              up a large portion of our client base, we treat every faith community with the same level 
              of respect and priority.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>
              What insurance documentation do you provide?
            </AccordionTrigger>
            <AccordionContent>
              We provide a complete Certificate of Insurance (COI) naming your church or organization as 
              the certificate holder, along with our current WSIB Clearance Certificate. All documentation 
              is included in your Board Approval Kit before work begins. This protects your organization 
              from contractor liability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>
              Are the materials you use safe for our congregation?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We use commercial-grade products that meet Canadian safety standards and WHMIS workplace 
              safety requirements. All materials are safe once cured (24-48 hours) and suitable for 
              facilities where children and families gather. We provide complete Material Safety Data 
              Sheets (MSDS) for your records and are happy to discuss product specifications with your 
              facilities committee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q5">
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
              What exactly is WSIB clearance and why is it mandatory?
            </AccordionTrigger>
            <AccordionContent>
              WSIB (Workplace Safety and Insurance Board) clearance is your primary protection against 
              contractor liability. If a worker is injured on your property, a clearance certificate 
              proves the contractor is in good standing and protects your organization from legal and 
              financial risk. We provide a fresh WSIB certificate with every contract—never hire a 
              contractor who can't provide one.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q8">
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

          <AccordionItem value="q9">
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

          <AccordionItem value="q10">
            <AccordionTrigger>
              Can you service residential driveways or commercial lots?
            </AccordionTrigger>
            <AccordionContent>
              Yes! While faith communities receive priority scheduling in our route planning, we serve 
              residential and commercial clients in the same regions. If we're already in your area 
              serving a local church or temple, we're happy to add your driveway or commercial lot to 
              the route—it keeps our pricing competitive and your service fast.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q11">
            <AccordionTrigger>
              Do you have a referral program?
            </AccordionTrigger>
            <AccordionContent>
              Yes! When you refer another church or organization to us, you both save money. For 
              projects $8,000 or more: $500 each. For projects under $8,000: $250 each. Choose cash 
              payment or credit toward your next service (Years 3–5 when resealing is typically needed). 
              No limit on referrals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q12">
            <AccordionTrigger>
              What is the 3-Year Stewardship Guarantee™?
            </AccordionTrigger>
            <AccordionContent>
              It's our promise that the work will last. It covers seal coat adhesion, crack fill 
              durability, and line marking. To keep that promise, we include annual drone inspections 
              for three years to catch any small surface issues before they turn into expensive problems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q13">
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
    </section>
  )
}

