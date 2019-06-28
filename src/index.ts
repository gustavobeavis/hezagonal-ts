import http from 'http'
const status: number = 200
const port: number = 8080
http
  .createServer((req, res) => {
    res.writeHead(status, { 'Content-Type': 'text/plain' })
    res.end('Hello cccc.JS!')
  })
  .listen(port)
console.log('Server running at http://localhost:8080/')
