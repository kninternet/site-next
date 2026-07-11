import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendWaitlistEmail(data: {
  nome?: string
  email?: string
  telefone?: string
  cep: string
  cidade: string
  bairro: string
}) {
  const { nome, email, telefone, cep, cidade, bairro } = data

  await transporter.sendMail({
    from: `"KN Internet" <${process.env.SMTP_FROM}>`,
    to: process.env.MAIL_ATENDIMENTO,
    subject: 'KN Internet - Lead sem Cobertura',
    html: `
      <h2>Novo lead fora da área de cobertura</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        <tr><td><strong>CEP</strong></td><td>${cep}</td></tr>
        <tr><td><strong>Cidade (ViaCEP)</strong></td><td>${cidade}</td></tr>
        <tr><td><strong>Bairro (ViaCEP)</strong></td><td>${bairro}</td></tr>
        <tr><td><strong>Nome</strong></td><td>${nome || '—'}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email || '—'}</td></tr>
        <tr><td><strong>Telefone</strong></td><td>${telefone || '—'}</td></tr>
      </table>
    `,
  })
}