const { sendPasswordResetEmail } = require('../config/nodemailer');
const { insertResetToken, expireOldTokens } = require('../services/resetTokenPass.service');
const { getUserByEmail } = require('../services/users.service');
const { createResetToken } = require('../utils/createResetToken');

let forgotPassword = async (req, res, next) => {
  try {
    const email = req.body.email;
    const origin = await req.headers.host  // we are  getting the request origin from  the origin header.
    const { errCode } = await getUserByEmail(email);
    if (errCode === 1) {
      return res.json({ status: 'ok' })
    }
    // Change all the previous token have create in database to invalid  "1"
    // User can not use to old or expired token to change the password
    await expireOldTokens(email, 1);
    // create reset token that expires after 1 hours
    let { resetToken, resetTokenExpires, createdAt } = createResetToken();
    const expiredAt = resetTokenExpires;
    await insertResetToken(email, resetToken, createdAt, expiredAt, 0);
    await sendPasswordResetEmail(email, resetToken, origin);
    res.json({ message: 'Please check your email for a new password' });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  forgotPassword
}