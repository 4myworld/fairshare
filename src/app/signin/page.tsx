"use client"

import { signIn } from "next-auth/react"

export default function SignInPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600">Use your GitHub account to continue.</p>
      <button
        onClick={() => signIn("github")}
        className="mt-6 rounded-lg border px-4 py-2"
      >
        Continue with GitHub
      </button>
    </main>
  )
}
