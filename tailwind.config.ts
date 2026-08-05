import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies — Tailwind Design Tokens
// Source: Brand Guidelines v1.0 · August 2026
// All values are confirmed from the brand guidelines document.
// ─────────────────────────────────────────────────────────────────────────────

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    // ── Breakpoints (brand guidelines, page 6) ──────────────────────────────
    screens: {
      xs:  '480px',
      sm:  '480px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
    },

    extend: {
      // ── Colours (brand guidelines, page 2) ─────────────────────────────────
      colors: {
        // ── Core palette ────────────────────────────────────────────────────
        navy:     '#0B2D78',   // Deep Navy  — hero, nav, H1, footer
        blue:     '#005A8E',   // Primary Blue — links, borders, H2, UI elements
        teal:     '#0099A8',   // Teal Accent — icons, tags, badges, highlights
        charcoal: '#1A1A2E',   // Charcoal — body text, dark UI
        offwhite: '#F4F8FB',   // Off-white — page bg, card bg, input bg
        red:      '#E8192C',   // Action Red — CTA on light backgrounds ONLY
        amber:    '#F5A623',   // Amber — CTA on dark/navy backgrounds ONLY

        // ── Tints (derived from core palette) ──────────────────────────────
        'teal-light':  '#E5F6F8',   // Teal at ~8% on white — callout backgrounds
        'navy-light':  '#F0F2F7',   // Navy at ~6% on white — subtle section tints
        'navy-dark':   '#081E52',   // Navy darkened — hover states on navy elements

        // ── Component colours ───────────────────────────────────────────────
        'border-default': '#D0DAE4',  // Default input and card borders
        'muted':          '#8899AA',  // Placeholders, captions, labels, H6
        'error-bg':       '#FFF5F5',  // Input error state background
        'disabled-bg':    '#E8EDF2',  // Disabled button / input background

        // ── Semantic aliases — use these in components ──────────────────────
        // Primary action colours
        'cta-light':  '#E8192C',  // CTA button on white/light bg
        'cta-dark':   '#F5A623',  // CTA button on navy/dark bg
        // Text colours
        'text-body':     '#1A1A2E',
        'text-muted':    '#8899AA',
        'text-on-dark':  '#FFFFFF',
        'text-heading':  '#0B2D78',
        'text-link':     '#005A8E',
      },

      // ── Typography (brand guidelines, page 3) ──────────────────────────────
      fontFamily: {
        // Headings, CTAs, labels, nav links
        display: ['Nunito', 'system-ui', 'sans-serif'],
        // Body text, captions, data
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },

      // Font sizes matching the brand type scale exactly
      fontSize: {
        // Heading scale (Nunito)
        'display': ['3rem',       { lineHeight: '1.10', letterSpacing: '-0.5px' }],  // 48px
        'h1':      ['2.25rem',    { lineHeight: '1.15', letterSpacing: '-0.3px' }],  // 36px
        'h2':      ['1.75rem',    { lineHeight: '1.20', letterSpacing: '-0.2px' }],  // 28px
        'h3':      ['1.375rem',   { lineHeight: '1.25', letterSpacing: '0px'   }],  // 22px
        'h4':      ['1.125rem',   { lineHeight: '1.30', letterSpacing: '0px'   }],  // 18px
        'h5':      ['1rem',       { lineHeight: '1.35', letterSpacing: '0px'   }],  // 16px
        'h6':      ['0.875rem',   { lineHeight: '1.40', letterSpacing: '0.2px' }],  // 14px
        // Body scale (Inter)
        'body-lg': ['1.125rem',   { lineHeight: '1.75' }],  // 18px — hero intro
        'body':    ['1rem',       { lineHeight: '1.75' }],  // 16px — all body
        'body-sm': ['0.875rem',   { lineHeight: '1.70' }],  // 14px — secondary copy
        'caption': ['0.8125rem',  { lineHeight: '1.60' }],  // 13px
        'label':   ['0.75rem',    { lineHeight: '1.50' }],  // 12px — form labels, metadata
        'overline':['0.6875rem',  { lineHeight: '1.40' }],  // 11px — eyebrow text
        'cta':     ['0.875rem',   { lineHeight: '1.0'  }],  // 14px — button text
        'nav':     ['0.875rem',   { lineHeight: '1.0'  }],  // 14px — nav links
      },

      // Font weights used in type scale
      fontWeight: {
        'black':     '900',  // Display
        'extrabold': '800',  // H1
        'bold':      '700',  // H2, H3, H4, CTA button
        'semibold':  '600',  // H5, H6, nav links
        'medium':    '500',  // Label, Overline
        'regular':   '400',  // Body, Caption
      },

      // ── Spacing (brand guidelines, page 4 — 8px base unit) ────────────────
      spacing: {
        // Brand spacing tokens — use these in components
        'space-1':  '0.25rem',   // 4px  — icon-to-label gap, micro-spacing
        'space-2':  '0.5rem',    // 8px  — tight element spacing
        'space-3':  '0.75rem',   // 12px — component internal padding (sm)
        'space-4':  '1rem',      // 16px — default component padding
        'space-5':  '1.5rem',    // 24px — section internal spacing, card padding
        'space-6':  '2rem',      // 32px — gap between components
        'space-7':  '3rem',      // 48px — section padding mobile
        'space-8':  '4rem',      // 64px — section padding desktop
        'space-9':  '6rem',      // 96px — large section breaks, hero padding
        'space-10': '8rem',      // 128px — page-level vertical rhythm
        // Component-specific sizes
        'nav-height':  '4rem',   // 64px — navigation bar height
        'page-margin': '5rem',   // 80px — desktop page horizontal margin
        'card-pad':    '1.5rem', // 24px — card internal padding
        'btn-x':       '1.5rem', // 24px — button horizontal padding
        'btn-y':       '0.75rem',// 12px — button vertical padding
        'input-h':     '3rem',   // 48px — input field height
      },

      // ── Max widths ─────────────────────────────────────────────────────────
      maxWidth: {
        site:  '1280px',  // Content never exceeds this — centred on screen
        prose: '720px',   // Blog posts and legal pages
      },

      // ── Border radius (from component specs, page 5) ───────────────────────
      borderRadius: {
        brand:   '6px',   // Buttons, cards, inputs
        'brand-sm': '4px',
        'brand-lg': '8px',
      },

      // ── Box shadows ────────────────────────────────────────────────────────
      boxShadow: {
        card:    '0 1px 3px rgba(11, 45, 120, 0.08), 0 1px 2px rgba(11, 45, 120, 0.06)',
        'card-hover': '0 4px 12px rgba(11, 45, 120, 0.12), 0 2px 4px rgba(11, 45, 120, 0.08)',
        nav:     '0 1px 0 rgba(11, 45, 120, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
