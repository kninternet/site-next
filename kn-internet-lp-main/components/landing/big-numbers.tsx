const stats = [
  { value: '+5.000', label: 'Clientes conectados' },
  { value: '99,9%', label: 'Disponibilidade da rede' },
  { value: '24h', label: 'Monitoramento' },
  { value: '+15', label: 'Bairros atendidos' },
  { value: '+300 km', label: 'Fibra instalada' },
  { value: '< 30 min', label: 'Tempo médio de atendimento' },
]

export function BigNumbers() {
  return (
    <section className="bg-kn-blue py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Números que constroem confiança.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-white/60">
            Uma operação sólida, monitorada 24 horas por dia para manter você sempre conectado.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm transition-colors hover:border-kn-orange/40"
            >
              <div className="font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
