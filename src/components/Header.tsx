export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl p-4 flex items-center justify-between">
        <a href="/" className="font-semibold">FairShare</a>
        <nav className="text-sm space-x-4">
          <a href="/(legal)/terms">Terms</a>
          <a href="/(legal)/privacy">Privacy</a>
          <a href="/(legal)/returns">Returns</a>
        </nav>
      </div>
    </header>
  )
}
