import { delay } from '@/lib/format'
import type { AuthUser } from '@/store/useAuthStore'
import { useUsersStore } from '@/store/useUsersStore'
import type { LoginFormValues } from '../schemas/login.schema'
import type { RegisterFormValues } from '../schemas/register.schema'

/** Mock auth layer — swap the bodies below for real `api.post(...)` Axios
 * calls once a backend is available; the calling code doesn't change.
 *
 * Both functions read/write useUsersStore (persisted to localStorage), so
 * registering a new admin, approving them from the Roles page, and then
 * logging in as them all work end-to-end without a real backend. */
export async function loginRequest(values: LoginFormValues): Promise<{ token: string; user: AuthUser }> {
  await delay(null, 900)

  const email = values.email.trim().toLowerCase()
  const password = values.password.trim()

  const match = useUsersStore.getState().findByCredentials(email, password)

  if (!match) {
    throw new Error('Invalid email or password.')
  }
  if (match.status === 'pending') {
    throw new Error('Your account is pending Super Admin approval.')
  }
  if (match.status === 'rejected') {
    throw new Error('Your access request was rejected. Contact a Super Admin.')
  }

  const { password: _password, id: _id, status: _status, ...user } = match
  return { token: 'mock-jwt-token', user }
}

export async function registerRequest(values: RegisterFormValues): Promise<{ success: true }> {
  await delay(null, 900)

  useUsersStore.getState().addPendingUser({
    name: `${values.firstName} ${values.lastName}`.trim(),
    email: values.email.trim(),
    password: values.password,
    role: values.role,
    scope: 'All cities',
  })

  return { success: true }
}
