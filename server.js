// function start(){
//     //do nothing
// }

// exports.start = start;

let http = require('http');
let url = require('url');
let handler = require('./handlers')
let server = http.createServer((req, res)=>{
    console.log('Received a request');
    res.writeHead(500,{});
    res.write('Hello world');
    res.end();

});
console.log ('Server is starting');
server.listen(5500);
//process.env.PORT check if port is assigned 