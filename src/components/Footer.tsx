export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-5xl p-6 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} FairShare. As an Amazon Associate, we earn from qualifying purchases.</p>
      </div>
    </footer>
  )
}
