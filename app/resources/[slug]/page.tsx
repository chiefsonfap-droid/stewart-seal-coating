import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { getPostBySlug, allPosts } from "@/lib/blog"
import { Metadata } from "next"
import { ContactForm } from "@/components/forms/ContactForm"
import { CONTACT } from "@/lib/constants"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: {
      canonical: `https://stewardsealcoating.ca/resources/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      locale: "en_CA",
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  // Generate BlogPosting schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.datePublished,
    "author": {
      "@type": "Organization",
      "name": "Steward Seal Coating"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Steward Seal Coating",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stewardsealcoating.ca/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://stewardsealcoating.ca/resources/${post.slug}`
    },
    "keywords": [post.primaryKeyword, ...post.secondaryKeywords].join(", ")
  }

  // Process content to add internal links
  let processedContent = post.content
  
  // Link service pages
  processedContent = processedContent
    .replace(/\bseal coating\b/gi, (match) => `<a href="/services/seal-coating" class="text-primary hover:underline font-semibold">${match}</a>`)
    .replace(/\bcrack repair\b/gi, (match) => `<a href="/services/crack-filling" class="text-primary hover:underline font-semibold">${match}</a>`)
    .replace(/\bline striping\b/gi, (match) => `<a href="/services/line-striping" class="text-primary hover:underline font-semibold">${match}</a>`)
    .replace(/\bparking lot inspection\b/gi, (match) => `<a href="/services/parking-lot-inspections" class="text-primary hover:underline font-semibold">${match}</a>`)
    .replace(/\bOntario churches\b/gi, (match) => `<a href="/service-areas" class="text-primary hover:underline font-semibold">${match}</a>`)
  
  // Remove first occurrence of link to avoid double-linking (content first mention should be unlinked)
  // This is a simple approach - in production you'd use a more sophisticated parser

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-primary">Resources</Link>
            <span>/</span>
            <span className="text-neutral-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-neutral-600 mb-8 pb-8 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readingTimeMinutes} min read</span>
            </div>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-black prose-headings:text-neutral-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:space-y-2
              prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-neutral-700
              prose-strong:text-neutral-900 prose-strong:font-bold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Protect Your Parking Lot?
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Schedule a free drone inspection and get a professional assessment with no obligation. We'll provide honest recommendations based on your lot's condition.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Request Free Assessment
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-black text-neutral-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.slug}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="text-sm font-semibold text-primary mb-2 block">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                    <Link 
                      href={`/resources/${relatedPost.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{relatedPost.readingTimeMinutes} min read</span>
                  </div>
                  <Link 
                    href={`/resources/${relatedPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Resources */}
      <div className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/resources"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Resources
          </Link>
        </div>
      </div>
    </>
  )
}

