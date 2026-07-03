import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, Lock, LockKeyhole, Eye, EyeOff, AlertCircle, Send, UserPlus } from 'lucide-react'
import { AuthBrandPanel, AuthRight, AuthCard } from '@/layouts/AuthLayout'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { PasswordStrengthMeter } from '@/components/shared/PasswordStrengthMeter'
import { registerSchema, type RegisterFormValues } from '../schemas/register.schema'
import { registerRequest } from '../api/authApi'

const ROLES = ['Operations Manager', 'Verification Agent', 'Support Agent', 'Finance Manager']

export default function RegisterPage() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [apiError, setApiError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) })

  const passwordValue = watch('password') ?? ''

  const onSubmit = async (values: RegisterFormValues) => {
    setApiError('')
    try {
      await registerRequest(values)
      navigate('/register/success')
    } catch {
      setApiError('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <AuthBrandPanel
        hero={{
          icon: <UserPlus className="size-7" />,
          title: 'Request access to the admin panel',
          sub: 'Every new admin account is reviewed by a Super Admin before access is granted, keeping your fleet data secure.',
        }}
      >
        <div className="flex items-center gap-0">
          {[
            { n: 1, label: 'Create account', active: true },
            { n: 2, label: 'Admin approval', active: false },
            { n: 3, label: 'Access granted', active: false },
          ].map((step, i, arr) => (
            <div key={step.n} className="flex items-center">
              <div className={`flex items-center gap-1.5 text-[12px] ${step.active ? 'font-semibold text-white' : 'text-white/60'}`}>
                <span
                  className="flex size-[22px] items-center justify-center rounded-full text-[11px] font-bold"
                  style={step.active ? { background: '#fff', color: 'var(--color-blue-600)' } : { background: 'rgba(255,255,255,.2)' }}
                >
                  {step.n}
                </span>
                <span>{step.label}</span>
              </div>
              {i < arr.length - 1 && <span className="mx-2 h-px w-6 bg-white/20" />}
            </div>
          ))}
        </div>
      </AuthBrandPanel>

      <AuthRight>
        <AuthCard maxWidth={480}>
          <div className="mb-5 flex justify-center">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-blue-400)] text-[18px] font-bold text-white">
              T
            </div>
          </div>
          <div className="mb-1.5 text-center text-xl font-bold">Create admin account</div>
          <div className="mb-6 text-center text-[13px] text-[var(--color-text-muted)]">
            Fill in your details to request access
          </div>

          {apiError && (
            <div className="mb-3.5 flex items-center gap-2 rounded-lg border border-[var(--color-rose-100)] bg-[var(--color-rose-50)] px-3 py-2.5 text-[12px] text-[var(--color-rose-600)]">
              <AlertCircle className="size-4 shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="firstName">
                  First name <span className="text-[var(--color-rose-400)]">*</span>
                </Label>
                <input
                  id="firstName"
                  placeholder="Kiran"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-2.5 py-2 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('firstName')}
                />
                {errors.firstName && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">
                  Last name <span className="text-[var(--color-rose-400)]">*</span>
                </Label>
                <input
                  id="lastName"
                  placeholder="Arumugam"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white px-2.5 py-2 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('lastName')}
                />
                {errors.lastName && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="mb-3">
              <Label htmlFor="regEmail">
                Work email <span className="text-[var(--color-rose-400)]">*</span>
              </Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                <input
                  id="regEmail"
                  type="email"
                  placeholder="you@trofi.in"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-8 pr-3 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('email')}
                />
              </div>
              {errors.email && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
              <Label htmlFor="phone">Phone number</Label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-8 pr-3 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                  {...register('phone')}
                />
              </div>
            </div>

            <div className="mb-3">
              <Label>
                Role requested <span className="text-[var(--color-rose-400)]">*</span>
              </Label>
              <Select onValueChange={(v) => setValue('role', v, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role…" />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && <p className="mt-1 text-[11px] text-[var(--color-rose-600)]">{errors.role.message}</p>}
            </div>

            <div className="mb-1 grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="regPass">
                  Password <span className="text-[var(--color-rose-400)]">*</span>
                </Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                  <input
                    id="regPass"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Min 8 characters"
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
              </div>
              <div>
                <Label htmlFor="confirmPass">
                  Confirm password <span className="text-[var(--color-rose-400)]">*</span>
                </Label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-faint)]" />
                  <input
                    id="confirmPass"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Repeat password"
                    className="w-full rounded-lg border border-[var(--color-border)] bg-white py-2 pl-8 pr-9 text-[13px] outline-none focus:border-[var(--color-teal-400)]"
                    {...register('confirmPassword')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-faint)]"
                  >
                    {showConfirm ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                  </button>
                </div>
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="mb-2 text-[11px] text-[var(--color-rose-600)]">{errors.confirmPassword.message}</p>
            )}

            <PasswordStrengthMeter value={passwordValue} />

            <div className="mb-5 flex items-start gap-2">
              <Checkbox
                id="agree"
                className="mt-0.5"
                onCheckedChange={(v) => setValue('agree', (v === true) as true, { shouldValidate: true })}
              />
              <label htmlFor="agree" className="cursor-pointer text-[12px] leading-relaxed text-[var(--color-text-secondary)]">
                I agree to Trofi's <a className="text-[var(--color-teal-400)] hover:underline" href="#">Terms of Service</a> and{' '}
                <a className="text-[var(--color-teal-400)] hover:underline" href="#">Privacy Policy</a>
              </label>
            </div>
            {errors.agree && <p className="-mt-3 mb-3 text-[11px] text-[var(--color-rose-600)]">{errors.agree.message}</p>}

            <Button
              type="submit"
              className="w-full justify-center py-2.5"
              style={{ background: 'var(--color-blue-400)', borderColor: 'var(--color-blue-400)', color: '#fff' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting…' : 'Request access'}
              {!isSubmitting && <Send className="size-3.5" />}
            </Button>
          </form>

          <div className="my-4 flex items-center gap-2.5 text-[12px] text-[var(--color-text-faint)]">
            <span className="h-px flex-1 bg-[var(--color-border-soft)]" />
            <span>already have an account?</span>
            <span className="h-px flex-1 bg-[var(--color-border-soft)]" />
          </div>
          <Link to="/login">
            <Button variant="outline" className="w-full justify-center py-2.5">
              Back to sign in
            </Button>
          </Link>
        </AuthCard>
      </AuthRight>
    </>
  )
}
