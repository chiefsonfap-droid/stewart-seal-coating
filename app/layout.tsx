import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Faith Community Parking Lot Care | Steward Seal Coating",
  description: "Ontario's faith-community-first parking lot maintenance specialist. Seal coating, crack repair, AODA-compliant markings.",
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
      </body>
    </html>
  )
}

