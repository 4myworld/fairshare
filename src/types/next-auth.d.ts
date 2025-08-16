// src/types/next-auth.d.ts

import "next-auth"
import "next-auth/jwt"
import "next-auth/adapters"
import type { DefaultSession } from "next-auth"

// Single source of truth for role values
type AppRole = "buyer" | "vendor" | "admin"

declare module "next-auth" {
  interface User {
    role?: AppRole
  }

  interface Session extends DefaultSession {
    /** Role copied from the JWT */
    role: AppRole
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    role?: AppRole
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    /** Role persisted on the token */
    role?: AppRole
  }
}
