const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        let ext = path.ext(file.originalname);
        cb(null, Data.now() + ext);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
            callback(null, true);
        } else {
            console.log("only jpg & png file supported!");
            callback(null, false);
        }
    },
    limits: {},
});
