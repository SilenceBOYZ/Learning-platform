const { db } = require("../config/database/config");


let organizeSection = (title, courseId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryFindTitle = `SELECT * FROM sections, courses WHERE sections.courseId = courses.id AND sections.title = '${title}'`;
      let [checkTitle] = await db.query(queryFindTitle);
      // Will response an array contains values or not if the query match the input
      if (!checkTitle.length) {
        // If the title doesn't exist
        let queryString = `INSERT INTO sections (title, courseId) VALUES (?, ?);`
        let [result] = await db.query(queryString, [title, courseId]);
        if (!result.affectedRows) {
          response.errCode = 1;
          response.errMessage = "Tạo section không thành công";
        } else {
          response.errCode = 0;
          response.errMessage = "Tạo section thành công";
        }
      } else {
        response.errCode = 2;
        response.errMessage = "Tên khóa học đã tồn tại";
      }
      resolve(response);
    } catch (error) {
      reject(error)
    }
  })
}

let getSectionInformation = (sectionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryFindTitle = `SELECT sections.title FROM sections WHERE id = ${sectionId}`;
      let [checkTitle] = await db.query(queryFindTitle);
      if (!checkTitle.length) {
        response.errCode = 1;
        response.errMessage = "Section không tồn tại";
      } else {
        response.errCode = 0;
        response.errMessage = "Đã tìm thấy sections";
        response.data = checkTitle[0];
      }
      resolve(response);
    } catch (error) {
      reject(error)
    }
  })
}

let updateSectionTitle = (sectionId, newTitle) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryFindTitle = `SELECT * FROM sections, courses WHERE sections.courseId = courses.id AND sections.title = '${newTitle}'`;
      let [checkTitle] = await db.query(queryFindTitle);
      // Will response an array contains values or not if the query match the input
      if (!checkTitle.length) {
        // If the title doesn't exist
        let queryString = `UPDATE sections SET title = ? WHERE id = ?;`
        let [result] = await db.query(queryString, [newTitle, sectionId]);
        if (!result.affectedRows) {
          response.errCode = 1;
          response.errMessage = "Cập nhập section không thành công";
        } else {
          response.errCode = 0;
          response.errMessage = "cập nhật section thành công";
        }
      } else {
        response.errCode = 2;
        response.errMessage = "Hãy nhập tên tiêu đề mới";
      }
      resolve(response);
    } catch (error) {
      reject(error)
    }
  })
}
let removeSection = (sectionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = {};
      let queryFindTitle = `SELECT * FROM sections, courses WHERE sections.courseId = courses.id AND sections.id = ${sectionId}`;
      let [checkTitle] = await db.query(queryFindTitle);
      if (!checkTitle.length) {
        response.errCode = 1;
        response.errMessage = "Section không thuộc khóa học của bạn";
      } else {
        let deleteQueryString = `DELETE FROM sections WHERE id = ${sectionId}`;
        let [result] = await db.query(deleteQueryString);
        if (!result.affectedRows) {
          response.errCode = 2;
          response.errMessage = "Section chưa được xóa";
        } else {
          response.errCode = 0;
          response.errMessage = "Section đã được xóa";
        }
      }
      resolve(response);
    } catch (error) {
      reject(error)
    }
  })
}



module.exports = {
  organizeSection,
  getSectionInformation,
  updateSectionTitle,
  removeSection
}