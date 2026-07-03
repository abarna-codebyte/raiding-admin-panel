import {
  LayoutDashboard, Activity, Car, Users, UserCheck, IdCard,
  TriangleAlert, Headset, IndianRupee, Megaphone, ChartBar,
  ShieldAlert, ClipboardList, Lock, Settings,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  id: string
  label: string
  icon: LucideIcon
  path: string
  badge?: { count: number; bg: string; text: string }
}

export interface NavSection {
  section: string
  items: NavItem[]
}

export const NAV_CONFIG: NavSection[] = [
  {
    section: 'Overview',
    items: [{ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/app/dashboard' }],
  },
  {
    section: 'Operations',
    items: [
      {
        id: 'operations', label: 'Live monitoring', icon: Activity, path: '/app/operations',
        badge: { count: 47, bg: 'var(--color-blue-50)', text: 'var(--color-blue-800)' },
      },
    ],
  },
  {
    section: 'Fleet & Users',
    items: [
      { id: 'rides', label: 'Rides', icon: Car, path: '/app/rides' },
      { id: 'customers', label: 'Customers', icon: Users, path: '/app/customers' },
      { id: 'partners', label: 'Partners', icon: UserCheck, path: '/app/partners' },
      {
        id: 'verification', label: 'Verification', icon: IdCard, path: '/app/verification',
        badge: { count: 110, bg: 'var(--color-amber-50)', text: 'var(--color-amber-800)' },
      },
    ],
  },
  {
    section: 'Safety & Support',
    items: [
      {
        id: 'sos', label: 'SOS & Safety', icon: TriangleAlert, path: '/app/sos',
        badge: { count: 3, bg: 'var(--color-rose-50)', text: 'var(--color-rose-800)' },
      },
      {
        id: 'support', label: 'Support', icon: Headset, path: '/app/support',
        badge: { count: 124, bg: 'var(--color-blue-50)', text: 'var(--color-blue-800)' },
      },
    ],
  },
  {
    section: 'Business',
    items: [
      { id: 'finance', label: 'Finance', icon: IndianRupee, path: '/app/finance' },
      { id: 'marketing', label: 'Marketing', icon: Megaphone, path: '/app/marketing' },
      { id: 'analytics', label: 'Analytics & BI', icon: ChartBar, path: '/app/analytics' },
      {
        id: 'fraud', label: 'Fraud & Risk', icon: ShieldAlert, path: '/app/fraud',
        badge: { count: 24, bg: 'var(--color-coral-50)', text: 'var(--color-coral-800)' },
      },
    ],
  },
  {
    section: 'System',
    items: [
      { id: 'audit', label: 'Audit logs', icon: ClipboardList, path: '/app/audit' },
      { id: 'roles', label: 'Roles & Permissions', icon: Lock, path: '/app/roles' },
      { id: 'settings', label: 'Settings', icon: Settings, path: '/app/settings' },
    ],
  },
]
