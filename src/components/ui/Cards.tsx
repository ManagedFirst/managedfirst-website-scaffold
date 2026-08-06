import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/Elements'
import { IconArrowRight } from '@/components/icons'

// ─────────────────────────────────────────────────────────────────────────────
// ProductCard
// ─────────────────────────────────────────────────────────────────────────────
export interface ProductCardProps {
  name: string
  category: string
  tagline: string
  href: string
  icon?: ReactNode
}

export function ProductCard({ name, category, tagline, href, icon }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-border-default rounded-brand p-space-5 hover-lift hover:border-teal"
    >
      {icon && (
        <div className="text-teal mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
      )}
      <Badge variant="teal" className="mb-3 self-start">{category}</Badge>
      <h3 className="font-display text-h4 font-bold text-navy mb-2 group-hover:text-blue transition-colors">
        {name}
      </h3>
      <p className="text-body-sm text-charcoal/70 leading-relaxed mb-4 flex-1">{tagline}</p>
      <span className="inline-flex items-center gap-1.5 text-blue font-semibold text-body-sm group-hover:gap-2.5 transition-all">
        Learn more <IconArrowRight size={14} />
      </span>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BlogCard
// ─────────────────────────────────────────────────────────────────────────────
const categoryLabels: Record<string, string> = {
  'manageengine-implementation': 'ManageEngine Implementation',
  'it-operations-itsm':          'IT Operations and ITSM',
  'it-operations-and-itsm':     'IT Operations and ITSM',
  'security-siem':               'Security and SIEM',
  'compliance':                  'Compliance',
  'industry-use-cases':          'Industry Use Cases',
}

export interface BlogCardProps {
  title: string
  excerpt: string
  categories: string[]
  publishedAt: string
  readTimeMinutes: number
  href: string
  featuredImage?: string
}

export function BlogCard({ title, excerpt, categories, publishedAt, readTimeMinutes, href, featuredImage }: BlogCardProps) {
  const category = categories[0]
  const label    = categoryLabels[category] ?? category

  return (
    <Link href={href} className="group flex flex-col bg-white border border-border-default rounded-brand overflow-hidden hover-lift hover:border-teal">
      {/* Image */}
      <div className="aspect-video bg-offwhite relative overflow-hidden">
        {featuredImage ? (
          <Image src={featuredImage} alt={title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-offwhite to-teal-light" />
        )}
      </div>
      {/* Content */}
      <div className="p-space-5 flex flex-col flex-1">
        {category && <Badge variant="teal" className="mb-3 self-start text-xs">{label}</Badge>}
        <h3 className="font-display text-h4 font-bold text-navy mb-2 group-hover:text-blue transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-body-sm text-charcoal/70 leading-relaxed mb-4 flex-1 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-caption text-muted mt-auto pt-4 border-t border-border-default">
          <time>{new Date(publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
          <span>·</span>
          <span>{readTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyCard
// ─────────────────────────────────────────────────────────────────────────────
const industryLabels: Record<string, string> = {
  bfsi:          'Banking and Financial Services',
  manufacturing: 'Manufacturing',
  healthcare:    'Healthcare',
  'it-ites':     'IT and ITES',
  'government-psu': 'Government and PSU',
  education:     'Education',
  other:         'Other',
}

export interface CaseStudyCardProps {
  title: string
  clientDescription: string
  industry: string
  productsUsed: string[]
  href: string
  featuredImage?: string
}

export function CaseStudyCard({ title, clientDescription, industry, productsUsed, href, featuredImage }: CaseStudyCardProps) {
  const shown  = productsUsed.slice(0, 2)
  const extra  = productsUsed.length - 2

  return (
    <Link href={href} className="group flex flex-col bg-white border border-teal rounded-brand overflow-hidden hover-lift">
      {featuredImage && (
        <div className="aspect-video bg-teal-light relative overflow-hidden">
          <Image src={featuredImage} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-space-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="navy">{industryLabels[industry] ?? industry}</Badge>
          {shown.map(p => <Badge key={p} variant="teal" className="text-xs">{p.replace(/-/g, ' ')}</Badge>)}
          {extra > 0 && <Badge variant="muted" className="text-xs">+{extra} more</Badge>}
        </div>
        <p className="text-caption text-muted mb-2">{clientDescription}</p>
        <h3 className="font-display text-h4 font-bold text-navy mb-4 flex-1 group-hover:text-blue transition-colors line-clamp-2">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-teal font-semibold text-body-sm group-hover:gap-2.5 transition-all">
          Read case study <IconArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
