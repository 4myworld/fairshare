import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthTest() {
  const { data: session, status } = useSession()
  if (status === "loading") return <p>Loading...</p>

  return (
    <main style={{ padding: 24 }}>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <img src={session.user?.image ?? ""} alt="" width={48} height={48} style={{ borderRadius: 24 }} />
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
