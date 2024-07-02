const { findValidToken } = require("../services/resetTokenPass.service");

const validateResetToken = async (req, res, next) => {
  const email = req.query.email;
  const resetToken = req.query.token;

  if (!resetToken || !email) {
    return res.status(403).json("Invalid Token");
  }
  // then we need to verify if the token exist in the resetPasswordToken and not expired.
  const currentTime = new Date(Date.now());
  const token = await findValidToken(resetToken, email, currentTime)

  if (!token) return res.json('Invalid token, please try again.');
  next();
}

module.exports = validateResetToken;
