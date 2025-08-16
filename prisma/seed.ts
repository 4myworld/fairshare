// prisma/seed.ts
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const email = process.env.INIT_ADMIN_EMAIL
  if (!email) throw new Error("Set INIT_ADMIN_EMAIL in .env")

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    console.log(`Login once with ${email}, then re-run seed.`)
    return
  }
  if (user.role === "admin") {
    console.log(`${email} is already admin.`)
    return
  }
  await prisma.user.update({ where: { id: user.id }, data: { role: "admin" } })
  console.log(`Promoted ${email} to admin.`)
}

main().catch(console.error).finally(() => prisma.$disconnect())
