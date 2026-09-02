// lib/coverage-data.ts
// Fonte única de verdade — cobertura, planos, slugs e mapeamento SGP
// Atualizado — alinhado com lib/data.ts do pré-cadastro (Covanca RJ, Tribobó SG,
// remoção de Duque de Caxias, Queimados e Vila Santa Clara)

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type Vencimento = 5 | 10 | 15 | 20

export interface Plano {
  id: string
  nome: string
  velocidade: number        // Mbps comercial
  preco: number             // R$
  destaque: boolean
  recursos: string[]
  planoSgpId: number        // id numérico canônico do plano no SGP (usar este para criar contratos — nunca o slug `id`)
}

export interface Bairro {
  nome: string
  slug: string
  popId: number
  portadorId: number
  nasId: string
  vencimentos: Vencimento[]
  taxaInstalacao: number
  planos: Plano[]
}

export interface Cidade {
  nome: string
  slug: string
  bairros: Bairro[]
}

// ─── Constantes SGP ───────────────────────────────────────────────────────────

export const NAS_PADRAO = 'BNG-ACCELPPP-VYOS-GEN11'
export const VENCIMENTOS_PADRAO: Vencimento[] = [5, 20]
export const VENCIMENTOS = VENCIMENTOS_PADRAO // alias mantido por compatibilidade com contratar.tsx
export const VENCIMENTOS_COVANCA: Vencimento[] = [5, 10, 15, 20]
export const VENCIMENTOS_TRIBOBO: Vencimento[] = [5, 10, 15]

export const TAXA_INSTALACAO_PADRAO = 150.00
export const TAXA_INSTALACAO_COVANCA = 160.00
export const TAXA_INSTALACAO_TRIBOBO = 160.00

// ─── Planos por área ──────────────────────────────────────────────────────────

const planosSaoGoncalo: Plano[] = [
  {
    id: 'sg-350',
    nome: '350 Mega',
    velocidade: 350,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 350 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 7,
  },
  {
    id: 'sg-450',
    nome: '450 Mega',
    velocidade: 450,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 270 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 8,
  },
  {
    id: 'sg-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 9,
  },
  {
    id: 'sg-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
    planoSgpId: 1238,
  },
]

const planosCaju: Plano[] = [
  {
    id: 'rj-caju-350',
    nome: '350 Mega',
    velocidade: 350,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 350 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 1239,
  },
  {
    id: 'rj-caju-450',
    nome: '450 Mega',
    velocidade: 450,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 450 Mbps', 'Upload até 270 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 1240,
  },
  {
    id: 'rj-caju-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 1241,
  },
  {
    id: 'rj-caju-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
    planoSgpId: 1242,
  },
]

const planosSantoCristo: Plano[] = [
  {
    id: 'rj-sc-50',
    nome: '50 Mega',
    velocidade: 50,
    preco: 100.00,
    destaque: false,
    recursos: ['Download até 50 Mbps', 'Upload até 25 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 193,
  },
  {
    id: 'rj-sc-100',
    nome: '100 Mega',
    velocidade: 100,
    preco: 150.00,
    destaque: false,
    recursos: ['Download até 100 Mbps', 'Upload até 50 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 194,
  },
  {
    id: 'rj-sc-150',
    nome: '150 Mega',
    velocidade: 150,
    preco: 200.00,
    destaque: true,
    recursos: ['Download até 150 Mbps', 'Upload até 75 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 195,
  },
  {
    id: 'rj-sc-200',
    nome: '200 Mega',
    velocidade: 200,
    preco: 250.00,
    destaque: false,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
    planoSgpId: 196,
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
    planoSgpId: 209,
  },
  {
    id: 'rj-cav-400',
    nome: '400 Mega',
    velocidade: 400,
    preco: 69.90,
    destaque: true,
    recursos: ['Download até 400 Mbps', 'Upload até 200 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 210,
  },
  {
    id: 'rj-cav-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 94.90,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 211,
  },
]

// Região Covanca (POP 42) — Tanque, Jacarepaguá, Pechincha, Taquara, Freguesia, Praça Seca
const planosCovanca: Plano[] = [
  {
    id: 'cov-300',
    nome: '300 Mega',
    velocidade: 300,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 101312,
  },
  {
    id: 'cov-500',
    nome: '500 Mega',
    velocidade: 500,
    preco: 140.00,
    destaque: true,
    recursos: ['Download até 500 Mbps', 'Upload até 250 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 1248,
  },
  {
    id: 'cov-600',
    nome: '600 Mega',
    velocidade: 600,
    preco: 160.00,
    destaque: false,
    recursos: ['Download até 600 Mbps', 'Upload até 300 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 1249,
  },
  {
    id: 'cov-800',
    nome: '800 Mega',
    velocidade: 800,
    preco: 180.00,
    destaque: false,
    recursos: ['Download até 800 Mbps', 'Upload até 400 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
    planoSgpId: 1250,
  },
]

// Região Tribobó (POP 100071 — Nova Grécia/Lacomba no SGP), São Gonçalo
const planosTribobo: Plano[] = [
  {
    id: 'trb-100',
    nome: '100 Mega',
    velocidade: 100,
    preco: 120.00,
    destaque: false,
    recursos: ['Download até 100 Mbps', 'Upload até 50 Mbps', 'Wi-Fi incluso', 'Suporte local'],
    planoSgpId: 101315,
  },
  {
    id: 'trb-200',
    nome: '200 Mega',
    velocidade: 200,
    preco: 150.00,
    destaque: true,
    recursos: ['Download até 200 Mbps', 'Upload até 100 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 101316,
  },
  {
    id: 'trb-300',
    nome: '300 Mega',
    velocidade: 300,
    preco: 170.00,
    destaque: false,
    recursos: ['Download até 300 Mbps', 'Upload até 150 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade no atendimento'],
    planoSgpId: 101318,
  },
  {
    id: 'trb-500',
    nome: '500 Mega',
    velocidade: 500,
    preco: 200.00,
    destaque: false,
    recursos: ['Download até 500 Mbps', 'Upload até 250 Mbps', 'Wi-Fi incluso', 'Suporte local', 'Prioridade máxima'],
    planoSgpId: 101319,
  },
]

// ─── Mapa de cobertura ────────────────────────────────────────────────────────

export const CIDADES: Cidade[] = [
  {
    nome: 'São Gonçalo',
    slug: 'sao-goncalo',
    bairros: [
      {
        nome: 'Santa Catarina',
        slug: 'santa-catarina',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSaoGoncalo,
      },
      {
        nome: 'Barro Vermelho',
        slug: 'barro-vermelho',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSaoGoncalo,
      },
      {
        nome: 'Sete Pontes',
        slug: 'sete-pontes',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSaoGoncalo,
      },
      {
        nome: 'Covanca',
        slug: 'covanca-sg',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSaoGoncalo,
      },
      {
        nome: 'Pita',
        slug: 'pita',
        popId: 1,
        portadorId: 32,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSaoGoncalo,
      },
      {
        nome: 'Tribobó',
        slug: 'tribobo',
        popId: 100071,
        portadorId: 100041,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_TRIBOBO,
        taxaInstalacao: TAXA_INSTALACAO_TRIBOBO,
        planos: planosTribobo,
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
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosCaju,
      },
      {
        nome: 'Santo Cristo',
        slug: 'santo-cristo',
        popId: 31,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosSantoCristo,
      },
      {
        nome: 'Cavalcante',
        slug: 'cavalcante',
        popId: 31,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_PADRAO,
        taxaInstalacao: TAXA_INSTALACAO_PADRAO,
        planos: planosCavalcante,
      },
      {
        nome: 'Tanque',
        slug: 'tanque',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
      },
      {
        nome: 'Jacarepaguá',
        slug: 'jacarepagua',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
      },
      {
        nome: 'Pechincha',
        slug: 'pechincha',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
      },
      {
        nome: 'Taquara',
        slug: 'taquara',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
      },
      {
        nome: 'Freguesia',
        slug: 'freguesia',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
      },
      {
        nome: 'Praça Seca',
        slug: 'praca-seca',
        popId: 42,
        portadorId: 30,
        nasId: NAS_PADRAO,
        vencimentos: VENCIMENTOS_COVANCA,
        taxaInstalacao: TAXA_INSTALACAO_COVANCA,
        planos: planosCovanca,
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
