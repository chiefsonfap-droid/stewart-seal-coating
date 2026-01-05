import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { MobileStickyCTA } from "@/components/MobileStickyCTA"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Church & Faith Community Parking Lot Sealing | Ontario | Steward Seal Coating",
  description: "Professional seal coating, crack repair & AODA-compliant striping for Ontario churches, temples, mosques & synagogues. WSIB certified. 3-year guarantee.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stewardsealcoating.ca'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}

