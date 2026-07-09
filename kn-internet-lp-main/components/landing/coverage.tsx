import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CIDADES } from '@/lib/coverage-data'
import { MapPin, ChevronRight } from 'lucide-react'

export function Coverage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-kn-blue/10 bg-kn-blue/[0.04] px-4 py-1.5">
            <MapPin className="h-4 w-4 text-kn-orange" />
            <span className="text-sm font-medium text-kn-blue/80">Área de cobertura</span>
          </div>
          <h2 className="mt-6 text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Estamos chegando cada vez mais longe.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Consulte as cidades e bairros atendidos pela nossa rede de fibra óptica.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {CIDADES.map((cidade) => (
            <Link
              key={cidade.slug}
              href={`/cobertura/${cidade.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-kn-blue/8 bg-white p-5 transition-all hover:border-kn-orange/30 hover:bg-orange-50/30"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-kn-blue/[0.06] transition-colors group-hover:bg-kn-orange/10">
                  <MapPin className="h-5 w-5 text-kn-blue/60 transition-colors group-hover:text-kn-orange" />
                </span>
                <div>
                  <div className="font-semibold text-kn-blue">{cidade.nome}</div>
                  <div className="text-sm text-kn-blue/50">
                    {cidade.bairros.length}{' '}
                    {cidade.bairros.length === 1 ? 'região atendida' : 'bairros atendidos'}
                  </div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-kn-blue/25 transition-colors group-hover:text-kn-orange" />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            className="h-13 rounded-2xl bg-kn-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-kn-orange/20 transition-colors hover:bg-kn-orange-dark"
          >
            <Link href="/cobertura">
              <MapPin className="h-5 w-5" />
              Verificar cobertura
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
