const express = require("express");
const router = express.Router();
const courseController = require("../controller/Course.controller");
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { uploadCourseThumbnail } = require("../config/multer.config");

router.post("/create-course", checkValidAuth, uploadCourseThumbnail.single('thumbnail_url'), courseController.createCourse);

module.exports = router;
