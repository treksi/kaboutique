import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KA Boutique | Moda, lencería y belleza',
  description: 'Descubre la colección KA Boutique: lencería, moda femenina, trajes de baño y belleza. Piezas elegidas con amor y envíos a toda Venezuela.',
  generator: 'Next.js',
  icons: { icon: '/ka-boutique-logo.jpeg', apple: '/ka-boutique-logo.jpeg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf8f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
