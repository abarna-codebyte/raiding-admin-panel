interface ProgressBarProps {
  label: string
  value: string
  percent: number
  color: string
}

export function ProgressBar({ label, value, percent, color }: ProgressBarProps) {
  return (
    <div className="mb-2.5">
      <div className="mb-1 flex justify-between text-[11px] text-[var(--color-text-muted)]">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-slate-50)]">
        <div className="h-full rounded-full" style={{ width: `${percent}%`, background: color }} />
      </div>
    </div>
  )
}
