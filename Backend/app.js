//looks for a local file with the ./
// const http = require('./http');
import { Client } from 'pg'
import * as http from 'http'
import * as fs from 'fs'
import { Pool } from 'pg'
import { Questions, Examples } from './C1.mjs'



// const pool = new Pool({
//     user: 'postgres',
//     password: 'Crackhead123',
//     host: 'http://127.0.0.1:53348/?key=ded6032d-9d0c-490f-b856-533e6c7a3109',
//     port: 5432,
//     database: 'test',
//     max: 10,
//     idleTimeoutMillies: 30000
//     });

//event driven architecture when a reqest is sent to our server
//event loop keep running as long as there are event listeners registered
const server = http.createServer(async (req, res) =>{

    // const client = await pool.connect();

    // try {
    //     const dbRes = await client.query('SELECT * FROM public.prim');
        
    //     // Let's actually use the data in the response
    //     const message = dbRes.rows[0]?.message || "No message found";

    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(`<h1>Database says: ${message}</h1>`);
    //     res.end();

    // } catch (err) {
    //     console.error("Database Error:", err);
    //     res.writeHead(500);
    //     res.end("Internal Server Error");
    // } finally {
    //     // 3. IMPORTANT: Release the client back to the pool
    //     // We do NOT use client.end() here. That would kill the connection.
    //     // client.release() just puts it back in the waiting room for the next request.
    //     client.release();
    // }

    // ... rest of your routing logic (if/else) ...
    const url = req.url;
    const method = req.method;

    if (url === '/'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
    }

    if (url === '/api/questions' && method === 'GET') {
        const questions = await Questions();
        console.log(questions);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(questions));
        return res.end();
    }
    console.log(url);
    if (url === '/api/questions/examples' && method === 'GET') {
        const examples = await Examples();
        console.log(examples);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(examples));
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