'use client'

import { Bot, MapPinned, UserCheck, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const differentials = [
  {
    icon: Bot,
    title: 'WhatsApp 24h com IA + humanos',
    description: 'Atendimento automatizado inteligente combinado com suporte humano sempre que precisar.',
  },
  {
    icon: MapPinned,
    title: 'Provedor local no RJ',
    description: 'Conhecemos as necessidades da região e oferecemos soluções personalizadas.',
  },
  {
    icon: UserCheck,
    title: 'Suporte dedicado',
    description: 'Equipe exclusiva para acompanhar sua experiência do início ao fim.',
  },
  {
    icon: Wrench,
    title: 'Instalação facilitada',
    description: 'Processo rápido e sem burocracia, com agendamento flexível.',
  },
]

const stats = [
  { value: '24h',  label: 'Suporte disponível', highlight: false },
  { value: '100%', label: 'Fibra óptica',       highlight: false },
  { value: 'RJ',   label: 'Provedor local',      highlight: false },
  { value: '+5k',  label: 'Clientes satisfeitos', highlight: true },
]

export function Differentials() {
  const [visible, setVisible] = useState(false)
  const [statsOn, setStatsOn] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        setTimeout(() => setStatsOn(true), 300)
      }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-kn-blue relative overflow-hidden">

      {/* Decoração */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-kn-orange/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Esquerda: copy */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              O que nos torna{' '}
              <span className="text-kn-orange">diferentes</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Mais do que um provedor de internet, somos parceiros do seu dia a dia digital
            </p>

            <div className="space-y-7">
              {differentials.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 group transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${i * 90 + 200}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-kn-orange/20 group-hover:scale-110 transition-all">
                    <item.icon className="w-5 h-5 text-kn-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-0.5 font-display text-sm">{item.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita: stats + foto */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105
                              ${s.highlight
                                ? 'bg-kn-orange shadow-xl shadow-kn-orange/30'
                                : 'bg-white/[0.09] backdrop-blur-sm border border-white/15 hover:bg-white/[0.14]'}
                              ${statsOn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${i * 90 + 400}ms` }}
                >
                  <p className={`text-4xl font-extrabold mb-1.5 font-display ${s.highlight ? 'text-white' : 'text-kn-orange'}`}>
                    {s.value}
                  </p>
                  <p className={`text-sm ${s.highlight ? 'text-white/80' : 'text-white/55'}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Foto de fibra / cidade RJ */}
            <div className="relative rounded-2xl overflow-hidden h-52 shadow-2xl shadow-kn-blue/30">
              <Image
                src="https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80&auto=format&fit=crop"
                alt="Infraestrutura de fibra óptica no Rio de Janeiro"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-kn-blue/60 to-transparent" />
              <div className="absolute left-5 bottom-5">
                <p className="text-white font-bold text-base font-display">Rio de Janeiro</p>
                <p className="text-white/60 text-xs">Cobertura em expansão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
