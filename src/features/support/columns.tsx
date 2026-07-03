import type { ColumnDef } from '@tanstack/react-table'
import type { Ticket } from '@/mocks/data/support'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/format'

const PRIORITY_COLOR: Record<string, { bg: string; text: string }> = {
  High: { bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
  Medium: { bg: 'var(--color-amber-50)', text: 'var(--color-amber-800)' },
  Low: { bg: 'var(--color-slate-50)', text: 'var(--color-slate-600)' },
}

export const ticketsColumns: ColumnDef<Ticket, any>[] = [
  { accessorKey: 'id', header: 'Ticket ID', cell: (info) => <span className="font-semibold" style={{ color: 'var(--color-blue-600)' }}>{info.getValue() as string}</span> },
  { accessorKey: 'customer', header: 'Customer' },
  { accessorKey: 'subject', header: 'Subject', cell: (info) => <span className="text-[12px]">{info.getValue() as string}</span> },
  { accessorKey: 'category', header: 'Category' },
  {
    accessorKey: 'priority', header: 'Priority',
    cell: (info) => {
      const v = info.getValue() as string
      const c = PRIORITY_COLOR[v]
      return <Badge bg={c.bg} text={c.text}>{v}</Badge>
    },
  },
  { accessorKey: 'agent', header: 'Agent' },
  { accessorKey: 'status', header: 'Status', cell: (info) => <Badge status={info.getValue() as string}>{info.getValue() as string}</Badge> },
  { accessorKey: 'created', header: 'Created', cell: (info) => formatDate(info.getValue() as string) },
  { id: 'actions', header: 'Actions', cell: () => <Button size="sm" variant="outline">Open</Button> },
]
