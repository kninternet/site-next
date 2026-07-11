import {
  LayoutDashboard,
  Receipt,
  QrCode,
  Ticket,
  MessageCircle,
  UserCog,
  FileText,
  Wallet,
} from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal'

const services = [
  { icon: LayoutDashboard, title: 'Central do Assinante' },
  { icon: Receipt, title: 'Segunda via do boleto' },
  { icon: QrCode, title: 'PIX Copia e Cola' },
  { icon: Ticket, title: 'Abrir chamado' },
  { icon: MessageCircle, title: 'WhatsApp' },
  { icon: UserCog, title: 'Atualizar cadastro' },
  { icon: FileText, title: 'Contratos' },
  { icon: Wallet, title: 'Histórico financeiro' },
]

export function SelfService() {
  return (
    <section id="autoatendimento" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Resolva tudo em poucos cliques
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Sua Central do Assinante foi pensada para facilitar o dia a dia.
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.05}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title }) => (
            <RevealItem key={title}>
              <button
                type="button"
                className="group flex w-full flex-col items-start gap-4 rounded-2xl border border-kn-blue/8 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-kn-orange/30 hover:shadow-lg hover:shadow-kn-blue/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-kn-blue/[0.06] transition-colors duration-300 group-hover:bg-kn-orange/10">
                  <Icon className="h-5 w-5 text-kn-blue transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-kn-orange" />
                </span>
                <span className="text-[15px] font-semibold text-kn-blue">{title}</span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
