'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Check, MessageCircle, Star, Sparkles, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const plans = [
  {
    name: 'Básico',
    speed: '350',
    price: '120',
    uploadSpeed: '175',
    tag: null,
    features: [
      'Wi-Fi de alta performance',
      'Download até 350 Mbps',
      'Upload até 175 Mbps',
      'Suporte técnico 24h',
    ],
  },
  {
    name: 'Plus',
    speed: '450',
    price: '150',
    uploadSpeed: '225',
    tag: 'Mais Popular',
    features: [
      'Wi-Fi de alta performance',
      'Download até 450 Mbps',
      'Upload até 225 Mbps',
      'Suporte técnico 24h',
      'Prioridade no atendimento',
    ],
  },
  {
    name: 'Ultra',
    speed: '600',
    price: '180',
    uploadSpeed: '300',
    tag: null,
    features: [
      'Wi-Fi de alta performance',
      'Download até 600 Mbps',
      'Upload até 300 Mbps',
      'Suporte técnico 24h',
      'Prioridade máxima',
      'IP fixo opcional',
    ],
  },
]

export function Plans() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleWA = (name: string, speed: string) => {
    const msg = `Olá! Tenho interesse no plano ${name} de ${speed}MB. Gostaria de mais informações.`
    window.open(`https://wa.me/5521967797580?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section ref={ref} id="planos" className="py-24 md:py-32 bg-kn-blue relative overflow-hidden">

      {/* Decoração */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-20 left-16 w-72 h-72 bg-kn-orange/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-glow [animation-delay:1s]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">

        {/* Título */}
        <div
          className={`text-center mb-14 md:mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
            <Sparkles className="w-4 h-4 text-kn-orange" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">Planos Fibra Óptica</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Escolha o{' '}
            <span className="text-kn-orange">plano ideal</span> para você
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Todos os planos incluem instalação profissional e equipamentos de última geração
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden border transition-all duration-500 group cursor-default
                          ${plan.tag
                            ? 'border-kn-orange/60 bg-white/[0.13] shadow-2xl shadow-kn-orange/15'
                            : 'border-white/15 bg-white/[0.08]'}
                          backdrop-blur-sm
                          hover:scale-[1.03] hover:shadow-2xl hover:shadow-kn-orange/20
                          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Highlight top bar for popular */}
              {plan.tag && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kn-orange/60 via-kn-orange to-kn-orange/60" />
              )}

              {/* Badge */}
              {plan.tag && (
                <div className="absolute top-3 right-3 flex items-center gap-1
                                bg-kn-orange text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  {plan.tag}
                </div>
              )}

              <CardHeader className="pb-4 pt-6">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl font-extrabold text-kn-orange font-display group-hover:scale-105 transition-transform origin-left">
                    {plan.speed}
                  </span>
                  <span className="text-2xl font-bold text-kn-orange/80 mt-1">MB</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-white/50">R$</span>
                  <span className="text-3xl font-extrabold text-white font-display">{plan.price}</span>
                  <span className="text-sm text-white/50">/mês</span>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <div className="h-px bg-white/10 mb-5" />
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-kn-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-kn-orange" />
                      </div>
                      <span className="text-sm text-white/75 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  onClick={() => handleWA(plan.name, plan.speed)}
                  className={`w-full h-12 font-semibold rounded-xl transition-all
                              ${plan.tag
                                ? 'bg-kn-orange hover:bg-kn-orange/90 text-white shadow-lg shadow-kn-orange/30 hover:shadow-kn-orange/50'
                                : 'bg-white/15 hover:bg-white/25 text-white border border-white/20 hover:border-white/40'}`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contratar via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Nota rodapé */}
        <p className={`text-center text-sm text-white/35 mt-10 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <Zap className="inline w-3.5 h-3.5 mr-1 text-kn-orange/60" />
          Instalação profissional inclusa. Taxa única de R$150 via PIX.
        </p>
      </div>
    </section>
  )
}
