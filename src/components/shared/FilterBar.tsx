import type { ReactNode } from 'react'
import { Search, Download } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FilterBarProps {
  placeholder: string
  value: string
  onChange: (v: string) => void
  children?: ReactNode
  onExport?: () => void
}

export function FilterBar({ placeholder, value, onChange, children, onExport }: FilterBarProps) {
  return (
    <div className="mb-3.5 flex flex-wrap gap-2">
      <div className="relative min-w-[200px] flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="pl-8" />
      </div>
      {children}
      <Button variant="primary" onClick={onExport}>
        <Download className="size-3.5" />
        Export
      </Button>
    </div>
  )
}
