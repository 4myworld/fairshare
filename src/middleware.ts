import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { JWT } from "next-auth/jwt" // augmented with role

export default withAuth(
  function middleware(req) {
    const token = req.nextauth?.token as JWT | undefined
    const role = token?.role ?? "buyer"

    const { pathname } = req.nextUrl

    if (pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }

    if (
      pathname.startsWith("/vendor") &&
      !(role === "vendor" || role === "admin")
    ) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }

    return NextResponse.next()
  },
  { pages: { signIn: "/api/auth/signin" } }
)

export const config = {
  matcher: ["/admin/:path*", "/vendor/:path*"], // add "/dashboard/:path*" if you want
}
