import { Activity, MapPin, TriangleAlert } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card, CardTitle } from '@/components/ui/card'
import { EventFeed, type EventFeedItem } from '@/components/shared/EventFeed'
import { MapPlaceholder, Pill } from '@/components/shared/MapPlaceholder'

const events: EventFeedItem[] = [
  { id: '1', time: '14:32:01', dotColor: 'var(--color-teal-400)', text: <>Ride <strong>#TRF8821</strong> completed — ₹180 · T.Nagar → Airport</> },
  { id: '2', time: '14:31:58', dotColor: 'var(--color-blue-400)', text: <>Ride <strong>#TRF8820</strong> accepted by DRV442</> },
  { id: '3', time: '14:31:45', dotColor: 'var(--color-indigo-400)', text: <>Ride <strong>#TRF8819</strong> requested — T.Nagar</> },
  { id: '4', time: '14:31:30', dotColor: 'var(--color-rose-400)', emphasize: true, text: <><TriangleAlert className="mr-1 inline size-3.5" /> SOS triggered — DRV381 · Poonamallee Bypass</> },
  { id: '5', time: '14:31:12', dotColor: 'var(--color-amber-200)', text: <>Ride <strong>#TRF8818</strong> cancelled by customer</> },
  { id: '6', time: '14:30:55', dotColor: 'var(--color-slate-400)', text: 'Partner DRV290 went offline' },
  { id: '7', time: '14:30:40', dotColor: 'var(--color-teal-400)', text: <>Ride <strong>#TRF8817</strong> started — DRV110</> },
]

export default function OperationsPage() {
  return (
    <div>
      <PageHeader title="Live operations" sub="Real-time monitoring · Auto-refreshes every 30s" />

      <KpiGrid>
        <KpiCard label="Online drivers" value="1,203" accent="var(--color-blue-400)" labelColor="var(--color-blue-600)" valueColor="var(--color-blue-800)" delta={{ direction: 'flat', label: '● Live', color: 'var(--color-teal-600)' }} />
        <KpiCard label="Busy drivers" value="678" accent="var(--color-blue-400)" labelColor="var(--color-blue-600)" valueColor="var(--color-blue-800)" delta={{ direction: 'flat', label: 'On a trip', color: 'var(--color-text-muted)' }} />
        <KpiCard label="Offline drivers" value="412" accent="var(--color-slate-400)" labelColor="var(--color-slate-600)" valueColor="var(--color-slate-800)" delta={{ direction: 'flat', label: 'Inactive', color: 'var(--color-text-muted)' }} />
        <KpiCard label="Active trips" value="678" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" delta={{ direction: 'up', label: '+22 in 5m' }} />
        <KpiCard label="Pending requests" value="47" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" delta={{ direction: 'flat', label: 'High queue', color: 'var(--color-amber-600)' }} />
        <KpiCard label="SOS cases" value="3" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" delta={{ direction: 'flat', label: 'Needs attention', color: 'var(--color-rose-600)' }} />
      </KpiGrid>

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        <Card>
          <CardTitle>
            <Activity className="size-4" style={{ color: 'var(--color-blue-400)' }} />
            Real-time event feed
          </CardTitle>
          <EventFeed items={events} />
        </Card>
        <Card>
          <CardTitle>
            <MapPin className="size-4" style={{ color: 'var(--color-teal-400)' }} />
            Map view — Chennai
          </CardTitle>
          <MapPlaceholder caption="Live map · Chennai region" />
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Pill bg="var(--color-teal-50)" text="var(--color-teal-800)">Online drivers (1,203)</Pill>
            <Pill bg="var(--color-blue-50)" text="var(--color-blue-800)">Active trips (678)</Pill>
            <Pill bg="var(--color-amber-50)" text="var(--color-amber-800)">Hot zones</Pill>
            <Pill bg="var(--color-rose-50)" text="var(--color-rose-800)">SOS (3)</Pill>
          </div>
        </Card>
      </div>
    </div>
  )
}
