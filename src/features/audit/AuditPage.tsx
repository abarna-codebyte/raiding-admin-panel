import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { FilterBar } from '@/components/shared/FilterBar'
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { AUDIT_LOGS } from '@/mocks/data/audit'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'

export default function AuditPage() {
  const [search, setSearch] = useState('')
  const { data: logs = [] } = useQuery({ queryKey: queryKeys.audit.logs, queryFn: () => delay(AUDIT_LOGS, 300) })

  const filtered = useMemo(
    () => logs.filter((l) => !search || l.action.toLowerCase().includes(search.toLowerCase()) || l.actor.toLowerCase().includes(search.toLowerCase())),
    [logs, search],
  )

  return (
    <div>
      <PageHeader title="Audit logs" sub="Full history of admin actions across the platform" />
      <FilterBar placeholder="Search action / actor" value={search} onChange={setSearch} />
      <Card className="p-4">
        <Table>
          <THead>
            <TR><TH>Timestamp</TH><TH>Actor</TH><TH>Action</TH><TH>Entity</TH><TH>IP address</TH><TH>Result</TH></TR>
          </THead>
          <TBody>
            {filtered.map((l) => (
              <TR key={l.id}>
                <TD className="text-[12px] text-[var(--color-text-muted)]">{l.timestamp}</TD>
                <TD>{l.actor}</TD>
                <TD>{l.action}</TD>
                <TD className="text-[12px] text-[var(--color-text-muted)]">{l.entity}</TD>
                <TD className="text-[12px] text-[var(--color-text-muted)]">{l.ip}</TD>
                <TD><Badge status={l.result === 'Success' ? 'Completed' : 'Cancelled'}>{l.result}</Badge></TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  )
}
