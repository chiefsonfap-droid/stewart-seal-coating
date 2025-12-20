import { Wrench, ShieldAlert, PaintBucket, Droplet } from "lucide-react"

/**
 * Optional Add-Ons Section
 * Additional services beyond the core package
 */
export function OptionalAddOns() {
  const addOns = [
    {
      icon: Wrench,
      title: "Minor Concrete & Curb Repairs",
      description: "Small concrete patching, curb crack repairs, and trip hazard elimination to prepare your lot for seal coating."
    },
    {
      icon: ShieldAlert,
      title: "Traffic & Safety Hardware",
      description: "Professional installation of speed bumps, wheel stops, bollards, and other safety equipment to protect pedestrians and property."
    },
    {
      icon: PaintBucket,
      title: "Custom Paint Markings",
      description: "Specialized markings beyond standard parking stalls—including directional arrows, handicap symbols, loading zones, fire lanes, and custom messaging."
    },
    {
      icon: Droplet,
      title: "Pressure or Soft Washing",
      description: "Deep cleaning of parking lot surfaces, sidewalks, and building exteriors to remove oil stains, gum, dirt, and organic growth before seal coating."
    }
  ]

  return (
    <section id="add-ons" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Enhance your parking lot project with these additional services
            </p>
          </div>

          {/* Add-Ons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {addOns.map((addOn, idx) => {
              const Icon = addOn.icon
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-md p-8 space-y-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {addOn.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {addOn.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <p className="text-neutral-700 italic leading-relaxed">
              <span className="font-bold text-neutral-900">Note:</span> All add-on services are quoted separately based on your specific needs. Discuss during your free drone assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

