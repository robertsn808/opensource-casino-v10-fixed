module.exports = {
  apps: [
    {
      name: 'Laravel',
      script: './start-laravel.sh',
      interpreter: '/bin/bash',
      watch: false,
      env: {
        NODE_ENV: 'production',
        LARAVEL_SERVE_HOST: '127.0.0.1',
        LARAVEL_SERVE_PORT: '18080',
        // Override Redis-dependent drivers for local PM2 serve
        CACHE_DRIVER: 'file',
        SESSION_DRIVER: 'file',
        QUEUE_CONNECTION: 'sync',
        REDIS_HOST: '127.0.0.1',
        REDIS_PORT: '6379',
        APP_URL: 'http://127.0.0.1:18080',
        // Ensure Laravel connects to local MySQL while under PM2
        DB_HOST: '127.0.0.1',
        DB_PORT: '3306',
        DB_DATABASE: 'cashout',
        DB_USERNAME: 'casino_user',
        DB_PASSWORD: 'casino_pass'
      }
    },
    {
      name: 'Slots',
      script: './Slots.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        // You can override with SOCKET_* here if needed
        // SOCKET_SLOTS_PORT: '22154'
        DB_HOST: '127.0.0.1',
        DB_PORT: '3306',
        DB_DATABASE: 'cashout',
        DB_USERNAME: 'casino_user',
        DB_PASSWORD: 'casino_pass'
      }
    },
    {
      name: 'Server',
      script: './Server.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        // To change port without editing JSON, uncomment:
        // SOCKET_SERVER_PORT: '22197',
        DB_HOST: '127.0.0.1',
        DB_PORT: '3306',
        DB_DATABASE: 'cashout',
        DB_USERNAME: 'casino_user',
        DB_PASSWORD: 'casino_pass'
      }
    },
    {
      name: 'Arcade',
      script: './Arcade.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
        // SOCKET_ARCADE_PORT: '22188'
        DB_HOST: '127.0.0.1',
        DB_PORT: '3306',
        DB_DATABASE: 'cashout',
        DB_USERNAME: 'casino_user',
        DB_PASSWORD: 'casino_pass'
      }
    }
  ]
};
