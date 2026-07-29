import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import { WAIRA } from '@/lib/config'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(WAIRA.url),
  title: {
    default: `${WAIRA.name} | Software, IA y Transformación Digital`,
    template: `%s | ${WAIRA.name}`,
  },
  description:
    'Empresa colombiana de ingeniería de software e inteligencia artificial. Construimos software, IA, automatización y cloud con enfoque de producto. +30 proyectos entregados.',
  keywords: [
    'Waira Solutions',
    'desarrollo de software',
    'inteligencia artificial',
    'automatización',
    'cloud',
    'transformación digital',
    'consultoría tecnológica',
    'ingeniería de software',
    'productos tecnológicos',
    'Colombia',
    'Popayán',
    'Cauca',
  ],
  authors: [{ name: WAIRA.name }],
  creator: WAIRA.name,
  publisher: WAIRA.name,
  alternates: {
    canonical: WAIRA.url,
    languages: { es: WAIRA.url, en: `${WAIRA.url}/en` },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: WAIRA.url,
    siteName: WAIRA.name,
    title: `${WAIRA.name} | Software, IA y Transformación Digital`,
    description:
      'Empresa colombiana de ingeniería de software e inteligencia artificial. Construimos productos, plataformas y soluciones automatizadas que transforman negocios.',
    images: [{ url: `${WAIRA.url}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${WAIRA.name} | Software, IA y Transformación Digital`,
    description:
      'Ingeniería de software, inteligencia artificial y productos tecnológicos con impacto real.',
    images: [`${WAIRA.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#232220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} bg-background`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <WhatsAppButton />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
