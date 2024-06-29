const userService = require("../services/users.service");
const { generateToken } = require("../utils/jwtToken");

let createUser = async (req, res) => {
  let data = req.body;
  let imageUrl = req.file.filename;
  let result = await userService.createUser(data, imageUrl);
  res.status(200).json(result);
}

let authenticated = async (req, res) => {
  let { email, password } = req.body;
  let result = await userService.checkUserExist(email, password);
  if (result.errCode === 0) {
    req.session.userInfor = generateToken(result.data);
  }
  res.status(200).json(result);
}

let logout = async (req, res) => {
  req.session.userinfor = null;
  // res.clearCookie('connect.sid', { path: '/' })
  res.status(200).json("User have been logout");
}

module.exports = { createUser, authenticated, logout }