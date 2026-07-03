import { z } from 'zod'

export const campaignSchema = z.object({
  code: z.string().min(3, 'Code must be at least 3 characters').toUpperCase(),
  discount: z.string().min(1, 'Discount is required'),
  city: z.string().min(1, 'City is required'),
  budgetTotal: z.number({ message: 'Budget must be a number' }).positive('Budget must be greater than 0'),
  validTill: z.string().min(1, 'Valid-till date is required'),
})

export type CampaignFormValues = z.infer<typeof campaignSchema>
