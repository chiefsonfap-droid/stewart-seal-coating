import { Camera, FileCheck, CalendarCheck } from "lucide-react"

/**
 * How It Works Section
 * 3-step process with icons
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600">
              Three simple steps from inspection to completion
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6 h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-accent">1</span>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Free Drone Inspection
                    </h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    We fly your lot to get a bird's-eye view that catches damage invisible from 
                    the ground—like ponding water or hidden drainage issues. Completely free, 
                    no obligation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6 h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-accent">2</span>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Board-Ready Estimate
                    </h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    You'll receive an Aerial Damage Report and a complete Board Approval Kit with 
                    photos, clear cost breakdown, timeline, and WSIB certificate. Everything your 
                    committee needs to make a confident decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6 h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-accent">3</span>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Scheduled Service
                    </h3>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    We group projects by region for efficient routing, keeping costs down. Seal coat 
                    cures in 24–48 hours, and we always coordinate around your worship calendar so 
                    your lot is ready when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-700 font-semibold">
              Faith communities always receive priority in our route planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

