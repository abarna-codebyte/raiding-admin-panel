export interface Ride {
  id: string
  customer: string
  customerInitials: string
  driver: string
  route: string
  distanceKm: number
  fare: number
  commission: number
  payment: 'UPI' | 'Cash' | 'Card' | 'Wallet'
  status: 'Completed' | 'Active' | 'Cancelled'
}

export const RIDES: Ride[] = [
  { id: '#TRF8821', customer: 'Priya R.', customerInitials: 'PR', driver: 'DRV442', route: 'T.Nagar → Airport', distanceKm: 18.2, fare: 320, commission: 48, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8820', customer: 'Arjun M.', customerInitials: 'AM', driver: 'DRV339', route: 'Velachery → Adyar', distanceKm: 6.4, fare: 95, commission: 14, payment: 'Cash', status: 'Active' },
  { id: '#TRF8819', customer: 'Meena S.', customerInitials: 'MS', driver: '—', route: 'Anna Nagar → Poonamallee', distanceKm: 12.0, fare: 210, commission: 0, payment: 'Wallet', status: 'Cancelled' },
  { id: '#TRF8818', customer: 'Karthik V.', customerInitials: 'KV', driver: 'DRV110', route: 'OMR → Sholinganallur', distanceKm: 9.8, fare: 160, commission: 24, payment: 'Card', status: 'Completed' },
  { id: '#TRF8817', customer: 'Divya N.', customerInitials: 'DN', driver: 'DRV290', route: 'Guindy → Tambaram', distanceKm: 14.5, fare: 240, commission: 36, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8816', customer: 'Rahul K.', customerInitials: 'RK', driver: 'DRV581', route: 'Egmore → Nungambakkam', distanceKm: 4.1, fare: 70, commission: 10, payment: 'Cash', status: 'Completed' },
  { id: '#TRF8815', customer: 'Sneha P.', customerInitials: 'SP', driver: 'DRV205', route: 'Mylapore → Besant Nagar', distanceKm: 5.6, fare: 88, commission: 13, payment: 'UPI', status: 'Active' },
  { id: '#TRF8814', customer: 'Vignesh T.', customerInitials: 'VT', driver: 'DRV339', route: 'Perambur → Central', distanceKm: 7.2, fare: 110, commission: 16, payment: 'Wallet', status: 'Completed' },
  { id: '#TRF8813', customer: 'Anitha B.', customerInitials: 'AB', driver: '—', route: 'Porur → Vadapalani', distanceKm: 8.9, fare: 145, commission: 0, payment: 'Card', status: 'Cancelled' },
  { id: '#TRF8812', customer: 'Suresh D.', customerInitials: 'SD', driver: 'DRV110', route: 'T.Nagar → Velachery', distanceKm: 10.3, fare: 175, commission: 26, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8811', customer: 'Lakshmi R.', customerInitials: 'LR', driver: 'DRV442', route: 'Adyar → Airport', distanceKm: 16.7, fare: 290, commission: 43, payment: 'Cash', status: 'Completed' },
  { id: '#TRF8810', customer: 'Mohan S.', customerInitials: 'MS', driver: 'DRV581', route: 'Anna Nagar → Kilpauk', distanceKm: 3.8, fare: 65, commission: 9, payment: 'UPI', status: 'Completed' },
]
