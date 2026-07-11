'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type CountUpProps = {
  /** The full display value, e.g. "+5.000", "99,9%", "< 30 min", "24h". */
  value: string
  /** Animation duration in ms. Defaults to 1600. */
  duration?: number
  className?: string
}

/**
 * Animates the numeric portion of a label from 0 to its target when it
 * enters the viewport, preserving any prefix/suffix (%, +, km, min...).
 * Uses requestAnimationFrame and respects prefers-reduced-motion.
 */
export function CountUp({ value, duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)

  // Split into [prefix, numberString, suffix]. Numbers may use "." or "," separators.
  const match = value.match(/([^\d]*)([\d.,]+)(.*)/)

  useEffect(() => {
    if (!match) return
    const [, prefix, numberStr, suffix] = match

    if (!inView || reduceMotion) {
      setDisplay(value)
      return
    }

    // Determine decimal separator (last , or . followed by 1-2 digits at the end).
    const decimalMatch = numberStr.match(/[.,](\d{1,2})$/)
    let decimalSep = ''
    let groupSep = ','
    if (decimalMatch) {
      decimalSep = numberStr[numberStr.length - decimalMatch[1].length - 1]
      groupSep = decimalSep === ',' ? '.' : ','
    } else {
      // No decimal part: any separator present is a thousands separator (e.g. "5.000").
      groupSep = numberStr.includes('.') ? '.' : ','
      decimalSep = groupSep === '.' ? ',' : '.'
    }

    const numeric = parseFloat(
      numberStr.replace(new RegExp('\\' + groupSep, 'g'), '').replace(decimalSep, '.'),
    )
    const decimals = decimalMatch ? decimalMatch[1].length : 0

    if (Number.isNaN(numeric)) {
      setDisplay(value)
      return
    }

    let raf = 0
    const start = performance.now()

    const format = (n: number) => {
      const fixed = n.toFixed(decimals)
      let [intPart, decPart] = fixed.split('.')
      intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, groupSep)
      const num = decPart ? `${intPart}${decimalSep}${decPart}` : intPart
      return `${prefix}${num}${suffix}`
    }

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic for a calm, non-bouncy count.
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(format(numeric * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // `match` derives from `value` (already a dep). Including it — a fresh array
    // each render — would restart the RAF loop every frame and stall the count.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
