import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Sidebar />
      <div className="min-h-screen transition-[margin] md:ml-[220px]">
        <Topbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-5">
      <div className="mb-1 text-xl font-semibold text-[var(--color-text)]">{title}</div>
      <div className="text-[13px] text-[var(--color-text-muted)]">{sub}</div>
    </div>
  )
}
