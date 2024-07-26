const { verifyToken } = require("./jwtToken");

const getUserIdFromToken = (req) => {
  let token = req.session.userInfor;
  let { userId } = verifyToken(token);
  return userId;
}

module.exports = getUserIdFromToken;