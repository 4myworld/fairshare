export default function AdminHome() {
  return (
    <main className="p-6 space-y-2">
      <h1 className="text-2xl font-semibold">Admin</h1>
      <p>Only admins can see this (guarded by middleware).</p>
    </main>
  )
}
\