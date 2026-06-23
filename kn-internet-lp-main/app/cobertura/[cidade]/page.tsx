import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCidade, CIDADES } from '@/lib/coverage-data'
import { MapPin, ChevronRight, ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return CIDADES.map((c) => ({ cidade: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidade(cidadeSlug)
  if (!cidade) return {}
  return {
    title: `Internet Fibra em ${cidade.nome} | KN Internet`,
    description: `Planos de internet fibra óptica em ${cidade.nome}. Instalação rápida, suporte local e sem burocracia.`,
  }
}

export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade: cidadeSlug } = await params
  const cidade = getCidade(cidadeSlug)
  if (!cidade) notFound()

  // Cidade com um único bairro — redireciona direto para o bairro
  if (cidade.bairros.length === 1) {
    const bairro = cidade.bairros[0]
    return (
      <meta httpEquiv="refresh" content={`0;url=/cobertura/${cidade.slug}/${bairro.slug}`} />
    )
  }

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-5 max-w-3xl">

        <Link
          href="/cobertura"
          className="inline-flex items-center gap-2 text-sm text-kn-blue/50 hover:text-kn-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Todas as cidades
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kn-blue/6 border border-kn-blue/10 mb-5">
            <MapPin className="w-4 h-4 text-kn-orange" />
            <span className="text-sm font-semibold text-kn-blue">{cidade.nome}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-3">
            Selecione seu bairro
          </h1>
          <p className="text-kn-blue/60 text-lg">
            Os planos e preços variam por bairro. Escolha o seu para ver as opções disponíveis.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {cidade.bairros.map((bairro) => (
            <Link
              key={bairro.slug}
              href={`/cobertura/${cidade.slug}/${bairro.slug}`}
              className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:border-kn-orange/40 hover:bg-orange-50/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-kn-blue/6 flex items-center justify-center group-hover:bg-kn-orange/10 transition-colors">
                  <MapPin className="w-5 h-5 text-kn-blue/50 group-hover:text-kn-orange transition-colors" />
                </div>
                <div>
                  <span className="font-semibold text-kn-blue block">{bairro.nome}</span>
                  <span className="text-sm text-kn-blue/40">
                    {bairro.planos.length} plano{bairro.planos.length > 1 ? 's' : ''} disponível{bairro.planos.length > 1 ? 'is' : ''}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-kn-blue/30 group-hover:text-kn-orange transition-colors" />
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}