import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { CUSTOMERS } from '@/mocks/data/customers'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { customersColumns } from './columns'

export default function CustomersPage() {
  const [search, setSearch] = useState('')
  const { data: customers = [] } = useQuery({
    queryKey: queryKeys.customers.list(),
    queryFn: () => delay(CUSTOMERS, 300),
  })

  const filtered = useMemo(
    () => customers.filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)),
    [customers, search],
  )

  return (
    <div>
      <PageHeader title="Customer management" sub="All registered customers across every city" />
      <FilterBar placeholder="Search name / phone" value={search} onChange={setSearch} />
      <Card className="p-4">
        <DataTable columns={customersColumns} data={filtered} />
      </Card>
    </div>
  )
}
