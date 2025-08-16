import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
import { asRole } from "./roles" // 👈 normalize string -> union

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      // First sign-in: user has DB role already typed by our module augmentation
      if (user?.role) token.role = user.role

      // If role missing or later changed, fetch by user id and normalize
      if (!token.role && token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true },
        })
        token.role = asRole(dbUser?.role)   // 👈 fix: cast string to AppRole
      }

      if (!token.role) token.role = "buyer"
      return token
    },

    async session({ session, token }) {
      session.role = token.role ?? "buyer"
      return session
    },
  },
}
