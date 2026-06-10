'use client'

import { Cable, Gauge, HeadphonesIcon, Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const benefits = [
  {
    icon: Cable,
    title: 'Fibra óptica real',
    description: 'Conexão 100% fibra óptica até sua casa, garantindo máxima estabilidade e velocidade.',
  },
  {
    icon: Gauge,
    title: 'Baixa latência',
    description: 'Ping reduzido ideal para jogos online, videochamadas e streaming sem travamentos.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte técnico rápido',
    description: 'Equipe técnica especializada pronta para resolver qualquer problema rapidamente.',
  },
  {
    icon: Heart,
    title: 'Atendimento humanizado',
    description: 'Fale com pessoas reais que entendem suas necessidades e buscam a melhor solução.',
  },
]

export function Benefits() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="beneficios" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Manchas decorativas */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-kn-orange/[0.05] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-kn-blue/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">

        {/* Título */}
        <div
          className={`text-center mb-14 md:mb-18 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-4 tracking-tight">
            Por que escolher a{' '}
            <span className="text-kn-orange">KN Internet</span>?
          </h2>
          <p className="text-lg text-kn-blue/55 max-w-xl mx-auto">
            Compromisso com qualidade e satisfação do cliente em primeiro lugar
          </p>
        </div>

        {/* Grid cards + imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">

          {/* Cards 2×2 */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-white border border-gray-100
                            shadow-xl shadow-black/[0.04]
                            hover:shadow-2xl hover:shadow-kn-orange/10 hover:-translate-y-2
                            transition-all duration-500
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kn-orange to-kn-orange/80
                                flex items-center justify-center mb-5
                                group-hover:scale-110 group-hover:rotate-3
                                transition-all shadow-lg shadow-kn-orange/25">
                  <b.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-kn-blue mb-2 font-display">{b.title}</h3>
                <p className="text-sm text-kn-blue/55 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>

          {/* Imagem lateral */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-kn-blue/15 h-[420px] lg:h-full min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=85&auto=format&fit=crop"
                alt="Equipe de suporte humanizado KN Internet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kn-blue/50 via-transparent to-transparent" />

              {/* Badge sobre a imagem */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-kn-orange/15 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-kn-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-kn-blue font-display">Atendimento humanizado</p>
                    <p className="text-xs text-kn-blue/55">Pessoas reais, respostas reais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
