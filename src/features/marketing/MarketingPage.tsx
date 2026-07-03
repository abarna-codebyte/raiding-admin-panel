import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card } from '@/components/ui/card'
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProgressBar } from '@/components/shared/ProgressBar'
import { CAMPAIGNS } from '@/mocks/data/marketing'
import { queryKeys } from '@/lib/query-keys'
import { delay, formatDate } from '@/lib/format'
import { CreateCampaignModal } from './CreateCampaignModal'

export default function MarketingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const { data: campaigns = [] } = useQuery({ queryKey: queryKeys.marketing.campaigns, queryFn: () => delay(CAMPAIGNS, 300) })

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <PageHeader title="Marketing campaigns" sub="Promo codes and city-wise campaign performance" />
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          <Plus className="size-3.5" />
          Create campaign
        </Button>
      </div>

      <Card className="p-4">
        <Table>
          <THead>
            <TR>
              <TH>Code</TH><TH>Discount</TH><TH>City</TH><TH>Usage</TH><TH>Budget</TH><TH>Status</TH><TH>Valid till</TH>
            </TR>
          </THead>
          <TBody>
            {campaigns.map((c) => (
              <TR key={c.code}>
                <TD className="font-semibold" style={{ color: 'var(--color-pink-600)' }}>{c.code}</TD>
                <TD>{c.discount}</TD>
                <TD>{c.city}</TD>
                <TD>{c.usage.toLocaleString('en-IN')}</TD>
                <TD className="min-w-[160px]">
                  <ProgressBar
                    label={`₹${(c.budgetSpent / 1000).toFixed(0)}k spent`}
                    value={`of ₹${(c.budgetTotal / 1000).toFixed(0)}k`}
                    percent={Math.min(100, (c.budgetSpent / c.budgetTotal) * 100)}
                    color="var(--color-pink-600)"
                  />
                </TD>
                <TD><Badge status={c.status === 'Active' ? 'Active' : c.status === 'Scheduled' ? 'Pending' : 'Offline'}>{c.status}</Badge></TD>
                <TD className="text-[12px] text-[var(--color-text-muted)]">{formatDate(c.validTill)}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>

      <CreateCampaignModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  )
}
