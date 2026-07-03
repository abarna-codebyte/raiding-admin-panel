import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RegisterSuccessPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[var(--color-bg)] p-8">
      <div className="w-full max-w-[420px] rounded-2xl bg-white p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,.1)]">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[var(--color-teal-50)] text-[var(--color-teal-400)]">
          <CheckCircle2 className="size-7" />
        </div>
        <div className="mb-2 text-lg font-semibold">Request submitted!</div>
        <div className="mb-6 text-[13px] leading-relaxed text-[var(--color-text-muted)]">
          Your admin account request has been sent for review. A Super Admin will approve your access within 24
          hours. You'll receive an email at the address you provided.
        </div>
        <Link to="/login">
          <Button variant="primary" className="w-full justify-center py-2.5">
            <ArrowLeft className="size-3.5" />
            Back to sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}
