var express = require("express");
var router = express.Router();

const controller = require("../controllers/teachers");

router.get("/", controller.getAllTeachers);

router.get("/:id", controller.getTeacherById);

router.delete("/:id", controller.deleteTeacher);

router.put("/:id", controller.updateTeacher);

router.post("/", controller.createTeacher);

module.exports = router;
