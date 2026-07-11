import { Zap, HeartHandshake, Network, FileCheck } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const features = [
  {
    icon: Zap,
    title: 'Instalação rápida',
    text: 'Agendamos sua instalação em poucos dias, com técnicos da região.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento de verdade',
    text: 'Você fala com pessoas. Sem robôs, sem burocracia e sem espera infinita.',
  },
  {
    icon: Network,
    title: 'Rede própria',
    text: 'Infraestrutura própria de fibra óptica que garante muito mais estabilidade.',
  },
  {
    icon: FileCheck,
    title: 'Transparência',
    text: 'Sem letras miúdas e sem surpresas na fatura. Tudo claro desde o início.',
  },
]

export function WhyKN() {
  return (
    <section id="diferenciais" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Por que escolher a KN?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Mais do que velocidade. Nossa prioridade é entregar estabilidade, atendimento
            e uma experiência simples para nossos clientes.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <RevealItem
              key={title}
              className="group rounded-3xl border border-kn-blue/8 bg-kn-blue/[0.015] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-kn-orange/25 hover:bg-orange-50/30 hover:shadow-xl hover:shadow-kn-blue/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-kn-blue/[0.06] transition-colors duration-300 group-hover:bg-kn-orange/10">
                <Icon className="h-6 w-6 text-kn-blue transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-kn-orange" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-kn-blue">{title}</h3>
              <p className="mt-2 leading-relaxed text-kn-blue/60">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
