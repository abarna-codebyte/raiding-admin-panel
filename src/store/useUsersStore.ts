import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SEED_USERS, type ManagedUser } from '@/mocks/data/users'

interface UsersState {
  users: ManagedUser[]
  addPendingUser: (u: Omit<ManagedUser, 'id' | 'status'>) => void
  approveUser: (id: string) => void
  rejectUser: (id: string) => void
  findByCredentials: (email: string, password: string) => ManagedUser | undefined
}

/** Persisted "database" of admin users for the mock auth layer.
 * Seeded with the first Super Admin; registrations from RegisterPage are
 * appended here with status 'pending' until approved from the Roles page. */
export const useUsersStore = create<UsersState>()(
  persist(
    (set, get) => ({
      users: SEED_USERS,

      addPendingUser: (u) =>
        set((s) => ({
          users: [...s.users, { ...u, id: crypto.randomUUID(), status: 'pending' }],
        })),

      approveUser: (id) =>
        set((s) => ({
          users: s.users.map((u) => (u.id === id ? { ...u, status: 'active' } : u)),
        })),

      rejectUser: (id) =>
        set((s) => ({
          users: s.users.map((u) => (u.id === id ? { ...u, status: 'rejected' } : u)),
        })),

      findByCredentials: (email, password) =>
        get().users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password),
    }),
    { name: 'trofi-users' },
  ),
)
