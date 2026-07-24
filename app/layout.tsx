import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { LanguageProvider } from '@/components/providers/language-provider'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

const siteUrl = 'https://wairasolutions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Waira Solutions | Software, IA y Transformación Digital',
    template: '%s | Waira Solutions',
  },
  description:
    'Empresa colombiana de tecnología. Desarrollamos software, inteligencia artificial, automatización y soluciones cloud para hacer crecer tu negocio.',
  keywords: [
    'Waira Solutions',
    'desarrollo de software',
    'inteligencia artificial',
    'automatización',
    'cloud',
    'transformación digital',
    'consultoría tecnológica',
    'Colombia',
    'Popayán',
  ],
  authors: [{ name: 'Waira Solutions' }],
  creator: 'Waira Solutions',
  publisher: 'Waira Solutions',
  alternates: {
    canonical: siteUrl,
    languages: { es: siteUrl, en: `${siteUrl}/en` },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Waira Solutions',
    title: 'Waira Solutions | Software, IA y Transformación Digital',
    description:
      'Soluciones tecnológicas innovadoras: software, inteligencia artificial, automatización y cloud para hacer crecer tu negocio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waira Solutions | Software, IA y Transformación Digital',
    description:
      'Soluciones tecnológicas innovadoras: software, IA, automatización y cloud para hacer crecer tu negocio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
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
