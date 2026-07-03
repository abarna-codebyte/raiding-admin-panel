import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { PARTNERS } from '@/mocks/data/partners'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { partnersColumns } from './columns'

export default function PartnersPage() {
  const [search, setSearch] = useState('')
  const { data: partners = [] } = useQuery({
    queryKey: queryKeys.partners.list(),
    queryFn: () => delay(PARTNERS, 300),
  })

  const filtered = useMemo(
    () => partners.filter((p) => !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase())),
    [partners, search],
  )

  return (
    <div>
      <PageHeader title="Partner management" sub="All registered driver-partners across every city" />
      <FilterBar placeholder="Search name / partner ID" value={search} onChange={setSearch} />
      <Card className="p-4">
        <DataTable columns={partnersColumns} data={filtered} />
      </Card>
    </div>
  )
}
