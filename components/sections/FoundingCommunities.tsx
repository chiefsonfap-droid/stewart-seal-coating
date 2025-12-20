"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, TrendingUp, Calendar, DollarSign } from "lucide-react"
import { FOUNDING_PROGRAM } from "@/lib/constants"

/**
 * Founding Communities Program Section
 * Shows current count and benefits, or waitlist when closed
 */
export function FoundingCommunities() {
  const isClosed = FOUNDING_PROGRAM.isClosed
  const spotsRemaining = FOUNDING_PROGRAM.spotsRemaining

  return (
    <section id="founding-communities" className="py-20 bg-gradient-to-br from-accent-dark to-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {isClosed ? (
            // Program Closed State
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
                Founding Communities Program—Now Closed
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Our Founding Communities program has reached capacity. Join the waitlist to be 
                notified when spots become available or when we launch new partnership programs.
              </p>
              <Button
                asChild
                size="lg"
                data-cta="waitlist"
                data-location="founding-communities"
              >
                <Link href="#contact">Join the Waitlist</Link>
              </Button>
            </div>
          ) : (
            // Program Open State
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 space-y-8">
              {/* Heading */}
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
                  Founding Communities Program
                </h2>
                <div className="inline-block bg-accent-dark text-white px-6 py-2 rounded-full">
                  <p className="text-lg font-bold">
                    {FOUNDING_PROGRAM.currentCount} of {FOUNDING_PROGRAM.totalSpots} spots filled
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-neutral-700 leading-relaxed text-center">
                Become an early partner and secure exclusive benefits that protect your budget 
                and ensure priority service for years to come.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-neutral-900">
                      Lifetime Priority Scheduling
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Your project always goes first in route planning—guaranteed
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-neutral-900">
                      Price Lock Guarantee
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Protect your budget from future rate increases
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-neutral-900">
                      Annual Drone Inspection Included
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Free aerial assessment every year at no charge
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-neutral-900">
                      Founding Community Badge
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Recognition for your website and newsletter
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg md:col-span-2">
                  <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-neutral-900">
                      Referral Rewards
                    </h4>
                    <p className="text-sm text-neutral-600">
                      $100 credit for every faith community you refer to us
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-sm text-neutral-700 leading-relaxed">
                  <span className="font-bold text-neutral-900">Eligibility:</span> First 50 faith 
                  communities to sign a 3-Year Stewardship Agreement. Only {spotsRemaining} spots remaining.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button
                  asChild
                  size="lg"
                  data-cta="founding-community"
                  data-location="founding-communities"
                >
                  <Link href="#contact">Become a Founding Community</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

