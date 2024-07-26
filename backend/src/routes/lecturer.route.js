const express = require("express");
const router = express.Router();
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const lecturerController = require("../controller/Lecturer.controller");
const { checkLecturePermission } = require("../middleware/checkIsLecturer");

router.post("/create-lecturer", checkValidAuth, lecturerController.signForTeacher);
router.post("/get-lecturer", checkValidAuth, checkLecturePermission, lecturerController.getLectureInfor);
router.put("/update-lecturer", checkValidAuth, checkLecturePermission, lecturerController.updateLecture);
module.exports = router;
