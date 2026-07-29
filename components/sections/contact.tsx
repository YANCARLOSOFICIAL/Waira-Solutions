'use client'

import { Clock, EnvelopeSimple, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/animations/reveal'
import { ContactForm } from '@/components/forms/contact-form'
import { useLanguage } from '@/components/providers/language-provider'
import { WAIRA, getWhatsAppUrl } from '@/lib/config'

export function Contact() {
  const { t } = useLanguage()
  const contact = t.contact
  const info = contact.info

  const items = [
    { icon: EnvelopeSimple, tag: 'bg-pastel-blue-bg text-pastel-blue-fg', label: info.emailLabel, value: info.email, href: `mailto:${info.email}` },
    {
      icon: WhatsappLogo,
      tag: 'bg-pastel-green-bg text-pastel-green-fg',
      label: info.whatsappLabel,
      value: info.whatsapp,
      href: getWhatsAppUrl(),
    },
    { icon: MapPin, tag: 'bg-pastel-coral-bg text-pastel-coral-fg', label: info.locationLabel, value: info.location, href: undefined },
    { icon: Clock, tag: 'bg-pastel-yellow-bg text-pastel-yellow-fg', label: info.hoursLabel, value: info.hours, href: undefined },
  ]

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/[0.02] via-transparent to-brand/[0.02]" aria-hidden />
      <Container>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="flex flex-col gap-3">
            {items.map((item) => {
              const Inner = (
                <>
                  <span className={`${item.tag} flex size-10 shrink-0 items-center justify-center rounded-lg`}>
                    <item.icon weight="bold" className="size-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </span>
                </>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:bg-muted/40"
                >
                  {Inner}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
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
