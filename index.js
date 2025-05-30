import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0', // Penting agar bisa diakses di Render
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({ message: 'Hello from Hapi.js on Render!' })
  });

  await server.start();
  console.log(`✅ Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

init();
