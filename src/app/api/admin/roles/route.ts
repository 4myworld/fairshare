import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { prisma } from "@/lib/prisma"
import type { Role } from "@/lib/roles"

type PromotePayload = {
  email: string
  role: Role
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, role: true },
  })
  return NextResponse.json({ users })
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const body = (await req.json()) as Partial<PromotePayload>
  const { email, role } = body

  if (!email || !role) {
    return NextResponse.json({ error: "email and role are required" }, { status: 400 })
  }

  if (!["buyer", "vendor", "admin"].includes(role)) {
    return NextResponse.json({ error: "invalid role" }, { status: 400 })
  }

  const user = await prisma.user.update({
    where: { email },
    data: { role },
    select: { id: true, email: true, name: true, role: true },
  })

  return NextResponse.json({ user })
}
