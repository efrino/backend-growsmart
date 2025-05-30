const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0', // penting agar bisa diakses di Render
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({ message: 'Hello from Hapi.js on Render!' })
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
