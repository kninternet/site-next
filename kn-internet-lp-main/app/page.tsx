import { Header }        from '@/components/landing/header'
import { Hero }           from '@/components/landing/hero'
import { Plans }          from '@/components/landing/plans'
import { Benefits }       from '@/components/landing/benefits'
import { Differentials }  from '@/components/landing/differentials'
import { AppSection }     from '@/components/landing/app-section'
import { Installation }   from '@/components/landing/installation'
import { CTA }            from '@/components/landing/cta'
import { Footer }         from '@/components/landing/footer'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <Differentials />
        <AppSection />
        <Installation />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
