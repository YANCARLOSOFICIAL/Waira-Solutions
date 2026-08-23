'use client'

import { Compass, Heart, Rocket, ShieldCheck, Target } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const valueIcons = [Rocket, ShieldCheck, Heart, Target]

const VALUE_COLORS = [
  { bg: 'oklch(0.18 0.06 230 / 0.6)', fg: 'oklch(0.65 0.22 230)', glow: 'oklch(0.65 0.22 230 / 0.25)' },
  { bg: 'oklch(0.16 0.06 195 / 0.6)', fg: 'oklch(0.78 0.18 195)', glow: 'oklch(0.78 0.18 195 / 0.25)' },
  { bg: 'oklch(0.16 0.06 280 / 0.5)', fg: 'oklch(0.65 0.18 280)', glow: 'oklch(0.65 0.18 280 / 0.2)' },
  { bg: 'oklch(0.16 0.06 150 / 0.5)', fg: 'oklch(0.72 0.18 150)', glow: 'oklch(0.72 0.18 150 / 0.2)' },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="relative scroll-mt-20 py-24 sm:py-28">
      {/* Section separator */}
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      {/* Bg glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.04) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left col */}
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
              {t.about.title}
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {t.about.description}
            </p>

            {/* Mission / Vision panels */}
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-6 transition-all duration-300"
                style={{
                  background: 'oklch(0.12 0.025 240 / 0.8)',
                  border: '1px solid oklch(0.65 0.22 230 / 0.12)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
                  el.style.boxShadow = '0 0 20px oklch(0.65 0.22 230 / 0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(0.65 0.22 230 / 0.12)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 inset-y-0 w-0.5 rounded-full" style={{ background: 'linear-gradient(to bottom, oklch(0.65 0.22 230 / 0.8), transparent)' }} aria-hidden />
                <span className="flex size-9 items-center justify-center rounded-lg" style={{ background: 'oklch(0.18 0.06 230 / 0.6)' }}>
                  <Target weight="bold" className="size-4.5" style={{ color: 'oklch(0.65 0.22 230)' }} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold">{t.about.mission.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.mission.text}</p>
                </div>
              </div>

              <div
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-6 transition-all duration-300"
                style={{
                  background: 'oklch(0.12 0.025 240 / 0.8)',
                  border: '1px solid oklch(0.78 0.18 195 / 0.12)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(0.78 0.18 195 / 0.35)'
                  el.style.boxShadow = '0 0 20px oklch(0.78 0.18 195 / 0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(0.78 0.18 195 / 0.12)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="absolute left-0 inset-y-0 w-0.5 rounded-full" style={{ background: 'linear-gradient(to bottom, oklch(0.78 0.18 195 / 0.8), transparent)' }} aria-hidden />
                <span className="flex size-9 items-center justify-center rounded-lg" style={{ background: 'oklch(0.16 0.06 195 / 0.6)' }}>
                  <Compass weight="bold" className="size-4.5" style={{ color: 'oklch(0.78 0.18 195)' }} />
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
                  <div
                    className="group flex h-full flex-col rounded-xl p-6 transition-all duration-300 cursor-default"
                    style={{
                      background: 'oklch(0.12 0.022 240 / 0.8)',
                      border: '1px solid oklch(1 0 0 / 0.07)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = `${colors.fg.replace(')', ' / 0.3)')}`
                      el.style.boxShadow = `0 0 20px ${colors.glow}`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'oklch(1 0 0 / 0.07)'
                      el.style.boxShadow = 'none'
                    }}
                  >
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
      </Container>
    </section>
  )
}
