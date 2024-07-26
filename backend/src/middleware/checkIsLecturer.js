const { checkLectureAccess } = require("../services/lecturer.service");
const getUserIdFromToken = require("../utils/getuserIdFromToken");


let checkLecturePermission = async (req, res, next) => {
  let userId = await getUserIdFromToken(req);
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