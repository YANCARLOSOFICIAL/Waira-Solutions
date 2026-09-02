'use client'

import { motion, useReducedMotion, type Transition, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offset = 28

/**
 * Movimiento "viento" (Waira): en vez de un fade lineal, los elementos entran
 * con una física de resorte suave y una leve deriva lateral, como empujados
 * por una brisa. Respeta prefers-reduced-motion.
 */
const windSpring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.9,
}

function getVariants(direction: Direction, reduce: boolean): Variants {
  const map: Record<Direction, { x?: number; y?: number }> = {
    up: { y: offset, x: 4 },
    down: { y: -offset, x: -4 },
    left: { x: offset },
    right: { x: -offset },
    none: {},
  }

  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }

  return {
    hidden: { opacity: 0, filter: 'blur(6px)', ...map[direction] },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
      transition: windSpring,
    },
  }
}

type RevealProps = {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  once?: boolean
  as?: 'div' | 'section' | 'span' | 'li' | 'article'
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion() ?? false
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={getVariants(direction, reduce)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

export function StaggerGroup({
  children,
  className,
  once = true,
}: {
  children: ReactNode
  className?: string
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const reduce = useReducedMotion() ?? false
  const MotionTag = motion[as]
  const itemVariants: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2 } } }
    : {
        hidden: { opacity: 0, y: 22, x: 3, filter: 'blur(5px)' },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          transition: { type: 'spring', stiffness: 130, damping: 21, mass: 0.85 },
        },
      }
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  )
}
