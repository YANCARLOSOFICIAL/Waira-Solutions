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

export function WhyWaira() {
  const { t } = useLanguage()

  return (
    <section className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />
      <Container>
        <SectionHeading
          eyebrow={t.whyWaira.eyebrow}
          title={t.whyWaira.title}
          subtitle={t.whyWaira.subtitle}
        />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {t.whyWaira.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Code
            return (
              <StaggerItem key={item.title} as="article">
                <div className="wind-hover group flex h-full flex-col bg-card p-7">
                  <div className="flex items-start justify-between">
                    <Icon
                      weight="light"
                      className="size-7 text-muted-foreground transition-colors duration-500 group-hover:text-brand"
                      aria-hidden
                    />
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-bold tracking-tight">{item.title}</h3>
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
