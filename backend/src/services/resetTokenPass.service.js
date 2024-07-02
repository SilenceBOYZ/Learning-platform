const { db } = require("../config/database/config")

let insertResetToken = (email, tokenValue, createdAt, expiredAt, used) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [result] = await db.query('INSERT INTO ResetPasswordToken ( email, Token_value, created_at, expired_at, used) VALUES (?, ?, ?, ?, ?)', [email, tokenValue, createdAt, expiredAt, used]);
      resolve(result.insertId);
    } catch (error) {
      reject(error);
    }
  });
}


let expireOldTokens = (email, used) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [result] = await db.query('UPDATE ResetPasswordToken SET used = ?  WHERE email = ?', [used, email]);
      console.log("update token");
      if (!result.affectedRows) {
        resolve("Error in update to token")
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

let findValidToken = (token, email, currentTime) => {
  return new Promise(async (resolve, reject) => {
    try {
      let [result] = await db.query('SELECT * FROM ResetPasswordToken WHERE (email = ? AND Token_value = ? AND expired_at > ?)', [email, token, currentTime]);
      if (!result.length) {
        resolve(undefined);
      }
      resolve(result[0].id);
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = {
  expireOldTokens,
  insertResetToken,
  findValidToken,
}