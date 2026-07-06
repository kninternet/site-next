'use client'

import { Button } from '@/components/ui/button'
import { Gauge, Receipt, CreditCard, HeadphonesIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const features = [
  { icon: Gauge,           title: 'Teste de velocidade',  description: 'Verifique a velocidade da sua conexão em tempo real.' },
  { icon: Receipt,         title: 'Acesso às faturas',    description: 'Consulte e baixe suas faturas a qualquer momento.' },
  { icon: CreditCard,      title: 'Pagamento facilitado', description: 'Pague suas faturas diretamente pelo app.' },
  { icon: HeadphonesIcon,  title: 'Suporte integrado',    description: 'Abra chamados e acompanhe o atendimento.' },
]

export function AppSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="app" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Decoração */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-kn-orange/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-kn-blue/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Mockup do celular */}
          <div
            className={`order-2 lg:order-1 flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative">
              {/* Glow de fundo */}
              <div className="absolute -inset-10 bg-gradient-to-r from-kn-orange/15 to-kn-blue/10 rounded-[5rem] blur-3xl -z-10 animate-pulse-glow" />

              {/* Frame do telefone */}
              <div className="w-[260px] h-[520px] bg-kn-blue rounded-[3rem] border-[7px] border-kn-blue
                              shadow-2xl shadow-kn-blue/40 overflow-hidden relative animate-float">

                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/80 rounded-full z-10" />

                {/* Tela */}
                <div className="absolute inset-[3px] bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="mt-12 px-4 py-3">

                    {/* App Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">Olá,</p>
                        <p className="text-sm font-bold text-kn-blue font-display">Cliente KN</p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-kn-orange to-kn-orange/80
                                      flex items-center justify-center shadow-lg shadow-kn-orange/25">
                        <span className="text-white font-extrabold text-xs">KN</span>
                      </div>
                    </div>

                    {/* Speed card */}
                    <div className="bg-gradient-to-br from-kn-blue to-kn-blue/80 rounded-2xl p-4 mb-4 text-white shadow-lg">
                      <p className="text-[10px] text-white/60 mb-1 font-medium">Sua velocidade</p>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-3xl font-extrabold font-display">450</span>
                        <span className="text-sm text-white/70">Mbps</span>
                      </div>
                      <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                        <div className="h-full w-[75%] bg-kn-orange rounded-full animate-pulse" />
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-700 font-medium">Conexão estável</span>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { icon: Gauge,          label: 'Velocidade' },
                        { icon: Receipt,        label: 'Faturas' },
                        { icon: CreditCard,     label: 'Pagar' },
                        { icon: HeadphonesIcon, label: 'Suporte' },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors">
                          <item.icon className="w-4 h-4 text-kn-orange mx-auto mb-1" />
                          <p className="text-[10px] text-kn-blue/65 font-medium">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy + features */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-5 tracking-tight">
              Tudo na{' '}
              <span className="text-kn-orange">palma da mão</span>
            </h2>
            <p className="text-lg text-kn-blue/55 mb-10 leading-relaxed">
              Baixe nosso aplicativo e tenha controle total da sua conexão,
              faturas e suporte diretamente do seu celular.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 group transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${i * 90 + 300}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-kn-orange/10 flex items-center justify-center flex-shrink-0
                                  group-hover:bg-kn-orange/20 group-hover:scale-110 transition-all">
                    <f.icon className="w-5 h-5 text-kn-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-kn-blue font-display text-sm">{f.title}</h3>
                    <p className="text-sm text-kn-blue/55 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Google Play */}
              <Button
                asChild
                className="h-14 px-6 bg-kn-blue hover:bg-kn-blue/90 text-white font-semibold
                           shadow-lg shadow-kn-blue/25 hover:shadow-kn-blue/40
                           hover:scale-105 transition-all rounded-xl"
              >
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] opacity-60 leading-none">Disponível no</p>
                    <p className="text-sm font-semibold leading-tight mt-0.5">Google Play</p>
                  </div>
                </a>
              </Button>

              {/* App Store */}
              <Button
                asChild
                className="h-14 px-6 bg-kn-blue hover:bg-kn-blue/90 text-white font-semibold
                           shadow-lg shadow-kn-blue/25 hover:shadow-kn-blue/40
                           hover:scale-105 transition-all rounded-xl"
              >
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] opacity-60 leading-none">Baixe na</p>
                    <p className="text-sm font-semibold leading-tight mt-0.5">App Store</p>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
