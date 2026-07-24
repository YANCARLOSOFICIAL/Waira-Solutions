'use client'

import {
  ArrowRight,
  Check,
  Cloud,
  Code,
  Compass,
  Brain,
  ChartLineUp,
  FlowArrow,
  type Icon,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const icons: Record<string, Icon> = {
  Code2: Code,
  BrainCircuit: Brain,
  Workflow: FlowArrow,
  Cloud,
  LineChart: ChartLineUp,
  Compass,
}

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
    <section id="servicios" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? Code
            const { col, featured } = SPANS[i] ?? { col: 'lg:col-span-2', featured: false }

            return (
              <StaggerItem key={service.title} as="article" className={cn('sm:col-span-1', col)}>
                <div className="border-border flex h-full flex-col rounded-xl border bg-card p-7">
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        'flex shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground',
                        featured ? 'size-12' : 'size-10',
                      )}
                    >
                      <Icon weight="bold" className={cn(featured ? 'size-6' : 'size-5')} />
                    </span>
                    <div>
                      <h3 className={cn('font-heading font-medium tracking-tight', featured ? 'text-xl' : 'text-lg')}>
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <Check weight="bold" className="text-brand size-3.5 shrink-0" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <div className="mt-10 flex justify-center">
          <Button render={<a href="#contacto" />} variant="outline" className="group h-11 px-7 text-sm">
            {t.services.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
