const express = require("express");
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { checkLecturePermission } = require("../middleware/checkIsLecturer");
const sectionController = require("../controller/Section.controller")
const router = express.Router();

router.post('/create-section/:courseId', checkValidAuth, checkLecturePermission, sectionController.createSection)
router.post('/get-section/:sectionId', checkValidAuth, checkLecturePermission, sectionController.getSectionTitle)
router.put('/update-section/:sectionId', checkValidAuth, checkLecturePermission, sectionController.updateSection)
router.delete('/delete-section/:sectionId', checkValidAuth, checkLecturePermission, sectionController.deleteSection)

module.exports = router;