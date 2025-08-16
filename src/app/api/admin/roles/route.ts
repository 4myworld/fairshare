import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || (session as any).role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true } })
  return NextResponse.json({ users })
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || (session as any).role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const { email, role } = await req.json()
  if (!email || !["buyer", "vendor", "admin"].includes(role)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }
  const user = await prisma.user.update({ where: { email }, data: { role } })
  return NextResponse.json({ user })
}
