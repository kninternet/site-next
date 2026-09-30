import Script from 'next/script'

// Webchat Fluenzo — canal alternativo ao WhatsApp (evita custo por mensagem
// de serviço da Meta a partir de 01/10/2026). lazyOnload para não impactar o LCP.
const FLUENZO_WEBCHAT_KEY = 'khjw2cnr5xge'

export function FluenzoWebchat() {
  return (
    <Script
      id="fluenzo-webchat"
      src="https://app.fluenzochat.com.br/webchat.js"
      data-key={FLUENZO_WEBCHAT_KEY}
      strategy="lazyOnload"
    />
  )
}
