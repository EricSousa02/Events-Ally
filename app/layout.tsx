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
  description: 'Events Ally é uma plataforma de gestão de eventos.',
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
        <body className={`${poppins.variable} dark:bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
