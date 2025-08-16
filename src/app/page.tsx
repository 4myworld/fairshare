import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold tracking-tight">FairShare</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Compare prices and delivery times across trusted stores, or buy directly from approved sellers.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="rounded-lg border px-4 py-2">Open Dashboard</Link>
          <Link href="/(legal)/terms" className="rounded-lg border px-4 py-2">How it works</Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Affiliate Comparison</h2>
          <p className="text-sm text-gray-600">We’ll show prices and delivery estimates from multiple stores.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Marketplace</h2>
          <p className="text-sm text-gray-600">Approved vendors can list and sell directly on FairShare.</p>
        </div>
      </section>
    </main>
  )
}
