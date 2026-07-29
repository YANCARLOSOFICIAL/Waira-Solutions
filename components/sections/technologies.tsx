'use client'

import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const groupStyles = [
  { tag: 'bg-pastel-blue-bg text-pastel-blue-fg', dot: 'bg-pastel-blue-fg' },
  { tag: 'bg-pastel-coral-bg text-pastel-coral-fg', dot: 'bg-pastel-coral-fg' },
  { tag: 'bg-pastel-green-bg text-pastel-green-fg', dot: 'bg-pastel-green-fg' },
  { tag: 'bg-pastel-yellow-bg text-pastel-yellow-fg', dot: 'bg-pastel-yellow-fg' },
]

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.groups.map((group, gi) => {
            const style = groupStyles[gi % groupStyles.length]
            return (
              <StaggerItem key={group.name} as="article" className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <div className="px-6 pt-6 pb-4">
                    <h3 className="flex items-center gap-2 font-heading text-base font-medium">
                      <span className={`size-2 rounded-full ${style.dot}`} aria-hidden />
                      {group.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {group.items.map((item) => (
                      <span key={item} className={`${style.tag} inline-block rounded-full px-3 py-1.5 text-sm`}>
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
                className="rounded-full border border-border px-4 py-1.5 text-sm whitespace-nowrap text-muted-foreground/60"
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
