// ─────────────────────────────────────────────────────────────────────────────
// ManagedFirst Technologies -- Custom Icon System
// All icons: outline style, 2px stroke, currentColor, 24×24 viewBox
// Usage: <IconAD360 size={32} className="text-teal" />
// ─────────────────────────────────────────────────────────────────────────────

interface IconProps {
  size?: number
  className?: string
  strokeWidth?: number
}

// ── ManageEngine Product Icons ────────────────────────────────────────────────

export function IconAD360({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
      <path d="M12 7a5 5 0 0 1 0 10" strokeDasharray="2 2" />
      <path d="M9 12a3 3 0 0 0 3 3" />
      <path d="M13 6.5l1.5-1.5 1 1" />
    </svg>
  )
}

export function IconADManager({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <rect x="2" y="18" width="6" height="4" rx="1" />
      <rect x="9" y="18" width="6" height="4" rx="1" />
      <rect x="16" y="18" width="6" height="4" rx="1" />
      <path d="M12 6v4" />
      <path d="M5 18v-4h14v4" />
      <path d="M12 14v4" />
    </svg>
  )
}

export function IconADSelfService({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4" />
      <path d="M16 11l1.5 1.5L21 9" />
      <rect x="14" y="8" width="8" height="7" rx="1.5" />
    </svg>
  )
}

export function IconADAudit({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h3" />
      <path d="M8 17h3" />
      <circle cx="16" cy="15" r="2.5" />
      <path d="M18 17.5l2 2" />
    </svg>
  )
}

export function IconPAM360({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1.5" />
      <path d="M12 17.5v2" />
    </svg>
  )
}

export function IconServiceDesk({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="4" rx="1" />
      <rect x="2" y="11" width="20" height="4" rx="1" opacity="0.6" />
      <rect x="2" y="17" width="14" height="4" rx="1" opacity="0.3" />
      <path d="M18 19l1.5-1.5L21 19" />
      <path d="M19.5 17.5v3" />
    </svg>
  )
}

export function IconSdpMSP({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="1" y="6" width="8" height="6" rx="1" />
      <rect x="1" y="15" width="8" height="6" rx="1" />
      <rect x="15" y="6" width="8" height="6" rx="1" />
      <rect x="15" y="15" width="8" height="6" rx="1" />
      <path d="M9 9h6" />
      <path d="M9 18h6" />
      <path d="M12 9v9" />
    </svg>
  )
}

export function IconEndpointCentral({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="2" y="4" width="10" height="7" rx="1" />
      <path d="M2 15h10" />
      <rect x="14" y="6" width="8" height="5" rx="1" />
      <rect x="16" y="14" width="4" height="7" rx="1" />
      <path d="M12 7.5h2" />
      <path d="M7 11v4" />
      <path d="M5 15h4" />
    </svg>
  )
}

export function IconMDM({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="7" y="2" width="10" height="18" rx="2" />
      <path d="M11 19h2" />
      <path d="M10 6h4" />
      <path d="M18 8a4 4 0 0 1 0 8" />
      <path d="M18 5a7 7 0 0 1 0 14" />
    </svg>
  )
}

export function IconOpManager({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M6 6.5l4.5 4" />
      <path d="M18 6.5l-4.5 4" />
      <path d="M6 17.5l4.5-4" />
      <path d="M18 17.5l-4.5-4" />
    </svg>
  )
}

export function IconSite24x7({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 6.36 15.36" />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8 12l2 2 4-4" />
    </svg>
  )
}

export function IconAppsManager({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="3" y="16" width="18" height="4" rx="1" />
      <rect x="5" y="11" width="14" height="4" rx="1" />
      <rect x="7" y="6"  width="10" height="4" rx="1" />
      <path d="M12 2v4" />
      <path d="M10 2h4" />
    </svg>
  )
}

export function IconLog360({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M4 4l4 2 4-2 4 2 4-2" />
      <path d="M4 9l4 2 4-2 4 2 4-2" />
      <path d="M4 14l4 2 4-2 4 2 4-2" />
      <path d="M12 19v-8" />
      <path d="M8 21l4-2 4 2" />
    </svg>
  )
}

export function IconFirewallAnalyzer({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.25 3.5 10 8 12 4.5-2 8-6.75 8-12V6L12 2z" />
      <polyline points="7,12 10,15 17,9" />
    </svg>
  )
}

export function IconAnalyticsPlus({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 20l4-8 4 4 4-8 4 4" />
      <path d="M3 20h18" />
      <path d="M19 8v4" />
      <path d="M17 10h4" />
    </svg>
  )
}

// ── Service Icons ─────────────────────────────────────────────────────────────

export function IconConsulting({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M12 8v4" />
      <path d="M10 10h4" />
    </svg>
  )
}

export function IconEvaluation({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      <circle cx="17" cy="17" r="3" />
      <path d="M21 21l-1.5-1.5" />
    </svg>
  )
}

export function IconImplementation({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  )
}

export function IconTraining({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

export function IconManagedServices({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
      <path d="M15 12l-4 2-1-4" />
      <path d="M21 3v5h-5" />
      <path d="M21 3l-6 5" />
    </svg>
  )
}

export function IconSupportAMC({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

export function IconMethodology({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M8 6h13M8 12h13M8 18h13" />
      <path d="M3 6l.01 0M3 12l.01 0M3 18l.01 0" strokeWidth={3} />
    </svg>
  )
}

// ── Feature / Section Icons ───────────────────────────────────────────────────

export function IconSecurity({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.25 3.5 10 8 12 4.5-2 8-6.75 8-12V6L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconCompliance({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <circle cx="12" cy="15" r="3" />
      <path d="M12 13v-1" />
    </svg>
  )
}

export function IconMonitoring({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12c2-5 5-8 10-8s8 3 10 8" />
      <path d="M2 12c2 5 5 8 10 8s8-3 10-8" />
    </svg>
  )
}

export function IconAutomation({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="2" y="7" width="6" height="10" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <rect x="16" y="7" width="6" height="10" rx="1" />
      <path d="M8 12h1M15 5h1M8 12h7" />
      <path d="M15 12h1" />
      <path d="M9 5v7M15 5v2" />
    </svg>
  )
}

export function IconIntegration({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M10 3H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M18 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" />
      <path d="M14 7h4a2 2 0 0 1 2 2" />
      <path d="M18 11V9" />
      <path d="M6 11v2a2 2 0 0 0 2 2h2" />
    </svg>
  )
}

export function IconReporting({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M5 20V10l4 4 4-6 4 3v9" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconAccess({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6M15 2h6v6" />
    </svg>
  )
}

export function IconCloud({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <path d="M12 13v4M10 15l2-2 2 2" />
    </svg>
  )
}

export function IconAlerts({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <circle cx="18" cy="5" r="3" fill="#E8192C" stroke="#E8192C" />
    </svg>
  )
}

export function IconDashboard({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="3"  y="3"  width="7" height="7" rx="1" />
      <rect x="14" y="3"  width="7" height="7" rx="1" />
      <rect x="3"  y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

// ── Industry Icons ────────────────────────────────────────────────────────────

export function IconBFSI({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 10l9-7 9 7" />
      <path d="M3 10v11h18V10" />
      <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
      <path d="M3 21h18" />
      <path d="M10 14a2 2 0 0 1 4 0" />
    </svg>
  )
}

export function IconManufacturing({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <rect x="2" y="14" width="20" height="8" rx="1" />
      <path d="M2 14l4-8h4l2 4h4l2-4h4" />
      <path d="M6 14V9M12 14v-4M18 14V9" />
      <circle cx="7" cy="19" r="1.5" />
      <circle cx="17" cy="19" r="1.5" />
    </svg>
  )
}

export function IconHealthcare({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      <circle cx="19" cy="5" r="3" />
      <path d="M18 5h2M19 4v2" />
    </svg>
  )
}

export function IconITITES({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <path d="M14 4l-4 16" />
    </svg>
  )
}

export function IconGovernment({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 21h18M3 10h18M12 3L3 10h18L12 3z" />
      <path d="M6 10v11M10 10v11M14 10v11M18 10v11" />
      <path d="M9 3h6" />
    </svg>
  )
}

export function IconEducation({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M12 6v6l3-2" />
    </svg>
  )
}

// ── Utility Icons (UI use) ────────────────────────────────────────────────────

export function IconArrowRight({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function IconCheck({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function IconChevronDown({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function IconMenu({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}

export function IconX({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export function IconMapPin({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconMail({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function IconPhone({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
    </svg>
  )
}

export function IconClock({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  )
}

export function IconDownload({ size = 24, className = '', strokeWidth = 2 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
