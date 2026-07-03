import * as React from 'react'
import { cn } from '@/lib/cn'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-[18px]',
        className,
      )}
      {...props}
    />
  )
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mb-3.5 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-text)]', className)}
      {...props}
    />
  )
}
