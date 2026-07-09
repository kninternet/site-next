import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Quem somos', href: '/#diferenciais' },
      { label: 'Cobertura', href: '/cobertura' },
      { label: 'Planos', href: '/cobertura' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Status da rede', href: '/#autoatendimento' },
    ],
  },
  {
    title: 'Central do Assinante',
    links: [
      { label: 'Segunda via', href: '/#autoatendimento' },
      { label: 'PIX Copia e Cola', href: '/#autoatendimento' },
      { label: 'Abrir chamado', href: '/#autoatendimento' },
      { label: 'Transparência', href: '/#faq' },
      { label: 'LGPD', href: '/#faq' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-kn-blue">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image
              src="/images/kn-logo-white.png"
              alt="KN Internet"
              width={150}
              height={50}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-white/55">
              Internet fibra óptica com rede própria, instalação rápida e atendimento
              humano no Rio de Janeiro e região.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/40">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/70 transition-colors hover:text-kn-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/40">
              Contato
            </h3>
            <a
              href="https://wa.me/5521967797580"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-[15px] font-medium text-white transition-colors hover:bg-kn-orange"
            >
              <MessageCircle className="h-4 w-4" />
              Fale pelo WhatsApp
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram da KN Internet"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-kn-orange hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook da KN Internet"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-kn-orange hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} KN Internet. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/45">Fibra óptica com rede própria no RJ</p>
        </div>
      </div>
    </footer>
  )
}
