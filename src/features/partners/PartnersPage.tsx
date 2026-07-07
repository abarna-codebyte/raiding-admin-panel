import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { PARTNERS } from '@/mocks/data/partners'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { partnersColumns } from './columns'

export default function PartnersPage() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('all')
  const [status, setStatus] = useState('all')

  const { data: partners = [] } = useQuery({
    queryKey: queryKeys.partners.list(),
    queryFn: () => delay(PARTNERS, 300),
  })

  const filtered = useMemo(() => {
    return partners.filter((p) => {
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase())
      const matchesCity = city === 'all' || p.city === city
      const matchesStatus = status === 'all' || (status === 'Online' ? p.online : !p.online)
      return matchesSearch && matchesCity && matchesStatus
    })
  }, [partners, search, city, status])

  return (
    <div>
      <PageHeader title="Partner management" sub="All registered driver-partners across every city" />

      <FilterBar placeholder="Search name / partner ID" value={search} onChange={setSearch}>
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="w-auto min-w-[130px]"><SelectValue placeholder="All cities" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All cities</SelectItem>
            <SelectItem value="Chennai">Chennai</SelectItem>
            <SelectItem value="Coimbatore">Coimbatore</SelectItem>
            <SelectItem value="Madurai">Madurai</SelectItem>
            <SelectItem value="Salem">Salem</SelectItem>
          </SelectContent>
        </Select>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-auto min-w-[130px]"><SelectValue placeholder="All statuses" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
            <SelectItem value="Offline">Offline</SelectItem>
          </SelectContent>
        </Select>
      </FilterBar>

      <Card className="p-4">
        <DataTable columns={partnersColumns} data={filtered} />
      </Card>
    </div>
  )
}