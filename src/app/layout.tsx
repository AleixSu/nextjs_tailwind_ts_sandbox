import type { Metadata } from 'next'
import './globals.css'
import { albertSans, montserratAlternates } from './Components/UXUI/Fonts/Fonts'
import Nav from './Components/Layout/Nav/Nav'

export const metadata: Metadata = {
  title: 'Mi Aplicación',
  description: 'Creada con Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body
        className={`${albertSans.variable} ${montserratAlternates.variable} antialiased`}
      >
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  )
}
