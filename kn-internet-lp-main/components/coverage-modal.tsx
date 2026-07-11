'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { X, MapPin, Search, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { lookupCep } from '@/lib/coverage-lookup'
import { CIDADES } from '@/lib/coverage-data'
import { Button } from '@/components/ui/button'

type Step = 'cep' | 'not-found' | 'success'

interface CoverageModalProps {
  open: boolean
  onClose: () => void
}

export function CoverageModal({ open, onClose }: CoverageModalProps) {
  const router = useRouter()
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<Step>('cep')
  const [viaCepData, setViaCepData] = useState({ cidade: '', bairro: '' })

  // Waitlist form
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  function formatCep(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`
    return digits
  }

  const handleCepSubmit = useCallback(async () => {
    if (cep.replace(/\D/g, '').length !== 8) return
    setLoading(true)
    try {
      const result = await lookupCep(cep)
      if (result.found && result.cidadeSlug) {
        onClose()
        if (result.bairroSlug) {
          router.push(`/cobertura/${result.cidadeSlug}/${result.bairroSlug}`)
        } else {
          router.push(`/cobertura/${result.cidadeSlug}`)
        }
      } else {
        setViaCepData({
          cidade: result.viaCepCidade || '',
          bairro: result.viaCepBairro || '',
        })
        setStep('not-found')
      }
    } finally {
      setLoading(false)
    }
  }, [cep, onClose, router])

  async function handleWaitlist() {
    setSending(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome || undefined,
          email: email || undefined,
          telefone: telefone || undefined,
          cep: cep.replace(/\D/g, ''),
          cidade: viaCepData.cidade,
          bairro: viaCepData.bairro,
        }),
      })
      setSent(true)
    } finally {
      setSending(false)
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => {
      setCep('')
      setStep('cep')
      setNome('')
      setEmail('')
      setTelefone('')
      setSent(false)
    }, 300)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-kn-blue/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-kn-blue/40 hover:bg-gray-100 hover:text-kn-blue transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Step: CEP */}
        {step === 'cep' && (
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-kn-orange/10">
              <MapPin className="h-6 w-6 text-kn-orange" />
            </div>
            <h2 className="text-2xl font-extrabold text-kn-blue">
              Verificar cobertura
            </h2>
            <p className="mt-2 text-kn-blue/55">
              Digite seu CEP para ver os planos disponíveis no seu endereço.
            </p>

            <div className="mt-6 flex gap-2">
              <input
                type="text"
                inputMode="numeric"
                value={cep}
                onChange={(e) => setCep(formatCep(e.target.value))}
                onKeyDown={(e) => e.key === 'Enter' && handleCepSubmit()}
                placeholder="00000-000"
                className="h-12 flex-1 rounded-xl border border-kn-blue/12 px-4 text-base text-kn-blue outline-none placeholder:text-kn-blue/30 focus:border-kn-orange/60 focus:ring-4 focus:ring-kn-orange/10 transition-all"
                autoFocus
              />
              <Button
                onClick={handleCepSubmit}
                disabled={loading || cep.replace(/\D/g, '').length !== 8}
                className="h-12 rounded-xl bg-kn-orange px-5 text-white shadow-lg shadow-kn-orange/20 hover:bg-kn-orange/90 disabled:opacity-40"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </div>

            <div className="mt-6">
              <p className="text-sm text-kn-blue/40 mb-3">ou selecione sua cidade</p>
              <div className="flex flex-wrap gap-2">
                {CIDADES.map((cidade) => (
                  <button
                    key={cidade.slug}
                    onClick={() => {
                      onClose()
                      if (cidade.bairros.length === 1) {
                        router.push(`/cobertura/${cidade.slug}/${cidade.bairros[0].slug}`)
                      } else {
                        router.push(`/cobertura/${cidade.slug}`)
                      }
                    }}
                    className="rounded-full border border-kn-blue/12 bg-gray-50 px-4 py-1.5 text-sm font-medium text-kn-blue/70 hover:border-kn-orange/40 hover:bg-orange-50 hover:text-kn-blue transition-all"
                  >
                    {cidade.nome}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step: Fora de cobertura */}
        {step === 'not-found' && !sent && (
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50">
              <AlertCircle className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-kn-blue">
              Ainda não chegamos aí
            </h2>
            <p className="mt-2 text-kn-blue/55">
              {viaCepData.bairro && viaCepData.cidade
                ? `${viaCepData.bairro}, ${viaCepData.cidade} ainda não está na nossa área de cobertura.`
                : 'Seu endereço ainda não está na nossa área de cobertura.'}
              {' '}Deixe seu contato e avisamos quando chegarmos ao seu bairro.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome (opcional)"
                className="h-11 rounded-xl border border-kn-blue/12 px-4 text-sm text-kn-blue outline-none placeholder:text-kn-blue/30 focus:border-kn-orange/60 focus:ring-4 focus:ring-kn-orange/10 transition-all"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail (opcional)"
                className="h-11 rounded-xl border border-kn-blue/12 px-4 text-sm text-kn-blue outline-none placeholder:text-kn-blue/30 focus:border-kn-orange/60 focus:ring-4 focus:ring-kn-orange/10 transition-all"
              />
              <input
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone (opcional)"
                className="h-11 rounded-xl border border-kn-blue/12 px-4 text-sm text-kn-blue outline-none placeholder:text-kn-blue/30 focus:border-kn-orange/60 focus:ring-4 focus:ring-kn-orange/10 transition-all"
              />
            </div>

            <div className="mt-5 flex gap-2">
              <Button
                onClick={handleWaitlist}
                disabled={sending}
                className="flex-1 h-11 rounded-xl bg-kn-orange text-white font-semibold shadow-lg shadow-kn-orange/20 hover:bg-kn-orange/90 disabled:opacity-40"
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Quero ser avisado'}
              </Button>
              <Button
                onClick={handleClose}
                variant="outline"
                className="h-11 rounded-xl border-kn-blue/12 text-kn-blue/60 hover:text-kn-blue"
              >
                Fechar
              </Button>
            </div>
          </div>
        )}

        {/* Step: Sucesso waitlist */}
        {step === 'not-found' && sent && (
          <div className="text-center py-4">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-kn-blue">Anotado!</h2>
            <p className="mt-3 text-kn-blue/55 leading-relaxed">
              Vamos te avisar assim que a KN Internet chegar ao seu bairro.
            </p>
            <Button
              onClick={handleClose}
              className="mt-8 h-11 w-full rounded-xl bg-kn-blue text-white font-semibold hover:bg-kn-blue/90"
            >
              Fechar
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}