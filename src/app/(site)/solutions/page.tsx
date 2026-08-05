import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, schemaToString } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'ManageEngine Solutions India | ManagedFirst Technologies',
  description: "ManagedFirst implements ManageEngine's complete product portfolio across IAM, ITSM/ESM, UEMS, ITOM, SIEM, and IT Analytics for Indian enterprises.",
  canonicalPath: '/solutions',
})

// Breadcrumbs: Home > Solutions
const breadcrumbs = [{"name": "Home", "href": "/"}, {"name": "Solutions", "href": "/solutions"}]

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema(breadcrumbs)) }}
      />
      {/* ──────────────────────────────────────────────────────────────────
          ManageEngine Solutions
          H1: Six ManageEngine solution categories. One authorised partner.
          Subheadline: ManagedFirst implements and supports ManageEngine's complete product portfolio.
          
          TODO: Build the ManageEngine Solutions component and import it here.
          All copy for this page is in the content PDF (Batch 2).
          ─────────────────────────────────────────────────────────────── */}
      <main>
        <h1>Six ManageEngine solution categories. One authorised partner.</h1>
        <p>ManagedFirst implements and supports ManageEngine's complete product portfolio.</p>
        <p style={{ color: 'red' }}>
          🚧 Developer: Replace this placeholder with the actual ManageEngine Solutions component.
          Copy is in the website content PDF. Remove this message before go-live.
        </p>
      </main>
    </>
  )
}
