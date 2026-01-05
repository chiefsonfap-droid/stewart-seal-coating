"use client"

import Link from "next/link"
import { Phone, MessageSquare } from "lucide-react"
import { CONTACT } from "@/lib/constants"

/**
 * Mobile Sticky CTA Bar
 * Fixed to bottom on mobile only with Call and Quote buttons
 */
export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-3 px-4 py-3 bg-white border-t border-neutral-200 shadow-[0_-2px_8px_rgba(0,0,0,0.1)]">
      {/* Call Now Button */}
      <a
        href={`tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-neutral-900 rounded-lg font-semibold text-base hover:bg-accent-dark transition-colors duration-200"
        data-cta="phone-call"
        data-location="mobile-sticky-bar"
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>

      {/* Get Quote Button */}
      <Link
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors duration-200"
        data-cta="get-quote"
        data-location="mobile-sticky-bar"
      >
        <MessageSquare className="h-5 w-5" />
        <span>Get Quote</span>
      </Link>
    </div>
  )
}
