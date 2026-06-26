'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animated number counter. Extracts the leading number from a label like
 * "+30" or "98" and animates to it, preserving prefixes/suffixes.
 */
export function Counter({
  value,
  suffix = '',
  duration = 1600,
  className,
}: {
  value: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(value)

  const match = value.match(/^([^\d]*)(\d+)(.*)$/)

  useEffect(() => {
    if (!inView || !match) return
    const prefix = match[1]
    const target = Number.parseInt(match[2], 10)
    const tail = match[3]
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${prefix}${Math.round(target * eased)}${tail}`)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, match, duration])

  return (
    <span ref={ref} className={className}>
      {match ? display : value}
      {suffix}
    </span>
  )
}
