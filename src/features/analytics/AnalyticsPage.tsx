import { PageHeader } from '@/layouts/DashboardLayout'
import { Card, CardTitle } from '@/components/ui/card'
import { EChartsPanel } from '@/components/shared/EChartsPanel'

const days = ['1 Jun', '4 Jun', '7 Jun', '10 Jun', '13 Jun', '16 Jun', '18 Jun']
const revenue = [180000, 210000, 195000, 240000, 260000, 231000, 234810]

const cities = ['Chennai', 'Coimbatore', 'Madurai', 'Salem']
const ridesByCity = [12400, 5200, 3100, 1800]

const peakHours = ['6am', '9am', '12pm', '3pm', '6pm', '9pm', '12am']
const peakVolume = [420, 1850, 1120, 980, 2340, 2680, 640]

const paymentMix = [
  { name: 'UPI', value: 48 },
  { name: 'Cash', value: 27 },
  { name: 'Card', value: 15 },
  { name: 'Wallet', value: 10 },
]

export default function AnalyticsPage() {
  const lineOption = {
    grid: { top: 20, bottom: 30, left: 50, right: 16 },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: days, axisLine: { lineStyle: { color: 'var(--color-border)' } } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: 'var(--color-border-faint)' } } },
    series: [{ type: 'line', data: revenue, smooth: true, lineStyle: { color: 'var(--color-teal-400)', width: 2.5 }, itemStyle: { color: 'var(--color-teal-400)' }, areaStyle: { color: 'rgba(29,158,117,0.08)' } }],
  }

  const barOption = {
    grid: { top: 20, bottom: 30, left: 70, right: 16 },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'value', splitLine: { lineStyle: { color: 'var(--color-border-faint)' } } },
    yAxis: { type: 'category', data: cities },
    series: [{ type: 'bar', data: ridesByCity, itemStyle: { color: 'var(--color-indigo-400)', borderRadius: [0, 4, 4, 0] }, barWidth: '55%' }],
  }

  const donutOption = {
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { fontSize: 11 } },
    series: [{
      type: 'pie', radius: ['45%', '70%'],
      itemStyle: { borderColor: '#fff', borderWidth: 2 }, label: { fontSize: 11 },
      data: paymentMix.map((p, i) => ({ name: p.name, value: p.value, itemStyle: { color: ['var(--color-teal-400)', 'var(--color-blue-400)', 'var(--color-indigo-400)', 'var(--color-amber-200)'][i] } })),
    }],
  }

  const peakOption = {
    grid: { top: 20, bottom: 30, left: 40, right: 16 },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: peakHours },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: 'var(--color-border-faint)' } } },
    series: [{ type: 'bar', data: peakVolume, itemStyle: { color: 'var(--color-forest-400)', borderRadius: [4, 4, 0, 0] }, barWidth: '55%' }],
  }

  return (
    <div>
      <PageHeader title="Analytics & BI" sub="Platform-wide trends and business intelligence" />
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        <Card><CardTitle>Revenue over time</CardTitle><EChartsPanel option={lineOption} /></Card>
        <Card><CardTitle>Rides by city</CardTitle><EChartsPanel option={barOption} /></Card>
        <Card><CardTitle>Payment method mix</CardTitle><EChartsPanel option={donutOption} /></Card>
        <Card><CardTitle>Peak hour ride volume</CardTitle><EChartsPanel option={peakOption} /></Card>
      </div>
    </div>
  )
}
