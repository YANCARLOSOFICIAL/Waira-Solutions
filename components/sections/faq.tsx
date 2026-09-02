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
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container className="max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />

        <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={cn('bg-card transition-colors duration-300', isOpen && 'bg-white/[0.03]')}>
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
                    className={cn(
                      'flex size-7 shrink-0 items-center justify-center rounded-md border transition-colors duration-300',
                      isOpen
                        ? 'border-brand/40 bg-brand/10 text-brand'
                        : 'border-white/10 text-muted-foreground',
                    )}
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
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
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
