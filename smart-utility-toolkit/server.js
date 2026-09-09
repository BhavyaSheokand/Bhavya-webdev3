// server.js
// A basic HTTP server using Node's built-in http module
// Run with: node server.js
// Visit: http://localhost:3000/, /about, /contact

const http = require('http');
const log = require('./modules/logger');

const PORT = 3000;

const server = http.createServer((req, res) => {
  log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to Node Server');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('About Page');
      break;

    case '/contact':
      res.statusCode = 200;
      res.end('Contact Page');
      break;

    default:
      res.statusCode = 404;
      res.end('404 - Page Not Found');
      break;
  }
});

server.listen(PORT, () => {
  log(`Server is running at http://localhost:${PORT}/`);
});

/*
Test in browser or Postman:

GET http://localhost:3000/         -> "Welcome to Node Server"
GET http://localhost:3000/about    -> "About Page"
GET http://localhost:3000/contact  -> "Contact Page"
GET http://localhost:3000/xyz      -> "404 - Page Not Found"
*/
