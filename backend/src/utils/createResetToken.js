const crypto = require('crypto');

let createResetToken = () => {
  const resetToken = crypto.randomBytes(40).toString('hex');
  const resetTokenExpires = new Date(Date.now() + 60 * 60 * 1000);
  const createdAt = new Date(Date.now());

  return { resetToken, resetTokenExpires, createdAt };
}

module.exports = {
  createResetToken
}