// Create web server that listens on port 8080
// When a request comes in, send response text "hello world".

const http = require('http');
const server = http.createServer((req, res) => {
  res.end('hello world');
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});