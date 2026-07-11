import { Star } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const testimonials = [
  {
    quote:
      'Troquei de provedor e a diferença foi enorme. A conexão não cai e quando precisei do suporte, resolveram no mesmo dia.',
    name: 'Ana Paula',
    location: 'São Gonçalo',
  },
  {
    quote:
      'Instalação super rápida e o pessoal é da região, atende de verdade. Trabalho de casa e nunca mais tive problema.',
    name: 'Marcos Vinícius',
    location: 'Rio de Janeiro',
  },
  {
    quote:
      'O que mais gosto é a transparência. Sem surpresa na fatura e a internet entrega o que promete todos os dias.',
    name: 'Juliana Ferreira',
    location: 'Duque de Caxias',
  },
]

export function Testimonials() {
  return (
    <section className="bg-kn-blue/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Quem é KN, recomenda.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            A confiança de milhares de clientes conectados pela nossa rede.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              as="figure"
              className="group flex flex-col rounded-3xl border border-kn-blue/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-kn-orange/25 hover:shadow-xl hover:shadow-kn-blue/[0.06]"
            >
              <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-kn-orange text-kn-orange transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-kn-blue/75">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-kn-blue/8 pt-5">
                <div className="font-semibold text-kn-blue">{t.name}</div>
                <div className="text-sm text-kn-blue/50">{t.location}</div>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
