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

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 12)
  })

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
          'transition-all duration-300',
          scrolled ? 'border-b border-border/60 glass' : 'border-b border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center" aria-label="Waira Solutions — inicio">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-[#25D366]"
            >
              <MessageCircle className="size-5" />
            </a>
            <Button
              render={<a href="#contacto" />}
              className="ml-2 h-9 rounded-full px-4"
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
              className="size-9 rounded-full"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass border-b border-border/60 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
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
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
