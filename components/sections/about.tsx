'use client'

import { Compass, Heart, Rocket, ShieldCheck, Target } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const valueIcons = [Rocket, ShieldCheck, Heart, Target]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/0 via-brand/[0.02] to-brand/0" aria-hidden />
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs font-medium tracking-[0.15em] text-brand uppercase">
              {t.about.eyebrow}
            </span>

            <h2 className="max-w-lg font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
              {t.about.title}
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {t.about.description}
            </p>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-9 items-center justify-center rounded-lg bg-pastel-blue-bg text-pastel-blue-fg">
                  <Target weight="bold" className="size-4.5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-medium">{t.about.mission.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.mission.text}</p>
                </div>
              </div>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="flex size-9 items-center justify-center rounded-lg bg-pastel-coral-bg text-pastel-coral-fg">
                  <Compass weight="bold" className="size-4.5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-medium">{t.about.vision.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.vision.text}</p>
                </div>
              </div>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-2 gap-4">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              return (
                <StaggerItem key={value.title} as="div">
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-foreground">
                      <Icon weight="bold" className="size-4.5" />
                    </span>
                    <h4 className="mt-4 font-heading text-base font-medium">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  )
}
