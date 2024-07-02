const { db } = require("../config/database/config");

let signingForTeacher = (data, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let { degree, majorId, description } = data;
      let queryStringCheck = `SELECT * FROM lecturer WHERE userId = ${userId}`;
      let [checkLectureExist] = await db.query(queryStringCheck);
      if (!checkLectureExist.length) {
        let queryStringLecturer = "INSERT INTO lecturer (degree, majorId, description, userId) VALUES (?, ?, ?, ?)"
        await db.query(queryStringLecturer, [degree, majorId, description, userId]);
        response.errCode = 0;
        response.message = "Đăng ký làm giảng viên thành công";
      } else {
        response.message = "Thông tin giảng viên của bạn đã tồn tài trong hệ thống!!";
        response.errCode = 1;
      }
      resolve(response);
    } catch (error) {
      reject(error.message);
    }
  })
}

let checkLectureAccess = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      // check the user sign for lecturer or not
      let checkLectureRole = await db.query(`SELECT * FROM lecturer, users WHERE lecturer.userId = users.id AND userId = ${userId}`);
      if (!checkLectureRole[0].length) {
        response.errCode = 1;
        response.errMessage = "Hãy đăng ký làm giảng viên"
      } else {
        // check the lecturer permission is active or not
        let [checkIsActive] = await db.query(`SELECT lecturer.id FROM lecturer, users WHERE lecturer.userId = users.id AND userId = ${userId} and isActive='active' `);
        if (!checkIsActive.length) {
          response.errCode = 2;
          response.errMessage = "Hãy đợi người quản trị duyệt yều cầu của bạn"
        } else {
          response.errCode = 0;
          response.data = checkIsActive;
        }
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }

  })
}


module.exports = {
  signingForTeacher,
  checkLectureAccess
}