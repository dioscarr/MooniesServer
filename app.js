const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Test</title></head><body><p>Hello World</body></html>');
    res.end()
});

server.listen(4001);