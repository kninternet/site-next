import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/landing/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'KN Internet | Fibra Óptica Rápida no RJ',
  description:
    'Internet fibra óptica com instalação rápida, suporte local e atendimento de verdade. Consulte a cobertura no seu bairro.',
  keywords: [
    'internet fibra',
    'fibra óptica',
    'provedor internet RJ',
    'KN Internet',
    'internet Rio de Janeiro',
    'internet São Gonçalo',
    'internet Queimados',
    'internet Duque de Caxias',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'KN Internet | Fibra Óptica no RJ',
    description: 'Internet fibra óptica com instalação rápida e suporte local. Consulte a cobertura no seu bairro.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c1e3d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-white">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}