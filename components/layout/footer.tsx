'use client'

import { EnvelopeSimple, MapPin } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { useLanguage } from '@/components/providers/language-provider'
import { WAIRA } from '@/lib/config'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.75S5.53 3.23 6.5 3.23s1.75.79 1.75 1.75S7.47 6.73 6.5 6.73zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V19h-3V8h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const socials = [
  { Icon: LinkedInIcon, href: WAIRA.social.linkedin, label: 'LinkedIn' },
  { Icon: FacebookIcon, href: WAIRA.social.facebook, label: 'Facebook' },
  { Icon: ({ className }: { className?: string }) => <EnvelopeSimple weight="bold" className={className} />, href: WAIRA.mailtoUrl, label: 'Email' },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative" style={{ background: 'oklch(0.07 0.02 240)', borderTop: '1px solid oklch(0.65 0.22 230 / 0.12)' }}>
      {/* Top circuit line */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.4), oklch(0.78 0.18 195 / 0.4), transparent)' }} aria-hidden />

      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin weight="bold" className="size-4 shrink-0" style={{ color: 'oklch(0.65 0.22 230)' }} aria-hidden />
              {t.contact.info.location}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-md transition-all duration-200"
                  style={{ border: '1px solid oklch(1 0 0 / 0.1)', color: 'oklch(0.55 0.02 230)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
                    el.style.color = 'oklch(0.65 0.22 230)'
                    el.style.boxShadow = '0 0 12px oklch(0.65 0.22 230 / 0.2)'
                    el.style.background = 'oklch(0.65 0.22 230 / 0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(1 0 0 / 0.1)'
                    el.style.color = 'oklch(0.55 0.02 230)'
                    el.style.boxShadow = 'none'
                    el.style.background = 'transparent'
                  }}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {t.footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'oklch(0.65 0.22 230)' }}>
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-all duration-150 hover:text-foreground hover:pl-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 pt-6 text-sm text-muted-foreground/60 sm:flex-row"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.06)' }}
        >
          <p className="font-mono text-xs">
            © {year} Waira Solutions. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a href="/privacidad" className="transition-colors hover:text-foreground">
              Privacidad
            </a>
            <span style={{ color: 'oklch(0.65 0.22 230 / 0.4)' }}>|</span>
            <a href="/terminos" className="transition-colors hover:text-foreground">
              Términos
            </a>
            <span style={{ color: 'oklch(0.65 0.22 230 / 0.4)' }}>|</span>
            <p className="flex items-center gap-1.5">
              {t.footer.madeIn}
              <span className="animate-pulse-glow" style={{ color: 'oklch(0.65 0.22 230)' }} aria-hidden>◆</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
