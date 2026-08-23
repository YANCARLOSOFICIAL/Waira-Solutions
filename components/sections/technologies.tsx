'use client'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const GROUP_ACCENTS = [
  { dot: 'oklch(0.65 0.22 230)', tagBg: 'oklch(0.65 0.22 230 / 0.08)', tagBorder: 'oklch(0.65 0.22 230 / 0.2)', tagFg: 'oklch(0.72 0.18 230)' },
  { dot: 'oklch(0.78 0.18 195)', tagBg: 'oklch(0.78 0.18 195 / 0.08)', tagBorder: 'oklch(0.78 0.18 195 / 0.2)', tagFg: 'oklch(0.78 0.18 195)' },
  { dot: 'oklch(0.72 0.18 150)', tagBg: 'oklch(0.72 0.18 150 / 0.08)', tagBorder: 'oklch(0.72 0.18 150 / 0.2)', tagFg: 'oklch(0.72 0.18 150)' },
  { dot: 'oklch(0.78 0.18 75)', tagBg: 'oklch(0.78 0.18 75 / 0.08)', tagBorder: 'oklch(0.78 0.18 75 / 0.2)', tagFg: 'oklch(0.78 0.18 75)' },
]

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.groups.map((group, gi) => {
            const accent = GROUP_ACCENTS[gi % GROUP_ACCENTS.length]
            return (
              <StaggerItem key={group.name} as="article" className="h-full">
                <div
                  className="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300"
                  style={{
                    background: 'oklch(0.12 0.022 240 / 0.8)',
                    border: '1px solid oklch(1 0 0 / 0.07)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `${accent.dot.replace(')', ' / 0.3)')}`
                    el.style.boxShadow = `0 0 20px ${accent.dot.replace(')', ' / 0.1)')}`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(1 0 0 / 0.07)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div className="px-6 pt-6 pb-4">
                    <h3 className="flex items-center gap-2 font-heading text-base font-bold">
                      <span
                        className="size-2 rounded-full animate-pulse-glow"
                        style={{ background: accent.dot }}
                        aria-hidden
                      />
                      {group.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-md px-3 py-1.5 font-mono text-xs"
                        style={{ background: accent.tagBg, border: `1px solid ${accent.tagBorder}`, color: accent.tagFg }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <div className="mt-14 overflow-hidden mask-fade-x" aria-hidden>
          <div className="flex w-max animate-marquee items-center gap-8 [--marquee-duration:50s]">
            {[
              ...t.tech.groups.flatMap((g) => g.items),
              ...t.tech.groups.flatMap((g) => g.items),
            ].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="rounded-md px-4 py-1.5 font-mono text-xs whitespace-nowrap"
                style={{ border: '1px solid oklch(0.65 0.22 230 / 0.18)', color: 'oklch(0.65 0.22 230 / 0.55)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
