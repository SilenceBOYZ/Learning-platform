const { db } = require("../config/database/config");

let signingForTeacher = (data, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let respone = {};
      let { degree, majorId, description } = data;
      let queryStringCheck = `SELECT * FROM lecturer WHERE userId = ${userId}`;
      let [checkLectureExist] = await db.query(queryStringCheck);
      if (!checkLectureExist.length) {
        let queryStringLecturer = "INSERT INTO lecturer (degree, majorId, description, userId) VALUES (?, ?, ?, ?)"
        await db.query(queryStringLecturer, [degree, majorId, description, userId]);
        respone.errCode = 0;
        respone.message = "Đăng ký làm giảng viên thành công";
      } else {
        respone.message = "Thông tin giảng viên của bạn đã tồn tài trong hệ thống!!";
        respone.errCode = 1;
      }
      resolve(respone);
    } catch (error) {
      reject(error.message);
    }
  })
}


module.exports = {
  signingForTeacher
}