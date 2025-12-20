"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { REGIONS } from "@/lib/constants"

/**
 * Main site header with sticky navigation
 * Desktop: Horizontal nav with hover effects and dropdown
 * Mobile: Hamburger menu that opens Sheet from right
 */
export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/#package", label: "Services" },
    { href: "/#package", label: "Protection Package" },
    { href: "/#about", label: "About" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-semibold text-base relative group transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
            
            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="text-neutral-700 hover:text-primary font-semibold text-base relative group transition-colors duration-200 flex items-center gap-1"
              >
                Service Areas
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200" />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
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

            {navLinks.slice(2).map((link) => (
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

