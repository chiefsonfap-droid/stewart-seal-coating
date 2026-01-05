import Image from "next/image"
import Link from "next/link"
import { Droplets, Wrench, PenTool, ArrowRight } from "lucide-react"

/**
 * Services Overview Section
 * Brief introduction to the three main services
 */
export function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
            Service Details
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            What each service includes in your Protection Package
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Seal Coating */}
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="relative h-48">
              <Image
                src="/images/service-seal-coating.webp"
                alt="Asphalt seal coating service - Steward Seal Coating"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Seal Coating
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Premium asphalt sealer protects against UV damage, water penetration, and 
                Ontario's harsh freeze-thaw cycles. Extends pavement life by years, not months.
              </p>
              <div className="pt-2 text-sm text-neutral-600">
                <p className="font-semibold">Preventative maintenance at pennies per square foot—far less than resurfacing.</p>
              </div>
              <Link 
                href="/services/seal-coating"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors pt-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Service 2: Hot Rubber Crack Filling */}
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="relative h-48">
              <Image
                src="/images/service-crack-filling.webp"
                alt="Hot rubber crack filling service - Steward Seal Coating"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Hot Rubber Crack Filling
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Durable hot-applied rubberized filler bonds to asphalt and flexes with temperature 
                changes. Stops water infiltration that leads to potholes and structural failure.
              </p>
              <div className="pt-2 text-sm text-neutral-600">
                <p className="font-semibold">Repair before replacement—the stewardship approach to budget management.</p>
              </div>
              <Link 
                href="/services/crack-filling"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors pt-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Service 3: AODA-Compliant Markings */}
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
            <div className="relative h-48">
              <Image
                src="/images/service-line-striping.webp"
                alt="AODA-compliant parking lot markings - Steward Seal Coating"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                AODA-Compliant Markings
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                High-visibility line striping and accessible parking symbols that meet Ontario's 
                Accessibility for Ontarians with Disabilities Act (AODA) requirements.
              </p>
              <div className="pt-2 text-sm text-neutral-600">
                <p className="font-semibold">Compliance isn't optional—we make sure you meet provincial standards.</p>
              </div>
              <Link 
                href="/services/line-striping"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors pt-2"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

