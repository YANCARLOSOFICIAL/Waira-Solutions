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
      <Container>
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* track */}
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden />
          {/* progress */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-brand to-brand-2 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-8">
            {t.process.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={step.title} className="relative md:grid md:grid-cols-2 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className={`relative ml-12 md:ml-0 ${isLeft ? 'md:col-start-1 md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}`}
                  >
                    <div className="rounded-2xl border border-border bg-card/40 p-6">
                      <span className="font-heading text-xs font-semibold tracking-widest text-brand uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                    </div>
                  </motion.div>

                  {/* node */}
                  <span
                    className="absolute top-6 left-[11px] flex size-4 items-center justify-center rounded-full border-2 border-brand bg-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="size-1.5 rounded-full bg-brand" />
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
