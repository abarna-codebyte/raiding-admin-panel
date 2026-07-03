import type { ReactNode } from 'react'

export function MetricRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--color-border-faint)] py-1.5 text-[13px] last:border-0">
      <span className="text-[12px] text-[var(--color-text-muted)]">{label}</span>
      <span>{value}</span>
    </div>
  )
}

export function SectionLabel({ children, noTopMargin }: { children: ReactNode; noTopMargin?: boolean }) {
  return (
    <div
      className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]"
      style={{ marginTop: noTopMargin ? 0 : 14 }}
    >
      {children}
    </div>
  )
}
