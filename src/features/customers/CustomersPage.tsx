import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { CUSTOMERS } from '@/mocks/data/customers'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { customersColumns } from './columns'

export default function CustomersPage() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('all')
  const [status, setStatus] = useState('all')

  const { data: customers = [] } = useQuery({
    queryKey: queryKeys.customers.list(),
    queryFn: () => delay(CUSTOMERS, 300),
  })

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const matchesSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search)
      const matchesCity = city === 'all' || c.city === city
      const matchesStatus = status === 'all' || c.status === status
      return matchesSearch && matchesCity && matchesStatus
    })
  }, [customers, search, city, status])

  return (
    <div>
      <PageHeader title="Customer management" sub="All registered customers across every city" />

      <FilterBar placeholder="Search name / phone" value={search} onChange={setSearch}>
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
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>
      </FilterBar>

      <Card className="p-4">
        <DataTable columns={customersColumns} data={filtered} />
      </Card>
    </div>
  )
}