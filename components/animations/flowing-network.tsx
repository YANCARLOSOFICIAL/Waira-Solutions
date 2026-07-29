'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

function getNodeCount(w: number, h: number): number {
  if (typeof window === 'undefined') return 30
  const isMobile = window.innerWidth < 768
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return 0
  if (isMobile) return Math.min(18, Math.floor((w * h) / 35000))
  return Math.min(45, Math.floor((w * h) / 20000))
}

export function FlowingNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const frameRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const lastFrameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const w = rect.width
    const h = rect.height
    const nodeCount = getNodeCount(w, h)

    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 1.5 + Math.random() * 2,
    }))

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    window.addEventListener('mouseleave', handleLeave)

    let hidden = false
    const onVisibility = () => {
      hidden = document.hidden
    }
    document.addEventListener('visibilitychange', onVisibility)

    const animate = (timestamp: number) => {
      if (hidden) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }
      if (timestamp - lastFrameRef.current < 1000 / 30) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameRef.current = timestamp

      if (nodeCount === 0) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      }

      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 120

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `oklch(0.52 0.14 240 / ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        const dmx = mouseX - nodes[i].x
        const dmy = mouseY - nodes[i].y
        const dmDist = Math.sqrt(dmx * dmx + dmy * dmy)
        if (dmDist < 150) {
          ctx.beginPath()
          ctx.arc(nodes[i].x, nodes[i].y, 4, 0, Math.PI * 2)
          ctx.fillStyle = `oklch(0.52 0.14 240 / ${(1 - dmDist / 150) * 0.8})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].radius, 0, Math.PI * 2)
        ctx.fillStyle = 'oklch(0.52 0.14 240 / 0.35)'
        ctx.fill()
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect()
      canvas.width = newRect.width * dpr
      canvas.height = newRect.height * dpr
      ctx.scale(dpr, dpr)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(frameRef.current)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden
    />
  )
}
