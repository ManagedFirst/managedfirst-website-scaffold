import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'Book a Free ManageEngine Consultation | ManagedFirst Technologies',
  description: 'Book a free 30-minute ManageEngine consultation with ManagedFirst. We review your environment, answer specific questions, and tell you honestly what a proper implementation involves.',
  canonicalPath: '/free-consultation',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Free Consultation', href: '/free-consultation' }]

const whatHappens = [
  'We review your current ManageEngine environment — or your planned deployment — against your stated requirements.',
  'We answer specific questions about product fit, implementation scope, and effort. Not a sales call — a working session.',
  'We tell you honestly whether ManageEngine fits your requirements and what a proper implementation would involve.',
]

const situations = [
  { number: '1', title: 'You are evaluating ManageEngine for the first time', body: 'You have seen a vendor demo and want an independent view of which products fit your use case, what a deployment involves, and what the implementation cost looks like.' },
  { number: '2', title: 'ManageEngine is installed but not delivering results', body: 'The platform is live but the team is not using it the way it was purchased to be used. You want to understand whether the gap is configuration, training, or something else.' },
  { number: '3', title: 'You have a specific compliance requirement', body: 'DPDPA, ISO 27001, RBI IT framework. You want to know which ManageEngine tools address which obligations and how they would need to be configured.' },
  { number: '4', title: 'You are planning a significant expansion', body: 'Adding new products to an existing deployment, moving to cloud, or extending to new sites. You want to scope the change before engaging for implementation.' },
]

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL ?? ''

export default function FreeConsultationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Free Consultation</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4 max-w-2xl">Book a free 30-minute ManageEngine consultation.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-2xl">We review your requirements and tell you honestly what a proper ManageEngine implementation would involve — and whether it fits your situation.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <AnimateIn direction="left" className="mb-8">
                <h2 className="font-display text-h3 font-bold text-navy mb-4">What happens in the consultation.</h2>
                <div className="space-y-3">
                  {whatHappens.map((w, i) => (
                    <div key={i} className="flex gap-3">
                      <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <p className="text-body text-charcoal leading-relaxed">{w}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={100}>
                <h2 className="font-display text-h3 font-bold text-navy mb-4">When to book.</h2>
                <div className="space-y-3">
                  {situations.map((s) => (
                    <div key={s.number} className="flex gap-4 p-4 bg-white rounded-brand border border-border-default">
                      <div className="w-8 h-8 bg-teal-light rounded-full flex items-center justify-center text-teal font-bold text-body-sm flex-shrink-0">{s.number}</div>
                      <div>
                        <p className="font-semibold text-navy text-body-sm mb-1">{s.title}</p>
                        <p className="text-body-sm text-charcoal/70 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Calendar booking */}
            <AnimateIn direction="right">
              <div className="bg-white rounded-brand border border-border-default overflow-hidden min-h-[600px]">
                {bookingUrl ? (
                  <iframe
                    src={bookingUrl}
                    width="100%"
                    height="650"
                    frameBorder="0"
                    title="Book a consultation with ManagedFirst"
                    className="w-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-space-6 text-center">
                    <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">📅</span>
                    </div>
                    <h3 className="font-display text-h4 font-bold text-navy mb-2">Booking Calendar</h3>
                    <p className="text-body-sm text-muted mb-4">The Google Calendar booking widget loads here.</p>
                    <p className="text-caption text-muted">Set <code className="bg-offwhite px-2 py-0.5 rounded">NEXT_PUBLIC_BOOKING_URL</code> in your environment variables to enable online booking.</p>
                  </div>
                )}
              </div>
              <div className="mt-4 p-4 bg-offwhite rounded-brand">
                <p className="text-body-sm text-charcoal/70 text-center">
                  Prefer email? Write to <a href="mailto:[EMAIL ADDRESS]" className="text-blue hover:underline">[EMAIL ADDRESS]</a>. We respond within one business day.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container max-w-2xl">
          <AnimateIn>
            <h2 className="font-display text-h3 font-bold text-navy mb-4">What happens after the call.</h2>
            <div className="space-y-3">
              {[
                'If your requirements align with what ManagedFirst delivers, we will follow up with a written scope proposal within three business days. The proposal covers which products apply, what the implementation would involve, and indicative cost for planning.',
                'If your situation is not a fit for ManagedFirst — product choice, timeline, scale, or engagement type — we will tell you that on the call and suggest where you should look instead. We do not pursue engagements that are not a fit.',
              ].map((p, i) => <p key={i} className="text-body text-charcoal leading-relaxed">{p}</p>)}
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
