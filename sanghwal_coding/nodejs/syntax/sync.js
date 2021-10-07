var fs = require("fs");

// console.log("A");
// console.log(__dirname);
// var result = fs.readFileSync(`${__dirname}/sample.txt`, "utf8");
// console.log(result)
// console.log("C");

console.log("A");
var result = fs.readFile(
    `${__dirname}/sample.txt`,
    "utf8",
    function (err, result) {
        console.log(result);
    }
);
console.log("C");
