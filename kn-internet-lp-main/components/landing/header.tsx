'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '#planos',    label: 'Planos' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#app',       label: 'App' },
  { href: '#contato',   label: 'Contato' },
]

export function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">

            <Image
              src="/images/knnet.png"
              alt="KN Internet"
              width={110}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-kn-blue/65 hover:text-kn-blue transition-colors
                             relative after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px]
                             after:bg-kn-orange after:rounded-full after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold
                         shadow-lg shadow-kn-orange/25 hover:shadow-kn-orange/40
                         hover:scale-105 transition-all rounded-xl"
            >
              <a href="https://wa.me/5521967797580" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-kn-blue"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-5 animate-slide-up">
            <ul className="flex flex-col gap-4 mb-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 text-sm font-medium text-kn-blue/70 hover:text-kn-blue transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold rounded-xl"
            >
              <a href="https://wa.me/5521967797580" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
