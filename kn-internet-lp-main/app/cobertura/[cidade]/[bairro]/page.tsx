import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBairro, getCidade, CIDADES, VENCIMENTOS } from '@/lib/coverage-data'
import { MapPin, ArrowLeft, Check, Zap, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  return CIDADES.flatMap((c) =>
    c.bairros.map((b) => ({ cidade: c.slug, bairro: b.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cidade: string; bairro: string }>
}) {
  const { cidade: cidadeSlug, bairro: bairroSlug } = await params
  const cidade = getCidade(cidadeSlug)
  const bairro = getBairro(cidadeSlug, bairroSlug)
  if (!cidade || !bairro) return {}
  const menorPreco = Math.min(...bairro.planos.map((p) => p.preco))
  return {
    title: `Internet Fibra em ${bairro.nome}, ${cidade.nome} | KN Internet`,
    description: `Planos de internet fibra óptica a partir de R$${menorPreco.toFixed(2).replace('.', ',')} em ${bairro.nome}, ${cidade.nome}. Instalação rápida e suporte local.`,
  }
}

export default async function BairroPage({
  params,
}: {
  params: Promise<{ cidade: string; bairro: string }>
}) {
  const { cidade: cidadeSlug, bairro: bairroSlug } = await params
  const cidade = getCidade(cidadeSlug)
  const bairro = getBairro(cidadeSlug, bairroSlug)
  if (!cidade || !bairro) notFound()

  const menorPreco = Math.min(...bairro.planos.map((p) => p.preco))

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-5 max-w-4xl">

        {/* Voltar */}
        <Link
          href={cidade.bairros.length > 1 ? `/cobertura/${cidade.slug}` : '/cobertura'}
          className="inline-flex items-center gap-2 text-sm text-kn-blue/50 hover:text-kn-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {cidade.bairros.length > 1 ? cidade.nome : 'Todas as cidades'}
        </Link>

        {/* Cabeçalho */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kn-blue/6 border border-kn-blue/10 mb-5">
            <MapPin className="w-4 h-4 text-kn-orange" />
            <span className="text-sm font-semibold text-kn-blue">
              {bairro.nome}, {cidade.nome}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-kn-blue mb-3">
            Planos disponíveis no seu bairro
          </h1>
          <p className="text-kn-blue/60 text-lg">
            A partir de{' '}
            <span className="text-kn-orange font-semibold">
              R${menorPreco.toFixed(2).replace('.', ',')}/mês
            </span>
            {' '}com instalação rápida e suporte local.
          </p>
        </div>

        {/* Cards de planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {bairro.planos.map((plano) => (
            <div
              key={plano.id}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all
                ${plano.destaque
                  ? 'border-kn-orange/50 bg-kn-blue shadow-xl shadow-kn-blue/10'
                  : 'border-gray-100 bg-white hover:border-kn-orange/30 hover:shadow-md'
                }`}
            >
              {/* Badge destaque */}
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-kn-orange text-white text-xs font-bold shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Mais escolhido
                </div>
              )}

              {/* Nome e velocidade */}
              <div className="mb-5">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2
                  ${plano.destaque ? 'text-white/50' : 'text-kn-blue/40'}`}>
                  {plano.nome}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-extrabold font-display
                    ${plano.destaque ? 'text-kn-orange' : 'text-kn-blue'}`}>
                    {plano.velocidade}
                  </span>
                  <span className={`text-xl font-bold
                    ${plano.destaque ? 'text-kn-orange/70' : 'text-kn-blue/50'}`}>
                    Mbps
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className={`text-sm ${plano.destaque ? 'text-white/50' : 'text-kn-blue/40'}`}>R$</span>
                  <span className={`text-3xl font-extrabold font-display
                    ${plano.destaque ? 'text-white' : 'text-kn-blue'}`}>
                    {plano.preco.toFixed(2).replace('.', ',')}
                  </span>
                  <span className={`text-sm ${plano.destaque ? 'text-white/50' : 'text-kn-blue/40'}`}>/mês</span>
                </div>
              </div>

              {/* Divisor */}
              <div className={`h-px mb-5 ${plano.destaque ? 'bg-white/10' : 'bg-gray-100'}`} />

              {/* Recursos */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plano.recursos.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                      ${plano.destaque ? 'bg-kn-orange/20' : 'bg-kn-blue/6'}`}>
                      <Check className={`w-3 h-3 ${plano.destaque ? 'text-kn-orange' : 'text-kn-blue'}`} />
                    </div>
                    <span className={`text-sm leading-snug
                      ${plano.destaque ? 'text-white/75' : 'text-kn-blue/65'}`}>
                      {r}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full h-11 font-semibold rounded-xl transition-all
                  ${plano.destaque
                    ? 'bg-kn-orange hover:bg-kn-orange/90 text-white shadow-lg shadow-kn-orange/30'
                    : 'bg-kn-blue hover:bg-kn-blue/90 text-white'
                  }`}
              >
                <Link
                  href={`/contratar?cidade=${cidadeSlug}&bairro=${bairroSlug}&plano=${plano.id}&utm_source=cobertura`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Contratar este plano
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Nota taxa instalação */}
        <p className="text-center text-sm text-kn-blue/40">
          Taxa de instalação: R$150,00 via PIX · Equipamentos inclusos
        </p>

      </div>
    </main>
  )
}