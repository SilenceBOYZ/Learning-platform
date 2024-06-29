const { organizeCourse } = require("../services/course.service");
const { verifyToken } = require("../utils/jwtToken");


let createCourse = async (req, res) => {
  let token = await req.session.userInfor;
  let { userId } = verifyToken(token);
  let data = req.body;
  let thumbnail_url = req.file.filename;
  let result = await organizeCourse(data, parseInt(userId), thumbnail_url);
  res.status(200).json(result);
}


module.exports = {
  createCourse,
}