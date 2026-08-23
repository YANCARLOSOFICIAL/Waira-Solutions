'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/providers/language-provider'

export function FAQ() {
  const { t } = useLanguage()
  const faq = t.faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      <Container className="max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />

        <div className="mt-12 space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl transition-all duration-300"
                style={{
                  background: isOpen ? 'oklch(0.13 0.025 240 / 0.9)' : 'oklch(0.11 0.022 240 / 0.7)',
                  border: isOpen ? '1px solid oklch(0.65 0.22 230 / 0.3)' : '1px solid oklch(1 0 0 / 0.07)',
                  boxShadow: isOpen ? '0 0 20px oklch(0.65 0.22 230 / 0.08)' : 'none',
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    'flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold transition-colors duration-200',
                    isOpen ? 'text-brand' : 'text-foreground/90 hover:text-foreground',
                  )}
                >
                  <span className="flex-1 font-heading">{item.q}</span>
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-md border transition-all"
                    style={{
                      borderColor: isOpen ? 'oklch(0.65 0.22 230 / 0.4)' : 'oklch(1 0 0 / 0.1)',
                      color: isOpen ? 'oklch(0.65 0.22 230)' : 'oklch(0.55 0.02 230)',
                      background: isOpen ? 'oklch(0.65 0.22 230 / 0.1)' : 'transparent',
                    }}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
