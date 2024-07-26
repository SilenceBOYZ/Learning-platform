const { signingForTeacher, getLecureByUserId, updateLectureInformation } = require("../services/lecturer.service");
const getUserIdFromToken = require("../utils/getuserIdFromToken");


let signForTeacher = async (req, res) => {
  let userId = await getUserIdFromToken(req);
  let result = await signingForTeacher(data, parseInt(userId));
  res.status(200).json(result)
}

let getLectureInfor = async (req, res) => {
  let userId = await getUserIdFromToken(req);
  let result = await getLecureByUserId(parseInt(userId));
  res.status(200).json(result);
}

let updateLecture = async (req, res) => {
  let { lectureId, degree, majorId, description } = req.body;
  let result = await updateLectureInformation(parseInt(lectureId), degree, majorId, description);
  res.status(200).json(result);
}

module.exports = { signForTeacher, getLectureInfor, updateLecture }