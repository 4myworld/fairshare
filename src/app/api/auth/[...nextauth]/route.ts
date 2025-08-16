// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "@/lib/authOptions"

// Make sure this endpoint isn't cached
export const dynamic = "force-dynamic"

// Ensure Node runtime (avoid accidental Edge runtime)
export const runtime = "nodejs"

const handler = NextAuth(authOptions)

// IMPORTANT: re-export both methods
export { handler as GET, handler as POST }
