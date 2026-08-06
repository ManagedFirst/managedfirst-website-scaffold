import Link from 'next/link'
import { footerColumns, footerBottomBar } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* ── Main body ─────────────────────────────────────────── */}
      <div className="site-container pt-16 pb-12">

        {/* Tagline + descriptor */}
        <div className="mb-12 pb-10 border-b border-white/10">
          <p className="font-display font-bold text-white leading-snug"
            style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}>
            Your ManageEngine. Our Expertise. Zero Hassle.
          </p>
          <p className="text-white/45 text-[13px] mt-2">
            Authorized ManageEngine Partner · Chennai, India · Pan-India delivery
          </p>
        </div>

        {/* 5-column link grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map(col => (
            <div key={col.heading}>
              {/* Column heading -- solid white, clearly readable */}
              <h4 className="text-white font-semibold text-[11px] uppercase tracking-[0.1em] mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/55 hover:text-white text-[13px] leading-snug transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/35 text-[12px] leading-relaxed max-w-2xl">
            ManagedFirst Technologies is an authorized ManageEngine partner in India.
            ManageEngine is a trademark of Zoho Corporation Pvt. Ltd.
            All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>

      {/* ── Bottom bar -- copyright, clearly readable ───────────── */}
      <div className="border-t border-white/10">
        <div className="site-container py-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            {/* Copyright -- text-white/65 ensures visibility on navy */}
            <p className="text-white/65 text-[12px]">
              {footerBottomBar.copyright}
            </p>
            <p className="text-white/45 text-[12px] sm:text-right">
              {footerBottomBar.cin} &nbsp;·&nbsp; Reg. Office: {footerBottomBar.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
