// src/lib/roles.ts

// Union type for all valid roles
export type Role = "buyer" | "vendor" | "admin"

/**
 * Normalize any incoming role value to a valid Role.
 * Falls back to "buyer" if the value is not recognized.
 */
export function asRole(input?: string | null): Role {
  if (input === "admin" || input === "vendor" || input === "buyer") {
    return input
  }
  return "buyer"
}

// Strictly typed convenience checks
export const isAdmin = (r?: Role) => r === "admin"
export const isVendor = (r?: Role) => r === "vendor"
export const isStaff = (r?: Role) => r === "vendor" || r === "admin"
