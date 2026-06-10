#!/bin/bash

# Build script otimizado para Hostinger
echo "🚀 Iniciando build otimizado..."

# Set environment
export NODE_ENV=production
export NODE_OPTIONS="--max_old_space_size=1024"

# Install dependencies
echo "📦 Instalando dependências..."
pnpm install --frozen-lockfile --production=false

# Clear next cache
echo "🧹 Limpando cache..."
rm -rf .next

# Build
echo "🔨 Fazendo build..."
pnpm build --debug-build 2>&1 | tail -20

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    
    # Remove dev dependencies
    echo "📉 Removendo dependências de desenvolvimento..."
    pnpm install --frozen-lockfile --production=true
    
    echo "🎉 Pronto para deploy!"
else
    echo "❌ Build falhou!"
    exit 1
fi
