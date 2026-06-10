module.exports = {
  apps: [
    {
      name: 'kn-internet',
      script: 'pnpm',
      args: 'start',
      cwd: '/home/u678600923/kn-internet',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/home/u678600923/kn-internet/logs/err.log',
      out_file: '/home/u678600923/kn-internet/logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 5000,
      kill_timeout: 5000,
    },
  ],

  deploy: {
    production: {
      user: 'u678600923',
      host: '156.67.72.175',
      ref: 'origin/main',
      repo: 'https://github.com/otavio-cyber/kn-internet-lp.git',
      path: '/home/u678600923/kn-internet',
      'post-deploy': 'pnpm install --frozen-lockfile && pnpm build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
