import Link from 'next/link'
import { CIDADES } from '@/lib/coverage-data'
import { MapPin, ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Cobertura | KN Internet',
  description: 'Consulte as áreas atendidas pela KN Internet no Rio de Janeiro e cidades vizinhas.',
}

export default function CoberturaPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-5 max-w-3xl">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kn-blue/6 border border-kn-blue/10 mb-5">
            <MapPin className="w-4 h-4 text-kn-orange" />
            <span className="text-sm font-semibold text-kn-blue">Área de cobertura</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-3">
            Onde a KN Internet atende
          </h1>
          <p className="text-kn-blue/60 text-lg">
            Selecione sua cidade para ver os planos disponíveis no seu endereço.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {CIDADES.map((cidade) => (
            <div key={cidade.slug}>
              {cidade.bairros.length === 1 ? (
                <Link
                  href={`/cobertura/${cidade.slug}/${cidade.bairros[0].slug}`}
                  className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-kn-orange/40 hover:bg-orange-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-kn-blue/6 flex items-center justify-center group-hover:bg-kn-orange/10 transition-colors">
                      <MapPin className="w-5 h-5 text-kn-blue/50 group-hover:text-kn-orange transition-colors" />
                    </div>
                    <span className="font-semibold text-kn-blue">{cidade.nome}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-kn-blue/30 group-hover:text-kn-orange transition-colors" />
                </Link>
              ) : (
                <div>
                  <div className="flex items-center gap-3 px-5 py-3 mb-2">
                    <MapPin className="w-4 h-4 text-kn-orange" />
                    <span className="font-bold text-kn-blue">{cidade.nome}</span>
                  </div>
                  <div className="flex flex-col gap-2 pl-4">
                    {cidade.bairros.map((bairro) => (
                      <Link
                        key={bairro.slug}
                        href={`/cobertura/${cidade.slug}/${bairro.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-kn-orange/40 hover:bg-orange-50/40 transition-all group"
                      >
                        <span className="font-medium text-kn-blue/80 group-hover:text-kn-blue transition-colors">
                          {bairro.nome}
                        </span>
                        <ChevronRight className="w-4 h-4 text-kn-blue/30 group-hover:text-kn-orange transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}