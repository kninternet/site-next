#!/bin/bash

# Setup Hostinger para kn-internet
echo "🚀 Configurando Hostinger para kn-internet..."

# Atualizar sistema
echo "📦 Atualizando sistema..."
apt update && apt upgrade -y

# Instalar Node.js 20
echo "📦 Instalando Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Instalar pnpm
echo "📦 Instalando pnpm..."
npm install -g pnpm

# Instalar PM2
echo "📦 Instalando PM2..."
npm install -g pm2

# Criar diretório do projeto
echo "📁 Criando diretório do projeto..."
mkdir -p /home/u678600923/kn-internet
cd /home/u678600923/kn-internet

# Clone do repositório
echo "📥 Clonando repositório..."
git clone https://github.com/otavio-cyber/kn-internet-lp.git .
git checkout main

# Instalar dependências
echo "📦 Instalando dependências..."
pnpm install --frozen-lockfile

# Build da aplicação
echo "🔨 Fazendo build..."
pnpm build

# Configurar PM2
echo "⚙️ Configurando PM2..."
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

# Criar diretório de logs
mkdir -p logs

echo "✅ Setup concluído!"
echo "🌐 Sua aplicação estará disponível em: http://156.67.72.175:3000"
echo ""
echo "📊 Comandos úteis:"
echo "  pm2 status          - Ver status da aplicação"
echo "  pm2 logs kn-internet - Ver logs em tempo real"
echo "  pm2 restart kn-internet - Reiniciar aplicação"