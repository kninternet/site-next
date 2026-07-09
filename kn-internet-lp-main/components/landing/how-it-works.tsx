import { MapPin, ListChecks, MousePointerClick, CalendarCheck, Wifi } from 'lucide-react'

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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Da consulta à conexão em cinco passos simples.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-kn-blue/8 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-kn-orange/10">
                  <Icon className="h-5 w-5 text-kn-orange" />
                </span>
                <span className="font-display text-3xl font-extrabold text-kn-blue/10">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-kn-blue">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-kn-blue/55">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
