import { NavLink } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'
import { NAV_CONFIG } from '@/constants/nav-config'
import { NAV_ACCENT_MAP } from '@/constants/colors'
import { useUiStore } from '@/store/useUiStore'
import { cn } from '@/lib/cn'

export function Sidebar() {
  const { sidebarOpen, closeSidebar } = useUiStore()

  return (
    <>
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={closeSidebar} />
      )}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-[220px] overflow-y-auto border-r border-[var(--color-border)] bg-white transition-transform scrollbar-thin',
          'max-md:-translate-x-full',
          sidebarOpen && 'max-md:translate-x-0',
        )}
      >
        <div className="flex items-center gap-2.5 border-b border-[var(--color-border-soft)] px-4 py-4">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-teal-400)] text-[14px] font-semibold text-white">
            T
          </div>
          <div>
            <div className="text-[15px] font-semibold text-[var(--color-text)]">Trofi</div>
            <span className="-mt-0.5 block text-[10px] text-[var(--color-text-muted)]">Admin Panel</span>
          </div>
        </div>

        {NAV_CONFIG.map((section) => (
          <div key={section.section}>
            <div className="px-2.5 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
              {section.section}
            </div>
            {section.items.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    cn(
                      'mx-1.5 my-0.5 flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text)]',
                      isActive && 'font-medium text-white hover:text-white',
                    )
                  }
                  style={({ isActive }) => (isActive ? { background: NAV_ACCENT_MAP[item.id] } : undefined)}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className="ml-auto rounded-full px-1.5 py-0.5 text-[10px] font-medium"
                      style={{ background: item.badge.bg, color: item.badge.text }}
                    >
                      {item.badge.count}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </div>
        ))}
      </aside>
    </>
  )
}

export { LayoutGrid }
