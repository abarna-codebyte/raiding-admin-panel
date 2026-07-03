import type { ColumnDef } from '@tanstack/react-table'
import type { Ride } from '@/mocks/data/rides'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'

export const ridesColumns: ColumnDef<Ride, any>[] = [
  {
    accessorKey: 'id',
    header: 'Ride ID',
    cell: (info) => <span className="font-semibold" style={{ color: 'var(--color-indigo-600)' }}>{info.getValue() as string}</span>,
  },
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar size={26} bg="var(--color-indigo-50)" color="var(--color-indigo-600)">
          {row.original.customerInitials}
        </Avatar>
        {row.original.customer}
      </div>
    ),
  },
  { accessorKey: 'driver', header: 'Driver' },
  {
    accessorKey: 'route',
    header: 'Route',
    cell: (info) => <span className="text-[12px] text-[var(--color-text-muted)]">{info.getValue() as string}</span>,
  },
  { accessorKey: 'distanceKm', header: 'Distance', cell: (info) => `${info.getValue()} km` },
  { accessorKey: 'fare', header: 'Fare', cell: (info) => <span className="font-medium">{formatCurrency(info.getValue() as number)}</span> },
  {
    accessorKey: 'commission',
    header: 'Commission',
    cell: (info) => {
      const v = info.getValue() as number
      return <span style={{ color: v ? 'var(--color-teal-600)' : 'var(--color-text-muted)' }}>{formatCurrency(v)}</span>
    },
  },
  { accessorKey: 'payment', header: 'Payment' },
  { accessorKey: 'status', header: 'Status', cell: (info) => <Badge status={info.getValue() as string}>{info.getValue() as string}</Badge> },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex gap-1.5">
        <Button size="sm" variant="outline">Details</Button>
        {row.original.status === 'Cancelled' && <Button size="sm" variant="danger">Refund</Button>}
      </div>
    ),
  },
]
