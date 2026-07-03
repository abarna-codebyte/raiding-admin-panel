export interface Partner {
  id: string
  name: string
  initials: string
  vehicle: string
  city: string
  rating: number
  totalTrips: number
  earnings: number
  kyc: 'Verified' | 'Pending' | 'Rejected'
  online: boolean
}

export const PARTNERS: Partner[] = [
  { id: 'DRV110', name: 'Rajan Kumar', initials: 'RK', vehicle: 'Swift Dzire · TN07AB1234', city: 'Chennai', rating: 4.9, totalTrips: 3820, earnings: 182400, kyc: 'Verified', online: true },
  { id: 'DRV290', name: 'Selvakumar M.', initials: 'SM', vehicle: 'Hatchback · TN07CD5678', city: 'Chennai', rating: 4.6, totalTrips: 1240, earnings: 68200, kyc: 'Pending', online: false },
  { id: 'DRV339', name: 'Bala Murugan', initials: 'BM', vehicle: 'Etios · TN37EF9012', city: 'Coimbatore', rating: 4.8, totalTrips: 2960, earnings: 145600, kyc: 'Verified', online: true },
  { id: 'DRV442', name: 'Gopal Krishnan', initials: 'GK', vehicle: 'Innova · TN07GH3456', city: 'Chennai', rating: 4.7, totalTrips: 4110, earnings: 231000, kyc: 'Verified', online: true },
  { id: 'DRV581', name: 'Muthu Vel', initials: 'MV', vehicle: 'WagonR · TN58IJ7890', city: 'Madurai', rating: 4.3, totalTrips: 890, earnings: 41200, kyc: 'Rejected', online: false },
  { id: 'DRV205', name: 'Anand Raj', initials: 'AR', vehicle: 'Swift · TN30KL2345', city: 'Salem', rating: 4.5, totalTrips: 1560, earnings: 74800, kyc: 'Verified', online: true },
]
