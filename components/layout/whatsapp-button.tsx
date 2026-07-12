'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PHONE = '573229369995'
const MESSAGE = encodeURIComponent('¡Hola! Me gustaría recibir más información sobre sus servicios.')

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-72 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3.5 text-white">
              <p className="text-sm font-semibold">WhatsApp</p>
              <p className="mt-0.5 text-xs text-white/80">
                Por lo general responde en minutos
              </p>
            </div>
            {/* Body */}
            <div className="p-4">
              <div className="rounded-xl bg-muted px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
                ¡Hola! Me gustaría recibir más información sobre sus servicios.
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Waira Solutions — Popayán, Colombia
              </p>
            </div>
            {/* CTA */}
            <div className="border-t border-border/60 px-4 py-3">
              <a
                href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" />
                Abrir WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* FAB */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
        <span className="absolute inset-1 animate-pulse rounded-full bg-[#25D366]/20" />

        <motion.button
          type="button"
          aria-label={open ? 'Cerrar WhatsApp' : 'Contactar por WhatsApp'}
          onClick={() => setOpen((v) => !v)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 24,
            delay: 1.5,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-[0_8px_32px_-4px_rgba(37,211,102,0.5)]"
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <MessageCircle className="size-7" />
          )}
        </motion.button>
      </div>
    </div>
  )
}
