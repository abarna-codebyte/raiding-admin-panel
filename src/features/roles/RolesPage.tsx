import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Plus, UserPlus, Check, X } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '@/layouts/DashboardLayout'
import { Card, CardTitle } from '@/components/ui/card'
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { ROLES, MODULES, ACTIONS } from '@/mocks/data/roles'
import { queryKeys } from '@/lib/query-keys'
import { delay } from '@/lib/format'
import { useUsersStore } from '@/store/useUsersStore'

export default function RolesPage() {
  const { data: roles = [] } = useQuery({ queryKey: queryKeys.roles.list, queryFn: () => delay(ROLES, 300) })
  const [matrix, setMatrix] = useState<Record<string, boolean>>({})

  const users = useUsersStore((s) => s.users)
  const approveUser = useUsersStore((s) => s.approveUser)
  const rejectUser = useUsersStore((s) => s.rejectUser)
  const pending = users.filter((u) => u.status === 'pending')

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <PageHeader title="Roles & permissions" sub="Manage admin roles, module-level access, and account requests" />
        <Button variant="primary"><Plus className="size-3.5" />Add role</Button>
      </div>

      {pending.length > 0 && (
        <Card className="mb-3.5 p-4">
          <CardTitle>
            <UserPlus className="size-4" style={{ color: 'var(--color-blue-400)' }} />
            Pending account requests
            <Badge status="Pending" className="ml-1">{pending.length}</Badge>
          </CardTitle>
          <Table>
            <THead>
              <TR><TH>Name</TH><TH>Email</TH><TH>Role requested</TH><TH>Actions</TH></TR>
            </THead>
            <TBody>
              {pending.map((u) => (
                <TR key={u.id}>
                  <TD className="font-medium">{u.name}</TD>
                  <TD className="text-[12px] text-[var(--color-text-muted)]">{u.email}</TD>
                  <TD>{u.role}</TD>
                  <TD>
                    <div className="flex gap-1.5">
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          rejectUser(u.id)
                          toast.success(`Rejected ${u.name}`)
                        }}
                      >
                        <X className="size-3.5" />Reject
                      </Button>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          approveUser(u.id)
                          toast.success(`${u.name} approved — they can now sign in`)
                        }}
                      >
                        <Check className="size-3.5" />Approve
                      </Button>
                    </div>
                  </TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </Card>
      )}

      <Card className="mb-3.5 p-4">
        <Table>
          <THead>
            <TR><TH>Role</TH><TH>Users</TH><TH>Permission summary</TH><TH>Actions</TH></TR>
          </THead>
          <TBody>
            {roles.map((r) => (
              <TR key={r.id}>
                <TD className="font-medium">{r.name}</TD>
                <TD>{r.usersCount}</TD>
                <TD className="text-[12px] text-[var(--color-text-muted)]">{r.permissionSummary}</TD>
                <TD>
                  <div className="flex gap-1.5">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="danger">Delete</Button>
                  </div>
                </TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>

      <Card className="p-4">
        <CardTitle>Permission matrix — Operations Manager</CardTitle>
        <Table>
          <THead>
            <TR>
              <TH>Module</TH>
              {ACTIONS.map((a) => <TH key={a} className="text-center">{a}</TH>)}
            </TR>
          </THead>
          <TBody>
            {MODULES.map((m) => (
              <TR key={m}>
                <TD>{m}</TD>
                {ACTIONS.map((a) => {
                  const key = `${m}-${a}`
                  return (
                    <TD key={key} className="text-center">
                      <Checkbox
                        checked={!!matrix[key]}
                        onCheckedChange={(v) => setMatrix((prev) => ({ ...prev, [key]: v === true }))}
                      />
                    </TD>
                  )
                })}
              </TR>
            ))}
          </TBody>
        </Table>
      </Card>
    </div>
  )
}
