'use client'

import { Calendar, CreditCard, UserCheck, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const steps = [
  { icon: CreditCard, title: 'Pagamento via PIX', description: 'Taxa única de R$150' },
  { icon: Calendar,   title: 'Agendamento rápido', description: 'Escolha o melhor dia' },
  { icon: UserCheck,  title: 'Técnicos profissionais', description: 'Equipe especializada' },
  { icon: Zap,        title: 'Ativação imediata', description: 'Navegue no mesmo dia' },
]

export function Installation() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Título */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-4 tracking-tight">
              Instalação{' '}
              <span className="text-kn-orange">simples e rápida</span>
            </h2>
            <p className="text-lg text-kn-blue/55">
              Em poucos passos você estará conectado à melhor fibra óptica do RJ
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Linha conectora */}
            <div
              className={`hidden md:block absolute top-10 left-[calc(12.5%+10px)] right-[calc(12.5%+10px)] h-0.5
                          bg-gradient-to-r from-kn-orange via-kn-orange to-kn-blue
                          transition-all duration-1000 origin-left
                          ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col items-center text-center group
                              transition-all duration-500
                              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 130}ms` }}
                >
                  {/* Número */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full
                                  bg-kn-orange text-white text-xs font-bold flex items-center justify-center
                                  z-20 shadow-md shadow-kn-orange/30">
                    {i + 1}
                  </div>

                  {/* Ícone */}
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-100
                                  shadow-xl shadow-black/[0.05] flex items-center justify-center mb-4
                                  relative z-10
                                  group-hover:scale-110 group-hover:shadow-2xl
                                  group-hover:shadow-kn-orange/12 group-hover:border-kn-orange/30
                                  transition-all duration-300">
                    <step.icon className="w-8 h-8 text-kn-orange group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-bold text-kn-blue text-sm mb-1 font-display">{step.title}</h3>
                  <p className="text-xs text-kn-blue/50">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card de preço */}
          <div
            className={`mt-14 p-8 rounded-3xl bg-white border border-kn-orange/15 text-center
                        shadow-xl shadow-kn-orange/[0.07] hover:shadow-2xl hover:shadow-kn-orange/12
                        transition-all duration-500
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '550ms' }}
          >
            <p className="text-kn-blue/50 text-sm mb-2 font-medium">Taxa de instalação</p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-extrabold text-kn-orange font-display">R$150</span>
              <span className="text-kn-blue/50 text-sm">via PIX</span>
            </div>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-kn-blue/55">
              {['Pagamento único', 'Equipamentos inclusos', 'Garantia de satisfação'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-kn-orange flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
