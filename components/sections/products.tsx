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

const PRODUCT_COLORS = [
  { border: '#fff', shadow: 'rgba(255,255,255,0.05)', glow: 'transparent', bg: 'rgba(255,255,255,0.05)', tagBg: 'rgba(255,255,255,0.03)' },
  { border: '#fff', shadow: 'rgba(255,255,255,0.05)', glow: 'transparent', bg: 'rgba(255,255,255,0.05)', tagBg: 'rgba(255,255,255,0.03)' },
  { border: '#fff', shadow: 'rgba(255,255,255,0.05)', glow: 'transparent', bg: 'rgba(255,255,255,0.05)', tagBg: 'rgba(255,255,255,0.03)' },
  { border: '#fff', shadow: 'rgba(255,255,255,0.05)', glow: 'transparent', bg: 'rgba(255,255,255,0.05)', tagBg: 'rgba(255,255,255,0.03)' },
]

export function Products() {
  const { t } = useLanguage()

  const available = t.products.items.filter((p) => p.badge === 'ready')
  const coming = t.products.items.filter((p) => p.badge === 'coming')

  return (
    <section id="productos" className="relative scroll-mt-20 py-24 sm:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          subtitle={t.products.subtitle}
        />

        {/* Available products */}
        <div className="mt-16">
          <h3 className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
            <span className="mr-2 text-white/40">◆</span>
            {t.products.categoryAvailable}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product, index) => {
              const Icon = productIcons[product.icon] ?? Gear
              const colors = PRODUCT_COLORS[index % PRODUCT_COLORS.length]
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-200 bg-[#111] border border-white/10 hover:border-white/20">
                    {/* Ready badge */}
                    <span
                      className="absolute top-0 right-0 rounded-bl-xl px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase"
                      style={{ background: colors.tagBg, color: colors.border }}
                    >
                      ● {t.products.badges.ready}
                    </span>
                    <div className="flex flex-1 flex-col p-7">
                      <span
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{ background: colors.bg }}
                      >
                        <Icon weight="bold" className="size-6" style={{ color: colors.border }} />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wide border border-white/10 bg-white/5 text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                        style={{ color: colors.border }}
                      >
                        {t.products.learnMore}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                    {/* Bottom glow line on hover */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)` }}
                      aria-hidden
                    />
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>

        {/* Coming soon products */}
        <div className="mt-14">
          <h3 className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
            <span className="mr-2 text-white/20">◆</span>
            {t.products.categoryComing}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
            {coming.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-200 bg-[#0a0a0a] border border-dashed border-white/10 hover:border-white/20">
                    {/* Coming badge with blink */}
                    <span className="absolute top-0 right-0 rounded-bl-xl px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase bg-white/5 text-white/40">
                      <span className="animate-blink mr-1">●</span>
                      {t.products.badges.coming}
                    </span>
                    <div className="flex flex-1 flex-col p-7 opacity-60">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-white/5">
                        <Icon weight="bold" className="size-6 text-white/40" />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-bold tracking-tight opacity-75">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground/60">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wide border border-white/5 bg-transparent text-white/40"
                          >
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
