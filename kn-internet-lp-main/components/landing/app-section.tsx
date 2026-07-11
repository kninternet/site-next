import Image from 'next/image'
import { Receipt, QrCode, Ticket, Bell, Activity, Check } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const perks = [
  { icon: Receipt, label: 'Emitir boletos' },
  { icon: QrCode, label: 'Copiar PIX' },
  { icon: Ticket, label: 'Abrir chamados' },
  { icon: Bell, label: 'Receber notificações' },
  { icon: Activity, label: 'Consultar sua conexão' },
]

export function AppSection() {
  return (
    <section id="app" className="scroll-mt-24 bg-kn-blue/[0.02] py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image */}
        <Reveal className="relative order-last flex justify-center lg:order-first" y={24}>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto h-72 w-72 self-center rounded-full bg-kn-orange/10 blur-3xl animate-pulse-glow"
          />
          <Image
            src="/images/kn-app-mockup.png"
            alt="Aplicativo da KN Internet exibido em um smartphone"
            width={520}
            height={520}
            className="w-full max-w-md drop-shadow-xl animate-float"
          />
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
              A KN vai com você.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
              Tenha acesso à sua conta diretamente pelo aplicativo, onde e quando precisar.
            </p>
          </Reveal>

          <RevealGroup as="ul" stagger={0.08} className="mt-8 flex flex-col gap-3">
            {perks.map(({ icon: Icon, label }) => (
              <RevealItem as="li" key={label} className="group flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kn-orange/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-4 w-4 text-kn-orange" />
                </span>
                <span className="font-medium text-kn-blue/80">{label}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-kn-blue px-6 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kn-blue-mid hover:shadow-lg hover:shadow-kn-blue/20"
            >
              <Check className="h-4 w-4 text-kn-orange" />
              Google Play
            </a>
            <a
              href="#"
              className="group flex items-center justify-center gap-2 rounded-2xl border border-kn-blue/15 bg-white px-6 py-3.5 font-semibold text-kn-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-kn-blue/30 hover:shadow-lg hover:shadow-kn-blue/5"
            >
              <Check className="h-4 w-4 text-kn-orange" />
              App Store
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
