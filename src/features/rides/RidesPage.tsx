import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { DataTable } from '@/components/shared/DataTable'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { RIDES } from '@/mocks/data/rides'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { ridesColumns } from './columns'

async function fetchRides() {
  return delay(RIDES, 300)
}

export default function RidesPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [city, setCity] = useState('all')

  const { data: rides = [] } = useQuery({ queryKey: queryKeys.rides.list(), queryFn: fetchRides })

  const filtered = useMemo(() => {
    return rides.filter((r) => {
      const matchesSearch =
        !search ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.customer.toLowerCase().includes(search.toLowerCase()) ||
        r.driver.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'all' || r.status === status
      return matchesSearch && matchesStatus
    })
  }, [rides, search, status])

  return (
    <div>
      <PageHeader title="Rides management" sub="All rides · Filter by status, city, payment, date" />

      <FilterBar placeholder="Search ride ID / customer / driver" value={search} onChange={setSearch}>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-auto min-w-[130px]"><SelectValue placeholder="All statuses" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="w-auto min-w-[130px]"><SelectValue placeholder="All cities" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All cities</SelectItem>
            <SelectItem value="Chennai">Chennai</SelectItem>
            <SelectItem value="Coimbatore">Coimbatore</SelectItem>
            <SelectItem value="Madurai">Madurai</SelectItem>
          </SelectContent>
        </Select>
      </FilterBar>

      <Card className="p-4">
        <DataTable columns={ridesColumns} data={filtered} />
      </Card>
    </div>
  )
}
