import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

/**
 * Homepage Hero Section
 * Headline: "Faith Community Parking Lot Care—Handled With Stewardship"
 */
export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-neutral-900 leading-tight tracking-tight">
                Ontario Church & Faith Community{" "}
                <span className="text-primary">Parking Lot Specialists</span>
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Professional seal coating, crack repair, and AODA-compliant striping for 
                churches, temples, mosques, and synagogues across Ontario.{" "}
                <strong>Commercial and residential properties near our faith projects also welcome.</strong>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-neutral-700">
                  WSIB Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-neutral-700">
                  3-Year Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-neutral-700">
                  AODA Compliant
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                data-cta="drone-inspection"
                data-location="hero"
              >
                <Link href="#contact">Book Your Free Drone Inspection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-cta="how-it-works"
                data-location="hero"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-church-aerial.webp"
              alt="Church parking lot aerial view - Steward Seal Coating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

