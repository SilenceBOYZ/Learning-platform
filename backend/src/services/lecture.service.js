const { db } = require("../config/database/config");

let uploadLecture = (title, videoUrl, duration, sectionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryCheck = `SELECT * from lectures, sections WHERE lectures.sectionId = sections.id AND lectures.title = ? AND sections.id = ${sectionId}`;
      let [checkExistTitle] = await db.query(queryCheck, [title]);
      if (!checkExistTitle.length) {
        let queryString = `INSERT INTO lectures (title, videoUrl, sectionId, duration) VALUES (?, ?, ?, ?)`
        let [result] = await db.query(queryString, [title, videoUrl, sectionId, duration]);
        if (!result.affectedRows) {
          response.errCode = 2;
          response.errMessage = "Upload bài giảng không thành công";
        } else {
          response.errCode = 0;
          response.errMessage = "Upload bài giảng thành công";
        }
      } else {
        response.errCode = 1;
        response.errMessage = "Tên bài giảng đã tồn tại";
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

let checkLectureTitleExist = (title, sectionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryCheck = `SELECT * from lectures, sections WHERE lectures.sectionId = sections.id AND lectures.title = '${title}' AND sections.id = ${sectionId}`;
      let [checkExistTitle] = await db.query(queryCheck);
      if (!checkExistTitle.length) {
        response.errCode = 0;
      } else {
        response.errCode = 1;
        response.errMessage = "Tên bài giảng đã tồn tại";
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

let getLectureById = (lectureId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryCheck = `SELECT * from lectures WHERE id = ${lectureId}`;
      let [result] = await db.query(queryCheck);
      if (!result.length) {
        response.errCode = 1;
        response.errMessage = "Bài giảng đã tồn tại";
      } else {
        response.errCode = 0;
        response.errMessage = "Đã tìm thấy bài giảng";
        response.data = result[0];
      }
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  uploadLecture,
  checkLectureTitleExist,
  getLectureById
}