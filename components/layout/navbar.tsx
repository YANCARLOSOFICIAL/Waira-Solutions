'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { List, WhatsappLogo, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from '@/components/providers/language-provider'
import { getWhatsAppUrl } from '@/lib/config'

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'productos', 'casos', 'tecnologias', 'proceso', 'faq', 'contacto']

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActive(id)
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => {
      for (const o of observers) o.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-400 ease-out',
          scrolled
            ? 'glass-strong border-b border-[oklch(0.65_0.22_230_/_0.15)] shadow-[0_4px_32px_oklch(0_0_0_/_0.4)]'
            : 'border-b border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center" aria-label="Waira Solutions - inicio">
            <Logo />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            {t.nav.links.map((link) => {
              const isActive = active === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-brand'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md"
                      style={{
                        background: 'oklch(0.65 0.22 230 / 0.08)',
                        boxShadow: 'inset 0 0 0 1px oklch(0.65 0.22 230 / 0.15)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageToggle />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-all hover:text-[#25D366] hover:bg-[#25D366]/10 hover:shadow-[0_0_12px_oklch(0.72_0.18_150_/_0.2)]"
            >
              <WhatsappLogo weight="bold" className="size-5" />
            </a>
            <a
              href="#contacto"
              className={cn(
                'relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-md px-5 text-sm font-semibold',
                'bg-brand text-[oklch(0.05_0.02_240)] transition-all duration-200',
                'hover:shadow-[0_0_20px_oklch(0.65_0.22_230_/_0.4)] hover:brightness-110',
                'active:scale-[0.98]',
              )}
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-[#25D366]"
            >
              <WhatsappLogo weight="bold" className="size-5" />
            </a>
            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                'flex size-9 items-center justify-center rounded-md border transition-all',
                open
                  ? 'border-brand/40 bg-brand/10 text-brand'
                  : 'border-border text-muted-foreground hover:border-brand/30 hover:text-foreground',
              )}
            >
              {open ? <X className="size-5" /> : <List className="size-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass-strong border-b border-[oklch(0.65_0.22_230_/_0.15)] lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {t.nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className={cn(
                    'rounded-md px-4 py-3 text-base font-medium transition-all',
                    active === link.href.replace('#', '')
                      ? 'text-brand bg-brand/8'
                      : 'text-foreground/80 hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.3 }}
                className="mt-4 flex gap-2"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#25D366]/20 bg-[#25D366]/8 py-3 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/15"
                >
                  <WhatsappLogo weight="bold" className="size-4" />
                  WhatsApp
                </a>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center rounded-md bg-brand px-4 py-3 text-sm font-semibold text-[oklch(0.05_0.02_240)] transition-all hover:brightness-110"
                >
                  {t.nav.cta}
                </a>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
