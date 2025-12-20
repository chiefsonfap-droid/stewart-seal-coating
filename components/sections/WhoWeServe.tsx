import { Church, Users, Heart } from "lucide-react"

/**
 * Who We Serve Section
 * Multi-faith inclusivity statement
 */
export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
              Who We Serve
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Main Copy */}
          <div className="space-y-6">
            <p className="text-xl text-neutral-700 leading-relaxed">
              We specialize in serving faith communities across Ontario—churches of all denominations, 
              synagogues, mosques, temples, and other houses of worship. While churches make up the 
              majority of our clients, we serve faith communities of all traditions equally.
            </p>
            <p className="text-xl text-neutral-700 leading-relaxed">
              <span className="font-bold text-primary">Faith communities are our priority, always.</span>{" "}
              We also serve residential and commercial lots surrounding our faith-based clients.
            </p>
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Church className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                All Faith Traditions
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Churches, synagogues, mosques, temples, gurdwaras, and all houses of worship
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Priority Scheduling
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Faith communities always receive first priority in our route planning
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Worship Calendar Respect
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We coordinate around Friday, Saturday, and Sunday worship schedules
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

