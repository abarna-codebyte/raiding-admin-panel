import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-[12px] font-medium font-sans transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[14px] [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface-alt)]',
        primary: 'bg-[var(--color-teal-400)] text-white border border-[var(--color-teal-400)] hover:bg-[var(--color-teal-600)] hover:border-[var(--color-teal-600)]',
        danger: 'bg-white text-[var(--color-rose-600)] border border-[var(--color-rose-100)] hover:bg-[var(--color-rose-50)]',
        warn: 'bg-white text-[var(--color-amber-600)] border border-[var(--color-amber-100)] hover:bg-[var(--color-amber-50)]',
        info: 'bg-white text-[var(--color-blue-600)] border border-[var(--color-blue-100)] hover:bg-[var(--color-blue-50)]',
        ghost: 'border border-transparent hover:bg-[var(--color-surface-alt)]',
        outline: 'bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-surface-alt)]',
      },
      size: {
        default: 'h-8 px-3',
        sm: 'h-7 px-2.5 text-[11px]',
        lg: 'h-10 px-4',
        icon: 'h-8 w-8 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'
