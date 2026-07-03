import { type LucideIcon, Download, ZoomIn, X, Check } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogBody, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { MetricRow } from '@/components/shared/MetricRow'

export interface DocData {
  icon: LucideIcon
  title: string
  filename: string
  meta: [string, string][]
}

export function DocumentViewerModal({
  open,
  onOpenChange,
  doc,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  doc: DocData | null
}) {
  if (!doc) return null
  const Icon = doc.icon
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Icon className="size-[18px] text-[var(--color-amber-400)]" />
            <span className="text-[14px] font-semibold">{doc.title}</span>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="mb-3.5 flex h-[200px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)]">
            <Icon className="size-16 text-[var(--color-slate-100)]" />
            <span className="text-[12px] text-[var(--color-text-muted)]">{doc.filename}</span>
          </div>
          <div>
            {doc.meta.map(([label, value]) => (
              <MetricRow key={label} label={label} value={value} />
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline">
            <Download className="size-3.5" />
            Download
          </Button>
          <Button variant="outline">
            <ZoomIn className="size-3.5" />
            Zoom
          </Button>
          <div className="flex-1" />
          <Button variant="danger">
            <X className="size-3.5" />
            Reject
          </Button>
          <Button variant="primary">
            <Check className="size-3.5" />
            Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
