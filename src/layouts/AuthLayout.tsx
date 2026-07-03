import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Outlet />
    </div>
  )
}

export function AuthBrandPanel({
  hero,
  children,
}: {
  hero: { icon: React.ReactNode; title: string; sub: string }
  children?: React.ReactNode
}) {
  return (
    <div
      className="relative hidden w-[420px] shrink-0 flex-col overflow-hidden p-10 text-white md:flex"
      style={{ background: 'linear-gradient(145deg,#085041 0%,#0f6e56 55%,#1d9e75 100%)' }}
    >
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-[300px] rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -left-10 -top-10 size-[180px] rounded-full bg-white/[0.04]" />

      <div className="relative z-10 mb-auto flex items-center gap-2.5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-[16px] font-bold">
          T
        </div>
        <div>
          <div className="text-[17px] font-bold">Trofi</div>
          <div className="text-[11px] text-white/60">Admin Panel</div>
        </div>
      </div>

      <div className="relative z-10 my-auto">
        <div className="mb-5 flex size-16 items-center justify-center rounded-2xl bg-white/[0.12] text-[28px]">
          {hero.icon}
        </div>
        <div className="mb-2.5 text-2xl font-bold leading-snug">{hero.title}</div>
        <div className="text-[13px] leading-relaxed text-white/70">{hero.sub}</div>
      </div>

      <div className="relative z-10 mt-auto pt-7">{children}</div>
    </div>
  )
}

export function AuthRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 items-center justify-center overflow-y-auto bg-[var(--color-bg)] p-8">
      {children}
    </div>
  )
}

export function AuthCard({ children, maxWidth = 420 }: { children: React.ReactNode; maxWidth?: number }) {
  return (
    <div
      className="w-full rounded-2xl bg-white p-9 shadow-[0_4px_24px_rgba(0,0,0,.08)]"
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}
