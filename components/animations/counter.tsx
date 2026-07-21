'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

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

  const parsed = useMemo(() => {
    const m = value.match(/^([^\d]*)(\d+)(.*)$/)
    if (!m) return null
    return { prefix: m[1], target: Number.parseInt(m[2], 10), tail: m[3] }
  }, [value])

  const [display, setDisplay] = useState(() => {
    const m = value.match(/^([^\d]*)(\d+)(.*)$/)
    return m ? `${m[1]}0${m[3]}` : value
  })

  useEffect(() => {
    if (!inView || !parsed) return
    const { prefix, target, tail } = parsed
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
  }, [inView, parsed, duration])

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
      {suffix}
    </span>
  )
}
