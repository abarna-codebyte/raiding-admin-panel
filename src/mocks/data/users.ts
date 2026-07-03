import type { AuthUser } from '@/store/useAuthStore'

/** Seed + registered users for the mock auth layer.
 *
 * In a real backend this would be actual database rows. Here the list is
 * persisted to localStorage via useUsersStore (Zustand `persist`) so that
 * registering a new admin, approving them, and logging in as them all
 * survive page reloads without a real API.
 *
 * ⚠️ Plaintext passwords are fine for local mock data only. A real
 * backend must hash passwords (bcrypt/argon2) and never store or log
 * them in plaintext.
 */
export type UserStatus = 'active' | 'pending' | 'rejected'

export interface ManagedUser extends AuthUser {
  id: string
  password: string
  status: UserStatus
}

export const SEED_USERS: ManagedUser[] = [
  {
    id: 'seed-super-admin',
    name: 'Super Admin',
    email: 'admin@trofi.in',
    password: 'Admin@123',
    role: 'Super Admin',
    scope: 'All cities',
    status: 'active',
  },
]
