export interface AuditLog {
  id: string
  timestamp: string
  actor: string
  action: string
  entity: string
  ip: string
  result: 'Success' | 'Failed'
}

export const AUDIT_LOGS: AuditLog[] = [
  { id: 'LOG-9931', timestamp: '2026-06-18 14:22:10', actor: 'super.admin@trofi.in', action: 'Approved KYC document', entity: 'Partner DRV290', ip: '103.21.58.4', result: 'Success' },
  { id: 'LOG-9930', timestamp: '2026-06-18 14:10:02', actor: 'kiran.a@trofi.in', action: 'Updated ticket priority', entity: 'TKT-3298', ip: '103.21.58.9', result: 'Success' },
  { id: 'LOG-9929', timestamp: '2026-06-18 13:58:47', actor: 'super.admin@trofi.in', action: 'Modified commission rate', entity: 'Platform settings', ip: '103.21.58.4', result: 'Success' },
  { id: 'LOG-9928', timestamp: '2026-06-18 13:40:19', actor: 'ops.chennai@trofi.in', action: 'Blocked customer account', entity: 'CUS1008', ip: '117.99.12.3', result: 'Success' },
  { id: 'LOG-9927', timestamp: '2026-06-18 13:12:55', actor: 'unknown', action: 'Failed login attempt', entity: 'Login', ip: '45.132.44.10', result: 'Failed' },
  { id: 'LOG-9926', timestamp: '2026-06-18 12:50:33', actor: 'finance.mgr@trofi.in', action: 'Processed weekly settlement', entity: 'Settlements batch #221', ip: '103.21.58.15', result: 'Success' },
]
