'use client'

import { Container } from '@/components/ui/container'
import { useLanguage } from '@/components/providers/language-provider'

// [PLACEHOLDER] Illustrative client names — replace with real clients/logos.
const CLIENTS = [
  'Andes Corp',
  'Nimbus',
  'Quanta',
  'Vértice',
  'Helio',
  'Orbita',
  'Cauca Labs',
  'Pacífico',
]

export function Clients() {
  const { t } = useLanguage()

  return (
    <section className="relative border-y border-border/60 py-16">
      <Container>
        <p className="text-center text-sm font-medium text-muted-foreground">{t.clients.title}</p>
        <div className="relative mt-8 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-16 [--marquee-duration:38s]">
            {[...CLIENTS, ...CLIENTS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-heading text-xl font-semibold whitespace-nowrap text-foreground/35 transition-colors hover:text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
