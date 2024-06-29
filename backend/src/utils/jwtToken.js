const jwt = require("jsonwebtoken")
require("dotenv").config();

function generateToken({ username, id }) {
  return jwt.sign({ username, userId: id }, process.env.SECRET)
}

function verifyToken(token) {
  return jwt.verify(token, process.env.SECRET, (err, decode) => {
    if (err) {
      let jwtError = {
        errCode: true,
        errTitle: err.name,
        errMessage: err.message
      }
      return jwtError;
    } 
    return decode
  });
}


module.exports = { generateToken, verifyToken }