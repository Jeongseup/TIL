const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("hello js");
});

app.get("/login", (req, res) => {
    res.send("login please");
});

app.listen(3000, function () {
    console.log("connected 3000 port!");
});
