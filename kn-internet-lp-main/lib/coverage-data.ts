// lib/coverage-data.ts
// Fonte única de verdade — cobertura, planos, slugs e mapeamento SGP

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type Vencimento = 5 | 20

export interface Plano {
  id: string
  nome: string
  velocidade: number        // Mbps
  preco: number             // R$
  destaque: boolean
  recursos: string[]
}

export interface Bairro {
  nome: string
  slug: string
  popId: number
  portadorId: number
  nasId: string
  planos: Plano[]
}

export interface Cidade {
  nome: string
  slug: string
  bairros: Bairro[]
}

// ─── Constantes SGP ───────────────────────────────────────────────────────────

export const NAS_PADRAO = 'BNG-ACCELPPP-VYOS-GEN11'
export const VENCIMENTOS: Vencimento[] = [5, 20]

// ─── Planos por área ──────────────────────────────────────────────────────────

const planosSaoGoncalo: Plano[] = [
  {
    id: 'sg-300',
    nome: 'Essencial',
    velocidade: 300,
    preco: 89.90,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'sg-450',
    nome: 'Família',
    velocidade: 450,
    preco: 109.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'sg-600',
    nome: 'Total',
    velocidade: 600,
    preco: 129.90,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
  },
]

const planosCaju: Plano[] = [
  {
    id: 'rj-caju-200',
    nome: 'Essencial',
    velocidade: 200,
    preco: 79.90,
    destaque: false,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-caju-450',
    nome: 'Família',
    velocidade: 450,
    preco: 99.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosSantoCristo: Plano[] = [
  {
    id: 'rj-sc-200',
    nome: 'Essencial',
    velocidade: 200,
    preco: 79.90,
    destaque: false,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-sc-450',
    nome: 'Família',
    velocidade: 450,
    preco: 99.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosCavalcante: Plano[] = [
  {
    id: 'rj-cav-100',
    nome: 'Essencial',
    velocidade: 100,
    preco: 59.90,
    destaque: false,
    recursos: ['Download até 100 Mbps', 'Upload até 50 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-cav-300',
    nome: 'Família',
    velocidade: 300,
    preco: 79.90,
    destaque: true,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosVilaSantaClara: Plano[] = [
  {
    id: 'rj-vsc-200',
    nome: 'Essencial',
    velocidade: 200,
    preco: 79.90,
    destaque: false,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-vsc-450',
    nome: 'Família',
    velocidade: 450,
    preco: 99.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosQueimados: Plano[] = [
  {
    id: 'que-300',
    nome: 'Essencial',
    velocidade: 300,
    preco: 89.90,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'que-450',
    nome: 'Família',
    velocidade: 450,
    preco: 109.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosDuqueDeCaxias: Plano[] = [
  {
    id: 'dc-300',
    nome: 'Essencial',
    velocidade: 300,
    preco: 89.90,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'dc-450',
    nome: 'Família',
    velocidade: 450,
    preco: 109.90,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 225 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

// ─── Mapa de cobertura ────────────────────────────────────────────────────────

export const CIDADES: Cidade[] = [
  {
    nome: 'São Gonçalo',
    slug: 'sao-goncalo',
    bairros: [
      {
        nome: 'São Gonçalo',
        slug: 'sao-goncalo',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        planos: planosSaoGoncalo,
      },
    ],
  },
  {
    nome: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    bairros: [
      {
        nome: 'Caju',
        slug: 'caju',
        popId: 31,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosCaju,
      },
      {
        nome: 'Santo Cristo',
        slug: 'santo-cristo',
        popId: 31,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosSantoCristo,
      },
      {
        nome: 'Cavalcante',
        slug: 'cavalcante',
        popId: 33,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosCavalcante,
      },
      {
        nome: 'Vila Santa Clara',
        slug: 'vila-santa-clara',
        popId: 34,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosVilaSantaClara,
      },
    ],
  },
  {
    nome: 'Queimados',
    slug: 'queimados',
    bairros: [
      {
        nome: 'Queimados',
        slug: 'queimados',
        popId: 39,
        portadorId: 34,
        nasId: NAS_PADRAO,
        planos: planosQueimados,
      },
    ],
  },
  {
    nome: 'Duque de Caxias',
    slug: 'duque-de-caxias',
    bairros: [
      {
        nome: 'Duque de Caxias',
        slug: 'duque-de-caxias',
        popId: 38,
        portadorId: 33,
        nasId: NAS_PADRAO,
        planos: planosDuqueDeCaxias,
      },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCidade(cidadeSlug: string): Cidade | undefined {
  return CIDADES.find(c => c.slug === cidadeSlug)
}

export function getBairro(cidadeSlug: string, bairroSlug: string): Bairro | undefined {
  return getCidade(cidadeSlug)?.bairros.find(b => b.slug === bairroSlug)
}

export function getPlano(cidadeSlug: string, bairroSlug: string, planoId: string): Plano | undefined {
  return getBairro(cidadeSlug, bairroSlug)?.planos.find(p => p.id === planoId)
}

export function getAllBairros(): Array<{ cidade: Cidade; bairro: Bairro }> {
  return CIDADES.flatMap(cidade =>
    cidade.bairros.map(bairro => ({ cidade, bairro }))
  )
}