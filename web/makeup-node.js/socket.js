var net = require("net");

var server = net.createServer((socket) => {
    socket.end(`${new Data()}\n`);
});

server.listen(59090);

// expert = module.exports
module.exports = {}
