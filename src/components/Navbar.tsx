// src/components/Navbar.tsx
"use client"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { isAdmin, isVendor } from "@/lib/roles"

export default function Navbar() {
  const { data } = useSession()
  const role = data?.role // <- now typed from our NextAuth augmentation

  return (
    <nav className="flex items-center gap-4 p-3 border-b">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      {(isVendor(role) || isAdmin(role)) && <Link href="/vendor">Vendor</Link>}
      {isAdmin(role) && <Link href="/admin">Admin</Link>}

      <div className="ml-auto flex items-center gap-2">
        {data ? (
          <>
            <span className="text-sm text-gray-600 hidden sm:inline">
              {data.user?.name ?? data.user?.email ?? "Account"}
            </span>
            <button className="underline" onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <button className="underline" onClick={() => signIn("github")}>Sign in</button>
        )}
      </div>
    </nav>
  )
}
