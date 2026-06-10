import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, ExternalLink, Wifi } from 'lucide-react'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/kninternetrj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/kninternetrj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    href: 'https://threads.net/@kninternetrj',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.014-3.532.871-6.407 2.549-8.557C5.898 1.188 8.67.007 12.262.007h.02c2.065.012 3.948.493 5.596 1.435 1.544.883 2.809 2.156 3.762 3.783l-1.782.97c-.76-1.29-1.775-2.293-3.019-2.978-1.322-.726-2.84-1.096-4.513-1.1h-.016c-2.91.003-5.1.928-6.51 2.748-1.323 1.71-1.995 4.1-2.001 7.11v.037c.011 3.002.697 5.377 2.04 7.063 1.418 1.78 3.62 2.685 6.546 2.69h.007c2.498-.006 4.468-.655 5.853-1.929.744-.686 1.319-1.525 1.71-2.492.386-.954.583-2.022.583-3.169v-.052c0-.157-.004-.31-.01-.458a5.1 5.1 0 0 0-2.236-3.912c-.712-.472-1.517-.782-2.394-.92a9.17 9.17 0 0 0-1.478-.124c-1.476 0-2.84.336-4.054.998a6.66 6.66 0 0 0-2.798 2.782l1.68.932a4.785 4.785 0 0 1 2.003-1.983c.875-.475 1.886-.716 3.003-.716.398 0 .803.032 1.2.096.629.1 1.2.283 1.7.545a3.21 3.21 0 0 1 1.409 2.47 6.05 6.05 0 0 1 .007.446v.04c0 .853-.145 1.65-.43 2.365-.283.707-.705 1.322-1.254 1.83-1.008.93-2.553 1.402-4.59 1.406h-.007z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer id="contato" className="py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Logo & description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
                <div className="w-8 h-8 rounded-[8px] bg-kn-orange flex items-center justify-center
                                shadow-md shadow-kn-orange/25 group-hover:scale-105 transition-transform">
                  <Wifi className="w-4 h-4 text-white" />
                </div>
                <Image
                  src="/images/logo-kn.png"
                  alt="KN Internet"
                  width={100}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-kn-blue/55 leading-relaxed">
                Provedor de internet fibra óptica com atendimento humanizado e suporte local no Rio de Janeiro.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bold text-kn-blue mb-5 font-display text-sm">Contato</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+552139001837"
                    className="flex items-center gap-2 text-sm text-kn-blue/55 hover:text-kn-orange transition-colors group">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    (21) 3900-1837
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5521967797580" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-kn-blue/55 hover:text-kn-orange transition-colors group">
                    <svg className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    (21) 96779-7580
                  </a>
                </li>
                <li>
                  <a href="mailto:atendimento@kninternet.com.br"
                    className="flex items-center gap-2 text-sm text-kn-blue/55 hover:text-kn-orange transition-colors group">
                    <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    atendimento@kninternet.com.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Links úteis */}
            <div>
              <h3 className="font-bold text-kn-blue mb-5 font-display text-sm">Links Úteis</h3>
              <ul className="space-y-3">
                {[
                  { href: 'https://central.kninternet.com.br', label: 'Central do Cliente' },
                  { href: 'https://sac.kninternet.com.br',     label: 'SAC' },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-kn-blue/55 hover:text-kn-orange transition-colors group">
                      <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-bold text-kn-blue mb-5 font-display text-sm">Redes Sociais</h3>
              <div className="flex gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100
                               flex items-center justify-center
                               text-kn-blue/55 hover:text-white hover:bg-kn-orange hover:border-kn-orange
                               hover:scale-110 transition-all shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-kn-blue/40">
              © {new Date().getFullYear()} KN Internet. Todos os direitos reservados.
            </p>
            <p className="text-xs text-kn-blue/30">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
