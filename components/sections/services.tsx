'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Check, Cloud, Code2, Compass, LineChart, Workflow, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const icons: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  Workflow,
  Cloud,
  LineChart,
  Compass,
}

// Alternating zig-zag layout: row 0 = 2+1, row 1 = 1+2, row 2 = 2+1
const SPANS = [
  { col: 'lg:col-span-4', featured: true },
  { col: 'lg:col-span-2', featured: false },
  { col: 'lg:col-span-2', featured: false },
  { col: 'lg:col-span-4', featured: true },
  { col: 'lg:col-span-4', featured: true },
  { col: 'lg:col-span-2', featured: false },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2
            const { col, featured } = SPANS[i] ?? { col: 'lg:col-span-2', featured: false }

            return (
              <StaggerItem
                key={service.title}
                as="article"
                className={cn('sm:col-span-1', col)}
              >
                <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_8px_32px_-8px_oklch(0.82_0.13_196/0.2)]">
                  <div className="flex flex-col flex-1">
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          'flex shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-brand group-hover:text-primary-foreground',
                          featured ? 'size-14 bg-secondary' : 'size-12 bg-secondary',
                        )}
                      >
                        <Icon className={cn(featured ? 'size-7' : 'size-5')} />
                      </span>
                      <div>
                        <h3
                          className={cn(
                            'font-heading font-semibold tracking-tight',
                            featured ? 'text-xl' : 'text-lg',
                          )}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {service.text}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                          <Check className="size-3.5 shrink-0 text-brand" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {featured && (
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute right-6 bottom-6 size-24 rounded-full opacity-5"
                        style={{ background: 'radial-gradient(circle, var(--brand), transparent 70%)' }}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </div>
                </SpotlightCard>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button render={<a href="#contacto" />} variant="outline" className="h-11 rounded-full px-7 text-sm">
            {t.services.cta}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
