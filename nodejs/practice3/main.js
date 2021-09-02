var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    console.log(_url);
    var qureyData = url.parse(_url, true).query;
    var title = qureyData.id;
    console.log(qureyData);

    if (_url == '/') {
        title = 'Welcome';
    }
    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }

    response.writeHead(200);
    fs.readFile(`data/${qureyData.id}`, 'utf8', function (err, data) {
        var description = data;

        var template = `
                <!doctype html>
                    <html>
                    <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="index.html">WEB</a></h1>
                        <ol>
                            <li><a href="/?id=HTML">HTML</a></li>
                            <li><a href="/?id=CSS">CSS</a></li>
                            <li><a href="/?id=JavaScript">JavaScript</a></li>
                        </ol>
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body>
                    </html> `;
        response.end(template);
    })

});
app.listen(3000);