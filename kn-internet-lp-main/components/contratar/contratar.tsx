'use client'

import { useSearchParams } from 'next/navigation'
import { getBairro, getCidade, getPlano, VENCIMENTOS } from '@/lib/coverage-data'
import { ArrowLeft, ArrowRight, Check, MapPin, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export function Contratar() {
  const params = useSearchParams()

  const cidadeSlug = params.get('cidade')
  const bairroSlug = params.get('bairro')
  const planoId    = params.get('plano')

  const cidade = cidadeSlug ? getCidade(cidadeSlug) : null
  const bairro = (cidadeSlug && bairroSlug) ? getBairro(cidadeSlug, bairroSlug) : null
  const plano  = (cidadeSlug && bairroSlug && planoId) ? getPlano(cidadeSlug, bairroSlug, planoId) : null

  const temContexto = !!(cidade && bairro && plano)

  if (!temContexto) {
    return (
      <main className="min-h-screen bg-white pt-28 pb-20 flex items-center justify-center">
        <div className="text-center px-5">
          <p className="text-kn-blue/50 mb-4">Redirecionando para o cadastro...</p>
          <meta httpEquiv="refresh" content="0;url=https://cadastro.kninternet.com.br" />
        </div>
      </main>
    )
  }

  return <Step0 cidadeSlug={cidadeSlug!} bairroSlug={bairroSlug!} />
}

function Step0({
  cidadeSlug,
  bairroSlug,
}: {
  cidadeSlug: string
  bairroSlug: string
}) {
  const params   = useSearchParams()
  const planoId  = params.get('plano')!
  const cidade   = getCidade(cidadeSlug)!
  const bairro   = getBairro(cidadeSlug, bairroSlug)!
  const plano    = getPlano(cidadeSlug, bairroSlug, planoId)!

  const [vencimento, setVencimento] = useState<5 | 20>(5)
  const [aceiteTaxa, setAceiteTaxa] = useState(false)

  const voltarUrl = cidade.bairros.length > 1
    ? `/cobertura/${cidadeSlug}`
    : `/cobertura/${cidadeSlug}/${bairroSlug}`

  const proximoUrl = `https://cadastro.kninternet.com.br?cidade=${cidadeSlug}&bairro=${bairroSlug}&plano=${planoId}&vencimento=${vencimento}&utm_source=cobertura`

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-5 max-w-lg">

        <Link
          href={voltarUrl}
          className="inline-flex items-center gap-2 text-sm text-kn-blue/50 hover:text-kn-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Alterar plano
        </Link>

        <div className="flex items-center gap-2 mb-10">
          {['Plano', 'Dados', 'Endereço', 'Revisão'].map((label, i) => (
            <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                ${i === 0 ? 'bg-kn-orange text-white' : 'bg-gray-100 text-kn-blue/30'}`}>
                {i === 0 ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${i === 0 ? 'text-kn-blue' : 'text-kn-blue/30'}`}>
                {label}
              </span>
              {i < 3 && <div className="flex-1 h-px bg-gray-100" />}
            </div>
          ))}
        </div>

        <h1 className="font-display text-2xl font-extrabold text-kn-blue mb-2">
          Confirme seu plano
        </h1>
        <p className="text-kn-blue/50 text-sm mb-8">
          Revise as informações antes de prosseguir.
        </p>

        <div className="rounded-2xl border border-kn-orange/30 bg-orange-50/30 p-6 mb-6">

          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-kn-blue/6 mb-3">
                <MapPin className="w-3.5 h-3.5 text-kn-orange" />
                <span className="text-xs font-semibold text-kn-blue">
                  {bairro.nome}, {cidade.nome}
                </span>
              </div>
              <p className="text-xs text-kn-blue/40 uppercase tracking-widest font-semibold mb-1">
                {plano.nome}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold font-display text-kn-blue">
                  {plano.velocidade}
                </span>
                <span className="text-lg font-bold text-kn-blue/50">Mbps</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-kn-blue/40 mb-0.5">por mês</p>
              <p className="text-3xl font-extrabold font-display text-kn-orange">
                R${plano.preco.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>

          <div className="h-px bg-kn-orange/10 mb-4" />

          <div className="mb-4">
            <p className="text-sm font-semibold text-kn-blue mb-2">Dia de vencimento</p>
            <div className="flex gap-2">
              {VENCIMENTOS.map((v) => (
                <button
                  key={v}
                  onClick={() => setVencimento(v as 5 | 20)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all
                    ${vencimento === v
                      ? 'bg-kn-blue text-white border-kn-blue'
                      : 'bg-white text-kn-blue/60 border-gray-200 hover:border-kn-blue/30'
                    }`}
                >
                  Dia {v}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <div
              onClick={() => setAceiteTaxa(!aceiteTaxa)}
              className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-all
                ${aceiteTaxa ? 'bg-kn-orange border-kn-orange' : 'border-gray-300 group-hover:border-kn-orange/50'}`}
            >
              {aceiteTaxa && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="text-sm text-kn-blue/70 leading-snug">
              Estou ciente da taxa de instalação de{' '}
              <span className="font-semibold text-kn-blue">R$150,00 via PIX</span>
              {' '}cobrada no ato da instalação.
            </span>
          </label>
        </div>

        <Button
          asChild={aceiteTaxa}
          disabled={!aceiteTaxa}
          className="w-full h-12 bg-kn-orange hover:bg-kn-orange/90 text-white font-semibold rounded-xl shadow-lg shadow-kn-orange/25 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {aceiteTaxa ? (
            <a href={proximoUrl}>
              <Zap className="w-4 h-4 mr-2" />
              Continuar para dados pessoais
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          ) : (
            <span>
              <Zap className="w-4 h-4 mr-2" />
              Continuar para dados pessoais
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          )}
        </Button>

        <p className="text-center text-xs text-kn-blue/30 mt-4">
          Você será direcionado para o cadastro seguro da KN Internet
        </p>

      </div>
    </main>
  )
}