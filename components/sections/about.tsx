'use client'

import { Compass, Heart, Rocket, ShieldCheck, Target } from '@phosphor-icons/react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const valueIcons = [Rocket, ShieldCheck, Heart, Target]

const VALUE_COLORS = [
  { bg: 'rgba(255,255,255,0.05)', fg: '#fff', glow: 'transparent' },
  { bg: 'rgba(255,255,255,0.05)', fg: '#fff', glow: 'transparent' },
  { bg: 'rgba(255,255,255,0.05)', fg: '#fff', glow: 'transparent' },
  { bg: 'rgba(255,255,255,0.05)', fg: '#fff', glow: 'transparent' },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="relative scroll-mt-20 py-24 sm:py-28 bg-[#050505]">
      {/* Section separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left col */}
          <div className="relative flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-foreground/80 backdrop-blur-md">
              <span className="text-sm">🇨🇴</span> Orgullosamente desde Colombia
            </div>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
              {t.about.title}
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {t.about.description}
            </p>

            {/* Mission / Vision panels */}
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-6 transition-all duration-200 bg-[#111] border border-white/10 hover:border-white/20">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                  <Target weight="bold" className="size-4.5 text-white" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold">{t.about.mission.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.mission.text}</p>
                </div>
              </div>

              <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-6 transition-all duration-200 bg-[#111] border border-white/10 hover:border-white/20">
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                  <Compass weight="bold" className="size-4.5 text-white" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold">{t.about.vision.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.vision.text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right col — values grid */}
          <StaggerGroup className="grid grid-cols-2 gap-4">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length]
              const colors = VALUE_COLORS[i % VALUE_COLORS.length]
              return (
                <StaggerItem key={value.title} as="div">
                  <div className="group flex h-full flex-col rounded-xl p-6 transition-all duration-200 bg-[#111] border border-white/10 hover:border-white/20 cursor-default">
                    <span
                      className="flex size-10 items-center justify-center rounded-lg transition-all duration-300"
                      style={{ background: colors.bg }}
                    >
                      <Icon weight="bold" className="size-5" style={{ color: colors.fg }} />
                    </span>
                    <h4 className="mt-4 font-heading text-base font-bold">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>

        {/* 3D Logo Integration */}
        <div className="mt-20 flex justify-center opacity-80 mix-blend-screen transition-opacity hover:opacity-100">
          <div className="relative size-40 sm:size-64 overflow-hidden rounded-full animate-float">
            <Image
              src="/waira 3d logo.png"
              alt="Waira Solutions 3D Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 160px, 256px"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
