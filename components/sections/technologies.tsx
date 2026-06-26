'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const groupColors = [
  'from-brand/10 to-brand/5',
  'from-brand-2/10 to-brand-2/5',
  'from-info/10 to-info/5',
  'from-warning/10 to-warning/5',
]

const dotColors = ['bg-brand', 'bg-brand-2', 'bg-info', 'bg-warning']

export function Technologies() {
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} subtitle={t.tech.subtitle} />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.tech.groups.map((group, gi) => (
            <StaggerItem
              key={group.name}
              as="article"
              className="h-full"
            >
              <SpotlightCard className="flex h-full flex-col rounded-2xl border border-border bg-card/40 overflow-hidden">
                <div className={`bg-gradient-to-br ${groupColors[gi % groupColors.length]} px-6 pt-6 pb-4`}>
                  <h3 className="flex items-center gap-2 font-heading text-base font-semibold">
                    <span className={`size-2 rounded-full ${dotColors[gi % dotColors.length]}`} aria-hidden />
                    {group.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2 px-6 pb-6 pt-4">
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.05 + ii * 0.04 }}
                      whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
                    >
                      <span className="inline-block cursor-default rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-brand/50 hover:bg-brand/5 hover:text-foreground">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Floating tech marquee row */}
        <div className="mt-14 overflow-hidden mask-fade-x" aria-hidden>
          <div className="flex w-max animate-marquee items-center gap-8 [--marquee-duration:50s]">
            {[
              ...t.tech.groups.flatMap((g) => g.items),
              ...t.tech.groups.flatMap((g) => g.items),
            ].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="rounded-full border border-border/40 bg-card/30 px-4 py-1.5 text-sm whitespace-nowrap text-muted-foreground/50"
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
