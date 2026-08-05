// ─────────────────────────────────────────────────────────────────────────────
// Badge
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link'
import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  variant?: 'teal' | 'navy' | 'blue' | 'muted' | 'amber'
  className?: string
}

const badgeVariants = {
  teal:  'bg-teal-light text-teal',
  navy:  'bg-navy-light text-navy',
  blue:  'bg-blue/10 text-blue',
  muted: 'bg-offwhite text-muted',
  amber: 'bg-amber/15 text-amber',
}

export function Badge({ children, variant = 'teal', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-label font-medium ${badgeVariants[variant]} ${className}`}>
      {children}
    </span>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb
// ─────────────────────────────────────────────────────────────────────────────
export interface BreadcrumbItem { name: string; href: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-caption text-muted flex-wrap">
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted/40" aria-hidden="true">/</span>}
          {i === items.length - 1 ? (
            <span className="text-charcoal" aria-current="page">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-navy transition-colors duration-150">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SectionHeader
// ─────────────────────────────────────────────────────────────────────────────
export interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  headingSize?: 'display' | 'h1' | 'h2' | 'h3'
  light?: boolean
  className?: string
}

const headingSizes = {
  display: 'text-display font-black',
  h1:      'text-h1 font-extrabold',
  h2:      'text-h2 font-bold',
  h3:      'text-h3 font-bold',
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  headingSize = 'h2',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  const textColor  = light ? 'text-white' : 'text-navy'
  const subColor   = light ? 'text-white/80' : 'text-charcoal/80'

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-overline uppercase tracking-widest text-teal mb-3 font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display ${headingSizes[headingSize]} ${textColor} leading-tight`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`text-body-lg ${subColor} mt-4 max-w-2xl leading-relaxed`}>
          {subheading}
        </p>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SkeletonCard
// ─────────────────────────────────────────────────────────────────────────────
export function SkeletonCard({ variant = 'blog' }: { variant?: 'blog' | 'case-study' | 'product' }) {
  if (variant === 'blog') {
    return (
      <div className="rounded-brand border border-border-default overflow-hidden">
        <div className="skeleton aspect-video w-full" />
        <div className="p-space-5 space-y-3">
          <div className="skeleton h-5 w-20 rounded-full" />
          <div className="skeleton h-6 w-full rounded" />
          <div className="skeleton h-6 w-4/5 rounded" />
          <div className="skeleton h-4 w-full rounded mt-2" />
          <div className="skeleton h-4 w-3/4 rounded" />
          <div className="skeleton h-4 w-16 rounded mt-4" />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-brand border border-border-default p-space-5 space-y-3">
      <div className="skeleton h-5 w-24 rounded-full" />
      <div className="skeleton h-6 w-full rounded" />
      <div className="skeleton h-6 w-3/4 rounded" />
      <div className="skeleton h-4 w-full rounded mt-4" />
      <div className="skeleton h-4 w-2/3 rounded" />
    </div>
  )
}
