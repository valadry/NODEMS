//looks for a local file with the ./
// const http = require('./htpp');

const http = require('http');


// function rqListener(req, res) {

// }

// http.createServer(rqListener);

//event driven architecture when a reqest is sent to our server
const server = http.createServer((req, res) =>{
    console.log(req)
})

server.listen(3000);