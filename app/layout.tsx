import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from "@clerk/localizations";

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Events Ally',
  description: 'Events Ally is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
