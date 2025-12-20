import Link from "next/link"
import { CONTACT, REGIONS } from "@/lib/constants"

/**
 * Site footer with multi-column layout
 * Includes navigation, service areas, and JSON-LD schema
 */
export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight">
                Steward Seal Coating
              </span>
              <span className="text-sm text-accent font-medium mt-1">
                Stewardship, not shortcuts
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Faith-community-first parking lot maintenance specialists serving Ontario, Canada.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-accent transition-colors">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#package" className="hover:text-accent transition-colors">
                  Steward Protection Package™
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  Seal Coating
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  Hot Rubber Crack Filling
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  AODA-Compliant Markings
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-accent transition-colors">
                  Free Drone Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3 text-sm">
              {REGIONS.map((region) => (
                <li key={region.slug}>
                  <Link
                    href={`/regions/${region.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {region.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-accent transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/#founding-communities" className="hover:text-accent transition-colors">
                  Founding Communities Program
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Steward Seal Coating. All rights reserved.</p>
            <p className="text-xs">
              Serving churches, synagogues, mosques, temples, and faith communities across Ontario
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

