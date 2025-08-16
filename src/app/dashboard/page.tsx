import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation"
import { isAdmin, isVendor, type Role } from "@/lib/roles"

export const metadata = { title: "Dashboard" }

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/api/auth/signin?callbackUrl=/dashboard")

  const role: Role = session.role
  const name = session.user?.name ?? session.user?.email ?? "User"

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Welcome, {name}</h1>
        <p className="text-sm text-gray-500">Role: {role}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="My Orders">
          <p>View recent orders and status.</p>
        </Card>
        <Card title="Account">
          <p>Update profile, password, and preferences.</p>
        </Card>
      </section>

      {(isVendor(role) || isAdmin(role)) && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Store Management</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card href="/vendor/products" title="Products">
              <p>Create, edit, and manage product inventory.</p>
            </Card>
            <Card href="/vendor/orders" title="Orders">
              <p>Process, fulfill, and refund orders.</p>
            </Card>
            <Card href="/vendor/analytics" title="Analytics">
              <p>Sales, conversion, and traffic insights.</p>
            </Card>
          </div>
        </section>
      )}
    </main>
  )
}

function Card({
  title,
  children,
  href,
}: {
  title: string
  children: React.ReactNode
  href?: string
}) {
  const Wrapper = (href ? "a" : "div") as keyof JSX.IntrinsicElements
 // okay for intrinsic string elements
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="block rounded-2xl border border-gray-200 p-4 hover:shadow-sm transition"
    >
      <div className="text-base font-medium">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{children}</div>
    </Wrapper>
  )
}
