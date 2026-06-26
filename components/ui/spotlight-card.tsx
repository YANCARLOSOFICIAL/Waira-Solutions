'use client'

import { useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  className?: string
  children: React.ReactNode
  spotlightColor?: string
}

export function SpotlightCard({ className, children, spotlightColor }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const overlay = overlayRef.current
    if (!card || !overlay) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    overlay.style.setProperty('--spotlight-x', `${x}px`)
    overlay.style.setProperty('--spotlight-y', `${y}px`)
    overlay.style.opacity = '1'
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0'
    }
  }, [])

  const color = spotlightColor ?? 'oklch(0.82 0.13 196 / 0.12)'

  return (
    <div
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 160px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${color}, transparent 70%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
