'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Zap, Clock, HeadphonesIcon, MapPin, Wifi, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const trustBadges = [
  { icon: Zap,             label: 'Atendimento rápido' },
  { icon: Clock,           label: 'Instalação ágil' },
  { icon: HeadphonesIcon,  label: 'Suporte local' },
]

export function Hero() {
  const [cep, setCep]           = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const formatCep = (v: string) => {
    const n = v.replace(/\D/g, '')
    return n.length <= 5 ? n : `${n.slice(0, 5)}-${n.slice(5, 8)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const clean = cep.replace(/\D/g, '')
    if (clean.length === 8) {
      window.open(
        `https://wa.me/5521967797580?text=Olá!%20Gostaria%20de%20verificar%20a%20disponibilidade%20no%20CEP:%20${cep}`,
        '_blank',
      )
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-0 overflow-hidden bg-white">

      {/* ── Fundo decorativo ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/60" />

        {/* Blobs */}
        <div className="absolute top-10 right-0 w-[620px] h-[620px] rounded-full
                        bg-kn-orange/[0.07] blur-[90px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full
                        bg-kn-blue/[0.04] blur-[80px] animate-pulse-glow [animation-delay:1.2s]" />

        {/* Fibra animada (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%"  stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,250 600,400 T1200,400" fill="none" stroke="url(#g1)" strokeWidth="2.5" className="animate-fiber" />
          <path d="M0,500 Q300,350 600,500 T1200,500" fill="none" stroke="url(#g1)" strokeWidth="1.5" className="animate-fiber [animation-delay:0.8s]" />
          <path d="M0,300 Q300,450 600,300 T1200,300" fill="none" stroke="url(#g1)" strokeWidth="1"   className="animate-fiber [animation-delay:1.6s]" />
        </svg>

        {/* Grid pontilhado sutil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #0c1e3d 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-96px)]">

          {/* ── Coluna esquerda: copy ── */}
          <div className="py-16 lg:py-24">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-kn-blue/[0.06] border border-kn-blue/10 mb-8
                          transition-all duration-700
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <MapPin className="w-4 h-4 text-kn-orange" />
              <span className="text-sm font-semibold text-kn-blue tracking-tight">
                Disponível no Rio de Janeiro
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold
                          text-kn-blue leading-[1.1] tracking-tight mb-6
                          transition-all duration-700 delay-100
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Internet Fibra Óptica{' '}
              <span className="relative text-kn-orange whitespace-nowrap">
                Rápida e Estável
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[6px] text-kn-orange/30"
                  viewBox="0 0 300 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M0,5 Q75,0 150,5 T300,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              no RJ
            </h1>

            {/* Sub */}
            <p
              className={`text-lg md:text-xl text-kn-blue/60 mb-10 max-w-lg leading-relaxed
                          transition-all duration-700 delay-200
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Planos a partir de{' '}
              <span className="text-kn-orange font-semibold">R$120/mês</span> com
              instalação rápida e suporte local 24h.
            </p>

            {/* Form CEP */}
            <form
              onSubmit={handleSubmit}
              className={`max-w-md mb-12 transition-all duration-700 delay-300
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex flex-col sm:flex-row gap-3 p-2
                              bg-white rounded-2xl shadow-xl shadow-black/[0.06]
                              border border-gray-100">
                <Input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(formatCep(e.target.value))}
                  maxLength={9}
                  className="flex-1 h-12 bg-gray-50 border-0 text-kn-blue text-center sm:text-left
                             placeholder:text-gray-400 focus-visible:ring-kn-orange"
                />
                <Button
                  type="submit"
                  className="h-12 px-7 bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold
                             shadow-lg shadow-kn-orange/25 hover:shadow-kn-orange/40
                             hover:scale-105 transition-all rounded-xl"
                >
                  <Wifi className="w-4 h-4 mr-2" />
                  Consultar
                </Button>
              </div>
              <p className="text-xs text-kn-blue/40 mt-2.5 pl-1">
                Valores podem variar por região
              </p>
            </form>

            {/* Trust badges */}
            <div
              className={`flex flex-wrap gap-6 md:gap-8 transition-all duration-700 delay-[400ms]
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-kn-orange/15 to-kn-orange/5
                                  flex items-center justify-center
                                  group-hover:scale-110 transition-transform
                                  shadow-md shadow-kn-orange/10">
                    <b.icon className="w-5 h-5 text-kn-orange" />
                  </div>
                  <span className="text-sm font-medium text-kn-blue/75">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Coluna direita: visual ── */}
          <div
            className={`hidden lg:flex items-end justify-center h-full transition-all duration-1000 delay-500
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative w-full max-w-[540px]">
              {/* Foto hero — família / cidade / fibra via Unsplash */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-kn-blue/20">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop"
                  alt="Família conectada com internet fibra óptica"
                  width={900}
                  height={700}
                  className="w-full h-[520px] object-cover"
                  priority
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-kn-blue/30 via-transparent to-transparent" />
              </div>

              {/* Card flutuante — velocidade */}
              <div className="absolute -left-8 top-1/3 bg-white rounded-2xl p-4
                              shadow-xl shadow-black/10 border border-gray-100
                              animate-float flex items-center gap-3 min-w-[190px]">
                <div className="w-12 h-12 rounded-xl bg-kn-orange flex items-center justify-center shadow-lg shadow-kn-orange/30">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-kn-blue/50 font-medium">Velocidade</p>
                  <p className="text-xl font-extrabold text-kn-blue font-display leading-tight">600 Mbps</p>
                </div>
              </div>

              {/* Card flutuante — clientes */}
              <div className="absolute -right-6 bottom-20 bg-kn-orange rounded-2xl p-4
                              shadow-xl shadow-kn-orange/30 animate-float [animation-delay:1.2s]">
                <p className="text-white/80 text-xs font-medium mb-0.5">Clientes satisfeitos</p>
                <p className="text-white text-2xl font-extrabold font-display">+5.000</p>
              </div>

              {/* Card flutuante — ping */}
              <div className="absolute right-4 top-8 bg-white rounded-xl p-3
                              shadow-xl shadow-black/10 border border-gray-100
                              animate-float [animation-delay:0.6s]">
                <p className="text-xs text-kn-blue/50 font-medium">Ping médio</p>
                <p className="text-lg font-extrabold text-kn-blue font-display">&lt; 5ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto block" aria-hidden>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0c1e3d" />
        </svg>
      </div>
    </section>
  )
}
