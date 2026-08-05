import type { Metadata } from 'next' 
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { Badge, Breadcrumb, SectionHeader } from '@/components/ui/Elements'
import { IconCheck } from '@/components/icons'
import { pseoLocations, type PseoLocationRecord } from '@/data/pseo-locations'
import { pseoIndustries, type PseoIndustryRecord } from '@/data/pseo-industries'

interface PageProps { params: { productSlug: string; variantSlug: string } }

function findRecord(productSlug: string, variantSlug: string): PseoLocationRecord | PseoIndustryRecord | null {
  const loc = pseoLocations.find(r => r.productSlug === productSlug && r.locationSlug === variantSlug)
  if (loc) return loc
  const ind = pseoIndustries.find(r => r.productSlug === productSlug && r.industrySlug === variantSlug)
  if (ind) return ind
  return null
}

function isLocationRecord(r: PseoLocationRecord | PseoIndustryRecord): r is PseoLocationRecord {
  return 'locationSlug' in r
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const record = findRecord(params.productSlug, params.variantSlug)
  if (!record) return {}
  return buildMetadata({
    title: record.metaTitle,
    description: record.metaDescription,
    canonicalPath: `/solutions/${params.productSlug}/${params.variantSlug}`,
  })
}

export async function generateStaticParams() {
  const locationParams = pseoLocations.map(r => ({ productSlug: r.productSlug, variantSlug: r.locationSlug }))
  const industryParams = pseoIndustries.map(r => ({ productSlug: r.productSlug, variantSlug: r.industrySlug }))
  return [...locationParams, ...industryParams]
}

export default function PseoPage({ params }: PageProps) {
  const record = findRecord(params.productSlug, params.variantSlug)
  if (!record) notFound()

  const isLocation = isLocationRecord(record)
  const variantLabel = isLocation ? (record as PseoLocationRecord).city : (record as PseoIndustryRecord).industryLabel
  const productName = record.productName

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: `/solutions/${params.productSlug}` },
    { name: productName, href: `/solutions/${params.productSlug}` },
    { name: variantLabel, href: `/solutions/${params.productSlug}/${params.variantSlug}` },
  ]

  const features = record.keyCapabilities ?? []

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <Hero variant="light" compact
        eyebrow={`${productName} · ${variantLabel}`}
        heading={record.h1}
        subheading={record.introParagraph}
        primaryCta={{ label: `Book a free ${productName} consultation`, href: '/free-consultation' }}
        secondaryCta={{ label: 'All services', href: '/services' }} />

      {features.length > 0 && (
        <section className="bg-offwhite section-py">
          <div className="site-container">
            <AnimateIn className="mb-8">
              <SectionHeader eyebrow="What we configure" heading={`${productName} -- key capabilities for ${variantLabel}.`} />
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((f: string, i: number) => (
                <AnimateIn key={i} delay={i * 70}>
                  <div className="flex gap-3 p-4 bg-white rounded-brand border border-border-default">
                    <IconCheck size={18} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-body-sm text-charcoal leading-relaxed">{f}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {(record.localContext ?? record.primaryUseCase) && (
        <section className="bg-white section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <p className="text-body text-charcoal leading-relaxed">
                {record.localContext ?? record.primaryUseCase}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {!isLocation && record.complianceNote && (
        <section className="bg-navy-light section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <p className="text-overline uppercase tracking-widest text-teal mb-3">Compliance Context</p>
              <p className="text-body text-charcoal leading-relaxed">{record.complianceNote}</p>
            </AnimateIn>
          </div>
        </section>
      )}

      <CTABand
        heading={`Book a free ${productName} consultation${isLocation ? ` in ${variantLabel}` : ` for ${variantLabel}`}.`}
        primaryCta={{ label: `Book a free ${productName} consultation`, href: '/free-consultation' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
      />
    </>
  )
}
