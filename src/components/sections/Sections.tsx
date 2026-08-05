import { ReactNode } from 'react'
import { AnimateIn } from '@/components/AnimateIn'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/Elements'
import { IconArrowRight, IconCheck } from '@/components/icons'

// ─────────────────────────────────────────────────────────────────────────────
// CTABand
// ─────────────────────────────────────────────────────────────────────────────
export interface CTABandProps {
  heading: string
  body?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTABand({ heading, body, primaryCta, secondaryCta }: CTABandProps) {
  return (
    <section className="bg-navy py-space-9">
      <div className="site-container text-center max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="font-display text-h2 font-bold text-white leading-tight mb-4">
            {heading}
          </h2>
        </AnimateIn>
        {body && (
          <AnimateIn delay={100}>
            <p className="text-body-lg text-white/80 leading-relaxed mb-8">{body}</p>
          </AnimateIn>
        )}
        <AnimateIn delay={200} className="flex flex-wrap justify-center gap-4">
          <Button variant="primary-dark" href={primaryCta.href} icon={<IconArrowRight size={16} />}>
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button variant="ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </AnimateIn>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CapabilityCard
// ─────────────────────────────────────────────────────────────────────────────
export interface CapabilityCardProps {
  title: string
  description: string
  icon?: ReactNode
}

export function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <div className="bg-white border border-border-default rounded-brand p-space-5 hover-lift hover:border-teal cursor-default">
      {icon && (
        <div className="text-teal mb-4 w-8 h-8">{icon}</div>
      )}
      <h3 className="font-display text-h4 font-bold text-charcoal mb-2">{title}</h3>
      <p className="text-body-sm text-charcoal/75 leading-relaxed">{description}</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CapabilitiesGrid
// ─────────────────────────────────────────────────────────────────────────────
export interface CapabilitiesGridProps {
  eyebrow?: string
  heading?: string
  subheading?: string
  items: CapabilityCardProps[]
}

export function CapabilitiesGrid({ eyebrow, heading, subheading, items }: CapabilitiesGridProps) {
  return (
    <section className="bg-offwhite section-py">
      <div className="site-container">
        {heading && (
          <AnimateIn className="mb-10">
            <SectionHeader eyebrow={eyebrow} heading={heading} subheading={subheading} />
          </AnimateIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-5">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <CapabilityCard {...item} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// UseCaseCard
// ─────────────────────────────────────────────────────────────────────────────
export interface UseCaseCardProps {
  title: string
  description: string
  number?: number
}

export function UseCaseCard({ title, description, number }: UseCaseCardProps) {
  return (
    <div className="relative bg-teal-light border-l-4 border-teal rounded-brand p-space-5 overflow-hidden">
      {number !== undefined && (
        <span className="absolute top-2 right-4 text-[64px] font-black text-teal/15 leading-none select-none" aria-hidden="true">
          {number}
        </span>
      )}
      <h3 className="font-display text-h3 font-bold text-teal mb-2 relative">{title}</h3>
      <p className="text-body text-charcoal leading-relaxed relative">{description}</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// UseCasesGrid
// ─────────────────────────────────────────────────────────────────────────────
export interface UseCasesGridProps {
  eyebrow?: string
  heading?: string
  items: UseCaseCardProps[]
}

export function UseCasesGrid({ eyebrow, heading, items }: UseCasesGridProps) {
  return (
    <section className="bg-white section-py">
      <div className="site-container">
        {heading && (
          <AnimateIn className="mb-10">
            <SectionHeader eyebrow={eyebrow} heading={heading} />
          </AnimateIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-5">
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 100}>
              <UseCaseCard {...item} number={i + 1} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ImplementationStep
// ─────────────────────────────────────────────────────────────────────────────
export interface ImplementationStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function ImplementationStep({ number, title, description, isLast }: ImplementationStepProps) {
  return (
    <div className="flex gap-6">
      {/* Number column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-teal-light border-2 border-teal flex items-center justify-center text-teal font-display font-bold text-h4 hover:animate-[pulseTeal_1s_ease-in-out] transition-all">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-teal/20 mt-3 mb-0 min-h-[32px]" aria-hidden="true" />
        )}
      </div>
      {/* Content */}
      <div className="pb-8">
        <h3 className="font-display text-h4 font-bold text-navy mb-2">{title}</h3>
        <p className="text-body text-charcoal/80 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ImplementationSteps
// ─────────────────────────────────────────────────────────────────────────────
export interface ImplementationStepsProps {
  eyebrow?: string
  heading?: string
  steps: Array<{ title: string; description: string }>
}

export function ImplementationSteps({ eyebrow, heading, steps }: ImplementationStepsProps) {
  return (
    <section className="bg-offwhite section-py">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {heading && (
            <AnimateIn direction="left" className="lg:sticky lg:top-24">
              <SectionHeader eyebrow={eyebrow} heading={heading} />
            </AnimateIn>
          )}
          <div>
            {steps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 100} direction="right">
                <ImplementationStep
                  number={i + 1}
                  title={step.title}
                  description={step.description}
                  isLast={i === steps.length - 1}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// NumberedChallenge
// ─────────────────────────────────────────────────────────────────────────────
export interface NumberedChallengeProps {
  number: number
  title: string
  description: string
}

export function NumberedChallenge({ number, title, description }: NumberedChallengeProps) {
  return (
    <div className="relative bg-offwhite rounded-brand p-space-6 border border-transparent hover:border-teal transition-colors duration-200 overflow-hidden">
      <span className="absolute top-0 right-4 text-[80px] font-black text-navy/10 leading-none select-none" aria-hidden="true">
        {number}
      </span>
      <h3 className="font-display text-h3 font-bold text-teal mb-3 relative">{title}</h3>
      <p className="text-body text-charcoal leading-relaxed relative">{description}</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SolutionsMappingTable
// ─────────────────────────────────────────────────────────────────────────────
export interface MappingRow {
  challenge: string
  product: string
  configuration: string
}

export function SolutionsMappingTable({ heading, rows }: { heading?: string; rows: MappingRow[] }) {
  return (
    <div>
      {heading && (
        <h3 className="font-display text-h3 font-bold text-navy mb-6">{heading}</h3>
      )}
      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-brand border border-border-default">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-5 py-4 text-label font-semibold uppercase tracking-wide w-1/3">Challenge</th>
              <th className="px-5 py-4 text-label font-semibold uppercase tracking-wide w-1/4">ManageEngine product</th>
              <th className="px-5 py-4 text-label font-semibold uppercase tracking-wide">What we configure</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                <td className="px-5 py-4 text-body-sm font-semibold text-charcoal align-top">{row.challenge}</td>
                <td className="px-5 py-4 text-body-sm text-teal font-semibold align-top">{row.product}</td>
                <td className="px-5 py-4 text-body-sm text-charcoal/80 align-top leading-relaxed">{row.configuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="border border-border-default rounded-brand p-4">
            <p className="text-body-sm font-bold text-charcoal mb-1">{row.challenge}</p>
            <p className="text-body-sm text-teal font-semibold mb-2">{row.product}</p>
            <p className="text-body-sm text-charcoal/75 leading-relaxed">{row.configuration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ComplianceItem
// ─────────────────────────────────────────────────────────────────────────────
export function ComplianceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-navy-light border-l-4 border-navy rounded-brand p-space-5">
      <div className="flex items-start gap-3">
        <IconCheck size={20} className="text-navy flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-display text-h4 font-bold text-navy mb-2">{title}</h4>
          <p className="text-body text-charcoal leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
