import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth?.token as any
    const role = token?.role ?? "buyer"

    const { pathname } = req.nextUrl

    // /admin => admin only
    if (pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }

    // /vendor => vendor or admin
    if (pathname.startsWith("/vendor") && !(role === "vendor" || role === "admin")) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url))
    }

    // Everything else continues
    return NextResponse.next()
  },
  {
    pages: { signIn: "/api/auth/signin" },
  }
)

export const config = {
  matcher: [
    "/admin/:path*",
    "/vendor/:path*",
    "/dashboard/:path*", // optional: if you want middleware to ensure auth before dashboard loads
  ],
}
