import * as React from 'react'
import { cn } from '@/lib/cn'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  bg?: string
  color?: string
}

export function Avatar({ className, size = 32, bg = 'var(--color-teal-400)', color = '#fff', style, ...props }: AvatarProps) {
  return (
    <div
      className={cn('flex shrink-0 items-center justify-center rounded-full text-[12px] font-semibold', className)}
      style={{ width: size, height: size, background: bg, color, ...style }}
      {...props}
    />
  )
}
