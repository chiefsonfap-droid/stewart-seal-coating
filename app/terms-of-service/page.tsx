import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Steward Seal Coating",
  description: "Read the terms and conditions for using Steward Seal Coating's services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-neutral-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-sm text-neutral-700 mb-2">
                <strong>Effective Date:</strong> December 19, 2025
              </p>
              <p className="text-sm text-neutral-700">
                <strong>Last Updated:</strong> December 19, 2025
              </p>
            </div>

            <p className="lead text-xl text-neutral-700 leading-relaxed">
              Please read these Terms of Service ("Terms") carefully before using Steward Seal Coating's website or services.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Agreement to Terms</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              By accessing our website or engaging our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not use our services.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Services Description</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              Steward Seal Coating provides asphalt seal coating, crack filling, line striping, and related parking lot maintenance services primarily to churches and faith-based organizations across Ontario, Canada.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Estimates and Proposals</h2>
            
            <ul className="space-y-2 text-neutral-700">
              <li>All project estimates are based on drone assessments and site conditions at the time of inspection</li>
              <li>Estimates are valid for 60 days from the date issued</li>
              <li>Final pricing may be adjusted if site conditions differ materially from the initial assessment</li>
              <li>Weather conditions may affect project scheduling and timeline</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Steward Protection Package™ Guarantee</h2>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Our 3-year workmanship warranty covers:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>Defects in application technique</li>
              <li>Premature failure due to improper surface preparation</li>
              <li>Material defects (subject to manufacturer warranty)</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">The guarantee does not cover:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>Damage from snow removal equipment</li>
              <li>Structural failures of the underlying pavement</li>
              <li>Natural wear from traffic volume exceeding initial projections</li>
              <li>Acts of God (flooding, earthquakes, extreme weather events)</li>
              <li>Vandalism or intentional damage</li>
            </ul>

            <p className="text-neutral-700 leading-relaxed mt-4 font-semibold">
              Annual drone inspections are required to maintain warranty coverage.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Payment Terms</h2>
            
            <ul className="space-y-2 text-neutral-700">
              <li>50% deposit required upon project approval</li>
              <li>Remaining 50% due upon project completion</li>
              <li>Payment accepted via check, e-transfer, or credit card</li>
              <li>Late payments subject to 1.5% monthly interest charge</li>
              <li>Projects will not begin without deposit payment</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Cancellation Policy</h2>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Client Cancellations:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li><strong>More than 14 days before scheduled start:</strong> Full refund of deposit</li>
              <li><strong>7-14 days before scheduled start:</strong> 50% deposit refund</li>
              <li><strong>Less than 7 days before scheduled start:</strong> No refund (deposit applied to rescheduling)</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Weather Cancellations:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>No penalty for weather-related delays</li>
              <li>Projects automatically rescheduled to next available date</li>
              <li>Deposits fully refundable if rescheduling not possible within the season</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Liability Limitations</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">To the maximum extent permitted by law:</p>
            <ul className="space-y-2 text-neutral-700">
              <li>Our liability is limited to the total amount paid for services</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We maintain commercial general liability insurance</li>
              <li>Client must notify us of defects within 30 days of discovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Property Access</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">Client grants us permission to:</p>
            <ul className="space-y-2 text-neutral-700">
              <li>Access the property for drone assessments and project execution</li>
              <li>Temporarily restrict parking lot access during application and curing</li>
              <li>Use project photos for marketing purposes (unless client opts out in writing)</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Intellectual Property</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              All content on our website (text, graphics, logos, images) is owned by Steward Seal Coating and protected by copyright laws. Unauthorized use is prohibited.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Dispute Resolution</h2>
            
            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Governing Law:</h3>
            <p className="text-neutral-700 leading-relaxed">
              These Terms are governed by the laws of Ontario, Canada.
            </p>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Dispute Process:</h3>
            <ol className="space-y-2 text-neutral-700 list-decimal list-inside">
              <li>Good-faith negotiation between parties</li>
              <li>Mediation through mutually agreed mediator</li>
              <li>Binding arbitration if mediation fails</li>
              <li>Litigation as last resort (Ontario courts)</li>
            </ol>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Indemnification</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              Client agrees to indemnify and hold Steward Seal Coating harmless from claims arising from:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>Inaccurate information provided by client</li>
              <li>Client's failure to disclose relevant site conditions</li>
              <li>Third-party claims related to client's property</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Force Majeure</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              We are not liable for delays or failures caused by circumstances beyond our reasonable control, including:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>Natural disasters</li>
              <li>Government restrictions</li>
              <li>Labor strikes</li>
              <li>Material shortages</li>
              <li>Pandemics or public health emergencies</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Severability</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Changes to Terms</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of updated Terms.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Contact Information</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              For questions about these Terms:
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <p className="font-bold text-neutral-900 text-lg mb-3">Steward Seal Coating</p>
              <p className="text-neutral-700"><strong>Email:</strong> [INSERT EMAIL]</p>
              <p className="text-neutral-700"><strong>Phone:</strong> [INSERT PHONE]</p>
              <p className="text-neutral-700"><strong>Address:</strong> [INSERT BUSINESS ADDRESS]</p>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
              <Button asChild size="lg">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

