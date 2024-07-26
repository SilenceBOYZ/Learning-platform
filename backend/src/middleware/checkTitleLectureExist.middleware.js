const { checkLectureTitleExist } = require("../services/lecture.service");

let checkTitleExist = async (req, res, next) => {
  let sectionId = req.params.sectionId;
  let title = req.body.title;
  let result = await checkLectureTitleExist(title, parseInt(sectionId));
  if (result.errCode === 0) {
    next();
  } else {
    return res.status(403).json(result.errMessage);
  }
}

module.exports = { checkTitleExist }