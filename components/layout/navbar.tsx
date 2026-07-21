'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { useLanguage } from '@/components/providers/language-provider'

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'soluciones', 'tecnologias', 'proceso', 'casos', 'faq', 'contacto']

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
            ? 'border-b border-border/60 glass-strong shadow-sm'
            : 'border-b border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center" aria-label="Waira Solutions — inicio">
            <Logo />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm transition-all duration-200',
                  active === link.href.replace('#', '')
                    ? 'text-foreground bg-muted/60'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://wa.me/573229369995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-[#25D366] hover:bg-[#25D366]/10"
            >
              <MessageCircle className="size-5" />
            </a>
            <Button
              render={<a href="#contacto" />}
              className="ml-2 h-9 rounded-full px-5 text-sm glow-brand-sm"
            >
              {t.nav.cta}
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="https://wa.me/573229369995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-[#25D366]"
            >
              <MessageCircle className="size-5" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                'size-9 rounded-full transition-colors',
                open ? 'bg-muted text-foreground' : '',
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
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
            className="glass-strong border-b border-border/60 lg:hidden"
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
                  className="rounded-xl px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-muted"
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
                  href="https://wa.me/573229369995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-[#25D366]/10 py-3 text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366]/20"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
                <Button
                  render={<a href="#contacto" />}
                  onClick={() => setOpen(false)}
                  className="flex-1 h-11 rounded-full"
                >
                  {t.nav.cta}
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
