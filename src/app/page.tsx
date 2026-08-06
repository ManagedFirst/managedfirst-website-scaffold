import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { orgSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { DashboardIllustration } from '@/components/illustrations/DashboardIllustration'
import { Button } from '@/components/ui/Button'
import {
  IconAD360, IconServiceDesk, IconEndpointCentral, IconLog360,
  IconOpManager, IconAnalyticsPlus,
  IconBFSI, IconManufacturing, IconHealthcare,
  IconITITES, IconGovernment, IconEducation,
  IconCheck, IconArrowRight,
} from '@/components/icons'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Implementation Partner India | ManagedFirst Technologies',
  description: 'Most ManageEngine deployments configure the basics and stop. ManagedFirst implements the full platform -- architecture, integration, governance, and automation -- for enterprises across India. Authorized partner, Chennai.',
  canonicalPath: '/',
})

const solutions = [
  { title: 'Identity and Access Management', href: '/solutions/iam', icon: <IconAD360 size={26} />, desc: 'Provisioning, governance, privileged access, and audit trails.', count: 5 },
  { title: 'ITSM / ESM', href: '/solutions/itsm-esm', icon: <IconServiceDesk size={26} />, desc: 'Service desk, change control, asset management, ESM.', count: 2 },
  { title: 'Unified Endpoint Management', href: '/solutions/uems', icon: <IconEndpointCentral size={26} />, desc: 'Patch management, endpoint security, and MDM.', count: 2 },
  { title: 'IT Operations Management', href: '/solutions/itom', icon: <IconOpManager size={26} />, desc: 'Network monitoring, server monitoring, and APM.', count: 3 },
  { title: 'SIEM', href: '/solutions/siem', icon: <IconLog360 size={26} />, desc: 'Log management, threat detection, and compliance reporting.', count: 3 },
  { title: 'IT Analytics', href: '/solutions/it-analytics', icon: <IconAnalyticsPlus size={26} />, desc: 'Unified dashboards across your ManageEngine environment.', count: 1 },
]

const whyUs = [
  { n: '01', title: 'ManageEngine is the only thing we do.', body: 'Our practice covers ManageEngine exclusively -- all 15 products, all six solution categories, every configuration scenario. When a complex question arises, it is not new to us.' },
  { n: '02', title: 'We implement to the full scope, not the minimum viable deployment.', body: 'Most deployments configure the basics. We implement the automation, integrations, governance workflows, and advanced configuration that make the platform an operational asset.' },
  { n: '03', title: 'Every engagement produces documentation your team keeps.', body: 'Implementation is complete when your team can operate independently. Every engagement delivers a configuration runbook covering every setting applied and every workflow built.' },
  { n: '04', title: 'Indian regulatory requirements are built into every engagement.', body: 'DPDPA, RBI IT framework, ISO 27001 -- these are not add-ons. We configure ManageEngine for the regulatory environment Indian enterprises operate in.' },
]

const services = [
  { title: 'Consulting',              href: '/services/consulting',              desc: 'Written assessment, product recommendation, and implementation roadmap before any deployment begins.' },
  { title: 'Evaluation Assistance',   href: '/services/evaluation-assistance',   desc: 'ManageEngine configured in your environment for a structured trial against your actual use cases.' },
  { title: 'Implementation',          href: '/services/implementation',          desc: 'Architecture, configuration, integration, testing, and documented handover. Built around your processes.' },
  { title: 'Training and Enablement', href: '/services/training',                desc: 'Role-specific training against your specific deployment -- not a generic product walkthrough.' },
  { title: 'Managed Services',        href: '/services/managed-services',        desc: 'Ongoing configuration management, version upgrades, and operational reporting.' },
  { title: 'Support and AMC',         href: '/services/support-amc',             desc: 'Responsive technical support and licence renewals managed before they lapse.' },
]

const industries = [
  { title: 'Banking and Financial Services', href: '/industries/bfsi',           icon: <IconBFSI size={26} /> },
  { title: 'Manufacturing',                  href: '/industries/manufacturing',   icon: <IconManufacturing size={26} /> },
  { title: 'Healthcare',                     href: '/industries/healthcare',      icon: <IconHealthcare size={26} /> },
  { title: 'IT and ITES',                    href: '/industries/it-ites',         icon: <IconITITES size={26} /> },
  { title: 'Government and PSU',             href: '/industries/government-psu',  icon: <IconGovernment size={26} /> },
  { title: 'Education',                      href: '/industries/education',       icon: <IconEducation size={26} /> },
]

const stats = [
  { number: '15', label: 'ManageEngine products' },
  { number: '6',  label: 'Solution categories' },
  { number: '6',  label: 'Industry verticals' },
  { number: '1',  label: 'Authorised partner' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(orgSchema()) }} />

      {/* ── HERO -- text always visible, no animation opacity dependency ── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }}
          aria-hidden="true" />

        <div className="site-container relative w-full py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[88vh]">

            {/* Text -- rendered at full opacity immediately, no animate class */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-teal" style={{ animation: 'pulseTeal 2s ease-in-out infinite' }} />
                <span className="text-teal font-medium text-sm tracking-wide">
                  Authorized ManageEngine Partner · Chennai, India
                </span>
              </span>

              <h1 className="font-display font-black text-white leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}>
                ManageEngine installed is not ManageEngine working.
              </h1>

              <p className="text-white/70 leading-relaxed mb-10 max-w-[520px]"
                style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>
                Enterprise organisations purchase ManageEngine and receive a deployment that covers the basics. The automation, governance, integrations, and compliance configuration remain untouched. ManagedFirst closes that gap -- across all six solution categories, for enterprises across India.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="primary-dark" href="/free-consultation" icon={<IconArrowRight size={15} />}>
                  Book a Free Assessment
                </Button>
                <Button variant="ghost" href="#solutions">
                  See the Solutions
                </Button>
              </div>

              {/* Trust signals grid -- always visible */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Authorised ManageEngine Partner',
                  'Pan-India delivery from Chennai',
                  'All six solution categories',
                  'Documented handover on every engagement',
                ].map(s => (
                  <div key={s} className="flex items-start gap-2">
                    <IconCheck size={13} className="text-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-white/55 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard illustration */}
            <div className="hidden lg:flex items-center justify-end">
              <div className="w-full max-w-[560px] animate-float">
                <DashboardIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS -- large numbers on white ── */}
      <section className="bg-white border-b border-border-default">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border-default">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 80} className="py-10 px-6 text-center">
                <p className="font-display font-black text-navy leading-none mb-2"
                  style={{ fontSize: 'clamp(42px, 4vw, 58px)' }}>
                  {s.number}
                </p>
                <p className="text-muted text-sm font-medium">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT -- editorial two-column ── */}
      <section className="bg-[#F8FAFB] section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateIn direction="left">
              <p className="text-overline uppercase tracking-widest text-teal mb-4">The Implementation Gap</p>
              <blockquote className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}>
                "Most ManageEngine deployments use less than half the platform."
              </blockquote>
            </AnimateIn>
            <AnimateIn direction="right" className="space-y-5">
              {[
                'IT teams install ManageEngine, configure incident management and basic monitoring, and move on. The software is live. The project is complete.',
                'But the workflow automation, cross-tool integrations, access governance, and compliance reporting remain untouched -- the configuration that turns an installed tool into an operational asset.',
                'This is not a product problem. The platform is capable. The gap is in how implementations are scoped, architected, and configured for the organisation\'s actual environment.',
                'ManagedFirst implements ManageEngine to its full operational scope: architecture, configuration mapped to your processes, integration with your existing systems, and documentation your team uses independently.',
              ].map((p, i) => (
                <p key={i} className="text-charcoal/80 leading-relaxed text-[15px]">{p}</p>
              ))}
              <div className="pt-2">
                <Button variant="secondary" href="/services/implementation">
                  See our implementation approach
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS -- card grid with left accent ── */}
      <section id="solutions" className="bg-white section-py">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <AnimateIn>
              <p className="text-overline uppercase tracking-widest text-teal mb-3">ManageEngine Solutions</p>
              <h2 className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(24px, 2.8vw, 38px)' }}>
                Six solution categories.<br className="hidden lg:block" />One authorised partner.
              </h2>
            </AnimateIn>
            <AnimateIn delay={100} className="flex-shrink-0">
              <Button variant="secondary" href="/solutions/iam">Explore all solutions</Button>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-default rounded-brand overflow-hidden border border-border-default">
            {solutions.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 55}>
                <Link href={s.href}
                  className="group flex flex-col bg-white p-6 h-full min-h-[180px] hover:bg-[#F8FAFB] transition-colors duration-200 border-l-[3px] border-transparent hover:border-l-teal">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
                    <span className="text-xs text-muted font-medium">{s.count} {s.count === 1 ? 'product' : 'products'}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy text-[16px] mb-2 group-hover:text-blue transition-colors leading-snug">{s.title}</h3>
                  <p className="text-[13px] text-charcoal/65 leading-relaxed flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-teal text-xs font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200">
                    Implementation detail <IconArrowRight size={12} />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MANAGEDFIRST -- numbered editorial list ── */}
      <section className="bg-[#F8FAFB] section-py">
        <div className="site-container">
          <AnimateIn className="mb-12">
            <p className="text-overline uppercase tracking-widest text-teal mb-3">Why ManagedFirst</p>
            <h2 className="font-display font-bold text-navy max-w-xl leading-tight"
              style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}>
              What separates an implementation from an installation.
            </h2>
          </AnimateIn>

          <div className="divide-y divide-border-default border-y border-border-default">
            {whyUs.map((item, i) => (
              <AnimateIn key={item.n} delay={i * 80}>
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-10 py-7">
                  <div className="lg:col-span-1">
                    <span className="font-display font-black text-teal/20 text-2xl select-none">{item.n}</span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-display font-semibold text-navy text-[16px] leading-snug">{item.title}</h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-charcoal/70 leading-relaxed text-[14px]">{item.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-8">
            <Button variant="secondary" href="/about">About ManagedFirst</Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICES -- list hybrid ── */}
      <section className="bg-white section-py">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <AnimateIn>
              <p className="text-overline uppercase tracking-widest text-teal mb-3">Services</p>
              <h2 className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}>
                From first assessment to long-term governance.
              </h2>
            </AnimateIn>
          </div>

          <div className="border-y border-border-default divide-y divide-border-default">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 55}>
                <Link href={s.href}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-center py-5 hover:bg-[#F8FAFB] transition-colors duration-200 px-3 -mx-3 rounded-sm">
                  <div className="lg:col-span-3">
                    <h3 className="font-display font-semibold text-navy text-[15px] group-hover:text-blue transition-colors">{s.title}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[13px] text-charcoal/65 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <IconArrowRight size={15} className="text-muted group-hover:text-teal group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200} className="mt-8">
            <Button variant="secondary" href="/services">All services</Button>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRIES -- uniform fixed-height tiles ── */}
      <section className="bg-[#F8FAFB] section-py">
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <AnimateIn>
              <p className="text-overline uppercase tracking-widest text-teal mb-3">Industries</p>
              <h2 className="font-display font-bold text-navy leading-tight"
                style={{ fontSize: 'clamp(22px, 2.6vw, 36px)' }}>
                Every sector has specific IT obligations.<br className="hidden lg:block" />We configure ManageEngine for yours.
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.title} delay={i * 45}>
                <Link href={ind.href}
                  className="group flex flex-col items-center justify-center text-center
                             bg-white border border-border-default rounded-brand
                             h-[144px] p-4
                             hover:border-teal hover:-translate-y-1 hover:shadow-md
                             transition-all duration-200">
                  <span className="text-teal mb-3 group-hover:scale-110 transition-transform duration-200">{ind.icon}</span>
                  <span className="text-navy font-semibold text-[12px] leading-tight group-hover:text-blue transition-colors">{ind.title}</span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DPDPA COMPLIANCE BANNER ── */}
      <section className="bg-navy section-py">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimateIn direction="left">
              <p className="text-overline uppercase tracking-widest text-teal mb-4">Compliance</p>
              <h2 className="font-display font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}>
                The DPDPA is in enforcement.<br />Is your IT environment ready?
              </h2>
              <p className="text-white/60 leading-relaxed text-[15px] max-w-lg">
                Five specific technical obligations. ManageEngine addresses each one -- when configured correctly.
              </p>
            </AnimateIn>
            <AnimateIn direction="right" className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Button variant="primary-dark" href="/dpdpa-compliance">
                Get a Free DPDPA Assessment
              </Button>
              <Button variant="ghost" href="/resources/guides">
                Download the Checklist
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#F8FAFB] border-t border-border-default section-py">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn>
              <h2 className="font-display font-bold text-navy leading-tight mb-5"
                style={{ fontSize: 'clamp(26px, 2.8vw, 40px)' }}>
                Your ManageEngine environment should be running its full capability.
              </h2>
            </AnimateIn>
            <AnimateIn delay={100}>
              <p className="text-charcoal/65 leading-relaxed mb-8 text-[16px]">
                If it is not -- book a free assessment. We will review your current deployment, identify the configuration gaps, and tell you specifically what a complete implementation would change.
              </p>
            </AnimateIn>
            <AnimateIn delay={200} className="flex flex-wrap justify-center gap-3">
              <Button variant="primary-light" href="/free-consultation" icon={<IconArrowRight size={15} />}>
                Book a Free Assessment
              </Button>
              <Button variant="secondary" href="/contact">
                Write to us
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
