'use client'

import { useEffect, useRef } from 'react'

export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Nodes for the circuit pattern
    const nodes: { x: number; y: number; pulse: number; speed: number; glow: number }[] = []
    let animFrame: number
    let w = 0
    let h = 0

    function resize() {
      if (!canvas) return
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      buildNodes()
    }

    function buildNodes() {
      nodes.length = 0
      const cols = Math.ceil(w / 80) + 1
      const rows = Math.ceil(h / 80) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.82) {
            nodes.push({
              x: c * 80,
              y: r * 80,
              pulse: Math.random() * Math.PI * 2,
              speed: 0.4 + Math.random() * 0.8,
              glow: Math.random(),
            })
          }
        }
      }
    }

    function draw(t: number) {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, w, h)

      // Grid lines
      ctx.strokeStyle = 'oklch(0.65 0.22 230 / 0.07)'
      ctx.lineWidth = 0.5

      // Vertical lines
      for (let x = 0; x <= w; x += 48) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.strokeStyle = `rgba(14, 165, 255, 0.055)`
        ctx.stroke()
      }
      // Horizontal lines
      for (let y = 0; y <= h; y += 48) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Pulsing nodes at intersections
      for (const node of nodes) {
        node.pulse += node.speed * 0.016
        const alpha = (Math.sin(node.pulse) * 0.5 + 0.5) * 0.65 + 0.1

        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6)
        gradient.addColorStop(0, `rgba(14, 165, 255, ${alpha * 0.8})`)
        gradient.addColorStop(1, `rgba(14, 165, 255, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Core dot
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animFrame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Circuit canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />

      {/* Ambient orbs */}
      <div
        className="animate-orb-drift absolute -top-48 -right-48 size-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="animate-orb-drift-2 absolute top-1/2 -left-48 size-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.18 195 / 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="animate-orb-drift-3 absolute -bottom-24 right-1/3 size-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
