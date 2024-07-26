const { db } = require("../config/database/config")

let organizeCourse = (data, userId, thumbnail_url) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      // get lectureId, check lecture permission already write in middleware
      let [checkIsActive] = await db.query(`SELECT lecturer.id FROM lecturer, users WHERE lecturer.userId = users.id AND userId = ${userId} and isActive='active' `);
      if (!checkIsActive.length) {
        response.errCode = 1;
        response.errMessage = "Hãy đợi người quản trị duyệt yều cầu của bạn"
      } else {
        let { title, price, shortDesc, catergoryId } = data;
        let queryString = `INSERT INTO COURSES (title, price, shortDesc, thumbnail_url, catergoryId, lecturerId) VALUES (?, ?, ?, ?, ?, ?)`;
        await db.query(queryString, [title, price, shortDesc, thumbnail_url, parseInt(catergoryId), parseInt(checkIsActive[0].id)])
        response.errCode = 0;
        response.errMessage = "Tạo khóa học thành công";
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

let getCourseById = (courseId, lecturerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let [course] = await db.query(`SELECT * FROM courses WHERE courses.id = ${courseId} AND lecturerId = ${lecturerId} `);
      if (!course.length) {
        response.errCode = 1;
        response.errMessage = "Không tìm thấy khóa học"
      } else {
        response.errCode = 0;
        response.errMessage = "Tìm kiếm thành công";
        response.data = course[0];
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

let updateCourse = (courseId, title, shortDesc, price, image, catergoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let respone = {};
      let queryString = `UPDATE courses SET title = ?, shortDesc = ?, price = ?, thumbnail_url = ?, catergoryId = ? WHERE id = ?`
      let [result] = await db.query(queryString, [title, shortDesc, price, image, catergoryId, courseId])
      if(!result.affectedRows) {
        respone.errCode = 1;
        respone.errMessage = "Khoá học chưa được cập nhật thành công"
      } else {
        respone.errCode = 0;
        respone.errMessage = "Khoá học đã cập nhật thành công"
      }
      resolve(respone);
    } catch (error) {
      reject(error);
    }
  })
}


module.exports = { organizeCourse, getCourseById, updateCourse };  