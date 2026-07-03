import * as React from 'react'
import { cn } from '@/lib/cn'
import { STATUS_COLOR_MAP } from '@/constants/colors'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: string
  bg?: string
  text?: string
}

export function Badge({ className, status, bg, text, style, ...props }: BadgeProps) {
  const colors = status ? STATUS_COLOR_MAP[status] : undefined
  const resolvedBg = bg ?? colors?.bg ?? 'var(--color-slate-50)'
  const resolvedText = text ?? colors?.text ?? 'var(--color-slate-600)'
  return (
    <span
      className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium', className)}
      style={{ background: resolvedBg, color: resolvedText, ...style }}
      {...props}
    />
  )
}
