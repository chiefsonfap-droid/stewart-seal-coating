import Image from "next/image"

/**
 * About Us Section
 * Headline: "Stewardship, Not Shortcuts"
 */
export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-contractors-team.webp"
              alt="Steward Seal Coating team - Professional parking lot maintenance"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
                Stewardship, Not Shortcuts
              </h2>
              <div className="w-24 h-1 bg-accent rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
              <p>
                We're Paul and Andrew, uncle and nephew, working as a dedicated two-person team. 
                No subcontractors, no surprises.
              </p>

              <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">Paul</h3>
                  <p className="text-base">
                    20+ years in construction and exterior work. Leads field operations, quality 
                    control, and hands-on execution of all seal coating, crack filling, and striping work.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">Andrew</h3>
                  <p className="text-base">
                    Brings experience coordinating with churches in the film industry (location 
                    management), where he learned to navigate board processes, insurance requirements, 
                    and scheduling around ministry activities. That expertise now supports churches 
                    full-time in facility maintenance. Andrew operates our fully licensed and insured 
                    drone inspection service, handles sales and client communication, manages 
                    scheduling and site coordination, and works alongside Paul on all application work.
                  </p>
                </div>
              </div>

              <p>
                Together, we're combining Paul's 20+ years of trades expertise with Andrew's church 
                operations knowledge to serve parishes in a way that respects both their facilities 
                and their unique needs.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="font-bold text-xl text-neutral-900 mb-3">Why We Focus on Churches</h3>
                <p className="text-base">
                  This is our first season serving faith communities exclusively. We saw churches, 
                  synagogues, mosques, and temples needing a contractor who understood both their 
                  budgets and their board processes. Faith communities require transparency, complete 
                  documentation, and respect for their worship schedule—not just the lowest bid.
                </p>
                <p className="text-base mt-3">
                  We built Steward Seal Coating around these values, offering introductory rates as 
                  we establish our faith community portfolio.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <p className="text-4xl font-black text-primary">20+</p>
                <p className="text-sm font-semibold text-neutral-600">
                  Years Combined Experience
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-primary">100%</p>
                <p className="text-sm font-semibold text-neutral-600">
                  WSIB Clearance Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

