'use client'

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <img
        src="/images/hero-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  )
}