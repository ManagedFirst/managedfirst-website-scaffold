import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, articleSchema, schemaToString } from '@/lib/schema'
import { AnimateIn } from '@/components/AnimateIn'
import { Badge, Breadcrumb } from '@/components/ui/Elements'
import { CTABand } from '@/components/sections/Sections'

// Static article content -- in production these come from Payload CMS
const articles: Record<string, {
  title: string; excerpt: string; category: string; publishedAt: string;
  readTimeMinutes: number; body: string[];
}> = {
  'why-most-manageengine-deployments-underperform': {
        title: 'Getting Full Value from ManageEngine -- What Structured Implementation Delivers',
        excerpt: 'ManageEngine is a comprehensive IT management platform. Getting the full value it offers across 15 products and six solution categories requires structured implementation expertise. Here is what that looks like in practice.',
    category: 'ManageEngine Implementation',
    publishedAt: '2026-08-01',
    readTimeMinutes: 8,
    body: [
      'ManageEngine is one of the most capable IT management platforms available to Indian enterprises. It covers the full scope of enterprise IT -- identity and access management, ITSM, endpoint security, SIEM, IT operations monitoring, and analytics -- across 15 products and six solution categories. The platform is comprehensive by design.',
      'Getting full value from that breadth is the challenge ManageEngine implementation partners exist to solve. Each ManageEngine product has significant configuration depth. ServiceDesk Plus, for example, goes well beyond ticket management -- it supports change governance with approval workflows, problem management with a known-error database, SLA management with escalation paths, enterprise service management, and a self-service portal.',
      'Activating all of that requires implementation work: process mapping, workflow configuration, SLA tier setup, integration with Active Directory and HRMS systems, asset discovery configuration, and end-user training. This is not a limitation of the platform -- it is the nature of enterprise software at this scope. Every ManageEngine product rewards expert implementation.',
      "What distinguishes implementations that deliver full value is implementation structure: scope documented before deployment began, configuration built for the organisation's actual processes, integrations treated as part of the implementation rather than deferred, and teams receiving training against their specific configuration.",
      "ManagedFirst's entire practice is built around ManageEngine implementation -- all 15 products, all six solution categories, with a documented methodology applied to every engagement. Architecture designed for your environment. Configuration mapped to your processes. Integration built into the project scope. Documentation your team keeps.",
      'If you want to understand what a full-scope ManageEngine implementation would look like for your organisation, book a free consultation. We will review your environment and tell you specifically what the implementation would involve and what it would deliver.',
    ],
  },
  'dpdpa-compliance-checklist-for-it-teams': {
        title: 'DPDPA Compliance Checklist for IT Teams -- Five Technical Obligations and the ManageEngine Controls That Address Them',
        excerpt: "DPDPA creates five specific technical obligations for IT teams. ManageEngine's products address all five when correctly implemented. This checklist maps each obligation to the ManageEngine tool and configuration it requires.",
    category: 'Compliance',
    publishedAt: '2026-08-01',
    readTimeMinutes: 10,
    body: [
      "The Digital Personal Data Protection Act creates obligations that IT teams need to deliver -- at the level of access controls, monitoring, audit trails, and breach detection capability. ManageEngine's product suite addresses all five technical obligations when correctly implemented.",
      'Note: this covers the technical IT implementation component only. Policy documentation, consent management, privacy notices, and legal interpretation are handled by your legal and compliance team.',
      '1. Reasonable Security Safeguards (Section 8(5)): ManageEngine tools: AD360 (role-based access controls), Endpoint Central (endpoint patch management and security policies), Log360 (monitoring for systems processing personal data). Correctly implemented, these products provide a strong technical safeguards posture.',
      '2. Breach Detection and Notification Capability: ManageEngine Log360 provides the centralised log repository and incident timeline that makes breach scope determination accurate. ADAudit Plus provides the file server audit trail that identifies which data was accessed.',
      '3. Access Controls and Accountability: ManageEngine AD360 and ADManager Plus deliver role-based access controls with automated provisioning and deprovisioning. ADAudit Plus provides a continuous audit trail. PAM360 governs privileged access to systems processing sensitive data.',
      '4. Data Accuracy and Deletion: ADAudit Plus tracks every modification to personal data records. ADManager Plus automates deprovisioning workflows that remove access when purpose is fulfilled.',
      '5. Response to Data Principal Rights Requests: ADAudit Plus and Log360 provide cross-system log search by individual identity -- making rights request responses accurate and auditable.',
      'Download the full DPDPA Readiness Checklist for IT Teams from our Guides page for a self-assessment tool that maps your ManageEngine configuration against each obligation.',
    ],
  },
  'how-to-evaluate-manageengine-servicedesk-plus': {
        title: 'How to Evaluate ManageEngine ServiceDesk Plus -- A Structured Approach for IT Teams',
        excerpt: 'ServiceDesk Plus is a comprehensive enterprise ITSM platform. Evaluating it well means configuring a trial for your specific processes. Here is how to structure an evaluation that gives you useful results.',
    category: 'IT Operations and ITSM',
    publishedAt: '2026-08-01',
    readTimeMinutes: 9,
    body: [
      'ManageEngine ServiceDesk Plus is a comprehensive enterprise ITSM platform -- covering incident management, change governance, problem management, asset lifecycle tracking, enterprise service management, and a self-service portal in a single product. Evaluating it well means setting up a trial that reflects your actual processes.',
      'A vendor demonstration shows what the platform looks like with default configuration. A structured evaluation shows what ServiceDesk Plus looks like in your environment -- with your ticket categories, your SLA tiers, and your approval workflows. That is what produces useful evaluation results.',
      'Before configuring the trial: document your current IT service delivery processes. What categories do your tickets fall into? What are your SLA commitments? Who approves production system changes? Clear process documentation is the foundation for a useful evaluation.',
      'What to configure in the trial: your ticket categories and routing rules, your SLA tiers with escalation thresholds, and at least one change management workflow with an approval stage. Evaluate ServiceDesk Plus against your process -- not against defaults.',
      'What to test: route real incident types through the configuration and confirm tickets route automatically. Simulate an SLA approaching breach and verify the escalation fires. Submit a change request and confirm it moves through your approval workflow.',
      "What to assess: does ServiceDesk Plus, configured for your processes, deliver the ITSM capability your organisation needs? Does the self-service portal handle your users' most frequent request types?",
      "ManagedFirst's Evaluation Assistance service configures ServiceDesk Plus specifically for your environment -- your categories, your SLA tiers, your routing rules -- so you evaluate the platform's full capability against your actual use cases.",
    ],
  },
  'manageengine-implementation-maturity-model': {
        title: 'The ManageEngine Implementation Maturity Model -- A Framework for Assessing Implementation Depth',
        excerpt: "ManageEngine's capability spans five levels of implementation depth across six solution categories. The MIMM framework gives IT teams a structured way to assess where their current implementation sits and what the next level would deliver.",
    category: 'ManageEngine Implementation',
    publishedAt: '2026-08-01',
    readTimeMinutes: 12,
    body: [
      "The ManageEngine Implementation Maturity Model (MIMM) is a framework for assessing how comprehensively a ManageEngine deployment has been implemented -- and for identifying what advancing to the next level would deliver. It is a planning tool for IT teams who want to be deliberate about getting full value from ManageEngine's capability.",
      "ManageEngine is a comprehensive platform with significant configuration depth at every level. The MIMM provides a structured way to assess where a current implementation sits against ManageEngine's full scope, and to prioritise the implementation work that delivers the most value next.",
      "Level 1 -- Installed: The product is installed and running. The platform's capability is available but not yet configured for the organisation.",
      'Level 2 -- Core Configuration: The primary features are configured for the organisation. For ITSM: incident management works with defined categories and technician groups. For IAM: user accounts are managed and group memberships are set. The platform is delivering value in its primary use cases.',
      "Level 3 -- Process Integration: The platform is configured for the organisation's actual operational processes. Routing rules reflect how the IT team works. Provisioning templates are role-based. Access reviews are scheduled. The platform actively reduces manual effort.",
      'Level 4 -- System Integration and Automation: ManageEngine is connected to other systems. HRMS events trigger provisioning. Monitoring tools create ITSM tickets. Compliance reports generate automatically. Cross-system automation eliminates manual handoffs.',
      'Level 5 -- Governance and Continuous Improvement: The implementation has documented governance processes and regular operational reviews. Compliance evidence is produced without manual intervention. The IT team uses ManageEngine to continuously improve IT operations.',
      'For a new ManageEngine deployment, defining the target maturity level before scoping is more valuable than scoping from a feature list. For an existing deployment, a maturity assessment identifies the highest-value implementation work to prioritise. Download the MIMM Quick Assessment Guide from our Guides page.',
    ],
  },
}

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return {}
  return buildMetadata({
    title: `${article.title} | ManagedFirst Blog`,
    description: article.excerpt,
    canonicalPath: `/blog/${slug}`,
  })
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }))
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) notFound()

  const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: article.title, href: `/blog/${slug}` }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }} />

      <article>
        <header className="bg-white border-b border-border-default py-12">
          <div className="site-container max-w-3xl">
            <AnimateIn className="mb-4">
              <Breadcrumb items={breadcrumbs} />
            </AnimateIn>
            <AnimateIn delay={80}>
              <Badge variant="teal" className="mb-4">{article.category}</Badge>
            </AnimateIn>
            <AnimateIn delay={120}>
              <h1 className="font-display text-h1 font-extrabold text-navy leading-tight mb-4">{article.title}</h1>
            </AnimateIn>
            <AnimateIn delay={160}>
              <p className="text-body-lg text-charcoal/80 leading-relaxed mb-6">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-caption text-muted">
                <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <span>·</span>
                <span>{article.readTimeMinutes} min read</span>
                <span>·</span>
                <span>ManagedFirst Technologies</span>
              </div>
            </AnimateIn>
          </div>
        </header>

        <div className="bg-offwhite section-py">
          <div className="site-container max-w-3xl">
            <AnimateIn>
              <div className="prose prose-lg max-w-none">
                {article.body.map((paragraph, i) => (
                  <p key={i} className="text-body text-charcoal leading-relaxed mb-5">{paragraph}</p>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </article>

      <CTABand
        heading="Questions about ManageEngine implementation?"
        body="Book a free consultation. We will review your requirements and tell you honestly what a proper implementation would involve."
        primaryCta={{ label: 'Book a Free Consultation', href: '/free-consultation' }}
        secondaryCta={{ label: 'Read more articles', href: '/blog' }}
      />
    </>
  )
}
