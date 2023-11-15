module.exports = {
  apps: [
    {
      name: 'www-name',
      port: '80',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
