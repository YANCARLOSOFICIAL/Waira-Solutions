'use client'

import { useEffect, useRef } from 'react'

/** Frecuencia máxima de redibujo. 20fps basta para una derisa ambiental lenta. */
const FRAME_MS = 50

/**
 * Fondo "corrientes de aire" — líneas sinusoidales asimétricas que derivan
 * lentamente, en lugar de la rejilla de circuito. Es el ADN de Waira (viento)
 * traducido a movimiento ambiental.
 *
 * Rendimiento: se dibuja a 20fps, se detiene con la pestaña oculta y en
 * pantallas <1024px se congela en un solo frame estático (misma composición,
 * sin coste de frame budget continuo).
 */
export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animatedQuery = window.matchMedia('(min-width: 1024px)')

    let animFrame = 0
    let w = 0
    let h = 0
    let t = 0
    let last = 0
    let running = false

    const currents = [
      { y: 0.28, amp: 42, len: 0.0016, speed: 0.0009, color: 'rgba(226, 122, 52, 0.10)', width: 1.4 },
      { y: 0.44, amp: 30, len: 0.0022, speed: 0.0013, color: 'rgba(226, 122, 52, 0.055)', width: 1 },
      { y: 0.62, amp: 54, len: 0.0012, speed: 0.0007, color: 'rgba(90, 190, 205, 0.07)', width: 1.2 },
      { y: 0.78, amp: 24, len: 0.0028, speed: 0.0016, color: 'rgba(255, 255, 255, 0.03)', width: 1 },
    ]

    function resize() {
      if (!canvas) return
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      render()
    }

    function drawCurrent(c: (typeof currents)[number], phase: number) {
      if (!ctx) return
      ctx.beginPath()
      for (let x = -20; x <= w + 20; x += 12) {
        const y =
          c.y * h +
          Math.sin(x * c.len + phase) * c.amp +
          Math.sin(x * c.len * 2.7 + phase * 1.6) * (c.amp * 0.25)
        if (x === -20) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = c.color
      ctx.lineWidth = c.width
      ctx.stroke()
    }

    function render() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)
      for (const c of currents) drawCurrent(c, t * c.speed * 1000)
    }

    function frame(now: number) {
      animFrame = requestAnimationFrame(frame)
      const elapsed = last ? now - last : FRAME_MS
      last = now
      if (elapsed < FRAME_MS) return
      t += Math.min(elapsed, 250)
      render()
    }

    function shouldAnimate() {
      return !reducedQuery.matches && animatedQuery.matches && !document.hidden
    }

    function start() {
      if (running || !shouldAnimate()) return
      running = true
      last = 0
      animFrame = requestAnimationFrame(frame)
    }

    function stop() {
      if (!running) return
      running = false
      cancelAnimationFrame(animFrame)
      last = 0
    }

    /** Un solo estado: anima o dibuja un frame estático. */
    function sync() {
      if (shouldAnimate()) {
        start()
      } else {
        stop()
        render()
      }
    }

    function onVisibility() {
      if (document.hidden) stop()
      else sync()
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('visibilitychange', onVisibility)
    reducedQuery.addEventListener('change', sync)
    animatedQuery.addEventListener('change', sync)
    sync()

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      window.removeEventListener('visibilitychange', onVisibility)
      reducedQuery.removeEventListener('change', sync)
      animatedQuery.removeEventListener('change', sync)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Halos cálidos a la deriva — brisa, no orbes neón */}
      <div
        className="orb-glow animate-orb-drift absolute -right-48 -top-48 size-[620px] rounded-full"
        style={
          {
            '--orb-blur': '48px',
            background: 'radial-gradient(circle, oklch(0.705 0.15 52 / 0.07) 0%, transparent 70%)',
          } as React.CSSProperties
        }
      />
      <div
        className="orb-glow animate-orb-drift-2 absolute -left-48 top-1/2 size-[520px] rounded-full"
        style={
          {
            '--orb-blur': '56px',
            background: 'radial-gradient(circle, oklch(0.74 0.09 205 / 0.05) 0%, transparent 70%)',
          } as React.CSSProperties
        }
      />
      <div
        className="orb-glow animate-orb-drift-3 absolute -bottom-24 right-1/3 size-[420px] rounded-full"
        style={
          {
            '--orb-blur': '64px',
            background: 'radial-gradient(circle, oklch(0.705 0.15 52 / 0.045) 0%, transparent 70%)',
          } as React.CSSProperties
        }
      />
    </div>
  )
}
