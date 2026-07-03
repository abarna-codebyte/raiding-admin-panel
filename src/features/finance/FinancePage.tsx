import { useQuery } from '@tanstack/react-query'
import { IndianRupee } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card, CardTitle } from '@/components/ui/card'
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { EChartsPanel } from '@/components/shared/EChartsPanel'
import { SETTLEMENTS, PAYMENT_SPLIT } from '@/mocks/data/finance'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { formatCurrency } from '@/lib/format'

const pieColors = ['var(--color-teal-400)', 'var(--color-blue-400)', 'var(--color-indigo-400)', 'var(--color-amber-200)']

export default function FinancePage() {
  const { data: settlements = [] } = useQuery({ queryKey: queryKeys.finance.settlements, queryFn: () => delay(SETTLEMENTS, 300) })

  const pieOption = {
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { fontSize: 11 } },
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        itemStyle: { borderColor: '#fff', borderWidth: 2 },
        label: { fontSize: 11 },
        data: PAYMENT_SPLIT.map((p, i) => ({ name: p.name, value: p.value, itemStyle: { color: pieColors[i] } })),
      },
    ],
  }

  return (
    <div>
      <PageHeader title="Finance" sub="Revenue, commissions, and partner settlements" />

      <KpiGrid>
        <KpiCard label="Gross revenue (7d)" value="₹16.4L" accent="var(--color-forest-400)" labelColor="var(--color-forest-600)" valueColor="var(--color-forest-900)" delta={{ direction: 'up', label: '+9.2%' }} />
        <KpiCard label="Platform commission" value="₹2.46L" accent="var(--color-forest-400)" labelColor="var(--color-forest-600)" valueColor="var(--color-forest-900)" delta={{ direction: 'up', label: '+9.2%' }} />
        <KpiCard label="Net payout to partners" value="₹13.9L" accent="var(--color-forest-400)" labelColor="var(--color-forest-600)" valueColor="var(--color-forest-900)" />
        <KpiCard label="Pending settlements" value="₹78,200" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
      </KpiGrid>

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-4">
          <CardTitle>
            <IndianRupee className="size-4" style={{ color: 'var(--color-forest-400)' }} />
            Weekly settlements
          </CardTitle>
          <Table>
            <THead>
              <TR>
                <TH>Partner</TH><TH>Period</TH><TH>Gross</TH><TH>Commission</TH><TH>Net payable</TH><TH>Status</TH><TH>Actions</TH>
              </TR>
            </THead>
            <TBody>
              {settlements.map((s) => (
                <TR key={s.partnerId}>
                  <TD>{s.partnerName}</TD>
                  <TD className="text-[12px] text-[var(--color-text-muted)]">{s.period}</TD>
                  <TD>{formatCurrency(s.gross)}</TD>
                  <TD>{formatCurrency(s.commission)}</TD>
                  <TD className="font-medium">{formatCurrency(s.net)}</TD>
                  <TD><Badge status={s.status === 'Processed' ? 'Completed' : s.status === 'Pending' ? 'Pending' : 'Cancelled'}>{s.status}</Badge></TD>
                  <TD><Button size="sm" variant="outline">{s.status === 'Pending' ? 'Process' : 'Invoice'}</Button></TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </Card>

        <Card>
          <CardTitle>Payment method split</CardTitle>
          <EChartsPanel option={pieOption} height={260} />
        </Card>
      </div>
    </div>
  )
}
