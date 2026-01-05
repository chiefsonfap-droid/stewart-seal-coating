import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, TrendingUp } from "lucide-react"
import { FOUNDING_PROGRAM } from "@/lib/constants"

/**
 * Universal Referral Program Section
 * Shows two-tier referral structure for all clients
 */
export function ReferralProgram() {
  const { referralTiers } = FOUNDING_PROGRAM

  return (
    <section id="referral-program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
              Refer a Faith Community, Get Rewarded
            </h2>
            <p className="text-xl text-neutral-600">
              Know a church, mosque, synagogue, or temple that needs parking lot work?
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Client Referrals */}
            <div className="bg-neutral-50 rounded-lg p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-neutral-900">
                  Standard Client Referrals
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-accent">${referralTiers.standard.over5k}</span>
                  <span className="text-neutral-600">for projects over $5,000</span>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-accent">${referralTiers.standard.under5k}</span>
                  <span className="text-neutral-600">for projects under $5,000</span>
                </div>
              </div>
            </div>

            {/* Founding Communities Enhanced */}
            <div className="bg-gradient-to-br from-accent-dark to-accent rounded-lg p-8 space-y-6 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white text-accent-dark text-xs font-bold px-3 py-1 rounded-full">
                  FOUNDING COMMUNITIES
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-bold">
                  Enhanced Referral Rewards
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">${referralTiers.founding.over5k}</span>
                  <span className="opacity-90">for projects over $5,000</span>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">${referralTiers.founding.under5k}</span>
                  <span className="opacity-90">for projects under $5,000</span>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold">
                    + ${referralTiers.founding.milestone.toLocaleString()} bonus for every 5 referrals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg space-y-3">
            <div className="flex items-start gap-3">
              <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Plus:</strong> The faith community you refer gets $100 off their first project when they mention your name.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900">Credits can be:</strong> Applied to future services, used for add-ons, or donated to your organization's building fund.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-900">How It Works</h3>
            <ol className="space-y-3 text-neutral-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span>Introduce us to a faith community that needs parking lot maintenance</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span>They mention your name when they contact us</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span>Once their project is complete, you both receive your rewards</span>
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Button
              asChild
              size="lg"
              data-cta="refer-community"
              data-location="referral-program"
            >
              <Link href="#contact">Refer a Faith Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
