import Link from "next/link"
import { MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/ContactForm"
import { REGIONS } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service Areas | Ontario Parking Lot Sealing Coverage | Steward Seal Coating",
  description: "We serve faith communities, commercial properties, and residential driveways across all Ontario regions: Southwestern, Central, Golden Horseshoe, Eastern, and Northern Ontario.",
  keywords: [
    "Ontario parking lot sealing service areas",
    "asphalt repair coverage Ontario",
    "seal coating cities Ontario",
    "where we serve parking lot maintenance"
  ],
  openGraph: {
    title: "Service Areas | Ontario Parking Lot Sealing Coverage",
    description: "Serving faith communities across Ontario—from Windsor to Ottawa, Thunder Bay to Toronto. See all cities and regions we serve.",
    type: "website",
    locale: "en_CA",
  },
}

/**
 * Service Areas Hub Page
 * Master page listing all 5 Ontario regions with links to regional pages
 */
export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Ontario Service Areas: Where We Serve
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Serving faith communities first, plus commercial and residential properties across Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Our Coverage Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
              Our Coverage Area
            </h2>
            <p className="text-xl text-neutral-600">
              We organize our service routes by region to keep pricing fair and service prompt. 
              Click any region to see all cities and communities we serve.
            </p>
          </div>

          {/* Region Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REGIONS.map((region) => (
              <Link
                key={region.slug}
                href={`/regions/${region.slug}`}
                className="bg-neutral-50 rounded-lg p-8 hover:shadow-xl transition-all duration-200 group border-2 border-transparent hover:border-primary"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {region.displayName}
                    </h3>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-neutral-700">Major Cities:</p>
                    <p className="text-sm text-neutral-600">
                      {region.cities.slice(0, 5).join(", ")}
                      {region.cities.length > 5 && ` and ${region.cities.length - 5} more`}
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="text-primary font-semibold group-hover:underline">
                      View all cities →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Scheduling Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Priority Scheduling for Faith Communities
              </h2>
              <p className="text-xl text-neutral-600">
                We route by region, but churches, mosques, synagogues, and temples always go first
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Faith-First Routing</h3>
                  <p className="text-sm text-neutral-600">
                    When we plan regional routes, houses of worship get priority scheduling
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Commercial & Residential Welcome</h3>
                  <p className="text-sm text-neutral-600">
                    We serve businesses and homeowners in the same areas as our faith community projects
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Efficient Pricing</h3>
                  <p className="text-sm text-neutral-600">
                    Regional routing keeps travel costs low and pricing competitive
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">Don't see your specific city listed?</strong> We serve 
                the entire province. If you're in Ontario, we can reach you. Contact us to confirm scheduling 
                for your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
                Get Your Free Drone Inspection
              </h2>
              <p className="text-xl text-neutral-600">
                Available in all regions across Ontario
              </p>
            </div>

            <ContactForm page="service-areas" />
          </div>
        </div>
      </section>
    </>
  )
}



