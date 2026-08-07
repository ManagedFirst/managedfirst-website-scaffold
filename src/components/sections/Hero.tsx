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

// ─────────────────────────────────────────────────────────────────────────────
// HERO COMPONENT — v2.0 redesign
//
// VISIBILITY FIX: heading, subheading, and CTAs render at full opacity
// immediately — no animation-fill-mode: both dependency.
// CSS animations are applied via class names that do NOT start at opacity:0.
// The text is ALWAYS visible. Animations are progressive enhancement only.
// ─────────────────────────────────────────────────────────────────────────────

export function Hero({
  eyebrow, heading, subheading,
  primaryCta, secondaryCta,
  variant = 'light', visual, compact = false,
}: HeroProps) {

  const py = compact ? 'py-16 md:py-20' : 'py-20 md:py-28'

  // ── DARK variant — navy/dark hero with gradient ────────────────────────────
  if (variant === 'dark') {
    return (
      <section className={`relative bg-navy overflow-hidden ${py}`}>
        {/* Blurred gradient shapes per redesign guideline 6 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 animate-blob"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, #2563EB 60%, transparent 80%)', filter: 'blur(80px)' }} />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full opacity-15 animate-blob delay-300"
            style={{ background: 'radial-gradient(circle, #06B6D4 0%, #2563EB 60%, transparent 80%)', filter: 'blur(60px)', animationDelay: '3.5s' }} />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        <div className="site-container relative z-10">
          <div className={`grid gap-12 ${visual ? 'lg:grid-cols-2 items-center' : 'max-w-3xl'}`}>
            {/* Text — always visible, no opacity animation dependency */}
            <div>
              {eyebrow && (
                <span className="inline-flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span className="font-medium text-teal tracking-wider"
                    style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {eyebrow}
                  </span>
                </span>
              )}

              {/* H1 — always renders at opacity:1. No animation class. */}
              <h1 className="font-display font-extrabold text-white leading-tight tracking-tight mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 68px)', lineHeight: 1.08 }}>
                {heading}
              </h1>

              {subheading && (
                <p className="text-white/70 leading-relaxed mb-10"
                  style={{ fontSize: 'clamp(16px, 1.3vw, 19px)', maxWidth: '520px' }}>
                  {subheading}
                </p>
              )}

              <div className="flex flex-wrap gap-3">
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

            {visual && (
              <div className="hidden lg:flex items-center justify-center">
                {visual}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  // ── SPLIT variant ──────────────────────────────────────────────────────────
  if (variant === 'split') {
    return (
      <section className={`relative bg-offwhite overflow-hidden ${py}`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/3 to-transparent pointer-events-none" />
        <div className="site-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {eyebrow && (
                <p className="font-medium text-accent tracking-wider mb-4"
                  style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {eyebrow}
                </p>
              )}
              <h1 className="font-display font-extrabold text-navy leading-tight mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1 }}>
                {heading}
              </h1>
              {subheading && (
                <p className="text-charcoal/75 leading-relaxed mb-8"
                  style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>
                  {subheading}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
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
            {visual && <div className="hidden lg:block">{visual}</div>}
          </div>
        </div>
      </section>
    )
  }

  // ── LIGHT variant (default) — used on all internal pages ──────────────────
  // CRITICAL: heading renders at opacity:1 immediately. No animation classes.
  return (
    <section className={`relative bg-white border-b border-border-default overflow-hidden ${py}`}>
      {/* Subtle gradient wash behind heading */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(37,99,235,0.04) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="site-container relative">
        {eyebrow && (
          <p className="font-medium text-accent tracking-wider mb-5"
            style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            {eyebrow}
          </p>
        )}

        {/* H1 — ALWAYS VISIBLE — opacity:1 is default. No animate-fade-up. */}
        <h1 className="font-display font-extrabold text-navy leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', lineHeight: 1.1, maxWidth: '780px' }}>
          {heading}
        </h1>

        {subheading && (
          <p className="text-charcoal/70 leading-relaxed mb-8"
            style={{ fontSize: 'clamp(16px, 1.2vw, 19px)', maxWidth: '600px', lineHeight: 1.65 }}>
            {subheading}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
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
