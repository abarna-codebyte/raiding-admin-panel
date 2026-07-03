import { TriangleAlert, Phone, ArrowUpCircle, CircleCheck } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MetricRow } from '@/components/shared/MetricRow'

const incidents = [
  {
    id: 'SOS-2291', severity: 'Emergency', color: 'var(--color-rose-400)',
    triggeredBy: 'Customer — Priya R.', driver: 'DRV381 — Bala Murugan', location: 'Poonamallee Bypass, Chennai',
    triggeredAt: '14:31:30', elapsed: '00:04:12',
  },
  {
    id: 'SOS-2290', severity: 'Active', color: 'var(--color-amber-400)',
    triggeredBy: 'Partner — DRV205', driver: '—', location: 'OMR, Sholinganallur',
    triggeredAt: '14:12:05', elapsed: '00:23:37',
  },
  {
    id: 'SOS-2289', severity: 'Active', color: 'var(--color-amber-400)',
    triggeredBy: 'Customer — Karthik V.', driver: 'DRV442 — Gopal Krishnan', location: 'Anna Salai, Chennai',
    triggeredAt: '13:58:20', elapsed: '00:37:22',
  },
]

export default function SosPage() {
  return (
    <div>
      <PageHeader title="SOS & Safety" sub="Active safety incidents requiring response" />

      <KpiGrid>
        <KpiCard label="Active SOS" value="3" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" />
        <KpiCard label="Emergency cases" value="1" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" />
        <KpiCard label="Resolved today" value="14" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" />
        <KpiCard label="Avg. response time" value="2m 40s" accent="var(--color-blue-400)" labelColor="var(--color-blue-600)" valueColor="var(--color-blue-800)" />
      </KpiGrid>

      <div className="flex flex-col gap-3.5">
        {incidents.map((inc) => (
          <Card key={inc.id} style={{ borderLeftWidth: 3, borderLeftColor: inc.color }}>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TriangleAlert className="size-4" style={{ color: inc.color }} />
                <span className="font-semibold">{inc.id}</span>
                <Badge status={inc.severity === 'Emergency' ? 'Cancelled' : 'Pending'}>{inc.severity}</Badge>
              </div>
              <span className="font-semibold" style={{ color: 'var(--color-rose-600)' }}>Elapsed {inc.elapsed}</span>
            </div>

            <div className="mb-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              <MetricRow label="Triggered by" value={inc.triggeredBy} />
              <MetricRow label="Driver assigned" value={inc.driver} />
              <MetricRow label="Location" value={inc.location} />
              <MetricRow label="Triggered at" value={inc.triggeredAt} />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="info"><Phone className="size-3.5" />Call customer</Button>
              <Button variant="info"><Phone className="size-3.5" />Call partner</Button>
              <Button variant="warn"><ArrowUpCircle className="size-3.5" />Escalate</Button>
              <div className="flex-1" />
              <Button variant="primary"><CircleCheck className="size-3.5" />Close incident</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
