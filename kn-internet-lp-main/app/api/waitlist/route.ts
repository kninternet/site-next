import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { sendWaitlistEmail } from '@/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, cep, cidade, bairro, consentimentoPrivacidade } =
      await req.json()

    if (!consentimentoPrivacidade) {
      return NextResponse.json(
        { status: 'error', error: 'Aceite da Política de Privacidade é obrigatório.' },
        { status: 400 }
      )
    }

    if (!cep || !cidade || !bairro) {
      return NextResponse.json(
        { status: 'error', error: 'CEP, cidade e bairro são obrigatórios.' },
        { status: 400 }
      )
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      null

    // Salva no banco
    await pool.query(
      `INSERT INTO waitlist
        (nome, email, telefone, cep, cidade, bairro, created_at,
         consentimento_privacidade, consentimento_data, consentimento_ip, versao_politica)
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), $7, NOW(), $8, $9)`,
      [
        nome || null,
        email || null,
        telefone || null,
        cep,
        cidade,
        bairro,
        true,
        ip,
        'jul-2026',
      ]
    )

    // Envia email
    await sendWaitlistEmail({ nome, email, telefone, cep, cidade, bairro })

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ status: 'error' }, { status: 500 })
  }
}