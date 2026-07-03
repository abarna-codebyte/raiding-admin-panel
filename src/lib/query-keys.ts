/** Centralized TanStack Query key factory — keeps cache keys typo-proof
 * and gives every feature a consistent invalidation surface. */
export const queryKeys = {
  dashboard: {
    metrics: ['dashboard', 'metrics'] as const,
  },
  operations: {
    live: ['operations', 'live'] as const,
  },
  rides: {
    list: (filters?: unknown) => ['rides', 'list', filters] as const,
  },
  customers: {
    list: (filters?: unknown) => ['customers', 'list', filters] as const,
  },
  partners: {
    list: (filters?: unknown) => ['partners', 'list', filters] as const,
  },
  verification: {
    queue: ['verification', 'queue'] as const,
  },
  sos: {
    incidents: ['sos', 'incidents'] as const,
  },
  support: {
    tickets: ['support', 'tickets'] as const,
  },
  finance: {
    settlements: ['finance', 'settlements'] as const,
  },
  marketing: {
    campaigns: ['marketing', 'campaigns'] as const,
  },
  analytics: {
    overview: ['analytics', 'overview'] as const,
  },
  fraud: {
    flags: ['fraud', 'flags'] as const,
  },
  audit: {
    logs: ['audit', 'logs'] as const,
  },
  roles: {
    list: ['roles', 'list'] as const,
  },
}
