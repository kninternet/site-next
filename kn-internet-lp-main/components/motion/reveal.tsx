'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Delay in seconds before the animation starts. */
  delay?: number
  /** Animation duration in seconds. Defaults to 0.6s (600ms). */
  duration?: number
  /** Vertical offset in px the element travels from. Defaults to 16. */
  y?: number
  className?: string
  /** Render as a specific element for correct semantics (e.g. 'li', 'figure'). */
  as?: 'div' | 'li' | 'figure' | 'span' | 'section'
}

/**
 * Fades content in with a subtle upward movement when it enters the viewport.
 * Motion language: easeOut, no bounce. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 16,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : duration, ease: [0.22, 1, 0.36, 1], delay },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </MotionTag>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  /** Delay between each child, in seconds. Defaults to 0.08s. */
  stagger?: number
  as?: 'div' | 'ul' | 'ol'
}

/**
 * Wrapper that staggers the reveal of its <RevealItem> children on viewport entry.
 */
export function RevealGroup({ children, className, stagger = 0.08, as = 'div' }: StaggerProps) {
  const reduceMotion = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : stagger },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    >
      {children}
    </MotionTag>
  )
}

type ItemProps = {
  children: ReactNode
  className?: string
  y?: number
  duration?: number
  as?: 'div' | 'li' | 'figure' | 'span'
}

/** Child element for <RevealGroup>. Inherits stagger timing from its parent. */
export function RevealItem({ children, className, y = 18, duration = 0.5, as = 'div' }: ItemProps) {
  const reduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : duration, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  )
}
