var express = require("express");
var router = express.Router();

const controller = require("../controllers/subjects");

router.get("/", controller.getAllSubjects);


router.get("/:id", controller.getSubjectById);

router.delete("/:id", controller.deleteSubject);

router.put("/:id", controller.updateSubject);

router.post("/", controller.createSubject);

module.exports = router;
