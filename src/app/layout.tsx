import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from "@/components/Providers"

export const metadata: Metadata = {
  title: 'FairShare',
  description: 'Hybrid marketplace + affiliate comparison',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
