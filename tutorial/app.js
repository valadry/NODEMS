//looks for a local file with the ./
// const http = require('./http');

const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

//event driven architecture when a reqest is sent to our server
//event loop keep running as long as there are event listeners registered
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    //process.exit(); exits process

    const url = req.url;
    const method = req.method;

    if (url === '/'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>
        {
            console.log(chunk)
            body.push(chunk);
        });

        req.on('end', () =>
        {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync('Message.txt', 'DUMMY');
        res.writeHead(302, 'Location', 'l' )
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></html>');
    res.write('<body><h1> HELdwdwdLLO </h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);