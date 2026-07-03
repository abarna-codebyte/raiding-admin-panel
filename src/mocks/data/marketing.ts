export interface Campaign {
  code: string
  discount: string
  usage: number
  budgetSpent: number
  budgetTotal: number
  city: string
  status: 'Active' | 'Scheduled' | 'Ended'
  validTill: string
}

export const CAMPAIGNS: Campaign[] = [
  { code: 'TROFI50', discount: '₹50 off', usage: 4820, budgetSpent: 241000, budgetTotal: 300000, city: 'Chennai', status: 'Active', validTill: '2026-06-30' },
  { code: 'FIRSTRIDE', discount: '100% off up to ₹100', usage: 1230, budgetSpent: 98000, budgetTotal: 150000, city: 'All cities', status: 'Active', validTill: '2026-07-15' },
  { code: 'CBE20', discount: '20% off', usage: 640, budgetSpent: 32000, budgetTotal: 50000, city: 'Coimbatore', status: 'Active', validTill: '2026-06-25' },
  { code: 'MDU100', discount: '₹100 off', usage: 0, budgetSpent: 0, budgetTotal: 80000, city: 'Madurai', status: 'Scheduled', validTill: '2026-08-01' },
  { code: 'WEEKEND15', discount: '15% off', usage: 5400, budgetSpent: 120000, budgetTotal: 120000, city: 'All cities', status: 'Ended', validTill: '2026-05-31' },
]
