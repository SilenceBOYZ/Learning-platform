const directoryName = require("../config/filepath.config");
const userService = require("../services/users.service");
const getUserIdFromToken = require("../utils/getuserIdFromToken");
const { generateToken, verifyToken } = require("../utils/jwtToken");
const fs = require("fs");

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

let getUserInformation = async (req, res) => {
  let userId = await getUserIdFromToken(req);
  let result = await userService.getUserById(parseInt(userId));
  res.status(200).json(result);
}

let udpateUser = async (req, res) => {
  let { username, old_image, id } = req.body;
  let imageFile;
  if (req.file) {
    imageFile = req.file.filename;
    fs.unlink(directoryName + `/images/uploads/user-image/${old_image}`, (err) => {
      if (err) console.log(err);
      else console.log("old image have been deleted");
    });
  } else {
    imageFile = old_image;
  }
  let result = await userService.updateUserInformation(parseInt(id), username, imageFile);
  res.status(200).json(result);
}

let changePassword = async (req, res) => {
  let { password: newPassword, id } = req.body;
  let result = await userService.changeUserPassword(parseInt(id), newPassword);
  res.status(200).json(result)
}


let logout = async (req, res) => {
  req.session.destroy();
  res.status(200).json("User have been logout");
}

module.exports = { createUser, authenticated, logout, udpateUser, getUserInformation, changePassword }