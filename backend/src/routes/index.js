const uploadRoute = require("./upload.route");


const route = (app) => {
  app.use("/v1/api/upload", uploadRoute);
  app.use("/", (req, res) => {
    res.send("hello")
  })
}

module.exports = route;