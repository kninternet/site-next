import { Suspense } from 'react'
import { Contratar } from '@/components/contratar/contratar'

export const metadata = {
  title: 'Contratar | KN Internet',
  description: 'Contrate sua internet fibra óptica KN Internet.',
}

export default function ContratarPage() {
  return (
    <Suspense>
      <Contratar />
    </Suspense>
  )
}