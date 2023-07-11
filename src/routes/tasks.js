const express = require('express');
const router = express.Router();
const controller = require("../controllers/tasksControllers")

router.get("/", controller.list);
router.post("/add",controller.save);
router.get("/delete/:id",controller.delete);
router.get("/update/:id",controller.updateForm);
router.post("/update/:id",controller.update);

module.exports = router;