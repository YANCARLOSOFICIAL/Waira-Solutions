'use client'

import { motion } from 'framer-motion'
import { Blocks, Bot, Cloudy, Plug, Smartphone, Workflow, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const meta: { icon: LucideIcon; span: string; featured?: boolean }[] = [
  { icon: Bot, span: 'sm:col-span-2 lg:col-span-3', featured: true },
  { icon: Blocks, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: Smartphone, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: Plug, span: 'sm:col-span-2 lg:col-span-3', featured: true },
  { icon: Cloudy, span: 'sm:col-span-1 lg:col-span-2' },
  { icon: Workflow, span: 'sm:col-span-1 lg:col-span-3' },
]

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="soluciones" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 mask-fade-b" aria-hidden />
      <Container className="relative">
        <SectionHeading eyebrow={t.solutions.eyebrow} title={t.solutions.title} subtitle={t.solutions.subtitle} />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.solutions.items.map((item, i) => {
            const { icon: Icon, span, featured } = meta[i % meta.length]
            return (
              <StaggerItem
                key={item.title}
                as="article"
                className={cn(span)}
              >
                <SpotlightCard
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-brand/40',
                    featured ? 'min-h-52' : 'min-h-44',
                  )}
                >
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="relative flex size-11 items-center justify-center rounded-xl border border-border bg-background/60 text-brand transition-colors group-hover:border-brand/40 group-hover:bg-brand/10">
                      <Icon className="size-5" />
                    </span>
                    <div className="relative mt-6">
                      <h3 className={cn('font-heading font-semibold', featured ? 'text-xl' : 'text-lg')}>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                    {featured && (
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute right-4 -bottom-4 size-32 rounded-full opacity-[0.04]"
                        style={{ background: 'radial-gradient(circle, var(--brand), transparent 60%)' }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </div>
                </SpotlightCard>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>
    </section>
  )
}
