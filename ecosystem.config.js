module.exports = {
  apps : [
    {
      name: 'tea',
      script: './bin/www',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy : {
    production : {
      user : 'root',
      host : '47.104.148.45',
      ref  : 'origin/main',
      repo : 'git@github.com:can2014ky/teaBackend.git',
      path : '/project/tea',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
