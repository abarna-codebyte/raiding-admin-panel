export interface Ticket {
  id: string
  customer: string
  subject: string
  category: string
  priority: 'Low' | 'Medium' | 'High'
  agent: string
  status: 'Open' | 'Pending' | 'Resolved'
  created: string
}

export const TICKETS: Ticket[] = [
  { id: 'TKT-3301', customer: 'Priya Ramesh', subject: 'Fare charged twice for same trip', category: 'Billing', priority: 'High', agent: 'Divya S.', status: 'Open', created: '2026-06-17' },
  { id: 'TKT-3300', customer: 'Arjun Mehta', subject: 'Driver took a longer route', category: 'Ride quality', priority: 'Medium', agent: 'Kiran A.', status: 'Pending', created: '2026-06-17' },
  { id: 'TKT-3299', customer: 'Meena Sundaram', subject: 'Lost item in the cab', category: 'Lost & found', priority: 'Low', agent: 'Divya S.', status: 'Resolved', created: '2026-06-16' },
  { id: 'TKT-3298', customer: 'Karthik Venkat', subject: 'App crashing on ride request', category: 'Technical', priority: 'High', agent: 'Naveen R.', status: 'Open', created: '2026-06-16' },
  { id: 'TKT-3297', customer: 'Divya Nair', subject: 'Refund not processed', category: 'Billing', priority: 'High', agent: 'Kiran A.', status: 'Pending', created: '2026-06-15' },
  { id: 'TKT-3296', customer: 'Rahul Krishnan', subject: 'Driver was rude', category: 'Behaviour', priority: 'Medium', agent: 'Naveen R.', status: 'Resolved', created: '2026-06-15' },
]
