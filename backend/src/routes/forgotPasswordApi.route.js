const express = require("express");
const router = express.Router();
const { forgotPassword } = require("../middleware/ForgotPassword.middleware");

router.post("/", forgotPassword)

module.exports = router;