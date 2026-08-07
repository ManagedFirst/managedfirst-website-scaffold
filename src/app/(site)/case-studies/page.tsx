import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader } from '@/components/ui/Elements'
import { CTABand } from '@/components/sections/Sections'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Case Studies | ManagedFirst Technologies',
  description: 'Real ManageEngine implementation outcomes from ManagedFirst engagements with Indian enterprises. Published with client approval.',
  canonicalPath: '/case-studies',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }]

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Knowledge</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">Case Studies.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-2xl">Real ManageEngine implementation outcomes -- published with client approval, written from structured client interviews, using actual numbers.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn>
            <div className="max-w-2xl bg-white rounded-brand border border-border-default p-space-6">
              <h2 className="font-display text-h3 font-bold text-navy mb-4">Case studies are published as engagements complete.</h2>
              <p className="text-body text-charcoal leading-relaxed mb-4">We do not publish case studies without client approval, and we do not write case studies without conducting a structured interview with the client contact. Generic case studies written from memory are not useful to anyone evaluating an implementation partner.</p>
              <p className="text-body text-charcoal leading-relaxed mb-4">This page will be populated as real client engagements complete and approvals are confirmed. The absence of case studies here reflects where we are in the business lifecycle -- not a reluctance to be accountable for outcomes.</p>
              <p className="text-body text-charcoal leading-relaxed">In the meantime, the implementation blog covers what our work looks like in practice, and a free consultation is the most direct way to assess whether our approach fits your requirements.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTABand heading="Evaluate our implementation approach directly." body="A free 30-minute consultation is more useful than a case study library. We will review your requirements and tell you specifically what our approach would look like for your situation." primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }} secondaryCta={{ label: 'Read our implementation blog', href: '/blog' }} />
    </>
  )
}
