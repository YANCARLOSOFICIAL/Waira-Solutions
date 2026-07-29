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
    <section className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/[0.02] via-transparent to-brand/[0.02]" aria-hidden />
      <Container>
        <SectionHeading
          eyebrow={t.whyWaira.eyebrow}
          title={t.whyWaira.title}
          subtitle={t.whyWaira.subtitle}
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.whyWaira.items.map((item) => {
            const Icon = icons[item.icon] ?? Code
            return (
              <StaggerItem key={item.title} as="article">
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon weight="bold" className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-medium tracking-tight">{item.title}</h3>
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
