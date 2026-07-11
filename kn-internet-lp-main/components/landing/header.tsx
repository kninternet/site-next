'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, MapPin, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useModal } from '@/components/coverage-modal-provider'

const navItems = [
  { href: '/#diferenciais', label: 'Diferenciais' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#autoatendimento', label: 'Suporte' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-kn-blue/8'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="KN Internet — início">
            <Image
              src="/images/kn-logo.png"
              alt="KN Internet"
              width={132}
              height={44}
              className="h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-kn-blue/70 hover:text-kn-blue hover:bg-kn-blue/5 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="text-kn-blue/75 hover:text-kn-blue hover:bg-kn-blue/5 font-medium rounded-lg"
            >
              <Link href="/#autoatendimento">Central do Assinante</Link>
            </Button>
            <Button
              onClick={openModal}
              className="bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold rounded-lg shadow-sm shadow-kn-orange/20 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Verificar cobertura
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 text-kn-blue rounded-lg hover:bg-kn-blue/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-5 pt-1 animate-slide-up">
            <ul className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[15px] font-medium text-kn-blue/80 hover:text-kn-blue hover:bg-kn-blue/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    <ChevronRight className="w-4 h-4 text-kn-blue/30" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-xl border-kn-blue/15 text-kn-blue font-medium"
                onClick={() => setOpen(false)}
              >
                <Link href="/#autoatendimento">Central do Assinante</Link>
              </Button>
              <Button
                onClick={() => { openModal(); setOpen(false) }}
                className="w-full bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold rounded-xl"
              >
                <MapPin className="w-4 h-4" />
                Verificar cobertura
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}