const Paper = require("../models/paper");

// Paper 전체 데이터 가져오기
const index = (req, res, next) => {
    Paper.find()
        .then((result) => {
            res.json({ result });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};

const show = (req, res, next) => {
    let paperID = req.body.paperID;
    Paper.findById(paperID)
        .then((result) => {
            res.json({
                result,
            });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};
