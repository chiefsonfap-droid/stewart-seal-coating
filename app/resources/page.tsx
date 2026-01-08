import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { allPosts } from "@/lib/blog"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Church Parking Lot Resources & Guides | Ontario | Steward Seal Coating",
  description: "Expert guides on parking lot maintenance, seal coating, crack repair, AODA compliance, and budgeting for Ontario faith communities. Practical stewardship resources for church facility managers.",
  keywords: [
    "church parking lot maintenance Ontario",
    "asphalt maintenance guides",
    "church facility management",
    "AODA compliance resources",
    "parking lot budgeting churches"
  ],
  alternates: {
    canonical: "https://stewardsealcoating.ca/resources"
  },
  openGraph: {
    title: "Church Parking Lot Resources & Guides | Ontario",
    description: "Expert guides on parking lot maintenance, seal coating, and AODA compliance for Ontario faith communities.",
    type: "website",
    locale: "en_CA",
  },
}

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Parking Lot Stewardship Resources
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Practical guides to help Ontario faith communities protect their parking lots, plan maintenance, and practice good stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col"
              >
                {/* Category Badge */}
                <div className="bg-primary/10 px-6 py-3">
                  <span className="text-sm font-semibold text-primary">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3 leading-tight">
                    <Link 
                      href={`/resources/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-neutral-700 leading-relaxed mb-4 flex-grow">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTimeMinutes} min read</span>
                    </div>
                    <time dateTime={post.datePublished}>
                      {new Date(post.datePublished).toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/resources/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
            Questions About Your Parking Lot?
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            Our free drone inspection provides clear answers and honest recommendations—no pressure, just stewardship-focused guidance.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Schedule Free Assessment
          </Link>
        </div>
      </section>
    </>
  )
}



