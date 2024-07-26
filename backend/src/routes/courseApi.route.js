const express = require("express");
const router = express.Router();
const courseController = require("../controller/Course.controller");
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { uploadCourseThumbnail } = require("../config/multer.config");
const { checkLecturePermission } = require("../middleware/checkIsLecturer");

router.post("/create-course", checkValidAuth, checkLecturePermission, uploadCourseThumbnail.single('thumbnail_url'), courseController.createCourse);
router.post("/get-course/:courseId", checkValidAuth, checkLecturePermission, courseController.getCourseInformation);
router.put("/update-course", checkValidAuth, checkLecturePermission, uploadCourseThumbnail.single('thumbnail_url'), courseController.updateCourseInformation);

module.exports = router;
