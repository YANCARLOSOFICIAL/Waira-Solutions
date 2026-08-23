'use client'

import { Brain, Code, Rocket, Users, type Icon } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const icons: Record<string, Icon> = {
  Code,
  BrainCircuit: Brain,
  Rocket,
  Users,
}

const FEATURE_ACCENTS = [
  { icon: 'oklch(0.65 0.22 230)', bg: 'oklch(0.65 0.22 230 / 0.1)', glow: 'oklch(0.65 0.22 230 / 0.12)' },
  { icon: 'oklch(0.78 0.18 195)', bg: 'oklch(0.78 0.18 195 / 0.1)', glow: 'oklch(0.78 0.18 195 / 0.12)' },
  { icon: 'oklch(0.72 0.18 150)', bg: 'oklch(0.72 0.18 150 / 0.1)', glow: 'oklch(0.72 0.18 150 / 0.12)' },
  { icon: 'oklch(0.78 0.18 75)', bg: 'oklch(0.78 0.18 75 / 0.1)', glow: 'oklch(0.78 0.18 75 / 0.12)' },
]

export function WhyWaira() {
  const { t } = useLanguage()

  return (
    <section className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />
      <Container>
        <SectionHeading
          eyebrow={t.whyWaira.eyebrow}
          title={t.whyWaira.title}
          subtitle={t.whyWaira.subtitle}
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.whyWaira.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Code
            const accent = FEATURE_ACCENTS[i % FEATURE_ACCENTS.length]

            return (
              <StaggerItem key={item.title} as="article">
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-xl p-7 transition-all duration-300 cursor-default"
                  style={{
                    background: 'oklch(0.12 0.022 240 / 0.85)',
                    border: '1px solid oklch(1 0 0 / 0.07)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = accent.icon.replace(')', ' / 0.35)')
                    el.style.boxShadow = `0 0 28px ${accent.glow}, 0 4px 16px oklch(0 0 0 / 0.3)`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(1 0 0 / 0.07)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <span
                    className="flex size-11 items-center justify-center rounded-xl"
                    style={{ background: accent.bg }}
                  >
                    <Icon weight="bold" className="size-6" style={{ color: accent.icon }} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>
    </section>
  )
}
