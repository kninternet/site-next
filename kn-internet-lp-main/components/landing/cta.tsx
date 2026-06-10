'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function CTA() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleWA = () => {
    window.open('https://wa.me/5521967797580?text=Olá!%20Gostaria%20de%20contratar%20a%20KN%20Internet.', '_blank')
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-kn-blue relative overflow-hidden">

      {/* Decoração */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[900px] h-[450px] bg-kn-orange/[0.18] rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0  w-80 h-80 bg-white/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl" />

        {/* Partículas */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-kn-orange/25 rounded-full animate-float"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 22}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-kn-orange animate-wave" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">Fale com a gente</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Fale agora no WhatsApp e{' '}
            <span className="text-kn-orange">contrate hoje mesmo</span>
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano
            e agendar sua instalação
          </p>

          <Button
            onClick={handleWA}
            size="lg"
            className="h-16 px-14 text-lg bg-kn-orange hover:bg-kn-orange/90 text-white font-bold
                       shadow-2xl shadow-kn-orange/40 hover:shadow-kn-orange/60
                       hover:scale-105 transition-all rounded-2xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Falar no WhatsApp
          </Button>

          <p className="text-sm text-white/35 mt-6">
            Atendimento disponível de segunda a sábado, das 8h às 20h
          </p>
        </div>
      </div>

      {/* Wave de saída */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto block" aria-hidden>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
