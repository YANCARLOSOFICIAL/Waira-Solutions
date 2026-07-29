'use client'

import { ArrowRight, Brain, ChatCircle, CreditCard, Flask, Gear, type Icon } from '@phosphor-icons/react'
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

export function Products() {
  const { t } = useLanguage()

  const available = t.products.items.filter((p) => p.badge === 'ready')
  const coming = t.products.items.filter((p) => p.badge === 'coming')

  return (
    <section id="productos" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/[0.03] via-transparent to-brand/[0.03]" aria-hidden />
      <Container>
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          subtitle={t.products.subtitle}
        />

        <div className="mt-16">
          <h3 className="font-mono text-xs font-semibold tracking-[0.15em] text-brand uppercase">
            {t.products.categoryAvailable}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all">
                    <span className="absolute top-0 right-0 rounded-bl-xl bg-success/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-success uppercase">
                      {t.products.badges.ready}
                    </span>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icon weight="bold" className="size-6" />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-medium tracking-tight">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 flex items-center gap-1.5 text-xs font-medium text-brand">
                        {t.products.learnMore}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-xs font-semibold tracking-[0.15em] text-brand uppercase">
            {t.products.categoryComing}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
            {coming.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-dashed border-border bg-card/50 shadow-card hover:shadow-card-hover transition-all">
                    <span className="absolute top-0 right-0 rounded-bl-xl bg-brand/10 px-3 py-1.5 text-xs font-semibold tracking-wider text-brand uppercase">
                      {t.products.badges.coming}
                    </span>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-brand/5 text-brand/60">
                        <Icon weight="bold" className="size-6" />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-medium tracking-tight">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
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
