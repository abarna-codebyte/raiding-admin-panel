import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Menu, Search, Bell, Download, LogOut, ChevronDown } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { useUiStore } from '@/store/useUiStore'
import { useAuthStore } from '@/store/useAuthStore'
import { initials } from '@/lib/format'

export function Topbar() {
  const navigate = useNavigate()
  const { toggleSidebar } = useUiStore()
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  const handleLogout = () => {
    logout()
    toast.success('Signed out')
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-[var(--color-border)] bg-white px-6">
      <button
        onClick={toggleSidebar}
        className="flex size-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] md:hidden"
      >
        <Menu className="size-4" />
      </button>

      <div className="relative max-w-[340px] flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input
          type="text"
          placeholder="Search rides, customers, partners…"
          className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] py-1.5 pl-8 pr-3 text-[13px] outline-none focus:border-[var(--color-teal-400)] focus:bg-white"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="relative flex size-8 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)]">
          <Bell className="size-4" />
          <span className="absolute right-1 top-1 size-1.5 rounded-full border border-white bg-[var(--color-rose-400)]" />
        </button>
        <button className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--color-teal-400)] bg-[var(--color-teal-400)] px-2.5 text-[12px] font-medium text-white hover:bg-[var(--color-teal-600)]">
          <Download className="size-3.5" />
          Download
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-lg py-1 pl-1 pr-1.5 outline-none hover:bg-[var(--color-surface-alt)]">
              <Avatar size={32}>{initials(user?.name ?? 'Super Admin')}</Avatar>
              <div className="text-left text-[12px] leading-tight text-[var(--color-text-secondary)]">
                <div className="font-medium">{user?.role ?? 'Super Admin'}</div>
                <div className="text-[var(--color-text-muted)]">{user?.scope ?? 'All cities'}</div>
              </div>
              <ChevronDown className="size-3.5 text-[var(--color-text-faint)]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="font-medium text-[var(--color-text)]">{user?.name ?? 'Super Admin'}</div>
              <div className="text-[var(--color-text-muted)]">{user?.email ?? 'admin@trofi.in'}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={handleLogout} className="text-[var(--color-rose-600)]">
              <LogOut className="size-3.5" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}