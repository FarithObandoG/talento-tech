import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Renacer Rural | Bienestar, Naturaleza y Reconexión',
  description: 'Descubre experiencias rurales terapéuticas orientadas al bienestar emocional, manejo del estrés y reconexión con la naturaleza en el corazón del Cauca, Colombia.',
  keywords: ['bienestar rural', 'turismo experiencial', 'salud mental', 'retiros antiestrés', 'naturaleza', 'Colombia', 'Cauca', 'wellness', 'mindfulness'],
  authors: [{ name: 'Renacer Rural' }],
  openGraph: {
    title: 'Renacer Rural | Bienestar, Naturaleza y Reconexión',
    description: 'Experiencias rurales transformadoras para tu bienestar emocional',
    type: 'website',
    locale: 'es_CO',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ef' },
    { media: '(prefers-color-scheme: dark)', color: '#2d2922' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
