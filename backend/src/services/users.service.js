const { db } = require("../config/database/config");
const bcrypt = require("bcrypt");
const hashPassword = require("../utils/hashPassword");

function checkUserPassword(passwordRef, userPassword) {
  const match = bcrypt.compareSync(passwordRef, userPassword);
  return match;
}
// bcrypt.compareSync(myPlaintextPassword, hash); function to compare password in sync

const createUser = (data, imageUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      let code = {};
      const { username, email, password, confirmPassword } = data;
      if (password != confirmPassword) {
        code.errCode = 2;
        code.errMessage = "Mật khẩu xác nhận không đúng";
        resolve(code);
      }
      let [rows] = await db.execute('SELECT * FROM USERS WHERE `email` = ? ', [email]);
      if (rows.length) {
        code.errCode = 1;
        code.errMessage = "Người dùng tồn tại trong hệ thống";
      } else {
        let userpassword = hashPassword(password);
        let queryString = "INSERT INTO USERS (username, email, password, roleId, image_url) VALUES (?, ?, ?, ?, ?)"
        await db.query(queryString, [username, email, userpassword, 1, imageUrl]);
        code.errCode = 0;
        code.errMessage = "Đăng ký người dùng thành công";
      }
      resolve(code);
    } catch (e) {
      reject(e);
    }
  })
}

const checkUserExist = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let code = {};
      let [user] = await db.query('SELECT * FROM USERS WHERE `email` = ? ', [email]);
      if (!user.length) {
        code.errCode = 1;
        code.errMessage = "Người dùng không tồn tại trong hệ thống";
      } else {
        let checkPassword = checkUserPassword(password, user[0].password);
        if (checkPassword) {
          let [{ username, email, id }] = user;
          code.errCode = 0;
          code.errMessage = "Đăng nhập thành công";
          code.data = { username, email, id };
        } else {
          code.errCode = 2;
          code.errMessage = "Mật khẩu không chính xác";
        }
      }
      resolve(code);
    } catch (error) {
      reject(error);
    }
  })
}

const getUserByEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let code = {};
      let [user] = await db.query('SELECT * FROM USERS WHERE `email` = ? ', [email]);
      if (!user.length) {
        code.errCode = 1;
        code.errMessage = "Người dùng không tồn tại trong hệ thống";
        code.data = { id };
      } else {
        code.errCode = 0;
        code.errMessage = "Người dùng tồn tại trong hệ thống";
        code.data = user[0];
      }
      resolve(code);
    } catch (error) {
      reject(error);
    }
  })
}

let updateUserPassword = (password, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [result] = await db.query('UPDATE users SET password=? WHERE id = ?', [password, userId]);
      if(result.affectedRows === 1) {
        resolve("Update user password success")
      }
      resolve("Error in update user password")
    } catch (error) {
      reject(error)
    }
  });
}

module.exports = {
  createUser,
  checkUserExist,
  getUserByEmail,
  updateUserPassword
}