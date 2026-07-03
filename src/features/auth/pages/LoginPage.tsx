import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { AuthBrandPanel, AuthRight, AuthCard } from '@/layouts/AuthLayout'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/store/useAuthStore'
import { loginSchema, type LoginFormValues } from '../schemas/login.schema'
import { loginRequest } from '../api/authApi'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const [showPass, setShowPass] = useState(false)
  const [apiError, setApiError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = async (values: LoginFormValues) => {
    setApiError('')
    try {
      const { token, user } = await loginRequest(values)
      login(token, user)
      navigate('/app/dashboard')
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <AuthBrandPanel
        hero={{
          icon: <ShieldCheck className="size-7" />,
          title: 'Run your entire fleet from one panel',
          sub: 'Monitor rides, verify partners, resolve safety incidents, and track revenue — all in real time across every city you operate in.',
        }}
      >
        <div className="flex flex-wrap gap-2">
          {['Live ride tracking', 'KYC verification', 'Fraud & risk tools', 'Revenue analytics'].map((f) => (
            <span key={f} className="rounded-full border border-white/15 bg-white/[0.12] px-3 py-1 text-[12px] text-white/90">
              {f}
            </span>
          ))}
        </div>
      </AuthBrandPanel>

      <AuthRight>
        <AuthCard>
          <div className="mb-5 flex justify-center">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-teal-400)] text-[18px] font-bold text-white">
              T
            </div>
          </div>
          <div className="mb-1.5 text-center text-xl font-bold">Welcome back</div>
          <div className="mb-6 text-center text-[13px] text-[var(--color-text-muted)]">
            Sign in to the Trofi admin panel
          </div>

          {apiError && (
            <div className="mb-3.5 flex items-center gap-2 rounded-lg border border-[var(--color-rose-100)] bg-[var(--color-rose-50)] px-3 py-2.5 text-[12px] text-[var(--color-rose-600)]">
              <AlertCircle className="size-4 shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Label htmlFor="email">Work email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@trofi.in"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-8 pr-3 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('email')}
                />
              </div>
              {errors.email && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                <input
                  id="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-8 pr-9 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-faint)]"
                >
                  {showPass ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" variant="primary" className="w-full justify-center py-2.5" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in…' : 'Sign in'}
              {!isSubmitting && <ArrowRight className="size-3.5" />}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-2.5 text-[12px] text-[var(--color-text-faint)]">
            <span className="h-px flex-1 bg-[var(--color-border-soft)]" />
            <span>new to Trofi?</span>
            <span className="h-px flex-1 bg-[var(--color-border-soft)]" />
          </div>

          <Link to="/register">
            <Button variant="outline" className="w-full justify-center py-2.5">
              Request admin access
            </Button>
          </Link>

          <div className="mt-4 text-center text-[11px] text-[var(--color-text-faint)]">
            Demo credential — admin@trofi.in / Admin@123
          </div>
        </AuthCard>
      </AuthRight>
    </>
  )
}
