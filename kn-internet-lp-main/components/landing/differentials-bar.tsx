import { Cable, Network, Zap, Users, Headset } from 'lucide-react'

const items = [
  { icon: Cable, label: 'Fibra óptica' },
  { icon: Network, label: 'Rede própria' },
  { icon: Zap, label: 'Instalação rápida' },
  { icon: Users, label: 'Atendimento local' },
  { icon: Headset, label: 'Suporte humano' },
]

export function DifferentialsBar() {
  return (
    <section className="border-y border-kn-blue/8 bg-kn-blue/[0.02]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:py-6">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center justify-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-kn-orange/10">
                <Icon className="h-[18px] w-[18px] text-kn-orange" />
              </span>
              <span className="text-sm font-semibold text-kn-blue/80">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
