'use client'

import { Clock, EnvelopeSimple, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/animations/reveal'
import { ContactForm } from '@/components/forms/contact-form'
import { useLanguage } from '@/components/providers/language-provider'
import { getWhatsAppUrl } from '@/lib/config'

const CONTACT_ITEM_COLORS = [
  { icon: 'oklch(0.65 0.22 230)', bg: 'oklch(0.65 0.22 230 / 0.1)' },
  { icon: 'oklch(0.72 0.18 150)', bg: 'oklch(0.72 0.18 150 / 0.1)' },
  { icon: 'oklch(0.78 0.18 195)', bg: 'oklch(0.78 0.18 195 / 0.1)' },
  { icon: 'oklch(0.78 0.18 75)', bg: 'oklch(0.78 0.18 75 / 0.1)' },
]

export function Contact() {
  const { t } = useLanguage()
  const contact = t.contact
  const info = contact.info

  const items = [
    { icon: EnvelopeSimple, label: info.emailLabel, value: info.email, href: `mailto:${info.email}` },
    {
      icon: WhatsappLogo,
      label: info.whatsappLabel,
      value: info.whatsapp,
      href: getWhatsAppUrl(),
    },
    { icon: MapPin, label: info.locationLabel, value: info.location, href: undefined },
    { icon: Clock, label: info.hoursLabel, value: info.hours, href: undefined },
  ]

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      <Container>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="flex flex-col gap-3">
            {items.map((item, i) => {
              const color = CONTACT_ITEM_COLORS[i % CONTACT_ITEM_COLORS.length]
              const Inner = (
                <>
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: color.bg }}
                  >
                    <item.icon weight="bold" className="size-5" style={{ color: color.icon }} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wide">{item.label}</span>
                    <span className="font-medium text-foreground/90 mt-0.5">{item.value}</span>
                  </span>
                </>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300"
                  style={{
                    background: 'oklch(0.12 0.022 240 / 0.85)',
                    border: '1px solid oklch(1 0 0 / 0.08)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = color.icon.replace(')', ' / 0.35)')
                    el.style.boxShadow = `0 0 20px ${color.icon.replace(')', ' / 0.1)')}`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(1 0 0 / 0.08)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl p-4"
                  style={{
                    background: 'oklch(0.12 0.022 240 / 0.85)',
                    border: '1px solid oklch(1 0 0 / 0.08)',
                  }}
                >
                  {Inner}
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
