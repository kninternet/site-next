'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/* KN brand colours (kept in sync with globals.css). */
const KN_BLUE = '#063260'
const KN_BLUE_MID = '#0d4a86'
const KN_ORANGE = '#fa6900'

type Bead = { duration: number; delay: number }

/**
 * A single soft fiber strand with light beads travelling along it.
 * The bead uses a short lit dash whose offset is animated, so it scales
 * naturally with the SVG viewBox and is disabled under reduced motion.
 */
function Strand({
  d,
  gradientId,
  pathLength,
  beads,
  width = 1.6,
  baseOpacity = 0.5,
  draw = true,
}: {
  d: string
  gradientId: string
  pathLength: number
  beads: Bead[]
  width?: number
  baseOpacity?: number
  draw?: boolean
}) {
  const reduceMotion = useReducedMotion()
  const beadDash = 10
  const cycle = pathLength + beadDash

  return (
    <>
      {/* Faint continuous strand */}
      <motion.path
        d={d}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={width}
        strokeLinecap="round"
        opacity={baseOpacity}
        initial={draw && !reduceMotion ? { pathLength: 0, opacity: 0 } : false}
        whileInView={draw && !reduceMotion ? { pathLength: 1, opacity: baseOpacity } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Travelling light beads */}
      {beads.map((bead, i) => (
        <path
          key={i}
          className="fiber-bead"
          d={d}
          fill="none"
          stroke={KN_ORANGE}
          strokeWidth={width + 1.4}
          strokeLinecap="round"
          strokeDasharray={`${beadDash} ${pathLength}`}
          style={
            {
              '--bead-length': cycle,
              '--bead-duration': `${bead.duration}s`,
              '--bead-delay': `${bead.delay}s`,
              filter: 'drop-shadow(0 0 4px rgba(250,105,0,0.7))',
            } as React.CSSProperties
          }
        />
      ))}
    </>
  )
}

/**
 * Subtle horizontal fiber divider placed between selected sections to
 * reinforce a sense of continuity. Non-decorative, very quiet.
 */
export function FiberDivider({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const gradId = `fiber-div-${id}`
  const d = 'M0 30 C 300 6, 460 54, 640 30 S 940 8, 1200 30'

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-10 w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={KN_BLUE} stopOpacity="0" />
            <stop offset="30%" stopColor={KN_BLUE_MID} stopOpacity="0.9" />
            <stop offset="70%" stopColor={KN_ORANGE} stopOpacity="0.85" />
            <stop offset="100%" stopColor={KN_ORANGE} stopOpacity="0" />
          </linearGradient>
        </defs>
        <Strand
          d={d}
          gradientId={gradId}
          pathLength={1240}
          width={1.4}
          baseOpacity={0.35}
          beads={[
            { duration: 5, delay: 0 },
            { duration: 6.5, delay: 2.4 },
          ]}
        />
      </svg>
    </div>
  )
}

/**
 * Living fiber layer for the hero: organic curves rising from the human
 * layer toward the KN wordmark area, with light pulses travelling upward.
 */
export function HeroFiber({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const g1 = `hero-f1-${id}`
  const g2 = `hero-f2-${id}`
  const g3 = `hero-f3-${id}`

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={g1} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={KN_BLUE} stopOpacity="0" />
            <stop offset="45%" stopColor={KN_BLUE_MID} stopOpacity="0.55" />
            <stop offset="100%" stopColor={KN_ORANGE} stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id={g2} x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={KN_ORANGE} stopOpacity="0" />
            <stop offset="50%" stopColor={KN_ORANGE} stopOpacity="0.5" />
            <stop offset="100%" stopColor={KN_BLUE_MID} stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id={g3} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={KN_BLUE_MID} stopOpacity="0.35" />
            <stop offset="100%" stopColor={KN_ORANGE} stopOpacity="0" />
          </linearGradient>
        </defs>

        <Strand
          d="M-20 560 C 220 460, 300 300, 520 250 S 820 170, 1040 90"
          gradientId={g1}
          pathLength={1500}
          width={1.6}
          baseOpacity={0.4}
          beads={[
            { duration: 7, delay: 0 },
            { duration: 9, delay: 3.5 },
          ]}
        />
        <Strand
          d="M1220 540 C 980 470, 900 300, 680 250 S 380 150, 180 70"
          gradientId={g2}
          pathLength={1500}
          width={1.4}
          baseOpacity={0.32}
          beads={[{ duration: 8, delay: 1.6 }]}
        />
        <Strand
          d="M120 600 C 260 440, 520 420, 600 300 S 760 120, 600 40"
          gradientId={g3}
          pathLength={1100}
          width={1.2}
          baseOpacity={0.25}
          beads={[{ duration: 6.5, delay: 2.2 }]}
        />
      </svg>
    </div>
  )
}

/**
 * Extremely low-opacity moving fiber pattern for the final CTA background.
 */
export function CtaFiber({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const g = `cta-f-${id}`

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor={KN_ORANGE} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <Strand
          d="M-20 120 C 300 60, 500 200, 760 130 S 1080 70, 1240 150"
          gradientId={g}
          pathLength={1300}
          width={1.4}
          baseOpacity={0.18}
          draw={false}
          beads={[
            { duration: 7, delay: 0 },
            { duration: 9, delay: 3 },
          ]}
        />
        <Strand
          d="M-20 300 C 260 240, 520 340, 780 280 S 1060 220, 1240 300"
          gradientId={g}
          pathLength={1300}
          width={1.2}
          baseOpacity={0.14}
          draw={false}
          beads={[{ duration: 10, delay: 1.5 }]}
        />
      </svg>
    </div>
  )
}

/**
 * Closing fiber path for the footer. A single strand descends and ends
 * inside the KN logo area, closing the storytelling started in the hero.
 */
export function FooterFiber({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const g = `footer-f-${id}`

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={g} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={KN_ORANGE} stopOpacity="0" />
            <stop offset="55%" stopColor={KN_ORANGE} stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Enters top-right, curves down and left, ending near the logo (bottom-left). */}
        <Strand
          d="M1200 10 C 900 40, 820 120, 520 120 S 180 128, 70 138"
          gradientId={g}
          pathLength={1300}
          width={1.6}
          baseOpacity={0.4}
          beads={[
            { duration: 6, delay: 0 },
            { duration: 8, delay: 2.5 },
          ]}
        />
        {/* Soft glow where the fiber meets the logo. */}
        <circle cx="70" cy="138" r="5" fill={KN_ORANGE} className="animate-pulse-glow" />
      </svg>
    </div>
  )
}
