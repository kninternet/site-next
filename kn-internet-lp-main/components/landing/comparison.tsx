import { Check, X } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const rows = [
  { label: 'Atendimento local', kn: 'Time da sua região', market: 'Call center distante' },
  { label: 'Infraestrutura', kn: 'Rede própria de fibra', market: 'Infraestrutura terceirizada' },
  { label: 'Suporte', kn: 'WhatsApp e atendimento humano', market: 'Atendimento demorado' },
  { label: 'Instalação', kn: 'Rápida, em poucos dias', market: 'Longa espera' },
  { label: 'Transparência', kn: 'Sem letras miúdas', market: 'Pouca transparência' },
]

export function Comparison() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Internet boa vai além da velocidade.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Compare a experiência da KN com o padrão do mercado.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 overflow-hidden rounded-3xl border border-kn-blue/10"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-kn-blue/[0.02]">
            <div className="p-4 lg:p-5" />
            <div className="border-l border-kn-blue/10 bg-kn-orange/[0.06] p-4 text-center font-display text-base font-extrabold text-kn-blue lg:p-5">
              KN
            </div>
            <div className="border-l border-kn-blue/10 p-4 text-center font-display text-base font-bold text-kn-blue/50 lg:p-5">
              Mercado
            </div>
          </div>

          <RevealGroup stagger={0.07}>
            {rows.map((row, i) => (
              <RevealItem
                key={row.label}
                y={12}
                className={`group grid grid-cols-[1.2fr_1fr_1fr] items-stretch transition-colors ${
                  i % 2 === 1 ? 'bg-kn-blue/[0.015]' : 'bg-white'
                } hover:bg-kn-orange/[0.05]`}
              >
                <div className="flex items-center p-4 text-sm font-semibold text-kn-blue lg:p-5">
                  {row.label}
                </div>
                <div className="flex items-center gap-2 border-l border-kn-blue/10 bg-kn-orange/[0.04] p-4 lg:p-5">
                  <Check className="h-4 w-4 shrink-0 text-kn-orange transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-sm text-kn-blue/80">{row.kn}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-kn-blue/10 p-4 lg:p-5">
                  <X className="h-4 w-4 shrink-0 text-kn-blue/25" />
                  <span className="text-sm text-kn-blue/50">{row.market}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  )
}
