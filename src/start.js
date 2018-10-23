const app = require('./app');

const port = 8000;

function startServer() {
  return new Promise((resolve, reject) => {
    const httpServer = app.listen(port);

    httpServer.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        reject(err);
      }
    });

    httpServer.once('listening', () => resolve(httpServer));
  }).then(httpServer => {
    const { port } = httpServer.address();
    console.info(`==> 🌎 Listening on ${port}. Open up http://localhost:${port}/ in your browser.`);
  });
}

console.log('Starting http server...');
startServer().catch(err => {
  console.error('Error in server start script.', err);
});