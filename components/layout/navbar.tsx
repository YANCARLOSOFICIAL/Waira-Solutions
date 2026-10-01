'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { List, WhatsappLogo, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
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
  const scrolledRef = useRef(false)
  const navigatedRef = useRef(false)

  // Solo se llama a setState al cruzar el umbral — no en cada frame de scroll.
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 50
    if (scrolledRef.current !== next) {
      scrolledRef.current = next
      setScrolled(next)
    }
  })

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (!elements.length || typeof IntersectionObserver === 'undefined') return

    // Un solo observer para las 9 secciones, en vez de uno por sección.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  // Bloqueo de scroll compatible con iOS Safari, que ignora `overflow:hidden`
  // en <body>: sacamos el body del flujo y restauramos el offset al cerrar.
  useEffect(() => {
    if (!open) return

    const html = document.documentElement
    const body = document.body
    const lockedScrollY = window.scrollY
    const contentWidth = html.clientWidth

    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      overflow: html.style.overflow,
    }

    body.style.position = 'fixed'
    body.style.top = `-${lockedScrollY}px`
    body.style.left = '0'
    body.style.width = `${contentWidth}px`
    html.style.overflow = 'hidden'

    return () => {
      // Si el menú se cerró por un link, la navegación al ancla manda:
      // restaurar el offset anterior desharía el salto a la sección.
      const fromNav = navigatedRef.current
      navigatedRef.current = false

      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.width = prev.width
      html.style.overflow = prev.overflow

      if (fromNav && window.location.hash) {
        const id = decodeURIComponent(window.location.hash.slice(1))
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'instant' })
          return
        }
      }

      window.scrollTo({ top: lockedScrollY, behavior: 'instant' })
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300 ease-out',
          scrolled || open
            ? 'glass-strong border-b border-white/10'
            : 'border-b border-transparent',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center" aria-label="Waira Solutions - inicio">
            <Logo />
          </a>

          {/* Los links aparecen desde md (768px); el CTA de texto queda para lg.
              A 768px: logo + 5 links + lang/whatsapp + menú ≈ 660px, cabe. */}
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Principal">
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
                      className="absolute inset-0 rounded-md bg-brand/8 ring-1 ring-inset ring-brand/15"
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
              className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-[#25D366]/10 hover:text-[#25D366]"
            >
              <WhatsappLogo weight="bold" className="size-5" />
            </a>
            <a
              href="#contacto"
              className={cn(
                'wind-hover inline-flex h-9 items-center gap-2 rounded-md px-5 text-sm font-semibold',
                'bg-primary text-primary-foreground hover:bg-primary/90',
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong border-b border-white/10 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {t.nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    navigatedRef.current = true
                    setOpen(false)
                  }}
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
                  onClick={() => {
                    navigatedRef.current = true
                    setOpen(false)
                  }}
                  className="flex flex-1 items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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
