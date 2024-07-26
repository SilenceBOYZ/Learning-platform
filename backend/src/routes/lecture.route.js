const express = require("express");
const router = express.Router();
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { checkLecturePermission } = require("../middleware/checkIsLecturer");
const lectureController = require("../controller/Lecture.controller");
const { uploadVideoLecture } = require("../config/multer.config");
const { checkTitleExist } = require("../middleware/checkTitleLectureExist.middleware");

router.post("/create-lecture/:sectionId", checkValidAuth, checkLecturePermission, checkTitleExist, uploadVideoLecture.single('video-lecture'), lectureController.createLecture);
router.get("/get-lecture-to-watch/:lectureId", checkValidAuth, lectureController.getLectureToWatch);

module.exports = router;
