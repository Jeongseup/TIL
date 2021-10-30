const router = require("express").Router();
const paperController = require("../controller/paperController");

router.get("/", paperController.index);
router.post("/show", paperController.show);
router.post("/store", paperController.store);
router.post("/update", paperController.update);
router.post("/delete", paperController.destroy);

module.exports = router;
