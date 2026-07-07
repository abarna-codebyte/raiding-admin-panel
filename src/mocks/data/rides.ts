export interface Ride {
  id: string
  customer: string
  customerInitials: string
  driver: string
  route: string
  city: 'Chennai' | 'Coimbatore' | 'Madurai'
  distanceKm: number
  fare: number
  commission: number
  payment: 'UPI' | 'Cash' | 'Card' | 'Wallet'
  status: 'Completed' | 'Active' | 'Cancelled'
}

export const RIDES: Ride[] = [
  { id: '#TRF8821', customer: 'Priya R.', customerInitials: 'PR', driver: 'DRV442', route: 'T.Nagar → Airport', city: 'Chennai', distanceKm: 18.2, fare: 320, commission: 48, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8820', customer: 'Arjun M.', customerInitials: 'AM', driver: 'DRV339', route: 'Velachery → Adyar', city: 'Chennai', distanceKm: 6.4, fare: 95, commission: 14, payment: 'Cash', status: 'Active' },
  { id: '#TRF8819', customer: 'Meena S.', customerInitials: 'MS', driver: '—', route: 'Anna Nagar → Poonamallee', city: 'Chennai', distanceKm: 12.0, fare: 210, commission: 0, payment: 'Wallet', status: 'Cancelled' },
  { id: '#TRF8818', customer: 'Karthik V.', customerInitials: 'KV', driver: 'DRV110', route: 'OMR → Sholinganallur', city: 'Chennai', distanceKm: 9.8, fare: 160, commission: 24, payment: 'Card', status: 'Completed' },
  { id: '#TRF8817', customer: 'Divya N.', customerInitials: 'DN', driver: 'DRV290', route: 'RS Puram → Gandhipuram', city: 'Coimbatore', distanceKm: 5.5, fare: 90, commission: 13, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8816', customer: 'Rahul K.', customerInitials: 'RK', driver: 'DRV581', route: 'Egmore → Nungambakkam', city: 'Chennai', distanceKm: 4.1, fare: 70, commission: 10, payment: 'Cash', status: 'Completed' },
  { id: '#TRF8815', customer: 'Sneha P.', customerInitials: 'SP', driver: 'DRV205', route: 'Simmakkal → Tallakulam', city: 'Madurai', distanceKm: 4.8, fare: 75, commission: 11, payment: 'UPI', status: 'Active' },
  { id: '#TRF8814', customer: 'Vignesh T.', customerInitials: 'VT', driver: 'DRV339', route: 'Perambur → Central', city: 'Chennai', distanceKm: 7.2, fare: 110, commission: 16, payment: 'Wallet', status: 'Completed' },
  { id: '#TRF8813', customer: 'Anitha B.', customerInitials: 'AB', driver: '—', route: 'Porur → Vadapalani', city: 'Chennai', distanceKm: 8.9, fare: 145, commission: 0, payment: 'Card', status: 'Cancelled' },
  { id: '#TRF8812', customer: 'Suresh D.', customerInitials: 'SD', driver: 'DRV110', route: 'Peelamedu → Saibaba Colony', city: 'Coimbatore', distanceKm: 6.7, fare: 105, commission: 16, payment: 'UPI', status: 'Completed' },
  { id: '#TRF8811', customer: 'Lakshmi R.', customerInitials: 'LR', driver: 'DRV442', route: 'Adyar → Airport', city: 'Chennai', distanceKm: 16.7, fare: 290, commission: 43, payment: 'Cash', status: 'Completed' },
  { id: '#TRF8810', customer: 'Mohan S.', customerInitials: 'MS', driver: 'DRV581', route: 'Villapuram → Tallakulam', city: 'Madurai', distanceKm: 5.2, fare: 82, commission: 12, payment: 'UPI', status: 'Completed' },
]