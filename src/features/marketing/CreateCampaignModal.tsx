import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogHeader, DialogBody, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { campaignSchema, type CampaignFormValues } from './schemas'

export function CreateCampaignModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignSchema),
  })

  const onSubmit = async (values: CampaignFormValues) => {
    await new Promise((r) => setTimeout(r, 600))
    toast.success(`Campaign ${values.code} created`)
    reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader><span className="text-[14px] font-semibold">Create campaign</span></DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody>
            <div className="mb-3">
              <Label htmlFor="code">Promo code</Label>
              <Input id="code" placeholder="e.g. TROFI50" {...register('code')} />
              {errors.code && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.code.message}</p>}
            </div>
            <div className="mb-3">
              <Label htmlFor="discount">Discount</Label>
              <Input id="discount" placeholder="e.g. ₹50 off or 20% off" {...register('discount')} />
              {errors.discount && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.discount.message}</p>}
            </div>
            <div className="mb-3">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="e.g. Chennai or All cities" {...register('city')} />
              {errors.city && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.city.message}</p>}
            </div>
            <div className="mb-3">
              <Label htmlFor="budgetTotal">Total budget (₹)</Label>
              <Input id="budgetTotal" type="number" placeholder="e.g. 100000" {...register('budgetTotal', { valueAsNumber: true })} />
              {errors.budgetTotal && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.budgetTotal.message}</p>}
            </div>
            <div>
              <Label htmlFor="validTill">Valid till</Label>
              <Input id="validTill" type="date" {...register('validTill')} />
              {errors.validTill && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.validTill.message}</p>}
            </div>
          </DialogBody>
          <DialogFooter>
            <div className="flex-1" />
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? 'Creating…' : 'Create campaign'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
