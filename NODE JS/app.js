const http = require("http");

const routes = require('./routes');

console.log(routes.anyText);

const server = http.createServer(routes.handler);

server.listen(4000);
