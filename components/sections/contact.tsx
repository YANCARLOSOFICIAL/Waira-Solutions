'use client'

import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/animations/reveal'
import { ContactForm } from '@/components/forms/contact-form'
import { useLanguage } from '@/components/providers/language-provider'

export function Contact() {
  const { t } = useLanguage()
  const contact = t.contact
  const info = contact.info

  const items = [
    { icon: Mail, label: info.emailLabel, value: info.email, href: `mailto:${info.email}` },
    {
      icon: MessageCircle,
      label: info.whatsappLabel,
      value: info.whatsapp,
      href: 'https://wa.me/573000000000',
    },
    { icon: MapPin, label: info.locationLabel, value: info.location, href: undefined },
    { icon: Clock, label: info.hoursLabel, value: info.hours, href: undefined },
  ]

  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="flex flex-col gap-4">
            {items.map((item) => {
              const Inner = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
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
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40 hover:bg-card/80"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-4"
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
