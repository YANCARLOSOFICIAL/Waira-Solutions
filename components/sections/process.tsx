'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { useLanguage } from '@/components/providers/language-provider'

export function Process() {
  const { t } = useLanguage()
  const reduce = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 80%'],
  })
  const lineHeight = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <section id="proceso" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Línea base */}
          <div
            className="absolute top-0 bottom-0 left-[19px] w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {/* Línea de progreso — ámbar, crece con el scroll como una corriente */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-brand md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-10">
            {t.process.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={step.title} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, x: isLeft ? -4 : 4 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={
                      reduce
                        ? { duration: 0.2 }
                        : { type: 'spring', stiffness: 130, damping: 21, delay: i * 0.05 }
                    }
                    className={`relative ml-14 md:ml-0 ${
                      isLeft ? 'md:col-start-1 md:pr-10 md:text-right' : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <div className="wind-hover group rounded-xl border border-white/10 bg-card p-6">
                      <span className="font-mono text-xs text-muted-foreground/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </motion.div>

                  <span
                    className="absolute top-6 left-[11px] flex size-5 items-center justify-center rounded-full border-2 border-brand bg-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="size-2 rounded-full bg-brand" />
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
