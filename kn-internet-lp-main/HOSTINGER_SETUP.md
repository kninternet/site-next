# Configuração para Hostinger - Node.js App Hosting

## 📋 Prerequisitos

- Node.js 18+ instalado no servidor Hostinger
- pnpm instalado (ou npm/yarn como fallback)
- Git configurado
- pm2 para gerenciamento de processo

## 🚀 Setup Inicial no Hostinger

### 1. Clone o repositório
```bash
cd /home/your_user
git clone https://github.com/seu-usuario/kn-internet.git
cd kn-internet
```

### 2. Instale as dependências
```bash
pnpm install --frozen-lockfile
```

Se pnpm não estiver instalado:
```bash
npm install -g pnpm
```

### 3. Build da aplicação
```bash
pnpm build
```

### 4. Configure as variáveis de ambiente
```bash
nano .env.local
```

Adicione:
```env
NEXT_PUBLIC_API_URL=https://seu-dominio.com
NODE_ENV=production
```

### 5. Inicie a aplicação com pm2
```bash
# Instale pm2 globalmente se necessário
npm install -g pm2

# Inicie a app
pm2 start "pnpm start" --name "kn-internet" --max-memory-restart 1G

# Salve a configuração
pm2 save

# Configure para iniciar no boot
pm2 startup
```

### 6. Configure o nginx como reverse proxy

Edite `/etc/nginx/sites-available/seu-dominio.com`:

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Habilite o site:
```bash
ln -s /etc/nginx/sites-available/seu-dominio.com /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## 🔄 Deploy Automático com GitHub Actions

### 1. Configure as secrets do GitHub

No repositório, vá para **Settings > Secrets and Variables > Actions** e adicione:

- `DEPLOY_HOST`: IP ou domínio do seu servidor Hostinger
- `DEPLOY_USER`: Usuário SSH (ex: seu_usuario)
- `DEPLOY_PORT`: Porta SSH (padrão: 22)
- `DEPLOY_PATH`: Caminho onde a app está (ex: /home/seu_usuario/kn-internet)
- `DEPLOY_KEY`: Chave SSH privada (formato PEM)

### 2. Gere a chave SSH

No servidor Hostinger:
```bash
ssh-keygen -t ed25519 -f ~/.ssh/github_deploy -C "github-actions"
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Copie o conteúdo de `~/.ssh/github_deploy` (chave privada) e adicione como `DEPLOY_KEY`.

### 3. Faça um push e o deploy acontecerá automaticamente

```bash
git push origin main
```

## 📝 Monitoramento

### Ver logs da aplicação
```bash
pm2 logs kn-internet
```

### Ver status
```bash
pm2 status
```

### Parar/Reiniciar
```bash
pm2 stop kn-internet
pm2 restart kn-internet
```

## 🐛 Troubleshooting

### Sharp build falha
```bash
pnpm add sharp --build-from-source
```

### Porta 3000 já em uso
```bash
lsof -i :3000
kill -9 <PID>
```

### Pouca memória
Reduza node options:
```bash
NODE_OPTIONS="--max_old_space_size=512" pnpm build
```

## 📚 Links úteis

- [Hostinger Node.js Hosting](https://www.hostinger.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/)
