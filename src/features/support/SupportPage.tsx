import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { TICKETS } from '@/mocks/data/support'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { ticketsColumns } from './columns'

export default function SupportPage() {
  const [search, setSearch] = useState('')
  const { data: tickets = [] } = useQuery({ queryKey: queryKeys.support.tickets, queryFn: () => delay(TICKETS, 300) })

  const filtered = useMemo(
    () => tickets.filter((t) => !search || t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase())),
    [tickets, search],
  )

  return (
    <div>
      <PageHeader title="Support tickets" sub="Customer & partner support queue" />
      <KpiGrid>
        <KpiCard label="Open" value="38" accent="var(--color-blue-400)" labelColor="var(--color-blue-600)" valueColor="var(--color-blue-800)" />
        <KpiCard label="Pending" value="21" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
        <KpiCard label="Resolved today" value="65" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" />
        <KpiCard label="Avg. resolution time" value="4h 12m" accent="var(--color-indigo-400)" labelColor="var(--color-indigo-600)" valueColor="var(--color-indigo-800)" />
      </KpiGrid>
      <FilterBar placeholder="Search subject / customer" value={search} onChange={setSearch} />
      <Card className="p-4">
        <DataTable columns={ticketsColumns} data={filtered} />
      </Card>
    </div>
  )
}
