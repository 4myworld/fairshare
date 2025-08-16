import Link from 'next/link'
import AuthButtons from "./AuthButtons"


export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-5xl p-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">FairShare</Link>
        <nav className="text-sm flex items-center gap-4">
          <Link href="/(legal)/terms">Terms</Link>
          <Link href="/(legal)/privacy">Privacy</Link>
          <Link href="/(legal)/returns">Returns</Link>
          <AuthButtons />
        </nav>
      </div>
    </header>
  )
}
