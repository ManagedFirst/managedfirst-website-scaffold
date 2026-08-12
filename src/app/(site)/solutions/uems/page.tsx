import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { UEMSIllustration } from '@/components/illustrations/UEMSIllustration'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Endpoint Central Implementation India | ManagedFirst Technologies',
  description: 'Authorized ManageEngine endpoint management implementation partner. Endpoint Central and Mobile Device Manager Plus -- patch management, endpoint security, and MDM for Indian enterprises.',
  canonicalPath: '/solutions/uems',
})
const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions/uems' }, { name: 'UEMS', href: '/solutions/uems' }]

const successItems = ["Every endpoint is visible -- device type, OS version, installed software, patch status -- without manual inventory.", "Patch compliance is tracked and reported. Unpatched devices are flagged before they become incidents.", "Software deployment is automated. New devices are provisioned without manual application-by-application installation.", "USB access is controlled by policy. Data transfer events are logged.", "Mobile devices are enrolled and managed. Corporate data is containerised on BYOD devices.", "Endpoint security policies are enforced across the fleet -- not set and forgotten."]

export default function UemsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />
      <Hero variant="dark" eyebrow='UEMS | Unified Endpoint Management and Security'
        heading='ManageEngine Endpoint Central and Mobile Device Manager Plus deliver comprehensive unified endpoint management -- patch automation, endpoint security, software governance, and MDM for every device type in your environment.'
        subheading='Devices that have not been patched, software installed without approval, USB ports open across the fleet, mobile devices operating outside any management policy -- each one is a security incident waiting to surface. ManagedFirst implements Endpoint Central and Mobile Device Manager Plus, configured around your device mix, your patch schedule, and your security policies.'
        primaryCta={{ label: 'Get a Free Endpoint Exposure Assessment', href: '/free-consultation' }}
        secondaryCta={{ label: 'See products', href: '#products' }}
        visual={<UEMSIllustration className='w-full max-w-[520px]' />}
        />

      <section className="bg-white section-py">
        <div className="site-container max-w-3xl">
          <AnimateIn><h2 className="font-display text-h2 font-bold text-navy mb-6">IT teams managing 200 or more devices without centralised management spend most of their time reacting to problems that a managed environment would have prevented.</h2></AnimateIn>
          <AnimateIn delay={100}><p className="text-body text-charcoal leading-relaxed mb-4">Endpoints that have not been patched in months. Software installed by users without approval -- some unlicensed, some a security risk. Devices that left the office perimeter and are no longer under any management policy. USB ports open across the fleet with no data transfer controls.</p></AnimateIn>
          <AnimateIn delay={180}><p className="text-body text-charcoal leading-relaxed mb-4">Getting full value from Endpoint Central's capability requires implementation work: device group configuration, patch policy design, software deployment packages, security policy deployment, and asset management setup. That is what ManagedFirst provides.</p></AnimateIn>
          <AnimateIn delay={260}><p className="text-body text-charcoal leading-relaxed mb-4">DPDPA's requirement for reasonable technical security measures applies directly to the endpoint environment. ManageEngine Endpoint Central configured to its full scope -- patch policies, software governance, endpoint security, and MDM -- provides the controls and compliance evidence your team needs.</p></AnimateIn>
        </div>
      </section>

      <section id="products" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-6"><SectionHeader eyebrow="Products" heading='Two products for different endpoint management contexts.' /></AnimateIn>
          <p className="text-body text-charcoal/70 mt-2">See individual product pages for full implementation scope and configuration detail.</p>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-8"><SectionHeader eyebrow="What Success Looks Like" heading='What a properly configured endpoint environment looks like' /></AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {successItems.map((item, i) => (
              <AnimateIn key={i} delay={i * 70}>
                <div className="flex gap-3 p-4 bg-offwhite rounded-brand">
                  <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-body-sm text-charcoal leading-relaxed">{item}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading='See what a properly configured UEMS environment looks like in your organisation.'
        primaryCta={{ label: 'Get a Free Endpoint Exposure Assessment', href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }} />
    </>
  )
}
