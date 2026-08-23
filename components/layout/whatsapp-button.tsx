'use client'

import { useState } from 'react'
import { WhatsappLogo, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { WAIRA, getWhatsAppUrl } from '@/lib/config'

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-72 overflow-hidden rounded-xl border border-border bg-card shadow-elevated"
          >
            <div className="bg-[#25D366] px-4 py-3.5 text-white">
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="mt-0.5 text-xs text-white/80">
                Por lo general responde en minutos
              </p>
            </div>
            <div className="p-4">
              <div className="rounded-lg bg-muted px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
                {WAIRA.contact.whatsappMessage}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {WAIRA.name} - {WAIRA.location.full}
              </p>
            </div>
            <div className="border-t border-border px-4 py-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <WhatsappLogo weight="bold" className="size-4" />
                Abrir WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? 'Cerrar WhatsApp' : 'Contactar por WhatsApp'}
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 24, delay: 1 }}
        whileTap={{ scale: 0.94 }}
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated"
      >
        {open ? <X className="size-6" /> : <WhatsappLogo weight="fill" className="size-6" />}
      </motion.button>
    </div>
  )
}
