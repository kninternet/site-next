// lib/coverage-data.ts
// Fonte única de verdade — cobertura, planos, slugs e mapeamento SGP
// Atualizado em 28/06/2026 — dados validados contra SGP e formulário de cadastro

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type Vencimento = 5 | 20

export interface Plano {
  id: string
  nome: string
  velocidade: number        // Mbps comercial
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
    id: 'sg-350',
    nome: '350 Mega',
    velocidade: 350,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 350 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'sg-450',
    nome: '450 Mega',
    velocidade: 450,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 270 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'sg-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'sg-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
  },
]

const planosCajuSantoCristo: Plano[] = [
  {
    id: 'rj-cs-350',
    nome: '350 Mega',
    velocidade: 350,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 350 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-cs-450',
    nome: '450 Mega',
    velocidade: 450,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 270 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'rj-cs-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'rj-cs-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
  },
]

const planosCavalcante: Plano[] = [
  {
    id: 'rj-cav-200',
    nome: '200 Mega',
    velocidade: 200,
    preco: 59.90,
    destaque: false,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-cav-400',
    nome: '400 Mega',
    velocidade: 400,
    preco: 69.90,
    destaque: true,
    recursos: ['Download até 400 Mbps', 'Upload até 200 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'rj-cav-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 94.90,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
]

const planosVilaSantaClara: Plano[] = [
  {
    id: 'rj-vsc-100',
    nome: '100 Mega',
    velocidade: 100,
    preco: 79.90,
    destaque: false,
    recursos: ['Download até 100 Mbps', 'Upload até 50 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'rj-vsc-500',
    nome: '500 Mega',
    velocidade: 500,
    preco: 99.90,
    destaque: true,
    recursos: ['Download até 500 Mbps', 'Upload até 250 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'rj-vsc-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 149.90,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
  },
]

const planosQueimados: Plano[] = [
  {
    id: 'que-300',
    nome: '300 Mega',
    velocidade: 300,
    preco: 100.00,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'que-500',
    nome: '500 Mega',
    velocidade: 500,
    preco: 120.00,
    destaque: true,
    recursos: ['Download até 500 Mbps', 'Upload até 250 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'que-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 150.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'que-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
  },
]

const planosDuqueDeCaxias: Plano[] = [
  {
    id: 'dc-400',
    nome: '400 Mega',
    velocidade: 400,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 400 Mbps', 'Upload até 200 Mbps', 'Wi-Fi incluso', 'Suporte local'],
  },
  {
    id: 'dc-500',
    nome: '500 Mega',
    velocidade: 500,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 500 Mbps', 'Upload até 250 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'dc-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 170.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
  },
  {
    id: 'dc-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
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
        popId: 33,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosCajuSantoCristo,
      },
      {
        nome: 'Santo Cristo',
        slug: 'santo-cristo',
        popId: 31,
        portadorId: 30,
        nasId: NAS_PADRAO,
        planos: planosCajuSantoCristo,
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
        nome: 'Vila Santa Clara (Taquara)',
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
        nome: 'Saracuruna',
        slug: 'saracuruna',
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