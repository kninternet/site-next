import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Como consultar a cobertura?',
    a: 'Basta informar o seu CEP ou selecionar a sua cidade no topo da página. Em segundos mostramos se a KN atende o seu endereço e quais planos estão disponíveis na sua região.',
  },
  {
    q: 'Quanto tempo demora a instalação?',
    a: 'Após a contratação, agendamos a visita técnica em poucos dias. Nossa equipe é da região, o que garante mais agilidade no atendimento.',
  },
  {
    q: 'Existe fidelidade?',
    a: 'Trabalhamos com transparência total. As condições de cada plano são apresentadas de forma clara antes da contratação, sem letras miúdas.',
  },
  {
    q: 'Como emitir a segunda via do boleto?',
    a: 'Pela Central do Assinante você emite a segunda via, copia o PIX Copia e Cola e acompanha seu histórico financeiro a qualquer momento.',
  },
  {
    q: 'Como abrir um chamado de suporte?',
    a: 'Você pode abrir um chamado pela Central do Assinante ou falar diretamente com nosso time pelo WhatsApp. O atendimento é humano, sem robôs.',
  },
  {
    q: 'A internet é fibra óptica?',
    a: 'Sim. Toda a nossa rede é de fibra óptica com infraestrutura própria, o que garante muito mais estabilidade e velocidade consistente.',
  },
  {
    q: 'Vocês atendem empresas?',
    a: 'Sim. Temos soluções para residências e empresas. Consulte a cobertura do seu endereço e fale com o nosso time para uma proposta sob medida.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-kn-blue/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-kn-blue sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-kn-blue/60">
            Tudo o que você precisa saber antes de contratar.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-kn-blue/10 bg-white px-5 data-[state=open]:border-kn-orange/25"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-kn-blue hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-kn-blue/60">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
