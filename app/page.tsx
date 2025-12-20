import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { WhoWeServe } from "@/components/sections/WhoWeServe"
import { StewardPackage } from "@/components/sections/StewardPackage"
import { OptionalAddOns } from "@/components/sections/OptionalAddOns"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ServicesOverview } from "@/components/sections/ServicesOverview"
import { AboutUs } from "@/components/sections/AboutUs"
import { FoundingCommunities } from "@/components/sections/FoundingCommunities"
import { CTA } from "@/components/sections/CTA"
import { ContactForm } from "@/components/forms/ContactForm"
import { homeMetadata } from "@/lib/metadata"
import { generateOrganizationSchema } from "@/lib/schema"

// Dynamic imports for performance
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })))

export const metadata = homeMetadata

/**
 * Homepage
 * 9 sections in order: Hero, Who We Serve, Package, How It Works, Services, About, Founding, FAQ, Contact
 */
export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Page Sections */}
      <Hero />
      <WhoWeServe />
      <StewardPackage />
      <OptionalAddOns />
      <HowItWorks />
      <ServicesOverview />
      <AboutUs />
      <FoundingCommunities />
      <FAQ />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <ContactForm page="homepage" />
          </div>
        </div>
      </section>

      <CTA
        headline="Serving Faith Communities Across Ontario"
        subheadline="Book your free drone inspection and discover the Steward difference."
        primaryLocation="bottom-cta"
      />
    </>
  )
}

