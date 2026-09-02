'use client'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { TechLogo } from '@/components/ui/tech-logos'

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.groups.map((group) => (
            <StaggerItem key={group.name} as="article" className="h-full">
              <div className="wind-hover flex h-full flex-col bg-card">
                <div className="px-6 pt-6 pb-4">
                  <h3 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    <span className="size-1 rounded-full bg-brand" aria-hidden />
                    {group.name}
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-3 px-6 pb-6">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="group/tech flex aspect-square items-center justify-center rounded-lg border border-white/8 bg-surface-2 transition-colors duration-500 hover:border-white/15"
                      title={item}
                    >
                      <TechLogo
                        name={item}
                        size={24}
                        className="opacity-70 grayscale transition-all duration-500 group-hover/tech:opacity-100 group-hover/tech:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mask-fade-x mt-14 overflow-hidden" aria-hidden>
          <div className="flex w-max animate-marquee items-center gap-8 [--marquee-duration:50s]">
            {[
              ...t.tech.groups.flatMap((g) => g.items),
              ...t.tech.groups.flatMap((g) => g.items),
            ].map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-card p-4"
              >
                <TechLogo
                  name={item}
                  size={36}
                  className="opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
