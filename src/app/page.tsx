export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold tracking-tight">FairShare</h1>
      <p className="mt-2 text-gray-600">
        Your fair marketplace — compare prices and shop trusted sellers.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Affiliate Comparison</h2>
          <p className="text-sm text-gray-600">We’ll show prices and delivery estimates from multiple stores.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h2 className="font-semibold">Marketplace</h2>
          <p className="text-sm text-gray-600">Approved vendors can list and sell directly on FairShare.</p>
        </div>
      </div>
    </main>
  )
}
