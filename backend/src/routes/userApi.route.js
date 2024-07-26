const express = require("express");
const router = express.Router();
const UserController = require("../controller/User.controller");
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { uploadUserImage } = require("../config/multer.config");

router.post("/create-user", checkValidAuth, uploadUserImage.single('image_url'), UserController.createUser);
router.put("/update-user", checkValidAuth, uploadUserImage.single('image_url'), UserController.udpateUser);
router.put("/change-user-password", checkValidAuth, UserController.changePassword);
router.post("/get-user", checkValidAuth, UserController.getUserInformation);
router.post("/authentication-user", UserController.authenticated);
router.get("/", checkValidAuth, (req, res) => {
  res.send("test");
});
router.post("/logout", UserController.logout);
module.exports = router;
