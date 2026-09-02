'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Search, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { lookupCep } from '@/lib/coverage-lookup'
import { useRouter } from 'next/navigation'
import { useModal } from '@/components/coverage-modal-provider'
import { CIDADES } from '@/lib/coverage-data'

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1600&q=80',
    tagline: 'Fibra optica com rede propria no RJ',
    title: 'Internet que funciona de verdade.',
    subtitle: 'Instalacao rapida, suporte local e sem burocracia. Consulte a cobertura no seu endereco.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
    tagline: 'Para quem estuda e trabalha em casa',
    title: 'Na hora do dever, a internet nao pode falhar.',
    subtitle: 'Fibra optica estavel para toda a familia, do streaming as videoaulas.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
    tagline: 'Conectados com quem voce ama',
    title: 'Videochamada que nao trava.',
    subtitle: 'Rede propria com 99,9% de disponibilidade. Sem surpresas na fatura.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
    tagline: 'Velocidade para todos',
    title: 'Velocidade que voce sente.',
    subtitle: 'Do gamer ao empreendedor. Planos para cada necessidade, com preco justo.',
  },
]

export function Hero() {
  const router = useRouter()
  const { openModal } = useModal()
  const [current, setCurrent] = useState(0)
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)

  const next = useCallback(() => setCurrent((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  // Tipagem restaurada — o projeto roda com "strict": true no tsconfig,
  // então parâmetro sem tipo (`value`, `e`) quebra o build (noImplicitAny).
  function formatCep(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    if (digits.length > 5) return digits.slice(0, 5) + '-' + digits.slice(5)
    return digits
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const digits = cep.replace(/\D/g, '')
    if (digits.length !== 8) { openModal(); return }
    setLoading(true)
    try {
      const result = await lookupCep(cep)
      if (result.found && result.cidadeSlug) {
        const path = result.bairroSlug
          ? '/cobertura/' + result.cidadeSlug + '/' + result.bairroSlug
          : '/cobertura/' + result.cidadeSlug
        router.push(path)
      } else {
        openModal()
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'min(90vh, 680px)', minHeight: '520px' }}>

      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kn-blue/90 via-kn-blue/70 to-kn-blue/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full mx-auto max-w-7xl px-5 lg:px-8 flex items-center">
        <div className="max-w-xl pt-16">

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-kn-orange mb-4">
                {slides[current].tagline}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {slides[current].title}
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mb-6">
            <input
              type="text"
              inputMode="numeric"
              value={cep}
              onChange={(e) => setCep(formatCep(e.target.value))}
              placeholder="Digite seu CEP"
              className="h-12 flex-1 rounded-xl border-2 border-white/20 bg-white/15 backdrop-blur-sm px-4 text-white placeholder:text-white/50 outline-none focus:border-kn-orange transition-all"
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-12 shrink-0 rounded-xl bg-kn-orange hover:bg-kn-orange/90 px-5 font-semibold text-white shadow-lg shadow-kn-orange/30 disabled:opacity-60"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            </Button>
          </form>

          <div className="flex flex-wrap gap-2">
            {CIDADES.map((cidade) => {
              const href = cidade.bairros.length === 1
                ? '/cobertura/' + cidade.slug + '/' + cidade.bairros[0].slug
                : '/cobertura/' + cidade.slug
              return (
                <a
                  key={cidade.slug}
                  href={href}
                  className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-all"
                >
                  {cidade.nome}
                </a>
              )
            })}
          </div>

        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={'h-2 rounded-full transition-all duration-300 ' + (i === current ? 'w-8 bg-kn-orange' : 'w-2 bg-white/40')}
          />
        ))}
      </div>

    </section>
  )
}