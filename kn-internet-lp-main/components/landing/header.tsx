'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/cobertura',   label: 'Cobertura' },
  { href: '/planos',      label: 'Planos' },
  { href: '/quem-somos',  label: 'Quem somos' },
  { href: '/faq',         label: 'Ajuda' },
  { href: '/contato',     label: 'Contato' },
]

export function Header() {
  const [open, setOpen]         = useState(false)
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
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/site/images/logo_kn_internet.webp"
              alt="KN Internet"
              width={200}
              height={67}
              className="h-14 w-auto object-contain"
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

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/cliente/login"
              className="text-sm font-medium text-kn-blue/60 hover:text-kn-blue transition-colors"
            >
              Área do cliente
            </Link>
            <Button
              asChild
              className="bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold
                         shadow-lg shadow-kn-orange/25 hover:shadow-kn-orange/40
                         hover:scale-105 transition-all rounded-xl"
            >
              <Link href="/cobertura">
                Verificar cobertura
              </Link>
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
          <div className="md:hidden pb-5 border-t border-gray-100 pt-4">
            <ul className="flex flex-col gap-1 mb-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2.5 px-2 text-sm font-medium text-kn-blue/70 hover:text-kn-blue hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cliente/login"
                  className="block py-2.5 px-2 text-sm font-medium text-kn-blue/70 hover:text-kn-blue hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Área do cliente
                </Link>
              </li>
            </ul>
            <Button
              asChild
              className="w-full bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold rounded-xl h-11"
            >
              <Link href="/cobertura" onClick={() => setOpen(false)}>
                Verificar cobertura
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}