import type { ColumnDef } from '@tanstack/react-table'
import type { Customer } from '@/mocks/data/customers'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency, formatDate } from '@/lib/format'

export const customersColumns: ColumnDef<Customer, any>[] = [
  {
    accessorKey: 'name',
    header: 'Customer',
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar size={26} bg="var(--color-indigo-50)" color="var(--color-indigo-600)">{row.original.initials}</Avatar>
        {row.original.name}
      </div>
    ),
  },
  { accessorKey: 'phone', header: 'Phone' },
  { accessorKey: 'city', header: 'City' },
  { accessorKey: 'totalRides', header: 'Total rides' },
  { accessorKey: 'totalSpend', header: 'Total spend', cell: (info) => formatCurrency(info.getValue() as number) },
  { accessorKey: 'rating', header: 'Rating', cell: (info) => `★ ${info.getValue()}` },
  { accessorKey: 'status', header: 'Status', cell: (info) => <Badge status={info.getValue() as string}>{info.getValue() as string}</Badge> },
  { accessorKey: 'signupDate', header: 'Signed up', cell: (info) => formatDate(info.getValue() as string) },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex gap-1.5">
        <Button size="sm" variant="outline">View</Button>
        <Button size="sm" variant={row.original.status === 'Active' ? 'danger' : 'primary'}>
          {row.original.status === 'Active' ? 'Block' : 'Unblock'}
        </Button>
      </div>
    ),
  },
]
