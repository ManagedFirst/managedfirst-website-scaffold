import Link from 'next/link'
import { footerColumns, footerBottomBar } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="site-container py-space-10">
        {/* Tagline */}
        <p className="font-display text-h3 font-bold text-white/90 mb-10">
          Your ManageEngine. Our Expertise.<br className="hidden sm:block" /> Zero Hassle.
        </p>

        {/* 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map(col => (
            <div key={col.heading}>
              <h4 className="font-display font-semibold text-white text-h6 uppercase tracking-wide mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/65 hover:text-white text-body-sm transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Authorized partner statement */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-body-sm text-white/50">
            ManagedFirst Technologies is an authorized ManageEngine partner in India.
            ManageEngine is a trademark of Zoho Corporation Pvt. Ltd. All product names,
            logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="site-container py-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-caption text-white/40">
            <p>{footerBottomBar.copyright}</p>
            <p className="text-right">
              {footerBottomBar.cin} | Registered Office: {footerBottomBar.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
