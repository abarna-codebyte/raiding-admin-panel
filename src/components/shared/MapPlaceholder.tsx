import { Map as MapIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export function MapPlaceholder({ caption }: { caption: string }) {
  return (
    <div className="flex h-[180px] flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[12px] text-[var(--color-text-muted)]">
      <MapIcon className="size-9 text-[var(--color-slate-100)]" />
      <span>{caption}</span>
      {/* TODO: integrate real map (Mapbox / Google Maps / react-map-gl) */}
    </div>
  )
}

export function Pill({ children, bg, text }: { children: ReactNode; bg: string; text: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ background: bg, color: text }}
    >
      {children}
    </span>
  )
}
