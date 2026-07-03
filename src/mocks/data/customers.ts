export interface Customer {
  id: string
  name: string
  initials: string
  phone: string
  city: string
  totalRides: number
  totalSpend: number
  rating: number
  status: 'Active' | 'Blocked'
  signupDate: string
}

export const CUSTOMERS: Customer[] = [
  { id: 'CUS1001', name: 'Priya Ramesh', initials: 'PR', phone: '+91 98765 43210', city: 'Chennai', totalRides: 142, totalSpend: 24800, rating: 4.8, status: 'Active', signupDate: '2024-02-14' },
  { id: 'CUS1002', name: 'Arjun Mehta', initials: 'AM', phone: '+91 98123 44521', city: 'Coimbatore', totalRides: 58, totalSpend: 9800, rating: 4.6, status: 'Active', signupDate: '2024-05-02' },
  { id: 'CUS1003', name: 'Meena Sundaram', initials: 'MS', phone: '+91 90031 22110', city: 'Chennai', totalRides: 12, totalSpend: 2100, rating: 3.9, status: 'Blocked', signupDate: '2025-01-19' },
  { id: 'CUS1004', name: 'Karthik Venkat', initials: 'KV', phone: '+91 99887 65432', city: 'Madurai', totalRides: 89, totalSpend: 15600, rating: 4.7, status: 'Active', signupDate: '2023-11-08' },
  { id: 'CUS1005', name: 'Divya Nair', initials: 'DN', phone: '+91 97865 12345', city: 'Chennai', totalRides: 210, totalSpend: 38900, rating: 4.9, status: 'Active', signupDate: '2023-06-21' },
  { id: 'CUS1006', name: 'Rahul Krishnan', initials: 'RK', phone: '+91 98456 78901', city: 'Salem', totalRides: 34, totalSpend: 5400, rating: 4.4, status: 'Active', signupDate: '2024-09-11' },
  { id: 'CUS1007', name: 'Sneha Padmanabhan', initials: 'SP', phone: '+91 96543 21987', city: 'Coimbatore', totalRides: 76, totalSpend: 12300, rating: 4.5, status: 'Active', signupDate: '2024-03-27' },
  { id: 'CUS1008', name: 'Vignesh Thiagarajan', initials: 'VT', phone: '+91 95412 36789', city: 'Chennai', totalRides: 5, totalSpend: 780, rating: 3.2, status: 'Blocked', signupDate: '2025-04-30' },
]
