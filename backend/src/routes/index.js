const uploadRoute = require("./upload.route");
const userApiRoute = require("./userApi.route");
const lecturerApiRoute = require("./lecturer.route");
const courseApiRoute = require("./courseApi.route");


const route = (app) => {
  app.use("/v1/api/upload", uploadRoute);
  app.use("/v1/api/user-route", userApiRoute);
  app.use("/v1/api/lecturer", lecturerApiRoute);
  app.use("/v1/api/course", courseApiRoute);
}

module.exports = route;