const express = require("express");
const router = express.Router();
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const lecturerController = require("../controller/Lecturer.controller");

router.post("/create", checkValidAuth, lecturerController.signForTeacher);
module.exports = router;
