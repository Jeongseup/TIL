const http = require("http");

const hostname = "127.0.0.1";
const port = 1337;

// http라는 모듈은 createServer라는 걸 호출하면 http.Server라는 걸 return 하고
// 그 객체는 listen이라는 method를 가지고 있음.

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
