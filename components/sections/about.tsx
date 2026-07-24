'use client'

import Image from 'next/image'
import { Compass, Heart, Rocket, ShieldCheck, Target } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const valueIcons = [Rocket, ShieldCheck, Heart, Target]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="border-border relative flex-shrink-0 overflow-hidden rounded-lg border">
                  <Image
                    src="/waira-logo-fb.jpg"
                    alt="Waira Solutions"
                    width={56}
                    height={56}
                    priority
                    className="block"
                  />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xl font-medium tracking-tight leading-tight">
                    Waira Solutions
                  </span>
                  <span className="text-sm text-muted-foreground">Popayán · Cauca · Colombia</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {t.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-lg font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {t.about.description}
              </p>
            </Reveal>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <Reveal direction="right">
                <div className="border-border flex h-full flex-col gap-3 rounded-xl border bg-card p-6">
                  <span className="bg-pastel-blue-bg text-pastel-blue-fg flex size-9 items-center justify-center rounded-lg">
                    <Target weight="bold" className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-medium">{t.about.mission.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.mission.text}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal direction="left">
                <div className="border-border flex h-full flex-col gap-3 rounded-xl border bg-card p-6">
                  <span className="bg-pastel-coral-bg text-pastel-coral-fg flex size-9 items-center justify-center rounded-lg">
                    <Compass weight="bold" className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-medium">{t.about.vision.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.vision.text}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="left" delay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {t.about.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length]
                return (
                  <div key={value.title} className="border-border flex h-full flex-col rounded-xl border bg-card p-6">
                    <span className="bg-secondary flex size-9 items-center justify-center rounded-lg text-foreground">
                      <Icon weight="bold" className="size-4.5" />
                    </span>
                    <h4 className="mt-4 font-heading text-base font-medium">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
