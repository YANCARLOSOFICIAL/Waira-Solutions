'use client'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { TechLogo } from '@/components/ui/tech-logos'

const GROUP_ACCENTS = [
  { dot: '#fff', border: 'rgba(255,255,255,0.1)' },
  { dot: '#fff', border: 'rgba(255,255,255,0.1)' },
  { dot: '#fff', border: 'rgba(255,255,255,0.1)' },
  { dot: '#fff', border: 'rgba(255,255,255,0.1)' },
]

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="relative scroll-mt-20 py-24 sm:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.groups.map((group, gi) => {
            const accent = GROUP_ACCENTS[gi % GROUP_ACCENTS.length]
            return (
              <StaggerItem key={group.name} as="article" className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-xl transition-all duration-200 bg-[#111] border border-white/10 hover:border-white/20">
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
                  <div className="grid grid-cols-4 gap-3 px-6 pb-6">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="group/tech flex aspect-square items-center justify-center rounded-lg border bg-[#161616] border-white/5 transition-all hover:bg-white/5"
                        title={item}
                      >
                        <TechLogo name={item} size={24} className="opacity-80 transition-opacity group-hover/tech:opacity-100 grayscale group-hover/tech:grayscale-0" />
                      </div>
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
              <div
                key={`${item}-${i}`}
                className="flex items-center justify-center rounded-xl bg-[#111] p-4 border border-white/10"
              >
                <TechLogo name={item} size={36} className="opacity-50 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
