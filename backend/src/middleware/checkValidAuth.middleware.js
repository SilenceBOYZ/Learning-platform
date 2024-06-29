const { verifyToken } = require("../utils/jwtToken");


let checkValidAuth = async (req, res, next) => {
  try {
    let token = req.session.userInfor;
    if (!token) {
      return res.status(404).json("Token is undefined");
    }
    let checkValid = verifyToken(token);
    if (checkValid?.errCode) {
      throw new Error(`${checkValid.errTitle} ${checkValid.errMessage}`)
    } else {
      next();
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports = {
  checkValidAuth,
}