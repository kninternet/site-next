#!/bin/bash

# Script para verificar se as GitHub Secrets estão configuradas
echo "🔍 Verificando configuração das GitHub Secrets..."
echo ""

# Simular valores esperados
EXPECTED_HOST="156.67.72.175"
EXPECTED_USER="u678600923"
EXPECTED_PORT="65002"
EXPECTED_PATH="/home/u678600923/kn-internet"

echo "📋 Valores esperados:"
echo "  DEPLOY_HOST: $EXPECTED_HOST"
echo "  DEPLOY_USER: $EXPECTED_USER"
echo "  DEPLOY_PORT: $EXPECTED_PORT"
echo "  DEPLOY_PATH: $EXPECTED_PATH"
echo "  DEPLOY_KEY: (chave privada SSH)"
echo ""

echo "✅ Vá para o GitHub e configure as secrets em:"
echo "   https://github.com/otavio-cyber/kn-internet-lp/settings/secrets/actions"
echo ""

echo "🔗 Link direto para adicionar secrets:"
echo "   https://github.com/otavio-cyber/kn-internet-lp/settings/secrets/actions/new"
echo ""

echo "📝 Copie e cole cada valor exatamente como mostrado acima."
echo ""

echo "🧪 Após configurar, teste com:"
echo "   git commit --allow-empty -m 'Test secrets'"
echo "   git push origin main"
echo ""

echo "📊 Monitore em: https://github.com/otavio-cyber/kn-internet-lp/actions"