'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CIDADES } from '@/lib/coverage-data'
import { Search, ArrowRight, Loader2, Zap, Wifi, Clock, Headphones } from 'lucide-react'
import { lookupCep } from '@/lib/coverage-lookup'
import { useRouter } from 'next/navigation'
import { useModal } from '@/components/coverage-modal-provider'

const diferenciais = [
  { icon: Zap, label: 'Fibra de Ponta a Ponta' },
  { icon: Wifi, label: 'Rede Própria' },
  { icon: Clock, label: 'Instalação em Horas' },
  { icon: Headphones, label: 'Suporte Imediato' },
]

export function Hero() {
  const router = useRouter()
  const { openModal } = useModal()
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)
  const reduceMotion = useReducedMotion()

  const rise = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease: 'easeOut' as const, delay: i * 0.08 },
    }),
  }

  function formatCep(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`
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
        router.push(result.bairroSlug
          ? `/cobertura/${result.cidadeSlug}/${result.bairroSlug}`
          : `/cobertura/${result.cidadeSlug}`)
      } else {
        openModal()
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-white pt-16">

      <div className="w-full" aria-hidden="true">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
  <path d="M0 22 Q360 57 720 34 Q1080 7 1440 50 L1440 62 Q1080 19 720 46 Q360 69 0 34 Z" fill="#F97316"/>
  <path d="M0 10 Q360 45 720 22 Q1080 -5 1440 38 L1440 50 Q1080 7 720 34 Q360 57 0 22 Z" fill="#0C1E3D"/>
</svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-10 text-center">

        <motion.p custom={0} variants={rise} initial="hidden" animate="visible"
          className="text-xs font-bold uppercase tracking-[0.18em] text-kn-orange mb-5">
          Fibra óptica com rede própria no RJ
        </motion.p>

        <motion.h1 custom={1} variants={rise} initial="hidden" animate="visible"
          className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-kn-blue sm:text-5xl lg:text-6xl">
          Internet que funciona de verdade.
        </motion.h1>

        <motion.p custom={2} variants={rise} initial="hidden" animate="visible"
          className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-kn-blue/60">
          A sua internet merece estabilidade, suporte imediato e instalação rápida.
          Consulte nossa cobertura agora.
        </motion.p>

        <motion.div custom={3} variants={rise} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap justify-center gap-2">
          {CIDADES.map((cidade) => {
            const href = cidade.bairros.length === 1
              ? `/cobertura/${cidade.slug}/${cidade.bairros[0].slug}`
              : `/cobertura/${cidade.slug}`
            return (
              <a key={cidade.slug} href={href}
                className="group inline-flex items-center gap-1.5 rounded-full border-2 border-kn-blue/15 bg-white px-5 py-2.5 text-sm font-semibold text-kn-blue transition-all hover:border-kn-orange hover:text-kn-orange hover:shadow-md">
                {cidade.nome}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            )
          })}
        </motion.div>

        <motion.p custom={4} variants={rise} initial="hidden" animate="visible"
          className="mt-6 text-sm text-kn-blue/35">
          ou digite seu CEP
        </motion.p>

        <motion.form custom={5} variants={rise} initial="hidden" animate="visible"
          onSubmit={handleSubmit}
          className="mx-auto mt-3 flex w-full max-w-md gap-2">
          <input
            type="text"
            inputMode="numeric"
            value={cep}
            onChange={(e) => setCep(formatCep(e.target.value))}
            placeholder="00000-000"
            aria-label="Digite seu CEP"
            className="h-13 flex-1 rounded-2xl border-2 border-kn-blue/20 bg-white px-5 text-base text-kn-blue outline-none placeholder:text-kn-blue/30 focus:border-kn-orange focus:ring-4 focus:ring-kn-orange/10 transition-all"
          />
          <Button type="submit" disabled={loading}
            className="h-13 shrink-0 rounded-2xl bg-kn-orange px-6 text-base font-semibold text-white shadow-lg shadow-kn-orange/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-kn-orange/30 disabled:opacity-60">
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
          </Button>
        </motion.form>

        <motion.div custom={6} variants={rise} initial="hidden" animate="visible"
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {diferenciais.map((d) => (
            <div key={d.label} className="flex items-center gap-2 text-sm font-medium text-kn-blue/60">
              <d.icon className="h-4 w-4 text-kn-orange shrink-0" />
              {d.label}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
