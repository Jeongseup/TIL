const express = require("express");
const app = express();

app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/topic/:id", (req, res) => {
    var topics = ["javascript is ...", "node.js is ", "express is .. "];
    var output = `
    <a href="/topic?id=0">Javscript</a><br>
    <a href="/topic?id=1">node</a><br>
    <a href="/topic?id=2">express</a>
    ${topics[req.params.id]}
    `;
    res.send(output);
});

app.get("/template", (req, res) => {
    res.render("temp", { time: Date(), _title: "Jade" });
});

app.get("/", function (req, res) {
    res.send("hello js");
});

app.get("/dynamic", (req, res) => {
    var output = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            Hello dynamic
        </body>
    </html>
    `;
    res.send(output);
});

app.get("/route", (req, res) => {
    res.send("route!");
});

app.get("/login", (req, res) => {
    res.send("login please");
});

app.listen(3000, function () {
    console.log("connected 3000 port!");
});
