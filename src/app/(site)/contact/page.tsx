import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { SectionHeader } from '@/components/ui/Elements'
import { Button } from '@/components/ui/Button'
import { IconMail, IconPhone, IconClock, IconMapPin } from '@/components/icons'
import { ContactForm } from '@/components/forms/Forms'

export const metadata: Metadata = buildMetadata({
  title: 'Contact ManagedFirst Technologies — ManageEngine Partner Chennai',
  description: 'Contact ManagedFirst Technologies. We respond to all enquiries within one business day. Chennai-based authorized ManageEngine partner serving enterprises pan-India.',
  canonicalPath: '/contact',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-white border-b border-border-default py-12">
        <div className="site-container">
          <AnimateIn>
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Contact</p>
            <h1 className="font-display text-h1 font-extrabold text-navy mb-4">Get in touch.</h1>
            <p className="text-body-lg text-charcoal/80 max-w-xl">We respond to all enquiries within one business day, Monday to Friday.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-offwhite section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-7">
              <AnimateIn direction="left" className="mb-8">
                <h2 className="font-display text-h3 font-bold text-navy mb-2">Send us a message.</h2>
                <p className="text-body text-charcoal/70">Fill out the form and we will get back to you within one business day.</p>
              </AnimateIn>
              <AnimateIn direction="left" delay={100}>
                <ContactForm />
              </AnimateIn>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-5">
              <AnimateIn direction="right" className="sticky top-24">
                <div className="bg-white rounded-brand border border-border-default p-space-6">
                  <h3 className="font-display text-h4 font-bold text-navy mb-6">Contact Details</h3>
                  <div className="space-y-5">
                    <div className="flex gap-3">
                      <IconMail size={20} className="text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-label font-semibold text-charcoal mb-0.5">Email</p>
                        <a href="mailto:[EMAIL ADDRESS]" className="text-body-sm text-blue hover:underline">[EMAIL ADDRESS]</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconPhone size={20} className="text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-label font-semibold text-charcoal mb-0.5">Phone</p>
                        <a href="tel:[PHONE NUMBER]" className="text-body-sm text-blue hover:underline">[PHONE NUMBER]</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconClock size={20} className="text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-label font-semibold text-charcoal mb-0.5">Business Hours</p>
                        <p className="text-body-sm text-charcoal">Monday to Friday, 9:00 AM to 6:00 PM IST</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <IconMapPin size={20} className="text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-label font-semibold text-charcoal mb-0.5">Registered Office</p>
                        <p className="text-body-sm text-charcoal leading-relaxed">ManagedFirst Technologies Pvt. Ltd.<br />204/A, 7th Street, Malleeswari Nagar,<br />Madambakkam, Kancheepuram,<br />Tamil Nadu 600126</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border-default">
                    <p className="text-body-sm text-charcoal/70 mb-4">Prefer to book a call directly?</p>
                    <Button variant="primary-light" href="/free-consultation" className="w-full justify-center">
                      Book a Free 30-Minute Call
                    </Button>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
