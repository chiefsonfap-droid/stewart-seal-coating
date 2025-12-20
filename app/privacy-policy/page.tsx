import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Steward Seal Coating",
  description: "Learn how Steward Seal Coating collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            How we protect and handle your information
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
              Steward Seal Coating ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Information We Collect</h2>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Information You Provide:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Property details for project estimates</li>
              <li>Communication preferences</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Information Collected Automatically:</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">How We Use Your Information</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="space-y-2 text-neutral-700">
              <li>Provide project estimates and drone assessments</li>
              <li>Schedule and coordinate seal coating services</li>
              <li>Process payments and maintain transaction records</li>
              <li>Send project updates and service reminders</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Information Sharing</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>Service providers who assist with business operations (payment processing, scheduling software, email services)</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors (accountants, lawyers) bound by confidentiality agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Data Security</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              We implement reasonable security measures to protect your information, including:
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>Secure Socket Layer (SSL) encryption for data transmission</li>
              <li>Restricted access to personal information</li>
              <li>Regular security assessments</li>
            </ul>
            
            <p className="text-neutral-700 leading-relaxed mt-4">
              However, no internet transmission is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Your Rights</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 text-neutral-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>File a complaint with relevant privacy authorities</li>
            </ul>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Cookies</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              Our website may use cookies to enhance user experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Third-Party Links</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Children's Privacy</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect information from minors.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Changes to This Policy</h2>
            
            <p className="text-neutral-700 leading-relaxed">
              We may update this Privacy Policy periodically. The "Last Updated" date at the top reflects the most recent revision. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6">Contact Us</h2>
            
            <p className="text-neutral-700 leading-relaxed mb-4">
              For privacy-related questions or requests, contact us:
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

