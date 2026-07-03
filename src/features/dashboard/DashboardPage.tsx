import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { LineChart, Car, Users, UserCheck, Zap, Radio, Download, Settings, TriangleAlert, ShieldOff } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { ProgressBar } from '@/components/shared/ProgressBar'
import { SparklineChart } from '@/components/shared/SparklineChart'
import { Card, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const revenueData = [
  { label: 'Mon', value: 55, displayValue: '₹1.8L' },
  { label: 'Tue', value: 42, displayValue: '₹1.4L' },
  { label: 'Wed', value: 68, displayValue: '₹2.1L' },
  { label: 'Thu', value: 72, displayValue: '₹2.2L' },
  { label: 'Fri', value: 80, displayValue: '₹2.5L' },
  { label: 'Sat', value: 76, displayValue: '₹2.4L' },
  { label: 'Sun', value: 90, displayValue: '₹2.8L' },
]

const rideData = [
  { label: 'Mon', value: 50, displayValue: '3.2k' },
  { label: 'Tue', value: 36, displayValue: '2.8k' },
  { label: 'Wed', value: 62, displayValue: '4.0k' },
  { label: 'Thu', value: 74, displayValue: '4.4k' },
  { label: 'Fri', value: 84, displayValue: '5.0k' },
  { label: 'Sat', value: 79, displayValue: '4.7k' },
  { label: 'Sun', value: 88, displayValue: '5.2k' },
]

const customerGrowthRaw = [
  { label: 'Chennai', value: 2340, color: 'var(--color-indigo-400)' },
  { label: 'Coimbatore', value: 1120, color: 'var(--color-indigo-200)' },
  { label: 'Madurai', value: 780, color: 'var(--color-indigo-100)' },
  { label: 'Salem', value: 410, color: 'var(--color-indigo-50)' },
]
const maxCustomerGrowth = Math.max(...customerGrowthRaw.map((c) => c.value))
const customerGrowth = customerGrowthRaw.map((c) => ({
  ...c,
  displayValue: c.value.toLocaleString('en-IN'),
  percent: (c.value / maxCustomerGrowth) * 100,
}))

const partnerGrowthRaw = [
  { label: 'Chennai', value: 843, color: 'var(--color-teal-400)' },
  { label: 'Coimbatore', value: 390, color: 'var(--color-teal-200)' },
  { label: 'Madurai', value: 210, color: 'var(--color-teal-100)' },
  { label: 'Salem', value: 120, color: 'var(--color-teal-50)' },
]
const maxPartnerGrowth = Math.max(...partnerGrowthRaw.map((c) => c.value))
const partnerGrowth = partnerGrowthRaw.map((c) => ({
  ...c,
  displayValue: c.value.toLocaleString('en-IN'),
  percent: (c.value / maxPartnerGrowth) * 100,
}))

export default function DashboardPage() {
  const navigate = useNavigate()
  const [maintenanceOn, setMaintenanceOn] = useState(false)

  const handleSendPushAlert = () => {
    toast.success('Push alert sent to all active drivers')
  }

  const handleExportReport = () => {
    const rows = [
      ['Metric', 'Value'],
      ['Total revenue', '₹2,34,810'],
      ['Completed rides', '4,821'],
      ['Active partners', '1,203'],
      ['New customers', '342'],
      ['Cancellation rate', '8.2%'],
      ['Acceptance rate', '91.8%'],
    ]
    const csv = rows.map((r) => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `trofi-daily-report-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
    toast.success('Daily report downloaded')
  }

  const handleToggleMaintenance = () => {
    setMaintenanceOn((prev) => {
      const next = !prev
      toast(next ? 'Maintenance mode enabled' : 'Maintenance mode disabled', {
        description: next ? 'New ride requests are now paused.' : 'Platform is back to normal operation.',
      })
      return next
    })
  }

  const handleViewSos = () => {
    navigate('/app/sos')
  }

  return (
    <div>
      <PageHeader title="Dashboard overview" sub="Thursday, 18 Jun 2026 — All cities · Last updated 14:33" />

      <KpiGrid>
        <KpiCard label="Total revenue" value="₹2,34,810" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" delta={{ direction: 'up', label: '+12.4% vs yesterday' }} />
        <KpiCard label="Completed rides" value="4,821" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" delta={{ direction: 'up', label: '+8.1%' }} />
        <KpiCard label="Active partners" value="1,203" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" delta={{ direction: 'down', label: '-2.3%', color: 'var(--color-rose-600)' }} />
        <KpiCard label="New customers" value="342" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" delta={{ direction: 'up', label: '+5.6%' }} />
        <KpiCard label="Cancellation rate" value="8.2%" accent="var(--color-indigo-400)" labelColor="var(--color-indigo-600)" valueColor="var(--color-indigo-800)" delta={{ direction: 'down', label: '-1.1%' }} />
        <KpiCard label="Acceptance rate" value="91.8%" accent="var(--color-indigo-400)" labelColor="var(--color-indigo-600)" valueColor="var(--color-indigo-800)" delta={{ direction: 'up', label: '+1.1%' }} />
      </KpiGrid>

      <div className="mb-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        <Card>
          <CardTitle>
            <LineChart style={{ color: 'var(--color-teal-400)' }} />
            Revenue trend — last 7 days
          </CardTitle>
          <SparklineChart data={revenueData} color="var(--color-teal-400)" />
        </Card>
        <Card>
          <CardTitle>
            <Car style={{ color: 'var(--color-amber-400)' }} />
            Ride trend — last 7 days
          </CardTitle>
          <SparklineChart data={rideData} color="var(--color-amber-400)" />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        <Card>
          <CardTitle>
            <Users style={{ color: 'var(--color-indigo-400)' }} />
            Customer growth
          </CardTitle>
          {customerGrowth.map((c) => (
            <ProgressBar key={c.label} label={c.label} value={c.displayValue} percent={c.percent} color={c.color} />
          ))}
        </Card>
        <Card>
          <CardTitle>
            <UserCheck style={{ color: 'var(--color-teal-400)' }} />
            Partner growth
          </CardTitle>
          {partnerGrowth.map((c) => (
            <ProgressBar key={c.label} label={c.label} value={c.displayValue} percent={c.percent} color={c.color} />
          ))}
        </Card>
        <Card>
          <CardTitle>
            <Zap style={{ color: 'var(--color-coral-400)' }} />
            Quick actions
          </CardTitle>
          <div className="flex flex-col gap-2">
            <Button variant="primary" className="justify-start" onClick={handleSendPushAlert}>
              <Radio className="size-3.5" />Send push alert
            </Button>
            <Button variant="outline" className="justify-start" onClick={handleExportReport}>
              <Download className="size-3.5" />Export daily report
            </Button>
            <Button
              variant={maintenanceOn ? 'danger' : 'outline'}
              className="justify-start"
              onClick={handleToggleMaintenance}
            >
              {maintenanceOn ? <ShieldOff className="size-3.5" /> : <Settings className="size-3.5" />}
              Maintenance mode {maintenanceOn ? '· ON' : ''}
            </Button>
            <Button variant="warn" className="justify-start" onClick={handleViewSos}>
              <TriangleAlert className="size-3.5" />View SOS cases
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
