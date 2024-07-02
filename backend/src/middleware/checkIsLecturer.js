const { checkLectureAccess } = require("../services/lecture.service");
const { verifyToken } = require("../utils/jwtToken");


let checkLecturePermission = async (req, res, next) => {
  let token = await req.session.userInfor;
  let { userId } = verifyToken(token);
  let result = await checkLectureAccess(userId);
  if (result.errCode === 0) {
    next();
  } else {
    return res.status(403).json(result.errMessage);
  }
}

module.exports = {
  checkLecturePermission
}