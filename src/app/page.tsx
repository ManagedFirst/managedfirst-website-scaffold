import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { orgSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Hero } from '@/components/sections/Hero'
import { CTABand } from '@/components/sections/Sections'
import { DashboardIllustration } from '@/components/illustrations/DashboardIllustration'
import { Button } from '@/components/ui/Button'
import { Badge, SectionHeader } from '@/components/ui/Elements'
import {
  IconAD360, IconServiceDesk, IconEndpointCentral, IconLog360,
  IconOpManager, IconAnalyticsPlus,
  IconConsulting, IconEvaluation, IconImplementation,
  IconTraining, IconManagedServices, IconSupportAMC,
  IconBFSI, IconManufacturing, IconHealthcare,
  IconITITES, IconGovernment, IconEducation,
  IconCheck, IconArrowRight,
} from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Partner India | ManagedFirst Technologies',
  description: 'Most ManageEngine deployments configure the basics and stop. ManagedFirst implements the full platform -- architecture, integration, governance, and automation -- for enterprises across India. Authorized partner, Chennai.',
  canonicalPath: '/',
})

const solutionHubs = [
  { title: 'Identity and Access Management', href: '/solutions/iam', icon: <IconAD360 size={40} />,
    body: 'Identity lifecycle management across a distributed workforce is not a tooling problem -- it is a configuration and architecture problem. We implement the full ManageEngine IAM suite: provisioning, governance, privileged access, and audit trails.', products: ['AD360','ADManager Plus','ADAudit Plus','PAM360'] },
  { title: 'ITSM / ESM', href: '/solutions/itsm-esm', icon: <IconServiceDesk size={40} />,
    body: 'A service desk that routes tickets manually, misses SLAs, and lacks change management is a ticketing system -- not an ITSM platform. We configure ServiceDesk Plus to the full ITSM scope: incident, change, problem, asset, and enterprise service management.', products: ['ServiceDesk Plus','ServiceDesk Plus MSP'] },
  { title: 'Unified Endpoint Management', href: '/solutions/uems', icon: <IconEndpointCentral size={40} />,
    body: 'Unpatched devices, unapproved software, open USB ports, and unmanaged mobile devices are not edge cases -- they are the default state of growing IT environments. We implement Endpoint Central and MDM with policies calibrated for your device mix and security requirements.', products: ['Endpoint Central','Mobile Device Manager Plus'] },
  { title: 'IT Operations Management', href: '/solutions/itom', icon: <IconOpManager size={40} />,
    body: 'Monitoring tools that generate more alerts than anyone reads provide coverage without visibility. We implement OpManager Plus, Site24x7, and Applications Manager with thresholds, dashboards, and escalation paths configured for your infrastructure.', products: ['OpManager Plus','Site24x7','Applications Manager'] },
  { title: 'SIEM', href: '/solutions/siem', icon: <IconLog360 size={40} />,
    body: 'A SIEM that surfaces every event equally is indistinguishable from no SIEM. We implement Log360 with correlation rules tuned for your threat profile, alert thresholds below noise level, and compliance reports for your regulatory obligations.', products: ['Log360','ADAudit Plus','Firewall Analyzer'] },
  { title: 'IT Analytics', href: '/solutions/it-analytics', icon: <IconAnalyticsPlus size={40} />,
    body: 'IT performance data locked inside individual tool dashboards never reaches the leadership that needs it. We implement Analytics Plus connecting data from across your ManageEngine environment into dashboards your IT leadership can act on.', products: ['Analytics Plus'] },
]

const services = [
  { title: 'Consulting', href: '/services/consulting', icon: <IconConsulting size={28} />,
    desc: 'A written assessment of your environment, a specific product recommendation with rationale, and a phased implementation roadmap -- before any deployment begins or licence is purchased.' },
  { title: 'Evaluation Assistance', href: '/services/evaluation-assistance', icon: <IconEvaluation size={28} />,
    desc: 'ManageEngine configured and running in your environment for a structured trial. Real performance on your data -- not a vendor demonstration.' },
  { title: 'Implementation', href: '/services/implementation', icon: <IconImplementation size={28} />,
    desc: 'Architecture, configuration, integration, testing, and go-live -- built around your environment and processes. Delivered with a configuration runbook your team keeps.' },
  { title: 'Training and Enablement', href: '/services/training', icon: <IconTraining size={28} />,
    desc: 'Role-specific training for administrators, IT technicians, and end users -- delivered against your specific configuration, not a generic product walkthrough.' },
  { title: 'Managed Services', href: '/services/managed-services', icon: <IconManagedServices size={28} />,
    desc: 'Ongoing management of your ManageEngine environment: configuration upkeep, version upgrades, monitoring, and regular operational reporting -- without allocating internal IT capacity.' },
  { title: 'Support and AMC', href: '/services/support-amc', icon: <IconSupportAMC size={28} />,
    desc: 'Responsive technical support, licence renewals managed before they lapse, and version upgrade assistance for deployed ManageEngine environments.' },
]

const whyUs = [
  { title: 'ManageEngine is the only thing we do.', body: 'Our practice is built entirely around ManageEngine\'s product suite. Every certification, every methodology, every support process covers ManageEngine exclusively. When a complex implementation question arises -- cross-product integration, compliance configuration, governance architecture -- it is not a new problem for our team.' },
  { title: 'We implement to the full scope, not the minimum viable deployment.', body: 'Most ManageEngine deployments configure incident management, basic monitoring, or fundamental access controls. We implement the automation, the integrations, the governance workflows, and the advanced configuration that make the platform an operational asset. The difference is visible in how your team works after go-live.' },
  { title: 'Every engagement produces documentation your team keeps.', body: 'Implementation is complete when your team can operate the platform independently. Every engagement includes a configuration runbook -- specific to your deployment -- covering every setting applied, every integration configured, and every workflow built. You are not dependent on us to explain your own environment.' },
  { title: 'Indian regulatory requirements are built into every engagement.', body: 'DPDPA compliance, RBI IT framework obligations, ISO 27001 control mapping -- these are not add-ons. We configure ManageEngine for the regulatory environment Indian enterprises operate in. Compliance documentation is produced as part of implementation, not separately after.' },
]

const industries = [
  { title: 'Banking and Financial Services', href: '/industries/bfsi', icon: <IconBFSI size={32} /> },
  { title: 'Manufacturing', href: '/industries/manufacturing', icon: <IconManufacturing size={32} /> },
  { title: 'Healthcare', href: '/industries/healthcare', icon: <IconHealthcare size={32} /> },
  { title: 'IT and ITES', href: '/industries/it-ites', icon: <IconITITES size={32} /> },
  { title: 'Government and PSU', href: '/industries/government-psu', icon: <IconGovernment size={32} /> },
  { title: 'Education', href: '/industries/education', icon: <IconEducation size={32} /> },
]

const trustSignals = [
  'Authorized ManageEngine Partner',
  'Chennai-based. Pan-India delivery.',
  'All six ManageEngine solution categories',
  'Implementation methodology, not just deployment',
  'Documented configuration handover on every engagement',
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(orgSchema()) }} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <Hero
        variant="dark"
        eyebrow="Authorized ManageEngine Partner"
        heading="ManageEngine installed is not ManageEngine working."
        subheading="Enterprise organisations purchase ManageEngine expecting operational transformation. Most receive a deployment that covers the basics and leaves the automation, governance, integration, and advanced configuration untouched. ManagedFirst closes that gap. Architecture, implementation, and operational maturity across all six ManageEngine solution categories -- for enterprises across India."
        primaryCta={{ label: 'See Where the Gap Is', href: '#solutions' }}
        secondaryCta={{ label: 'Book an Assessment', href: '/free-consultation' }}
        visual={<DashboardIllustration />}
      />

      {/* ── Trust Bar ───────────────────────────────────────────────── */}
      <section className="bg-offwhite border-b border-border-default py-4">
        <div className="site-container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustSignals.map((s, i) => (
              <AnimateIn key={s} delay={i * 60} className="flex items-center gap-2">
                <IconCheck size={14} className="text-teal flex-shrink-0" strokeWidth={2.5} />
                <span className="text-body-sm text-charcoal font-medium">{s}</span>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Statement ───────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateIn direction="left">
              <p className="text-overline uppercase tracking-widest text-teal mb-3">The Implementation Gap</p>
              <h2 className="font-display text-h2 font-bold text-navy leading-tight mb-6">
                Most ManageEngine deployments use less than half the platform.
              </h2>
            </AnimateIn>
            <AnimateIn direction="right" className="space-y-4">
              {[
                'IT teams purchase ManageEngine, configure the basics, and move on. Ticketing works. Monitoring runs. Endpoints are being patched. The software is live.',
                'But most of what ManageEngine can do -- the workflow automation, the cross-tool integrations, the advanced governance, the compliance reporting -- remains at default settings or untouched entirely.',
                'This is not a product problem. ManageEngine is capable. The gap is in how implementations are scoped, architected, and configured.',
                'ManagedFirst implements ManageEngine to its full operational scope: environment-specific architecture, configuration mapped to your business processes, integrations with your existing systems, governance frameworks, and the runbook documentation that allows your team to operate independently. When we complete an engagement, the platform is working -- not just installed.',
              ].map((p, i) => <p key={i} className="text-body text-charcoal leading-relaxed">{p}</p>)}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ──────────────────────────────────────────── */}
      <section id="solutions" className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="ManageEngine Solutions"
              heading="Six solution categories. Each addressing a specific gap in your IT environment."
              subheading="We implement ManageEngine's complete product portfolio. The deployment approach is identical across all six categories -- documented, configured, integrated, and operational."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-5">
            {solutionHubs.map((hub, i) => (
              <AnimateIn key={hub.title} delay={i * 80}>
                <Link href={hub.href} className="group flex flex-col bg-white border-l-[3px] border-teal rounded-r-brand rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-space-5 hover-lift hover:shadow-card-hover h-full">
                  <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-200">{hub.icon}</div>
                  <p className="text-overline uppercase tracking-wider text-teal mb-2">{hub.title}</p>
                  <p className="text-body text-charcoal leading-relaxed mb-4 flex-1">{hub.body}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {hub.products.map(p => <Badge key={p} variant="teal" className="text-xs">{p}</Badge>)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-teal font-semibold text-body-sm group-hover:gap-2.5 transition-all">
                    Explore implementation <IconArrowRight size={14} />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Strip ──────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="Services"
              heading="From first assessment to long-term operational governance."
              subheading="ManagedFirst covers the complete ManageEngine engagement lifecycle. Each service has defined deliverables, a documented process, and a specific role in reducing implementation risk."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-5">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 70}>
                <Link href={s.href} className="group flex gap-4 p-space-5 rounded-brand border border-border-default bg-white hover-lift hover:border-teal">
                  <div className="text-teal flex-shrink-0 group-hover:scale-110 transition-transform duration-200 mt-0.5">{s.icon}</div>
                  <div>
                    <h3 className="font-display text-h5 font-semibold text-navy mb-1 group-hover:text-blue transition-colors">{s.title}</h3>
                    <p className="text-body-sm text-charcoal/70 leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200} className="mt-8">
            <Button variant="secondary" href="/services">See all services</Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── Why ManagedFirst ────────────────────────────────────────── */}
      <section className="bg-offwhite section-py">
        <div className="site-container">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="Why ManagedFirst"
              heading="Implementation expertise is built through consistent, documented delivery. Here is what that means in practice."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-5">
            {whyUs.map((d, i) => (
              <AnimateIn key={d.title} delay={i * 80}>
                <div className="bg-white border-l-[2px] border-teal p-space-5 rounded-r-brand">
                  <h3 className="font-display text-h4 font-bold text-navy mb-3">{d.title}</h3>
                  <p className="text-body text-charcoal leading-relaxed">{d.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <AnimateIn className="mb-10">
            <SectionHeader
              eyebrow="Industries"
              heading="Every sector has specific IT obligations. We configure ManageEngine for yours."
              subheading="The underlying IT challenges vary by sector -- so do the compliance frameworks, audit requirements, and operational constraints. Our implementations account for the environment you operate in."
            />
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.title} delay={i * 60}>
                <Link href={ind.href} className="group flex flex-col items-center text-center p-5 rounded-brand border border-border-default hover-lift hover:border-teal bg-white">
                  <div className="text-teal mb-3 group-hover:scale-110 transition-transform duration-200">{ind.icon}</div>
                  <p className="text-body-sm font-semibold text-navy group-hover:text-blue transition-colors leading-tight">{ind.title}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DPDPA Banner ─────────────────────────────────────────────── */}
      <section className="bg-teal py-12">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-overline uppercase tracking-widest text-white/70 mb-2">Compliance</p>
            <h2 className="font-display text-h2 font-bold text-white leading-tight">
              The DPDPA is in enforcement.<br className="hidden sm:block" />Is your IT environment ready?
            </h2>
          </div>
          <Button variant="primary-dark" href="/dpdpa-compliance" className="flex-shrink-0">
            Get a Free DPDPA Assessment
          </Button>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────── */}
      <CTABand
        heading="Your ManageEngine environment should be running its full capability."
        body="If it is not -- if automation is manual, if governance is incomplete, if compliance reporting requires extraction -- book a free assessment. We will review your current deployment, identify the configuration gaps, and tell you specifically what a complete implementation would change."
        primaryCta={{ label: 'Book a Free Assessment', href: '/free-consultation' }}
        secondaryCta={{ label: 'Write to us', href: '/contact' }}
      />
    </>
  )
}
