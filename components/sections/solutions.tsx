'use client'

import { CloudArrowUp, DeviceMobile, FlowArrow, Plugs, Robot, SquaresFour, type Icon } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const meta: { icon: Icon; span: string; featured?: boolean }[] = [
  { icon: Robot, span: 'sm:col-span-2 lg:col-span-3', featured: true },
  { icon: SquaresFour, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: DeviceMobile, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: Plugs, span: 'sm:col-span-2 lg:col-span-3', featured: true },
  { icon: CloudArrowUp, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: FlowArrow, span: 'sm:col-span-1 lg:col-span-3' },
]

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="soluciones" className="relative scroll-mt-20 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.solutions.eyebrow} title={t.solutions.title} subtitle={t.solutions.subtitle} />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.solutions.items.map((item, i) => {
            const { icon: Icon, span, featured } = meta[i % meta.length]
            return (
              <StaggerItem key={item.title} as="article" className={cn(span)}>
                <div
                  className={cn(
                    'border-border flex h-full flex-col justify-between rounded-xl border bg-card p-6',
                    featured ? 'min-h-52' : 'min-h-44',
                  )}
                >
                  <span className="border-border bg-background flex size-10 items-center justify-center rounded-lg border">
                    <Icon weight="bold" className="size-5" />
                  </span>
                  <div className="mt-6">
                    <h3 className={cn('font-heading font-medium', featured ? 'text-xl' : 'text-lg')}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>
    </section>
  )
}
