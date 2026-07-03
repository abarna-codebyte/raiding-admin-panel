export type RideStatus = 'Completed' | 'Active' | 'Cancelled'
export type PaymentMethod = 'UPI' | 'Cash' | 'Card' | 'Wallet'
export type City = 'Chennai' | 'Coimbatore' | 'Madurai' | 'Salem'
export type KycStatus = 'Verified' | 'Pending' | 'Rejected'
export type TrendDirection = 'up' | 'down' | 'flat'

export interface TrendDelta {
  direction: TrendDirection
  label: string
}
