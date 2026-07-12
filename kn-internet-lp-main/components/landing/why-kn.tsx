'use client'

import { useEffect, useState } from 'react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const features = [
  {
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?w=600&q=80',
    title: 'Instalação rápida',
    text: 'Agendamos sua instalação em poucos dias, com técnicos da região.',
  },
  {
    img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80',
    title: 'Atendimento de verdade',
    text: 'Você fala com pessoas. Sem robôs, sem burocracia e sem espera infinita.',
  },
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    title: 'Rede própria',
    text: 'Infraestrutura própria de fibra óptica que garante muito mais estabilidade.',
  },
  {
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    title: 'Transparência',
    text: 'Sem letras miúdas e sem surpresas na fatura. Tudo claro desde o início.',
  },
]

const cidades = [
  'do Rio de Janeiro',
  'de São Gonçalo',
  'de Duque de Caxias',
  'de Queimados',
]

export function WhyKN() {
  const [cidadeIdx, setCidadeIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    fetch('https://ip-api.com/json/?fields=city&lang=pt-BR')
      .then((r) => r.json())
      .then((data) => {
        if (data?.city) {
          const idx = cidades.findIndex(c =>
            c.toLowerCase().includes(data.city.toLowerCase())
          )
          if (idx >= 0) setCidadeIdx(idx)
        }
      })
      .catch(() => {})

    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCidadeIdx((i) => (i + 1) % cidades.length)
        setVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="diferenciais" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            O que faz da KN a melhor internet{' '}
            <span className={`text-kn-orange transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              {cidades[cidadeIdx]}?
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Acreditamos que tempo é o bem mais valioso. Por isso, a KN Internet tem como
            prioridade o respeito ao seu tempo. Hoje, menos de 5% das instalações
            ultrapassam 24h. No suporte, nossa IA resolve a maioria das necessidades em
            minutos — e sempre com um atendente humano avaliando cada conversa, pronto
            para agir quando necessário.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {features.map(({ img, title, text }) => (
            <RevealItem
              key={title}
              className="group overflow-hidden rounded-3xl border border-kn-blue/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-kn-blue/10"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-kn-blue">{title}</h3>
                <p className="mt-2 leading-relaxed text-kn-blue/60">{text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </section>
  )
}