'use client'

import { ArrowRight, Brain, ChatCircle, CreditCard, Flask, Gear, type Icon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const productIcons: Record<string, Icon> = {
  ChatCircle,
  Brain,
  CreditCard,
  Flask,
  Gear,
}

function CategoryLabel({ children, dim = false }: { children: ReactNode; dim?: boolean }) {
  return (
    <h3
      className={`inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${
        dim ? 'text-muted-foreground/50' : 'text-muted-foreground'
      }`}
    >
      <span className={`h-px w-8 ${dim ? 'bg-white/15' : 'bg-brand'}`} aria-hidden />
      {children}
    </h3>
  )
}

export function Products() {
  const { t } = useLanguage()

  const available = t.products.items.filter((p) => p.badge === 'ready')
  const coming = t.products.items.filter((p) => p.badge === 'coming')

  return (
    <section id="productos" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          subtitle={t.products.subtitle}
        />

        {/* Disponibles */}
        <div className="mt-16">
          <CategoryLabel>{t.products.categoryAvailable}</CategoryLabel>
          <StaggerGroup className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="wind-hover group relative flex h-full flex-col bg-card p-7">
                    <div className="flex items-start justify-between">
                      <Icon
                        weight="light"
                        className="size-7 text-muted-foreground transition-colors duration-500 group-hover:text-brand"
                        aria-hidden
                      />
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/90">
                        <span className="size-1 rounded-full bg-brand" aria-hidden />
                        {t.products.badges.ready}
                      </span>
                    </div>

                    <h4 className="mt-6 font-heading text-xl font-bold tracking-tight">{product.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.text}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand transition-all duration-500 group-hover:gap-2.5">
                      {t.products.learnMore}
                      <ArrowRight className="size-3.5" aria-hidden />
                    </span>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>

        {/* En desarrollo */}
        <div className="mt-14">
          <CategoryLabel dim>{t.products.categoryComing}</CategoryLabel>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
            {coming.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="group relative flex h-full flex-col rounded-xl border border-dashed border-white/12 bg-card/40 p-7 transition-colors duration-500 hover:border-white/25">
                    <div className="flex items-start justify-between opacity-70">
                      <Icon weight="light" className="size-7 text-muted-foreground/60" aria-hidden />
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                        <span className="animate-blink size-1 rounded-full bg-white/40" aria-hidden />
                        {t.products.badges.coming}
                      </span>
                    </div>
                    <h4 className="mt-6 font-heading text-xl font-bold tracking-tight opacity-80">{product.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground/60">{product.text}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  )
}
