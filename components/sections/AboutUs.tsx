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
                We're a small, family-run partnership. Most contractors see faith community 
                parking lots as "just another job." We see them as a calling.
              </p>

              <p>
                With 20+ years in construction, we realized faith communities were underserved 
                by contractors who didn't understand board budgets or worship schedules. That's 
                why we built Steward Seal Coating around a simple principle:{" "}
                <span className="font-bold text-primary">stewardship, not shortcuts.</span>
              </p>

              <p>
                We don't cut corners. We don't overpromise. We show up when we say we will, 
                respect your worship calendar, and give you documentation that makes board 
                approval straightforward.
              </p>

              <p className="font-semibold text-neutral-900">
                Faith communities deserve contractors who understand that "repair before 
                replacement" isn't just good business—it's good stewardship.
              </p>
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

