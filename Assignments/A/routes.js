
const users = require('./data');
const routes = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write(`<html>
                <head>
                <title> A </title>
                </head>
                <body>
                <p> Hello from Assignment A</p>
                <form action="/create-user" method="POST">
                <input type="text" name="username"/>
                <button type="submit">Create New User</button>
                </form>
                </body>
                </html>`);
        return res.end();
    }
    if (url === '/users') {
        let usersli = "";
        usersli += `<li>Patrick</li>`;
        usersli += `<li>Sams</li>`;
        usersli += `<li>John</li>`;
        res.write(`
            <html>
                <head>
                <title> A </title>" 
                </head>
                <body>
                    <ul>${usersli}</ul>
                </body>
            </html>
            `);
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const rawData = [];
        req.on('data', (chunk) => {
            rawData.push(chunk);
            console.log(chunk);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(rawData).toString();
            const cleanData = parsedData.split("=")[1];
            console.log(cleanData);

        });
        res.writeHead(302, {
            'Location': '/'
            //add other headers here...
        });
        //res.statusCode = 302;        
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head>
    <title> B</title>
    </head>
    <body>
    <p> Hello from Assignment B</p>
    <form action="/create-user" method="POST">
    <input type="text" name="username"/>
    <button>Create New User</button>
    </form>
    </body>
    </html>`);
    res.end();
}
module.exports = routes;