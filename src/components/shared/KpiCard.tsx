import type { ReactNode } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface KpiCardProps {
  label: string
  value: string
  accent: string
  labelColor: string
  valueColor: string
  delta?: { direction: 'up' | 'down' | 'flat'; label: string; color?: string }
  icon?: ReactNode
  className?: string
}

export function KpiCard({ label, value, accent, labelColor, valueColor, delta, className }: KpiCardProps) {
  return (
    <div
      className={cn('rounded-xl border border-[var(--color-border-soft)] bg-white p-4', className)}
      style={{ borderTopWidth: 3, borderTopColor: accent }}
    >
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide" style={{ color: labelColor }}>
        {label}
      </div>
      <div className="mb-1 text-2xl font-semibold leading-none" style={{ color: valueColor }}>
        {value}
      </div>
      {delta && (
        <div className="flex items-center gap-1 text-[11px]" style={{ color: delta.color ?? labelColor }}>
          {delta.direction === 'up' && <TrendingUp className="size-3.5" />}
          {delta.direction === 'down' && <TrendingDown className="size-3.5" />}
          {delta.label}
        </div>
      )}
    </div>
  )
}

export function KpiGrid({ children }: { children: ReactNode }) {
  return <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{children}</div>
}
