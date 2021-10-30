const Paper = require("../models/paper");

// 모든 설문지 조건을 가져온다.
const index = (req, res, next) => {
    Paper.find()
        .then((result) => {
            res.json({ result });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};

// 설문지 id을 기준으로 한 설문지 조건을 가져온다.
const show = (req, res, next) => {
    let paperId = req.body.paperId;
    Paper.findById(paperId)
        .then((result) => {
            res.json({
                result,
            });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};

// DB에 설문지 조건 추가
const store = (req, res, next) => {
    const paperObject = req.body.paper;

    const testCollectionData = new Paper(paperObject);
    testCollectionData
        .save()
        .then((result) => {
            res.json({
                message: "Data Saved Successfully",
            });
        })
        .catch((error) => {
            message: "Paper Upload Error";
        });
};

// 설문지 조건 업데이트
const update = (req, res, next) => {
    let paperId = req.body.paperId;
    let updatedPaper = req.body.paper;

    Paper.findByIdAndUpdate(paperId, { $set: updatedPaper })
        .then((result) => {
            res.json({
                message: "Paper Updated successfully",
            });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};

const destroy = (req, res, next) => {
    let paperId = req.body.paperId;

    Paper.findByIdAndRemove(paperId)
        .then((result) => {
            res.json({
                message: "Paper Removed successfully",
            });
        })
        .catch((error) => {
            res.json({ message: "Paper Controller Error" });
        });
};

module.exports = { index, show, store, update, destory };
