"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { REGIONS, CONTACT } from "@/lib/constants"

/**
 * Main site header with sticky navigation
 * Desktop: Horizontal nav with hover effects and dropdown
 * Mobile: Hamburger menu that opens Sheet from right
 */
export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isServiceAreasOpen, setIsServiceAreasOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/resources", label: "Resources" },
    { href: "/#about", label: "About" },
  ]

  const servicePages = [
    { href: "/services/seal-coating", label: "Seal Coating" },
    { href: "/services/crack-filling", label: "Crack Filling" },
    { href: "/services/line-striping", label: "Line Striping" },
    { href: "/services/parking-lot-inspections", label: "Parking Lot Inspections" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black text-primary tracking-tight">
              Steward Seal Coating
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Phone Number */}
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-neutral-700 hover:text-primary font-semibold transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-base">{CONTACT.phone}</span>
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-neutral-700 hover:text-primary font-semibold text-base relative group transition-colors duration-200 flex items-center gap-1"
              >
                Services
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
                  {servicePages.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150 text-sm font-medium"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServiceAreasOpen(true)}
              onMouseLeave={() => setIsServiceAreasOpen(false)}
            >
              <button
                className="text-neutral-700 hover:text-primary font-semibold text-base relative group transition-colors duration-200 flex items-center gap-1"
              >
                Service Areas
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              {isServiceAreasOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
                  <Link
                    href="/service-areas"
                    className="block px-4 py-3 text-neutral-900 font-semibold hover:bg-primary/5 hover:text-primary transition-colors duration-150 text-sm border-b border-neutral-200"
                  >
                    All Service Areas
                  </Link>
                  {REGIONS.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/regions/${region.slug}`}
                      className="block px-4 py-3 text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150 text-sm font-medium"
                    >
                      {region.displayName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-semibold text-base relative group transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
            <Button asChild data-cta="drone-inspection" data-location="header">
              <Link href="/#contact">Book Free Inspection</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {/* Phone Number */}
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 text-lg font-semibold text-primary min-h-[48px]"
                  onClick={closeMenu}
                >
                  <Phone className="h-5 w-5" />
                  {CONTACT.phone}
                </a>

                {/* Services in Mobile Menu */}
                <div className="space-y-2">
                  <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Services</p>
                  {servicePages.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="block text-base font-medium text-neutral-700 hover:text-primary transition-colors py-2 pl-4"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg font-semibold text-neutral-700 hover:text-primary transition-colors min-h-[48px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Service Areas in Mobile Menu */}
                <div className="space-y-2">
                  <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Service Areas</p>
                  <Link
                    href="/service-areas"
                    onClick={closeMenu}
                    className="block text-base font-semibold text-neutral-900 hover:text-primary transition-colors py-2 pl-4"
                  >
                    All Areas
                  </Link>
                  {REGIONS.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/regions/${region.slug}`}
                      onClick={closeMenu}
                      className="block text-base font-medium text-neutral-700 hover:text-primary transition-colors py-2 pl-4"
                    >
                      {region.displayName}
                    </Link>
                  ))}
                </div>

                <Button
                  asChild
                  className="mt-4"
                  data-cta="drone-inspection"
                  data-location="mobile-header"
                >
                  <Link href="/#contact" onClick={closeMenu}>
                    Book Free Inspection
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

