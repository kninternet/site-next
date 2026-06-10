# Hostinger Deployment Checklist

## ✅ Pré-Deploy

- [ ] Git repository criado e conectado ao GitHub
- [ ] Node.js 18+ instalado no Hostinger
- [ ] pnpm instalado no servidor
- [ ] Chave SSH gerada e configurada no GitHub
- [ ] GitHub Secrets configurados:
  - [ ] DEPLOY_HOST
  - [ ] DEPLOY_USER
  - [ ] DEPLOY_PORT
  - [ ] DEPLOY_PATH
  - [ ] DEPLOY_KEY
- [ ] SSL/HTTPS configurado no domínio
- [ ] Domain apontando para o servidor Hostinger

## 🔧 Setup Inicial (Manual - Uma única vez)

```bash
# 1. Clone o repo
cd /home/seu_usuario
git clone https://github.com/seu-usuario/kn-internet.git
cd kn-internet

# 2. Instale dependências
pnpm install --frozen-lockfile

# 3. Build
pnpm build

# 4. Configure ambiente
cp .env.example .env.local
nano .env.local

# 5. Configure PM2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

## 🚀 Primeiro Deploy

```bash
# No seu computador local
git add .
git commit -m "Deploy para Hostinger"
git push origin main
```

Depois verifique:
- [ ] GitHub Actions workflow executou com sucesso
- [ ] App está rodando no Hostinger
- [ ] https://seu-dominio.com está acessível
- [ ] Nginx está proxying corretamente

## 📊 Monitoramento Contínuo

```bash
# SSH para o servidor
ssh seu_usuario@seu_servidor

# Ver status
pm2 status

# Ver logs em tempo real
pm2 logs kn-internet

# Ver informações de uso
pm2 monit
```

## 🐛 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Port 3000 em uso | `lsof -i :3000` e `kill -9 <PID>` |
| Build OOM | `NODE_OPTIONS="--max_old_space_size=512" pnpm build` |
| SSH key denied | Verifique `~/.ssh/authorized_keys` no servidor |
| Nginx 502 | Reinicie app: `pm2 restart kn-internet` |
| Dependências faltando | `pnpm install --frozen-lockfile` |

## 📝 Comandos Úteis

```bash
# Reiniciar aplicação
pm2 restart kn-internet

# Ver últimas linhas de log
pm2 logs kn-internet --lines 100

# Parar app
pm2 stop kn-internet

# Delete do processo
pm2 delete kn-internet

# Rebuild completo
pnpm install --frozen-lockfile && pnpm build

# Clear cache
rm -rf .next node_modules && pnpm install --frozen-lockfile
```

## 🔄 Atualizações Futuras

Atualizações são automáticas via GitHub Actions:
1. Faça um commit e push no branch main
2. GitHub Actions fará build e deploy automaticamente
3. PM2 reiniciará a aplicação

Nenhuma ação manual necessária!

## 📚 Documentação Completa

Ver [HOSTINGER_SETUP.md](./HOSTINGER_SETUP.md) para instruções detalhadas.
