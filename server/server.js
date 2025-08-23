// Filnavn: app.js

// Importer innebygde HTTP-modulen
const http = require('http');

// Lag en enkel server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hei, Node.js fungerer!\n');
});

// Start serveren på port 3000
server.listen(5501, () => {
  console.log('Server kjører på http://localhost:5501');
});
