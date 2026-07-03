import { useMemo } from 'react'

function scorePassword(v: string) {
  let score = 0
  if (v.length >= 8) score++
  if (/[A-Z]/.test(v)) score++
  if (/[0-9]/.test(v)) score++
  if (/[^A-Za-z0-9]/.test(v)) score++
  return score
}

const COLORS = ['var(--color-rose-400)', 'var(--color-amber-200)', 'var(--color-amber-400)', 'var(--color-teal-400)']
const LABELS = ['Weak', 'Fair', 'Good', 'Strong']

export function PasswordStrengthMeter({ value }: { value: string }) {
  const score = useMemo(() => scorePassword(value), [value])
  return (
    <div className="mb-3.5">
      <div className="mb-1 flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-colors"
            style={{ background: i <= score ? COLORS[score - 1] : 'var(--color-border-soft)' }}
          />
        ))}
      </div>
      <div className="text-[11px]" style={{ color: score > 0 ? COLORS[score - 1] : 'var(--color-text-muted)' }}>
        {score > 0 ? LABELS[score - 1] : 'Enter a password'}
      </div>
    </div>
  )
}
