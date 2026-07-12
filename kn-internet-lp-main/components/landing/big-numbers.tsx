import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'
import { CtaFiber } from '@/components/motion/fiber'


const stats = [
  { value: '+5.000', label: 'Clientes conectados' },
  { value: '99,9%', label: 'Disponibilidade da rede' },
  { value: '24h', label: 'Monitoramento' },
  { value: '+15', label: 'Bairros atendidos' },
  { value: '+300 km', label: 'Fibra instalada' },
  { value: '< 30 min', label: 'Tempo médio de atendimento' },
]

export function BigNumbers() {
  return (
    <section className="relative overflow-hidden bg-kn-blue py-20 lg:py-24">
      <CtaFiber className="absolute inset-0 h-full w-full" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Números que constroem confiança.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/60">
            Com infraestrutura 100%, as bases para consultas no sistema podiam intergar tudo, embaladinho na escola 
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-kn-orange/40 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-2 text-sm font-medium text-white/60">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}