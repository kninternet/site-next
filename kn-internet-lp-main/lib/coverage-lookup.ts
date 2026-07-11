import { CIDADES } from '@/lib/coverage-data'

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export interface LookupResult {
  found: boolean
  cidadeSlug?: string
  bairroSlug?: string
  cidadeNome?: string
  bairroNome?: string
  viaCepCidade?: string
  viaCepBairro?: string
}

export async function lookupCep(cep: string): Promise<LookupResult> {
  const digits = cep.replace(/\D/g, '')
  if (digits.length !== 8) return { found: false }

  let viaCep: { localidade: string; bairro: string; erro?: boolean }
  try {
    const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`)
    viaCep = await res.json()
  } catch {
    return { found: false }
  }

  if (viaCep.erro) return { found: false }

  const cidadeVia = normalize(viaCep.localidade)
  const bairroVia = normalize(viaCep.bairro)

  for (const cidade of CIDADES) {
    if (normalize(cidade.nome) !== cidadeVia) continue

    // Cidade encontrada — tenta match de bairro
    for (const bairro of cidade.bairros) {
      if (normalize(bairro.nome).includes(bairroVia) || bairroVia.includes(normalize(bairro.nome))) {
        return {
          found: true,
          cidadeSlug: cidade.slug,
          bairroSlug: bairro.slug,
          cidadeNome: cidade.nome,
          bairroNome: bairro.nome,
          viaCepCidade: viaCep.localidade,
          viaCepBairro: viaCep.bairro,
        }
      }
    }

    // Cidade na cobertura mas bairro não encontrado —
    // redireciona para a página da cidade (usuário escolhe o bairro)
    return {
      found: true,
      cidadeSlug: cidade.slug,
      cidadeNome: cidade.nome,
      viaCepCidade: viaCep.localidade,
      viaCepBairro: viaCep.bairro,
    }
  }

  return {
    found: false,
    viaCepCidade: viaCep.localidade,
    viaCepBairro: viaCep.bairro,
  }
}