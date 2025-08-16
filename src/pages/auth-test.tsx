import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function AuthTest() {
  const { data: session, status } = useSession()
  if (status === "loading") return <p>Loading...</p>

  return (
    <main style={{ padding: 24 }}>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <Image 
            src={session.user?.image ?? "/avatar.png"}
  alt=""
  width={48}
  height={48}
  className="rounded-full"
/>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn("github")}>Sign in with GitHub</button>
        </>
      )}
    </main>
  )
}
