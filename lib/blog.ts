/**
 * Blog System for /resources
 * 
 * Each post is a TypeScript module with metadata and content
 */

export interface FAQ {
  question: string
  answer: string
}

export interface BlogPost {
  title: string
  slug: string
  description: string
  primaryKeyword: string
  secondaryKeywords: string[]
  readingTimeMinutes: number
  datePublished: string
  category: string
  content: string
  faqs: FAQ[]
}

export const BLOG_CATEGORIES = [
  "Maintenance Planning",
  "Seasonal Guidance",
  "Compliance & Accessibility",
  "Budgeting & Stewardship",
  "Asphalt Repair & Longevity",
  "City & Regional Guides",
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]

// Import all blog posts
import { post as post1 } from "./blog-posts/when-to-seal-coat-ontario"
import { post as post2 } from "./blog-posts/how-often-seal-coat-church-parking-lot"
import { post as post3 } from "./blog-posts/church-parking-lot-maintenance-ontario-winter"
import { post as post4 } from "./blog-posts/aoda-compliant-line-striping-churches-ontario"
import { post as post5 } from "./blog-posts/seal-coating-vs-resurfacing-ontario-churches"
import { post as post6 } from "./blog-posts/crack-repair-church-parking-lots-ontario"
import { post as post7 } from "./blog-posts/spring-parking-lot-inspections-ontario-churches"
import { post as post8 } from "./blog-posts/parking-lot-maintenance-planning-ontario-churches"

export const allPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return allPosts.filter(post => post.category === category)
}

export function getAllSlugs(): string[] {
  return allPosts.map(post => post.slug)
}

