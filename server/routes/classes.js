var express = require("express");
var router = express.Router();

const controller = require("../controllers/classes");

router.get("/", controller.getAllClasses);

router.get("/:id", controller.getClassById);

router.delete("/:id", controller.deleteClass);

router.put("/:id", controller.updateClass);

router.post("/", controller.createClass);

module.exports = router;
