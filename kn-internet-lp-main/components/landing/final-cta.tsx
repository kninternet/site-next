import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { CtaFiber } from '@/components/motion/fiber'

export function FinalCTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-kn-blue px-6 py-16 text-center lg:px-16 lg:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-kn-orange/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
            {/* Extremely subtle moving fiber pattern behind the content. */}
            <CtaFiber className="absolute inset-0 h-full w-full" />
          </div>

          <Reveal className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Descubra se a KN atende seu endereço.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
              Consulte gratuitamente a cobertura disponível para a sua região e veja os
              planos ideais para você.
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                asChild
                className="group h-14 rounded-2xl bg-kn-orange px-8 text-base font-semibold text-white shadow-xl shadow-kn-orange/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-kn-orange-dark hover:shadow-2xl hover:shadow-kn-orange/40"
              >
                <Link href="/cobertura">
                  <MapPin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Verificar cobertura
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
