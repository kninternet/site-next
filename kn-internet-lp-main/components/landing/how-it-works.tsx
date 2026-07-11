import { MapPin, ListChecks, MousePointerClick, CalendarCheck, Wifi } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const steps = [
  { icon: MapPin, title: 'Informe seu CEP', text: 'Consulte a cobertura no seu endereço.' },
  { icon: ListChecks, title: 'Veja os planos', text: 'Mostramos as opções disponíveis na sua região.' },
  { icon: MousePointerClick, title: 'Escolha seu plano', text: 'Selecione o que combina com você.' },
  { icon: CalendarCheck, title: 'Agendamos a instalação', text: 'Marcamos a visita técnica em poucos dias.' },
  { icon: Wifi, title: 'Você navega', text: 'Pronto: é só conectar e aproveitar.' },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-kn-blue/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Da consulta à conexão em cinco passos simples.
          </p>
        </Reveal>

        <RevealGroup as="ol" stagger={0.1} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <RevealItem
              as="li"
              key={title}
              className="group relative rounded-3xl border border-kn-blue/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kn-orange/25 hover:shadow-xl hover:shadow-kn-blue/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kn-orange/10 transition-colors duration-300 group-hover:bg-kn-orange/15">
                  <Icon className="h-5 w-5 text-kn-orange transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                </span>
                <span className="font-display text-3xl font-extrabold text-kn-blue/10 transition-colors duration-300 group-hover:text-kn-orange/25">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-kn-blue">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-kn-blue/55">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
