import { Cable, Network, Zap, Headset } from 'lucide-react'
import { RevealGroup, RevealItem } from '@/components/motion/reveal'

const items = [
  { icon: Cable, label: 'Fibra de ponta a ponta' },
  { icon: Network, label: 'Rede própria' },
  { icon: Zap, label: 'Instalação em até 24h' },
  { icon: Headset, label: 'Atendimento 24h' },
]

export function DifferentialsBar() {
  return (
    <section className="py-6 lg:py-8">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <RevealGroup
          as="ul"
          stagger={0.06}
          className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        >
          {items.map(({ icon: Icon, label }) => (
            <RevealItem
              as="li"
              key={label}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-kn-blue px-4 py-5 text-center shadow-md shadow-kn-blue/20"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-5 w-5 text-kn-orange" />
              </span>
              <span className="text-sm font-semibold text-white leading-tight">{label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}