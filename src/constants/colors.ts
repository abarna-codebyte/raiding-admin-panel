/** Per-page sidebar active-state accent, matching the original mockup's
 * navColors map — each section gets its own brand color when active. */
export const NAV_ACCENT_MAP: Record<string, string> = {
  dashboard: 'var(--color-teal-600)',
  operations: 'var(--color-blue-600)',
  rides: 'var(--color-indigo-600)',
  customers: 'var(--color-indigo-600)',
  partners: 'var(--color-teal-600)',
  verification: 'var(--color-amber-600)',
  sos: 'var(--color-rose-600)',
  support: 'var(--color-blue-600)',
  finance: 'var(--color-forest-600)',
  marketing: 'var(--color-pink-600)',
  analytics: 'var(--color-forest-600)',
  fraud: 'var(--color-coral-800)',
  audit: 'var(--color-slate-600)',
  roles: 'var(--color-slate-600)',
  settings: 'var(--color-slate-600)',
}

/** Tint(bg)/text pairs used by StatusBadge for each semantic status string. */
export const STATUS_COLOR_MAP: Record<string, { bg: string; text: string }> = {
  Completed: { bg: 'var(--color-teal-50)', text: 'var(--color-teal-800)' },
  Verified: { bg: 'var(--color-teal-50)', text: 'var(--color-teal-800)' },
  Valid: { bg: 'var(--color-teal-50)', text: 'var(--color-teal-800)' },
  Active: { bg: 'var(--color-blue-50)', text: 'var(--color-blue-800)' },
  Online: { bg: 'var(--color-blue-50)', text: 'var(--color-blue-800)' },
  Pending: { bg: 'var(--color-amber-50)', text: 'var(--color-amber-800)' },
  'Pending review': { bg: 'var(--color-amber-50)', text: 'var(--color-amber-800)' },
  Cancelled: { bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
  Rejected: { bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
  Blocked: { bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
  Suspended: { bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
  Offline: { bg: 'var(--color-slate-50)', text: 'var(--color-slate-600)' },
  Inactive: { bg: 'var(--color-slate-50)', text: 'var(--color-slate-600)' },
  OFF: { bg: 'var(--color-slate-50)', text: 'var(--color-slate-600)' },
  ON: { bg: 'var(--color-teal-50)', text: 'var(--color-teal-800)' },
}
