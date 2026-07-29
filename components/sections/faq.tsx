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
    <section id="faq" className="relative scroll-mt-20 border-t border-border py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mt-12 divide-y divide-border border-t border-border">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={cn(
                    'flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors duration-200',
                    isOpen ? 'text-foreground' : 'text-foreground/80 hover:text-foreground',
                  )}
                >
                  <span className="flex-1">{item.q}</span>
                  <span className="flex size-6 shrink-0 items-center justify-center text-muted-foreground">
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
                      <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
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
