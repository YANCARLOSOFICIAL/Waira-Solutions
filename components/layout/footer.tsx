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

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
)

const socials = [
  { Icon: LinkedInIcon, href: WAIRA.social.linkedin, label: 'LinkedIn' },
  { Icon: InstagramIcon, href: WAIRA.social.instagram, label: 'Instagram' },
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
            <div className="mt-5 flex gap-2">
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
