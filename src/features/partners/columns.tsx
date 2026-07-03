import type { ColumnDef } from '@tanstack/react-table'
import type { Partner } from '@/mocks/data/partners'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'

export const partnersColumns: ColumnDef<Partner, any>[] = [
  {
    accessorKey: 'name',
    header: 'Partner',
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar size={26} bg="var(--color-teal-50)" color="var(--color-teal-800)">{row.original.initials}</Avatar>
        <div>
          <div>{row.original.name}</div>
          <div className="text-[11px] text-[var(--color-text-muted)]">{row.original.id}</div>
        </div>
      </div>
    ),
  },
  { accessorKey: 'vehicle', header: 'Vehicle', cell: (info) => <span className="text-[12px] text-[var(--color-text-muted)]">{info.getValue() as string}</span> },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'rating', header: 'Rating', cell: (info) => `★ ${info.getValue()}` },
  { accessorKey: 'totalTrips', header: 'Total trips' },
  { accessorKey: 'earnings', header: 'Earnings', cell: (info) => formatCurrency(info.getValue() as number) },
  { accessorKey: 'kyc', header: 'KYC status', cell: (info) => <Badge status={info.getValue() as string}>{info.getValue() as string}</Badge> },
  {
    accessorKey: 'online',
    header: 'Status',
    cell: (info) => <Badge status={info.getValue() ? 'Online' : 'Offline'}>{info.getValue() ? 'Online' : 'Offline'}</Badge>,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className="flex gap-1.5">
        <Button size="sm" variant="outline">Profile</Button>
        <Button size="sm" variant="danger">Suspend</Button>
      </div>
    ),
  },
]
