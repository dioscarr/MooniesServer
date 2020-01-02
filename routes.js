debugger;
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write('<html><head><title>Test</title></head>');
        res.write('<body><form action="message" method="POST"><input text" name="message"/><button>Send</button>Hello World</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/message" && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);

        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            console.log(message);
        })

        return res.end();
    }


    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Test</title></head>');
    res.write('<body><p>hello</p></body>');
    res.write('</html>');
    res.end()
}

module.exports = requestHandler;