const { response } = require("express");
const { db } = require("../config/database/config")

let organizeCourse = (data, userId, thumbnail_url) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      // check the user sign for lecturer or not
      let checkLectureRole = await db.query(`SELECT * FROM lecturer, users WHERE lecturer.userId = users.id AND userId = ${userId}`);
      if (!checkLectureRole.length) {
        response.errCode = 1;
        response.errMessage = "Hãy đăng ký làm giảng viên"
      } else {
        // check the lecturer permission is active or not
        let [checkIsActive] = await db.query(`SELECT lecturer.id FROM lecturer, users WHERE lecturer.userId = users.id AND userId = ${userId} and isActive='active' `);
        if (!checkIsActive.length) {
          response.errCode = 2;
          response.errMessage = "Hãy đợi người quản trị duyệt yều cầu của bạn"
        } else {
          let { title, price, shortDesc, catergoryId } = data;
          let queryString = `INSERT INTO COURSES (title, price, shortDesc, thumbnail_url, catergoryId, lecturerId) VALUES (?, ?, ?, ?, ?, ?)`;
          await db.query(queryString, [title, price, shortDesc, thumbnail_url, parseInt(catergoryId), parseInt(checkIsActive[0].id)])
          response.errCode = 0;
          response.errMessage = "Tạo khóa học thành công";
        }
      }
      resolve(reponse);
    } catch (error) {
      reject(error);
    }
  })
}


module.exports = { organizeCourse }