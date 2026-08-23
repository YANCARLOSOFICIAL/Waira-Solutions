'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { useLanguage } from '@/components/providers/language-provider'

export function Process() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 80%'],
  })
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <section id="proceso" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      <Container>
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Background line */}
          <div className="absolute top-0 bottom-0 left-[19px] w-px md:left-1/2 md:-translate-x-1/2" style={{ background: 'oklch(1 0 0 / 0.08)' }} aria-hidden />

          {/* Glowing animated line */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          >
            <div
              className="size-full"
              style={{
                background: 'linear-gradient(to bottom, oklch(0.65 0.22 230), oklch(0.78 0.18 195))',
                boxShadow: '0 0 12px oklch(0.65 0.22 230 / 0.6)',
              }}
            />
          </motion.div>

          <ol className="space-y-10">
            {t.process.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={step.title} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`relative ml-14 md:ml-0 ${isLeft ? 'md:col-start-1 md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'}`}
                  >
                    <div
                      className="group rounded-xl p-6 transition-all duration-300"
                      style={{
                        background: 'oklch(0.12 0.022 240 / 0.85)',
                        border: '1px solid oklch(1 0 0 / 0.08)',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
                        el.style.boxShadow = '0 0 24px oklch(0.65 0.22 230 / 0.1)'
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'oklch(1 0 0 / 0.08)'
                        el.style.boxShadow = 'none'
                      }}
                    >
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </motion.div>

                  <span
                    className="absolute top-6 left-[11px] flex size-5 items-center justify-center rounded-full border-2 md:left-1/2 md:-translate-x-1/2"
                    style={{ borderColor: 'oklch(0.65 0.22 230)', background: 'oklch(0.09 0.025 240)' }}
                    aria-hidden
                  >
                    <span className="size-2 rounded-full animate-pulse-glow" style={{ background: 'oklch(0.65 0.22 230)' }} />
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
