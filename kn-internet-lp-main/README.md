# KN Internet — Landing Page

Site institucional da **KN Internet**, provedor de fibra óptica no Rio de Janeiro.
Construído com **Next.js 16 (App Router)**, **Tailwind CSS v4**, **shadcn/ui** e **TypeScript**.

## Stack

| Tech | Versão |
|------|--------|
| Next.js | 16.2 (App Router) |
| React | 19 |
| Tailwind CSS | 4 |
| TypeScript | 5.7 |
| Fontes | Sora (display) + Inter (body) |

## Setup local

```bash
# 1. Instalar dependências
pnpm install   # ou npm install / yarn

# 2. Rodar em desenvolvimento
pnpm dev

# 3. Acessar
# http://localhost:3000
```

## Deploy (Vercel)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório diretamente no painel [vercel.com](https://vercel.com).

## Substituir logo

Quando o logo estiver pronto, substitua o arquivo:

```
public/images/logo-kn.png
```

O logo é referenciado em:
- `components/landing/header.tsx`
- `components/landing/footer.tsx`

## Contato / WhatsApp

O número de WhatsApp está configurado em todos os componentes como:
```
https://wa.me/5521967797580
```

Para alterar, faça busca global por `wa.me/5521967797580` e substitua.

## Imagens

As imagens da landing usam o serviço gratuito **Unsplash** via `next/image`.
Para trocar por fotos próprias, substitua as URLs em:
- `components/landing/hero.tsx` — foto principal
- `components/landing/benefits.tsx` — foto equipe
- `components/landing/differentials.tsx` — foto RJ / fibra
