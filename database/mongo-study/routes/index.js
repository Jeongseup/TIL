const router = require("express").Router();
const Paper = require("../models/paper");

// test set
// router.get("/", async (req, res) => {

//     let testBody = new Object();
//     testBody.gender = "male";
//     testBody.age = ">30";

//     console.log(testBody);

//     const testCollectionData = new Paper(testBody);
//     await testCollectionData.save();
//     return res.send({
//         msg: "Data Saved Successfully",
//     });
// });

router.post("/", async (req, res) => {
    let paperObject = req.body;
    const testCollectionData = new Paper(paperObject);
    await testCollectionData.save();
    return res.send({
        msg: "Data Saved Successfully",
    });
});

router.get("/paper", async (req, res) => {
    // 10. Student 레퍼런스 전체 데이터 가져오기
    Paper.find(function (error, results) {
        console.log("--- Read all ---");
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            res.send(results);
        }
    });
});

// Find All
router.get("/findall", async (req, res) => {
    console.log(await Paper.findAll());

    try {
        let results = await Paper.findAll();
        console.log(results);
        if (!results.length)
            return res.status(404).send({ err: "Papers not found" });
        res.send(`find successfully: ${results}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

// // Find One by todoid
// router.get("/todoid/:todoid", (req, res) => {
//     Todo.findOneByTodoid(req.params.todoid)
//         .then((todo) => {
//             if (!todo) return res.status(404).send({ err: "Todo not found" });
//             res.send(`findOne successfully: ${todo}`);
//         })
//         .catch((err) => res.status(500).send(err));
// });

// // Create new todo document
// router.post("/", (req, res) => {
//     Todo.create(req.body)
//         .then((todo) => res.send(todo))
//         .catch((err) => res.status(500).send(err));
// });

// // Update by todoid
// router.put("/todoid/:todoid", (req, res) => {
//     Todo.updateByTodoid(req.params.todoid, req.body)
//         .then((todo) => res.send(todo))
//         .catch((err) => res.status(500).send(err));
// });

// // Delete by todoid
// router.delete("/todoid/:todoid", (req, res) => {
//     Todo.deleteByTodoid(req.params.todoid)
//         .then(() => res.sendStatus(200))
//         .catch((err) => res.status(500).send(err));
// });

module.exports = router;
