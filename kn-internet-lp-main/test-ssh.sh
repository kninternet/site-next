#!/bin/bash

# Test SSH connection to Hostinger
echo "🔍 Testando conexão SSH com Hostinger..."

# Carregar variáveis (simulando GitHub Actions)
DEPLOY_HOST="156.67.72.175"
DEPLOY_USER="u678600923"
DEPLOY_PORT="65002"
DEPLOY_PATH="/home/u678600923/kn-internet"

echo "📋 Configuração:"
echo "  Host: $DEPLOY_HOST"
echo "  User: $DEPLOY_USER"
echo "  Port: $DEPLOY_PORT"
echo "  Path: $DEPLOY_PATH"
echo ""

# Testar conexão básica
echo "🔗 Testando conexão SSH..."
ssh -p "$DEPLOY_PORT" -o ConnectTimeout=10 "$DEPLOY_USER@$DEPLOY_HOST" "echo '✅ SSH funcionando!'" 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Conexão SSH estabelecida com sucesso!"
    
    # Testar comandos básicos
    echo "📁 Testando comandos no servidor..."
    ssh -p "$DEPLOY_PORT" "$DEPLOY_USER@$DEPLOY_HOST" "
        echo 'Diretório atual: \$(pwd)'
        echo 'Espaço em disco: \$(df -h /home | tail -1)'
        echo 'Node.js: \$(node --version 2>/dev/null || echo \"Node.js não instalado\")'
        echo 'PNPM: \$(pnpm --version 2>/dev/null || echo \"PNPM não instalado\")'
        echo 'PM2: \$(pm2 --version 2>/dev/null || echo \"PM2 não instalado\")'
    "
else
    echo "❌ Falha na conexão SSH"
    echo ""
    echo "🔧 Possíveis soluções:"
    echo "1. Verifique se a chave SSH foi adicionada no Hostinger"
    echo "2. Confirme as credenciais:"
    echo "   - Host: $DEPLOY_HOST"
    echo "   - User: $DEPLOY_USER"
    echo "   - Port: $DEPLOY_PORT"
    echo "3. Teste manual: ssh -p $DEPLOY_PORT $DEPLOY_USER@$DEPLOY_HOST"
    exit 1
fi

echo ""
echo "🎉 Teste concluído com sucesso!"