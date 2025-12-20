import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Reusable CTA Section
 * Used throughout site for conversion points
 */
interface CTAProps {
  headline?: string
  subheadline?: string
  primaryCTA?: string
  primaryHref?: string
  primaryLocation?: string
}

export function CTA({
  headline = "Ready to Protect Your Parking Lot?",
  subheadline = "Get a free drone inspection and board-ready estimate—no obligation.",
  primaryCTA = "Book Your Free Drone Inspection",
  primaryHref = "#contact",
  primaryLocation = "cta-section"
}: CTAProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            {headline}
          </h2>
          <p className="text-xl text-primary-foreground/90">
            {subheadline}
          </p>
        </div>

        <Button
          asChild
          size="lg"
          variant="secondary"
          data-cta="drone-inspection"
          data-location={primaryLocation}
          className="text-lg"
        >
          <Link href={primaryHref}>{primaryCTA}</Link>
        </Button>

        <p className="text-sm text-primary-foreground/80">
          Faith communities receive priority scheduling • WSIB certified • 3-Year Guarantee included
        </p>
      </div>
    </section>
  )
}

