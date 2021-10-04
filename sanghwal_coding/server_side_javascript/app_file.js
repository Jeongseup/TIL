const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views_file");
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/topic/new", (req, res) => {
    res.render("new");
});

app.post("/topic", (req, res) => {
    console.log(req.body);

    var title = req.body.title;
    var description = req.body.description;

    fs.writeFile("data/" + title, description, function (err) {
        if (err) {
            res.status(500).send("internet server error");
        }
        res.send("Success");
    });
});

app.listen(3000, function () {
    console.log(`connected 3000 port!, http://localhost:${3000}`);
});
