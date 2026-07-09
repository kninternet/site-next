'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CIDADES } from '@/lib/coverage-data'
import { MapPin, Search, ArrowRight, ShieldCheck } from 'lucide-react'

export function Hero() {
  const router = useRouter()
  const [cep, setCep] = useState('')

  function formatCep(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`
    return digits
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const query = cep.replace(/\D/g, '')
    router.push(query ? `/cobertura?cep=${query}` : '/cobertura')
  }

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-40 lg:pb-28">
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-kn-blue/[0.04] blur-3xl" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-kn-orange/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-kn-blue/10 bg-kn-blue/[0.04] px-4 py-1.5">
          <ShieldCheck className="h-4 w-4 text-kn-orange" />
          <span className="text-sm font-medium text-kn-blue/80">
            Fibra óptica com rede própria no RJ
          </span>
        </div>

        <h1 className="mt-7 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-kn-blue sm:text-5xl lg:text-6xl">
          Internet que funciona de verdade.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-kn-blue/60">
          A internet da sua casa merece estabilidade, suporte de verdade e instalação
          rápida. Consulte agora a cobertura disponível para o seu endereço.
        </p>

        {/* CEP form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-kn-blue/35" />
            <input
              type="text"
              inputMode="numeric"
              value={cep}
              onChange={(e) => setCep(formatCep(e.target.value))}
              placeholder="Digite seu CEP"
              aria-label="Digite seu CEP"
              className="h-14 w-full rounded-2xl border border-kn-blue/12 bg-white pl-12 pr-4 text-base text-kn-blue shadow-sm outline-none transition-colors placeholder:text-kn-blue/40 focus:border-kn-orange/60 focus:ring-4 focus:ring-kn-orange/10"
            />
          </div>
          <Button
            type="submit"
            className="h-14 shrink-0 rounded-2xl bg-kn-orange px-7 text-base font-semibold text-white shadow-lg shadow-kn-orange/20 transition-colors hover:bg-kn-orange-dark"
          >
            <Search className="h-5 w-5" />
            Verificar cobertura
          </Button>
        </form>

        {/* City quick-select */}
        <div className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-3">
          <span className="text-sm text-kn-blue/45">ou selecione sua cidade</span>
          <div className="flex flex-wrap justify-center gap-2">
            {CIDADES.map((cidade) => (
              <Button
                key={cidade.slug}
                asChild
                variant="outline"
                size="sm"
                className="group rounded-full border-kn-blue/12 bg-white text-sm font-medium text-kn-blue/75 hover:border-kn-orange/40 hover:bg-orange-50/50 hover:text-kn-blue"
              >
                <a href={`/cobertura/${cidade.slug}`}>
                  {cidade.nome}
                  <ArrowRight className="h-3.5 w-3.5 text-kn-blue/30 transition-transform group-hover:translate-x-0.5 group-hover:text-kn-orange" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
