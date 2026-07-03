import { useQuery } from '@tanstack/react-query'
import { ShieldAlert } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card } from '@/components/ui/card'
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { FRAUD_FLAGS } from '@/mocks/data/fraud'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'

function riskColor(score: number) {
  if (score >= 75) return 'var(--color-rose-400)'
  if (score >= 50) return 'var(--color-amber-400)'
  return 'var(--color-teal-400)'
}

export default function FraudPage() {
  const { data: flags = [] } = useQuery({ queryKey: queryKeys.fraud.flags, queryFn: () => delay(FRAUD_FLAGS, 300) })

  return (
    <div>
      <PageHeader title="Fraud & risk" sub="Flagged accounts and suspicious activity patterns" />

      <KpiGrid>
        <KpiCard label="Total flagged" value="24" accent="var(--color-coral-400)" labelColor="var(--color-coral-600)" valueColor="var(--color-coral-800)" />
        <KpiCard label="High risk (75+)" value="6" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" />
        <KpiCard label="Blocked this week" value="3" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" />
        <KpiCard label="Cleared this week" value="11" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" />
      </KpiGrid>

      <Card className="p-4">
        <div className="mb-3.5 flex items-center gap-1.5 text-[13px] font-semibold">
          <ShieldAlert className="size-4" style={{ color: 'var(--color-coral-600)' }} />
          Flagged entities
        </div>
        <Table>
          <THead>
            <TR><TH>ID</TH><TH>Entity</TH><TH>Risk score</TH><TH>Reason</TH><TH>Status</TH><TH>Actions</TH></TR>
          </THead>
          <TBody>
            {flags.map((f) => (
              <TR key={f.id}>
                <TD className="font-medium">{f.id}</TD>
                <TD>
                  <div>{f.entityName}</div>
                  <div className="text-[11px] text-[var(--color-text-muted)]">{f.entityType} · {f.entityId}</div>
                </TD>
                <TD className="min-w-[140px]">
                  <div className="mb-1 flex justify-between text-[11px]"><span>{f.riskScore}/100</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-slate-50)]">
                    <div className="h-full rounded-full" style={{ width: `${f.riskScore}%`, background: riskColor(f.riskScore) }} />
                  </div>
                </TD>
                <TD className="max-w-[220px] whitespace-normal text-[12px] text-[var(--color-text-muted)]">{f.reason}</TD>
                <TD><span className="text-[12px] font-medium">{f.status}</span></TD>
                <TD>
                  <div className="flex gap-1.5">
                    <Button size="sm" variant="outline">Investigate</Button>
                    <Button size="sm" variant="primary">Clear</Button>
                    <Button size="sm" variant="danger">Block</Button>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  )
}
