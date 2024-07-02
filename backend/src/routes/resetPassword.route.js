const express = require("express");
const validateResetToken = require("../middleware/validateResetToken.middleware");
const { getUserByEmail, updateUserPassword } = require("../services/users.service");
const hashPassword = require("../utils/hashPassword");
const router = express.Router();

router.post('/', validateResetToken, async (req, res, next) => {
  try {
    const newPassword = req.body.password;
    const email = req.body.email;
    if (!newPassword) {
      return res.sendStatus(400).json("Error in server");
    }
    const password = hashPassword(newPassword);

    const { data: { id: userId } } = await getUserByEmail(email);
    const result = await updateUserPassword(password, userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error in resetPassword route");
  }
});

module.exports = router;