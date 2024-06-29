const { signingForTeacher } = require("../services/lecture.service");
const { verifyToken } = require("../utils/jwtToken");


let signForTeacher = async (req, res) => {
  let token = await req.session.userInfor;
  let data = req.body;
  let { userId } = verifyToken(token);
  let result = await signingForTeacher(data, parseInt(userId));
  res.status(200).json(result)
}


module.exports = { signForTeacher }