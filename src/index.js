const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Test Eventhub</title>
      </head>
      <body>
        <h1>Bienvenue</h1>
        <p>Ca fonctionne ? On dirait bien oui.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`EventHub démarré sur le port ${PORT}`);
});
