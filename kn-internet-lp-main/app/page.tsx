import { Hero } from '@/components/landing/hero'
import { DifferentialsBar } from '@/components/landing/differentials-bar'
import { WhyKN } from '@/components/landing/why-kn'
import { BigNumbers } from '@/components/landing/big-numbers'
import { SelfService } from '@/components/landing/self-service'
import { AppSection } from '@/components/landing/app-section'
import { UseCases } from '@/components/landing/use-cases'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Coverage } from '@/components/landing/coverage'
import { Testimonials } from '@/components/landing/testimonials'
import { Comparison } from '@/components/landing/comparison'
import { FAQ } from '@/components/landing/faq'
import { FinalCTA } from '@/components/landing/final-cta'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <DifferentialsBar />
      <WhyKN />
      <BigNumbers />
      <SelfService />
      <AppSection />
      <UseCases />
      <HowItWorks />
      <Coverage />
      <Testimonials />
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
