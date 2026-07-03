import { useState } from 'react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'

const FEATURE_FLAGS = [
  { key: 'scheduled', label: 'Scheduled rides', on: true },
  { key: 'surge', label: 'Surge pricing', on: true },
  { key: 'shared', label: 'Shared rides', on: false },
  { key: 'chat', label: 'In-app chat', on: true },
  { key: 'tips', label: 'Tips for drivers', on: false },
]

export default function SettingsPage() {
  const [flags, setFlags] = useState(FEATURE_FLAGS)
  const [maintenance, setMaintenance] = useState(false)
  const [newRides, setNewRides] = useState(true)
  const [newRegistrations, setNewRegistrations] = useState(true)

  return (
    <div>
      <PageHeader title="Settings" sub="Ride configuration, commission rules, and platform controls" />

      <div className="mb-3.5 grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        <Card>
          <CardTitle>Ride configuration</CardTitle>
          <div className="mb-3"><Label>Base fare (₹)</Label><Input type="number" defaultValue={40} /></div>
          <div className="mb-3"><Label>Per-km rate (₹)</Label><Input type="number" defaultValue={12} /></div>
          <div className="mb-3"><Label>Per-min rate (₹)</Label><Input type="number" defaultValue={1.5} /></div>
          <div className="mb-4"><Label>Max surge multiplier</Label><Input type="number" defaultValue={2.5} step={0.1} /></div>
          <Button variant="primary">Save changes</Button>
        </Card>

        <Card>
          <CardTitle>Commission & cancellation rules</CardTitle>
          <div className="mb-3"><Label>Platform commission (%)</Label><Input type="number" defaultValue={15} /></div>
          <div className="mb-3"><Label>Partner share (%)</Label><Input type="number" defaultValue={85} /></div>
          <div className="mb-3"><Label>Customer cancellation fee (₹)</Label><Input type="number" defaultValue={25} /></div>
          <div className="mb-4"><Label>Partner cancellation fee (₹)</Label><Input type="number" defaultValue={50} /></div>
          <Button variant="primary">Save changes</Button>
        </Card>
      </div>

      <Card>
        <CardTitle>App settings & feature flags</CardTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">System controls</div>
            <div className="flex items-center justify-between border-b border-[var(--color-border-faint)] py-2 text-[13px]">
              <span>Maintenance mode</span>
              <Switch checked={maintenance} onCheckedChange={setMaintenance} />
            </div>
            <div className="flex items-center justify-between border-b border-[var(--color-border-faint)] py-2 text-[13px]">
              <span>New ride requests</span>
              <Switch checked={newRides} onCheckedChange={setNewRides} />
            </div>
            <div className="flex items-center justify-between py-2 text-[13px]">
              <span>New registrations</span>
              <Switch checked={newRegistrations} onCheckedChange={setNewRegistrations} />
            </div>
          </div>

          <div>
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">App versions</div>
            <div className="mb-3"><Label>iOS min version</Label><Input defaultValue="4.2.0" /></div>
            <div><Label>Android min version</Label><Input defaultValue="4.2.1" /></div>
          </div>

          <div>
            <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">Feature flags</div>
            {flags.map((f) => (
              <button
                key={f.key}
                onClick={() => setFlags((prev) => prev.map((x) => (x.key === f.key ? { ...x, on: !x.on } : x)))}
                className="flex w-full items-center justify-between border-b border-[var(--color-border-faint)] py-2 text-[13px] last:border-0"
              >
                <span>{f.label}</span>
                <Badge status={f.on ? 'ON' : 'OFF'}>{f.on ? 'ON' : 'OFF'}</Badge>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
