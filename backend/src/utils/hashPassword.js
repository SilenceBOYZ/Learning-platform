const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const hashPassword = (userpassword) => {
  return bcrypt.hashSync(userpassword, salt);
}

module.exports = hashPassword;