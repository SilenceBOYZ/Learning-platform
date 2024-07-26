const directoryName = require("../config/filepath.config");
const { organizeCourse, getCourseById, updateCourse } = require("../services/course.service");
const { checkLectureAccess } = require("../services/lecturer.service");
const getUserIdFromToken = require("../utils/getuserIdFromToken");
const fs = require('fs');

let createCourse = async (req, res) => {
  let userId = getUserIdFromToken(req);
  let data = req.body;
  let thumbnail_url = req.file.filename;
  let result = await organizeCourse(data, parseInt(userId), thumbnail_url);
  res.status(200).json(result);
}

let getCourseInformation = async (req, res) => {
  let userId = await getUserIdFromToken(req);
  let courseId = req.params.courseId;
  let getLecturerId = await checkLectureAccess(parseInt(userId));
  if (getLecturerId.errCode !== 0) {
    return res.status(403).status(getLecturerId.errMessage)
  }
  let { data: { id: lectureId } } = getLecturerId;
  let result = await getCourseById(parseInt(courseId), parseInt(lectureId))
  res.status(200).json(result);
}


let updateCourseInformation = async (req, res) => {
  let { id: courseId, title, shortDesc, price, old_image, catergoryId } = req.body;
  let imageFile;
  if (req.file) {
    imageFile = req.file.filename;
    fs.unlink(directoryName + `/images/uploads/course/${old_image}`, (err) => {
      if (err) console.log(err);
      else console.log("old image have been deleted");
    });
  } else {
    imageFile = old_image;
  }
  let result = await updateCourse(parseInt(courseId), title, shortDesc, price, imageFile, parseInt(catergoryId));
  res.status(200).json(result);
}

module.exports = {
  createCourse,
  getCourseInformation,
  updateCourseInformation
}