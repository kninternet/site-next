import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { sendWaitlistEmail } from '@/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, cep, cidade, bairro } = await req.json()

    // Salva no banco
    await pool.query(
      `INSERT INTO waitlist (nome, email, telefone, cep, cidade, bairro, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [nome || null, email || null, telefone || null, cep, cidade, bairro]
    )

    // Envia email
    await sendWaitlistEmail({ nome, email, telefone, cep, cidade, bairro })

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ status: 'error' }, { status: 500 })
  }
}