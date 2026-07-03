export interface Role {
  id: string
  name: string
  usersCount: number
  permissionSummary: string
}

export const ROLES: Role[] = [
  { id: 'ROLE1', name: 'Super Admin', usersCount: 3, permissionSummary: 'Full access to all modules' },
  { id: 'ROLE2', name: 'Operations Manager', usersCount: 8, permissionSummary: 'Rides, Operations, Support (read/write)' },
  { id: 'ROLE3', name: 'Verification Agent', usersCount: 14, permissionSummary: 'Verification module only' },
  { id: 'ROLE4', name: 'Support Agent', usersCount: 22, permissionSummary: 'Support tickets, Customer profiles (read)' },
  { id: 'ROLE5', name: 'Finance Manager', usersCount: 5, permissionSummary: 'Finance, Settlements, Analytics (read/write)' },
]

export const MODULES = ['Dashboard', 'Rides', 'Customers', 'Partners', 'Verification', 'Finance', 'Settings']
export const ACTIONS = ['View', 'Create', 'Edit', 'Delete']
