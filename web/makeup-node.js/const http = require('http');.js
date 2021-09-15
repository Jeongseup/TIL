const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; character-set=utf-8" });
    res.write(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>

    <body>
        create html page
        <script>

        </script>

    </body>

    </html>
    `);
}).listen(8080, () => {
    console.log("8080번 포트열림");
});
