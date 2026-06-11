import type { Metadata } from 'next'
import './globals.css'
import { albertSans, montserratAlternates } from './Components/UXUI/Fonts/Fonts'

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
      {/* Inyectamos ambas variables en el body */}
      <body
        className={`${albertSans.variable} ${montserratAlternates.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
