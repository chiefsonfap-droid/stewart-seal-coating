import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Shield, Camera, FileText, Award, Image as ImageIcon } from "lucide-react"

/**
 * The Steward Protection Package™ Section
 * Core offering with "Stewardship, not shortcuts" tagline
 */
export function StewardPackage() {
  return (
    <section id="package" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              The Steward Protection Package™
            </h2>
            <p className="text-xl text-primary-foreground/90 font-semibold">
              Stewardship, not shortcuts.
            </p>
          </div>

          {/* Main Package Card */}
          <div className="bg-white text-neutral-900 rounded-lg shadow-2xl p-8 md:p-12 space-y-10">
            {/* Introduction */}
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our all-in-one solution designed specifically for faith community parking lots. 
              Everything your board needs to make an informed decision, protect your budget, 
              and extend the life of your asphalt.
            </p>

            {/* Core Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                Core Services:
              </h3>

              <div className="space-y-4">
                {/* Service 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Asphalt Seal Coating</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Premium commercial-grade sealer that protects against UV damage, water penetration, 
                      and freeze-thaw cycles. We use products that meet Canadian safety standards and are 
                      safe for congregants, children, and parking lot users once cured (24-48 hours). 
                      Material Safety Data Sheets (MSDS) provided for your records.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Crack Filling</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Hot-pour rubberized crack seal that prevents water infiltration and stops small 
                      problems from becoming expensive replacements.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Line Striping</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      AODA-compliant markings with high-visibility line striping that meets Ontario's 
                      accessibility standards for parking spaces and pathways.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-Year Stewardship Guarantee */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    3-Year Stewardship Guarantee:
                  </h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Annual drone inspections</strong> (Years 1, 2, 3) to catch problems early</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Free touch-ups</strong> if workmanship issues appear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span><strong>Full application warranty</strong> covering materials and workmanship</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Included Bonuses */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900">
                Included Bonuses:
              </h3>

              <div className="space-y-4">
                {/* Bonus 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Free Drone Assessment & Property Photography</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      <span className="font-semibold text-accent">($350 value)</span> — Aerial inspection that reveals 
                      hidden damage like ponding water and drainage issues invisible from the ground, PLUS professional 
                      photos and video of your entire property for your marketing use.
                    </p>
                  </div>
                </div>

                {/* Bonus 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Board Approval Kit</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Complete documentation package including Certificate of Insurance naming your organization, 
                      WSIB Clearance Certificate, detailed proposal with technical specifications, aerial photos, 
                      cost breakdown, timeline, and Material Safety Data Sheets (MSDS) for all products used.
                    </p>
                  </div>
                </div>

                {/* Bonus 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Free Professional Property Photography</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      During your complimentary drone assessment, we'll capture high-resolution aerial and ground 
                      photos of your church property, buildings, and grounds. Use these professionally-shot images 
                      for your website, newsletters, fundraising materials, or social media—at no additional cost.
                    </p>
                  </div>
                </div>

                {/* Bonus 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Weekend & Evening Scheduling Flexibility</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      We respect worship calendars and coordinate scheduling around Friday, Saturday, and 
                      Sunday services, plus mid-week programming.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WSIB Callout */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <div className="flex gap-4 items-start">
                <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-neutral-900">
                    Full WSIB Clearance Certificate Included
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Every contract includes a fresh WSIB Clearance Certificate—your primary protection 
                    against contractor liability. If a worker is injured on your property, this 
                    certificate protects your organization from legal and financial risk.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <Button
                asChild
                size="lg"
                data-cta="drone-inspection"
                data-location="package-section"
              >
                <Link href="#contact">Get Your Free Drone Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

