import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ error: "Unauthorized" })

  // safe to return private data
  return res.status(200).json({ ok: true, user: session.user })
}
