'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { navigation, footerColumns } from '@/data/navigation'
import { IconMenu, IconX, IconChevronDown } from '@/components/icons'

// ── Desktop dropdown wrapper ──────────────────────────────────────────────────
function DropdownItem({ item }: { item: typeof navigation[0] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (item.cta) {
    return (
      <Button variant="primary-light" href={item.href} size="sm">
        {item.label}
      </Button>
    )
  }

  // Products -- mega-menu (columns)
  if (item.columns) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1 nav-link nav-underline py-1 px-0.5"
          aria-expanded={open}
        >
          {item.label}
          <IconChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-fade-in"
            style={{ width: 'min(900px, 90vw)' }}>
            <div className="bg-white rounded-brand shadow-xl border-t-2 border-teal border border-border-default p-6">
              <div className="grid grid-cols-3 gap-6">
                {item.columns.map(col => (
                  <div key={col.heading}>
                    <Link href={col.href}
                      className="block text-label font-bold text-navy uppercase tracking-wide mb-3 hover:text-teal transition-colors"
                      onClick={() => setOpen(false)}>
                      {col.heading}
                    </Link>
                    <ul className="space-y-2">
                      {col.items.map(sub => (
                        <li key={sub.href}>
                          <Link href={sub.href} onClick={() => setOpen(false)}
                            className="group flex flex-col">
                            <span className="text-body-sm font-medium text-charcoal group-hover:text-blue transition-colors">
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span className="text-caption text-muted">{sub.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Simple dropdown (items)
  if (item.items) {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1 nav-link nav-underline py-1 px-0.5"
          aria-expanded={open}
        >
          {item.label}
          <IconChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-2 z-50 w-72 animate-fade-in">
            <div className="bg-white rounded-brand shadow-xl border-t-2 border-teal border border-border-default py-2">
              {item.items.map(sub => (
                <Link key={sub.href} href={sub.href} onClick={() => setOpen(false)}
                  className="flex flex-col px-5 py-2.5 hover:bg-offwhite transition-colors group">
                  <span className="text-body-sm font-medium text-charcoal group-hover:text-blue transition-colors">
                    {sub.label}
                  </span>
                  {sub.description && (
                    <span className="text-caption text-muted">{sub.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={item.href!} className="nav-link nav-underline py-1 px-0.5">
      {item.label}
    </Link>
  )
}

// ── Mobile nav ────────────────────────────────────────────────────────────────
function MobileNav({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <div className="fixed inset-0 z-50 bg-navy flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 flex-shrink-0">
        <span className="font-display font-bold text-white text-h4">ManagedFirst</span>
        <button onClick={onClose} className="p-2 text-white/70 hover:text-white">
          <IconX size={22} />
        </button>
      </div>

      {/* Nav items */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        {navigation.map(item => {
          if (item.cta) {
            return (
              <div key={item.label} className="pt-6 border-t border-white/10">
                <Button variant="primary-dark" href={item.href} className="w-full justify-center" onClick={onClose}>
                  {item.label}
                </Button>
              </div>
            )
          }

          const hasChildren = !!(item.items || item.columns)
          const allItems = item.items ?? item.columns?.flatMap(c => c.items) ?? []
          const isOpen = openSection === item.label

          if (hasChildren) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => setOpenSection(isOpen ? null : item.label)}
                  className="w-full flex items-center justify-between py-3 text-white font-display font-semibold text-body"
                >
                  {item.label}
                  <IconChevronDown size={18} className={`text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="pl-4 pb-2 space-y-1 border-l border-teal/30 ml-2">
                    {allItems.map(sub => (
                      <Link key={sub.href} href={sub.href}
                        onClick={onClose}
                        className="block py-2 text-white/70 hover:text-white text-body-sm transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          }

          return (
            <Link key={item.label} href={item.href!} onClick={onClose}
              className="block py-3 text-white font-display font-semibold text-body hover:text-teal transition-colors">
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 h-[64px] flex items-center bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-nav' : 'border-b border-border-default'
        }`}
      >
        <div className="site-container flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
              <span className="text-white font-display font-black text-sm">M</span>
            </div>
            <span className="font-display font-bold text-navy text-h5">ManagedFirst</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navigation.map(item => (
              <DropdownItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-charcoal hover:text-navy"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <IconMenu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
    </>
  )
}
