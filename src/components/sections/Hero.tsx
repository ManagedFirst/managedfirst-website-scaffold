import { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import { IconArrowRight } from '@/components/icons'

export interface HeroProps {
  eyebrow?: string
  heading: string
  subheading?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'dark' | 'light' | 'split'
  visual?: ReactNode
  compact?: boolean
}

export function Hero({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = 'light',
  visual,
  compact = false,
}: HeroProps) {
  const py = compact ? 'py-12 md:py-16' : 'py-16 md:py-24'

  if (variant === 'dark') {
    return (
      <section className={`relative bg-navy overflow-hidden ${py}`}>
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />

        <div className="site-container relative">
          <div className={`grid gap-12 ${visual ? 'lg:grid-cols-2 items-center' : 'max-w-3xl'}`}>
            {/* Text column */}
            <div>
              {eyebrow && (
                <span className="animate-fade-up text-overline uppercase tracking-widest text-teal mb-4 block font-medium">
                  {eyebrow}
                </span>
              )}
              <h1 className="animate-fade-up delay-100 font-display text-h1 md:text-display font-extrabold md:font-black text-white leading-tight mb-6">
                {heading}
              </h1>
              {subheading && (
                <p className="animate-fade-up delay-200 text-body-lg text-white/80 leading-relaxed mb-8 max-w-xl">
                  {subheading}
                </p>
              )}
              <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
                <Button variant="primary-dark" href={primaryCta.href} icon={<IconArrowRight size={16} />}>
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button variant="ghost" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>

            {/* Visual column */}
            {visual && (
              <div className="animate-fade-in delay-300 hidden lg:flex items-center justify-center">
                {visual}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className={`bg-offwhite ${py}`}>
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {eyebrow && (
                <span className="animate-fade-up text-overline uppercase tracking-widest text-teal mb-4 block font-medium">
                  {eyebrow}
                </span>
              )}
              <h1 className="animate-fade-up delay-100 font-display text-h1 font-extrabold text-navy leading-tight mb-6">
                {heading}
              </h1>
              {subheading && (
                <p className="animate-fade-up delay-200 text-body-lg text-charcoal/80 leading-relaxed mb-8">
                  {subheading}
                </p>
              )}
              <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
                <Button variant="primary-light" href={primaryCta.href} icon={<IconArrowRight size={16} />}>
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button variant="secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
            {visual && (
              <div className="animate-slide-right hidden lg:block">
                {visual}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // Light variant (default)
  return (
    <section className={`bg-white border-b border-border-default ${py}`}>
      <div className="site-container">
        {eyebrow && (
          <span className="animate-fade-up text-overline uppercase tracking-widest text-teal mb-4 block font-medium">
            {eyebrow}
          </span>
        )}
        <h1 className="animate-fade-up delay-100 font-display text-h1 md:text-h1 font-extrabold text-navy leading-tight mb-6 max-w-3xl">
          {heading}
        </h1>
        {subheading && (
          <p className="animate-fade-up delay-200 text-body-lg text-charcoal/80 leading-relaxed mb-8 max-w-2xl">
            {subheading}
          </p>
        )}
        <div className="animate-fade-up delay-300 flex flex-wrap gap-4">
          <Button variant="primary-light" href={primaryCta.href} icon={<IconArrowRight size={16} />}>
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button variant="secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
