export interface Settlement {
  partnerId: string
  partnerName: string
  period: string
  gross: number
  commission: number
  net: number
  status: 'Processed' | 'Pending' | 'Failed'
}

export const SETTLEMENTS: Settlement[] = [
  { partnerId: 'DRV110', partnerName: 'Rajan Kumar', period: '10–16 Jun 2026', gross: 18400, commission: 2760, net: 15640, status: 'Processed' },
  { partnerId: 'DRV290', partnerName: 'Selvakumar M.', period: '10–16 Jun 2026', gross: 9200, commission: 1380, net: 7820, status: 'Pending' },
  { partnerId: 'DRV339', partnerName: 'Bala Murugan', period: '10–16 Jun 2026', gross: 15600, commission: 2340, net: 13260, status: 'Processed' },
  { partnerId: 'DRV442', partnerName: 'Gopal Krishnan', period: '10–16 Jun 2026', gross: 21800, commission: 3270, net: 18530, status: 'Processed' },
  { partnerId: 'DRV581', partnerName: 'Muthu Vel', period: '10–16 Jun 2026', gross: 4100, commission: 615, net: 3485, status: 'Failed' },
]

export const PAYMENT_SPLIT = [
  { name: 'UPI', value: 48 },
  { name: 'Cash', value: 27 },
  { name: 'Card', value: 15 },
  { name: 'Wallet', value: 10 },
]
