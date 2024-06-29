const express = require("express");
const router = express.Router();
const UserController = require("../controller/User.controller");
const { checkValidAuth } = require("../middleware/checkValidAuth.middleware");
const { uploadUserImage } = require("../config/multer.config");

router.post("/create-user", checkValidAuth, uploadUserImage.single('image_url'), UserController.createUser);
router.post("/authentication-user", UserController.authenticated);
router.get("/", checkValidAuth, (req, res) => {
  res.send("test");
});
router.post("/logout", UserController.logout);
module.exports = router;
