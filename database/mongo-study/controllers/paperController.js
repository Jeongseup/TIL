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

    // 미들웨어
    if (req.file) {
        paper.avatar = req.file.path;
    }

    // 파일이 여러개인 경우
    if (req.files) {
        let path = "";
        req.files.forEach(function (files, index, arr) {
            path = path + files.path + ",";
        });
        path = path.substring(0, path.lastIndexOf(","));
        paper.avatar = path;
    }

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

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    Paper.findOne({ $or: [{ email: username }, { phone: username }] }).then(
        (user) => {
            if (user) {
                // bcrypt.compare(password, user.password, function (err, result) {
                //     if(err) {
                //         res.json {
                //             error : err
                //         }
                //     }
                //     if(result) {
                //         let token = jwt.sign({name: user.name}, 'Secret Value', {expiresIn: '1h'})
                //         res.json({
                //             message: "Login Successful!",
                //             token
                //         })
                //     } else {
                //         res.json({
                //             message: "Password does not matched!"
                //         })
                //     }
                // })
            } else {
                res.json({
                    message: "No user found!",
                });
            }
        }
    );
};

module.exports = { index, show, store, update, destory, login };
