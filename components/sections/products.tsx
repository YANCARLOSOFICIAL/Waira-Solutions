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
    <section id="productos" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.18 195 / 0.3), transparent)' }} aria-hidden />

      {/* Bg glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 size-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.78 0.18 195 / 0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden
      />

      <Container>
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          subtitle={t.products.subtitle}
        />

        {/* Available products */}
        <div className="mt-16">
          <h3 className="font-mono text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.18 150)' }}
          >
            <span className="mr-2" style={{ color: 'oklch(0.72 0.18 150)' }}>◆</span>
            {t.products.categoryAvailable}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                      background: 'oklch(0.12 0.022 240 / 0.9)',
                      border: '1px solid oklch(1 0 0 / 0.08)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
                      el.style.boxShadow = '0 0 28px oklch(0.65 0.22 230 / 0.1), 0 4px 16px oklch(0 0 0 / 0.3)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'oklch(1 0 0 / 0.08)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    {/* Ready badge */}
                    <span
                      className="absolute top-0 right-0 rounded-bl-xl px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase"
                      style={{ background: 'oklch(0.72 0.18 150 / 0.12)', color: 'oklch(0.72 0.18 150)' }}
                    >
                      ● {t.products.badges.ready}
                    </span>
                    <div className="flex flex-1 flex-col p-7">
                      <span
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{ background: 'oklch(0.65 0.22 230 / 0.1)' }}
                      >
                        <Icon weight="bold" className="size-6" style={{ color: 'oklch(0.65 0.22 230)' }} />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-bold tracking-tight">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wide"
                            style={{
                              background: 'oklch(0.65 0.22 230 / 0.06)',
                              border: '1px solid oklch(0.65 0.22 230 / 0.15)',
                              color: 'oklch(0.65 0.22 230 / 0.8)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
                        style={{ color: 'oklch(0.65 0.22 230)' }}
                      >
                        {t.products.learnMore}
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                    {/* Bottom glow line on hover */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.6), transparent)' }}
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
          <h3 className="font-mono text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.78 0.18 195)' }}
          >
            <span className="mr-2">◆</span>
            {t.products.categoryComing}
          </h3>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
            {coming.map((product) => {
              const Icon = productIcons[product.icon] ?? Gear
              return (
                <StaggerItem key={product.title} as="article" className="h-full">
                  <div
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                      background: 'oklch(0.10 0.018 240 / 0.7)',
                      border: '1px dashed oklch(0.78 0.18 195 / 0.2)',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'oklch(0.78 0.18 195 / 0.4)'
                      el.style.boxShadow = '0 0 20px oklch(0.78 0.18 195 / 0.08)'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'oklch(0.78 0.18 195 / 0.2)'
                      el.style.boxShadow = 'none'
                    }}
                  >
                    {/* Coming badge with blink */}
                    <span
                      className="absolute top-0 right-0 rounded-bl-xl px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase"
                      style={{ background: 'oklch(0.78 0.18 195 / 0.1)', color: 'oklch(0.78 0.18 195)' }}
                    >
                      <span className="animate-blink mr-1">●</span>
                      {t.products.badges.coming}
                    </span>
                    <div className="flex flex-1 flex-col p-7">
                      <span
                        className="flex size-11 items-center justify-center rounded-xl"
                        style={{ background: 'oklch(0.78 0.18 195 / 0.07)' }}
                      >
                        <Icon weight="bold" className="size-6" style={{ color: 'oklch(0.78 0.18 195 / 0.6)' }} />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-bold tracking-tight opacity-75">{product.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground/60">{product.text}</p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {product.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md px-2.5 py-1 font-mono text-[10px] tracking-wide"
                            style={{
                              background: 'oklch(0.78 0.18 195 / 0.05)',
                              border: '1px solid oklch(0.78 0.18 195 / 0.12)',
                              color: 'oklch(0.78 0.18 195 / 0.5)',
                            }}
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
