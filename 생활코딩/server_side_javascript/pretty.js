// npm install uglify-js -g
// -g global 설치

function hello(name) {
    console.log("hi", name);
}

hello("js");

// m은 mangle
// PS C:\Projects\TIL\생활코딩\server_side_javascript> uglifyjs pretty.js -m
// function hello(l){console.log("hi",l)}hello("js");

// PS C:\Projects\TIL\생활코딩\server_side_javascript> uglifyjs pretty.js -o uglified.js -m
// function hello(l){console.log("hi",l)}hello("js");

// PS C:\Projects\TIL\생활코딩\server_side_javascript> uglifyjs pretty.js -o uglified.min.js -m
// function hello(l){console.log("hi",l)}hello("js");
