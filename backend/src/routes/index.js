const uploadRoute = require("./upload.route");
const userApiRoute = require("./userApi.route");
const lecturerApiRoute = require("./lecturer.route");
const lectureApiRoute = require("./lecture.route.js");
const courseApiRoute = require("./courseApi.route");
const forgotPasswordApiRoute = require("./forgotPasswordApi.route");
const resetPasswordApi = require("./resetPassword.route");
const sectionApi = require("./sectionApi.route");


const route = (app) => {
  app.use("/v1/api/upload", uploadRoute);
  app.use("/v1/api/user-route", userApiRoute);
  app.use("/v1/api/lecturer", lecturerApiRoute);
  app.use("/v1/api/course", courseApiRoute);
  app.use("/v1/api/forgot-password", forgotPasswordApiRoute);
  app.use("/v1/api/reset-password", resetPasswordApi);
  app.use("/v1/api/section", sectionApi);
  app.use("/v1/api/lecture", lectureApiRoute);
}

module.exports = route;