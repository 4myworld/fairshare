"use client"
import { useEffect, useState } from "react"

type U = { id: string; email: string | null; name: string | null; role: "buyer" | "vendor" | "admin" }

export default function UsersRolesPage() {
  const [users, setUsers] = useState<U[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/roles").then(r => r.json()).then(d => {
      setUsers(d.users ?? [])
      setLoading(false)
    })
  }, [])

  async function setRole(email: string | null, role: U["role"]) {
    if (!email) return
    await fetch("/api/admin/roles", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, role }) })
    setUsers(prev => prev.map(u => (u.email === email ? { ...u, role } : u)))
  }

  if (loading) return <div className="p-6">Loading…</div>

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Users & Roles</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th className="w-48">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border-b">
              <td className="py-2">{u.name ?? "—"}</td>
              <td>{u.email ?? "—"}</td>
              <td>{u.role}</td>
              <td className="space-x-2">
                <button className="underline" onClick={() => setRole(u.email, "buyer")}>Make Buyer</button>
                <button className="underline" onClick={() => setRole(u.email, "vendor")}>Make Vendor</button>
                <button className="underline" onClick={() => setRole(u.email, "admin")}>Make Admin</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
