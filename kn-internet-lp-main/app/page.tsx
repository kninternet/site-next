import Link from 'next/link'
import { MapPin, Zap, HeadphonesIcon, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const diferenciais = [
  {
    icon: Zap,
    titulo: 'Instalação rápida',
    descricao: 'Agendamos e instalamos em poucos dias. Sem enrolação, sem espera de semanas.',
  },
  {
    icon: HeadphonesIcon,
    titulo: 'Suporte que atende',
    descricao: 'Quando você precisar, tem alguém do outro lado. Atendimento local, de verdade.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Sem burocracia',
    descricao: 'Sem fidelidade obrigatória, sem letras miúdas. Tudo simples e transparente.',
  },
  {
    icon: Clock,
    titulo: 'Fibra de verdade',
    descricao: 'Estrutura completa de provedor. Velocidade estável o dia todo, não só na hora da venda.',
  },
]

export default function Home() {
  return (
    <main className="bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-kn-blue/6 border border-kn-blue/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-kn-orange animate-pulse" />
              <span className="text-sm font-semibold text-kn-blue">
                Fibra óptica no seu bairro
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-kn-blue
                           leading-tight mb-6">
              Internet que funciona<br />
              <span className="text-kn-orange">de verdade</span>
            </h1>

            <p className="text-kn-blue/60 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Instalação rápida, suporte que atende e sem burocracia.
              Consulte a cobertura no seu endereço.
            </p>

            {/* Campo CEP */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <div className="relative flex-1">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-kn-blue/30" />
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  maxLength={9}
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200
                             text-kn-blue placeholder:text-kn-blue/30 text-sm font-medium
                             focus:outline-none focus:border-kn-orange focus:ring-2
                             focus:ring-kn-orange/10 transition-all"
                />
              </div>
              <Button
                asChild
                className="h-12 px-6 bg-kn-orange hover:bg-kn-orange/90 text-white
                           font-semibold rounded-xl shadow-lg shadow-kn-orange/25
                           hover:shadow-kn-orange/40 hover:scale-105 transition-all
                           whitespace-nowrap"
              >
                <Link href="/cobertura">
                  Ver planos
                </Link>
              </Button>
            </div>

            <p className="text-xs text-kn-blue/35">
              Ou{' '}
              <Link href="/cobertura" className="text-kn-orange hover:underline font-medium">
                selecione sua cidade
              </Link>
              {' '}para ver os planos disponíveis
            </p>

          </div>
        </div>
      </section>

      {/* ── Diferenciais ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-gray-50/60">
        <div className="container mx-auto px-5 max-w-5xl">

          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-3">
              Por que a KN Internet?
            </h2>
            <p className="text-kn-blue/55 text-lg max-w-lg mx-auto">
              Diferente dos outros provedores da região.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferenciais.map((d) => (
              <div
                key={d.titulo}
                className="bg-white rounded-2xl p-6 border border-gray-200
           hover:border-kn-orange/30 hover:shadow-md transition-all group shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-kn-blue/6 flex items-center
                                justify-center mb-4 group-hover:bg-kn-orange/10 transition-colors">
                  <d.icon className="w-5 h-5 text-kn-blue/50 group-hover:text-kn-orange transition-colors" />
                </div>
                <h3 className="font-bold text-kn-blue mb-1.5">{d.titulo}</h3>
                <p className="text-sm text-kn-blue/55 leading-relaxed">{d.descricao}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Como funciona ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-4xl">

          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-3">
              Como funciona
            </h2>
            <p className="text-kn-blue/55 text-lg">
              Três passos para ter internet de qualidade em casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '1', titulo: 'Consulte a cobertura', desc: 'Informe seu CEP ou selecione sua cidade para ver os planos disponíveis no seu endereço.' },
              { num: '2', titulo: 'Escolha seu plano', desc: 'Planos com preços justos para o seu bairro. Sem surpresas na fatura.' },
              { num: '3', titulo: 'Agendamos a instalação', desc: 'Nossa equipe instala rapidinho. Você fica com a internet funcionando no mesmo dia.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-kn-blue flex items-center
                                justify-center mx-auto mb-5 shadow-lg shadow-kn-blue/15">
                  <span className="text-2xl font-extrabold font-display text-white">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-kn-blue mb-2">{step.titulo}</h3>
                <p className="text-sm text-kn-blue/55 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-kn-blue">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            A KN Internet atende<br />no seu bairro?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Consulte agora e veja os planos disponíveis para o seu endereço.
          </p>
          <Button
            asChild
            className="h-13 px-8 bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold
                       rounded-xl shadow-xl shadow-kn-orange/30 hover:scale-105 transition-all text-base"
          >
            <Link href="/cobertura">
              Verificar cobertura
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  )
}