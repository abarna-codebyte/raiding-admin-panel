import { useState } from 'react'
import { IdCard, Car, User, FileText, ShieldCheck, ChevronRight, Check, X } from 'lucide-react'
import { PageHeader } from '@/layouts/DashboardLayout'
import { KpiCard, KpiGrid } from '@/components/shared/KpiCard'
import { Card, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MetricRow, SectionLabel } from '@/components/shared/MetricRow'
import { DocumentViewerModal, type DocData } from '@/components/shared/DocumentViewerModal'

const docList: { icon: typeof IdCard; label: string; status: string; doc: DocData }[] = [
  {
    icon: IdCard, label: 'Driving licence', status: 'Pending',
    doc: { icon: IdCard, title: 'Driving Licence', filename: 'DL_DRV581_front.jpg', meta: [
      ['DL number', 'TN58 20210004821'], ['Name', 'Muthu Vel'], ['DOB', '14 Mar 1991'],
      ['Issue date', '02 Jun 2021'], ['Expiry date', '01 Jun 2041'], ['Vehicle class', 'LMV-NT'],
    ] },
  },
  {
    icon: Car, label: 'Vehicle RC', status: 'Pending',
    doc: { icon: Car, title: 'Registration Certificate', filename: 'RC_TN58IJ7890.jpg', meta: [
      ['RC number', 'TN58 IJ 7890'], ['Owner name', 'Muthu Vel'], ['Vehicle class', 'WagonR LXI'],
      ['Registered on', '18 Aug 2020'], ['Fitness upto', '17 Aug 2035'],
    ] },
  },
  {
    icon: User, label: 'Selfie / Face match', status: 'Verified',
    doc: { icon: User, title: 'Selfie Verification', filename: 'selfie_DRV581.jpg', meta: [
      ['Face match score', '96.4%'], ['Liveness check', 'Passed'], ['Captured on', '17 Jun 2026, 09:12'],
    ] },
  },
  {
    icon: FileText, label: 'Insurance', status: 'Pending',
    doc: { icon: FileText, title: 'Vehicle Insurance', filename: 'insurance_TN58IJ7890.pdf', meta: [
      ['Policy number', 'INS-88213340'], ['Insurer', 'ICICI Lombard'], ['Valid till', '30 Nov 2026'],
    ] },
  },
]

export default function VerificationPage() {
  const [activeDoc, setActiveDoc] = useState<DocData | null>(null)
  const [open, setOpen] = useState(false)

  const openDoc = (doc: DocData) => {
    setActiveDoc(doc)
    setOpen(true)
  }

  return (
    <div>
      <PageHeader title="Partner verification" sub="Review pending KYC documents · Queue: Muthu Vel (DRV581)" />

      <KpiGrid>
        <KpiCard label="Pending DL" value="42" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
        <KpiCard label="Pending RC" value="31" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
        <KpiCard label="Pending face match" value="18" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
        <KpiCard label="Pending insurance" value="19" accent="var(--color-amber-200)" labelColor="var(--color-amber-600)" valueColor="var(--color-amber-800)" />
        <KpiCard label="Verified today" value="64" accent="var(--color-teal-400)" labelColor="var(--color-teal-600)" valueColor="var(--color-teal-800)" />
        <KpiCard label="Rejected today" value="7" accent="var(--color-rose-400)" labelColor="var(--color-rose-600)" valueColor="var(--color-rose-800)" />
      </KpiGrid>

      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardTitle>
            <IdCard className="size-4" style={{ color: 'var(--color-amber-400)' }} />
            Driving licence — front
          </CardTitle>
          <div
            onClick={() => openDoc(docList[0].doc)}
            className="mb-4 flex h-[220px] cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] transition-colors hover:bg-[var(--color-slate-50)]"
          >
            <IdCard className="size-14 text-[var(--color-slate-100)]" />
            <span className="text-[12px] text-[var(--color-text-muted)]">Click to open · DL_DRV581_front.jpg</span>
          </div>

          <SectionLabel noTopMargin>OCR extracted details</SectionLabel>
          <MetricRow label="DL number" value="TN58 20210004821" />
          <MetricRow label="Name" value="Muthu Vel" />
          <MetricRow label="DOB" value="14 Mar 1991" />
          <MetricRow label="Vehicle class" value="LMV-NT" />
          <MetricRow label="Expiry date" value="01 Jun 2041" />
          <MetricRow label="Face match score" value={<span className="font-semibold" style={{ color: 'var(--color-teal-600)' }}>96.4%</span>} />

          <div className="mt-4 flex gap-2">
            <Button variant="danger"><X className="size-3.5" />Reject</Button>
            <Button variant="outline">Request re-upload</Button>
            <div className="flex-1" />
            <Button variant="primary"><Check className="size-3.5" />Approve</Button>
          </div>
        </Card>

        <Card>
          <CardTitle>
            <ShieldCheck className="size-4" style={{ color: 'var(--color-teal-400)' }} />
            Document checklist
          </CardTitle>
          {docList.map((d) => {
            const Icon = d.icon
            return (
              <button
                key={d.label}
                onClick={() => openDoc(d.doc)}
                className="flex w-full items-center gap-2.5 border-b border-[var(--color-border-faint)] py-2.5 text-left last:border-0"
              >
                <Icon className="size-4 shrink-0 text-[var(--color-text-muted)]" />
                <span className="flex-1 text-[13px]">{d.label}</span>
                <Badge status={d.status}>{d.status}</Badge>
                <ChevronRight className="size-3.5 text-[var(--color-text-faint)]" />
              </button>
            )
          })}
        </Card>
      </div>

      <DocumentViewerModal open={open} onOpenChange={setOpen} doc={activeDoc} />
    </div>
  )
}
