'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const images = [
  '/cases/retail-ai.png',
  '/cases/logistics-automation.png',
  '/cases/health-assistant.png',
]

export function Cases() {
  const { t } = useLanguage()

  return (
    <section id="casos" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />

        <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.cases.items.map((item, i) => (
            <StaggerItem key={item.title} as="article" className="h-full">
              <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_-12px_oklch(0.82_0.13_196/0.2)]">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={images[i] ?? images[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" aria-hidden />

                  {/* Tag */}
                  <span className="absolute top-3 left-3 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {item.tag}
                  </span>

                  {/* Arrow button on hover */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden
                  >
                    <ArrowUpRight className="size-4" />
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>

                  {/* KPIs */}
                  <dl className="mt-5 grid grid-cols-2 gap-3">
                    {item.kpis.map((kpi) => (
                      <div key={kpi.label} className="rounded-xl border border-border/60 bg-background/40 px-4 py-3">
                        <dt className="sr-only">{kpi.label}</dt>
                        <dd className="font-heading text-2xl font-semibold tracking-tight text-brand">
                          {kpi.value}
                        </dd>
                        <p className="mt-0.5 text-xs text-muted-foreground">{kpi.label}</p>
                      </div>
                    ))}
                  </dl>

                  {/* Tech stack */}
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
