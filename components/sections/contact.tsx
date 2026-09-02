'use client'

import { Clock, EnvelopeSimple, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/animations/reveal'
import { ContactForm } from '@/components/forms/contact-form'
import { useLanguage } from '@/components/providers/language-provider'
import { getWhatsAppUrl } from '@/lib/config'

export function Contact() {
  const { t } = useLanguage()
  const contact = t.contact
  const info = contact.info

  const items = [
    { icon: EnvelopeSimple, label: info.emailLabel, value: info.email, href: `mailto:${info.email}` },
    { icon: WhatsappLogo, label: info.whatsappLabel, value: info.whatsapp, href: getWhatsAppUrl() },
    { icon: MapPin, label: info.locationLabel, value: info.location, href: undefined },
    { icon: Clock, label: info.hoursLabel, value: info.hours, href: undefined },
  ]

  return (
    <section id="contacto" className="relative bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="flex flex-col divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
            {items.map((item) => {
              const Inner = (
                <>
                  <item.icon
                    weight="light"
                    className="size-6 shrink-0 text-muted-foreground transition-colors duration-500 group-hover:text-brand"
                    aria-hidden
                  />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      {item.label}
                    </span>
                    <span className="mt-1 font-medium text-foreground/90">{item.value}</span>
                  </span>
                </>
              )
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="wind-hover group flex items-center gap-4 bg-card p-5 hover:bg-white/[0.03]"
                >
                  {Inner}
                </a>
              ) : (
                <div key={item.label} className="group flex items-center gap-4 bg-card p-5">
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
