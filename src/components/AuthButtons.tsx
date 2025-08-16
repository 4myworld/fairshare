// src/components/AuthButtons.tsx
"use client"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButtons() {
  const { data: session, status } = useSession()
  if (status === "loading") return <span className="text-xs">…</span>

  if (session?.user) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <span className="truncate max-w-[12rem]">Hi, {session.user.name ?? session.user.email}</span>
        <Link href="/dashboard" className="underline">Dashboard</Link>
        <button onClick={() => signOut()} className="rounded-md border px-2 py-1">Sign out</button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="rounded-md border px-2 py-1 text-sm">
      Sign in
    </button>
  )
}
