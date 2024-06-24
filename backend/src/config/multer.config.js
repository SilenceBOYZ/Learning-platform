'use strict';
const multer = require("multer");

const memoryStorage = multer.memoryStorage()
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const uploadDisk = multer({
  storage: diskStorage,
})

const uploadMemory = multer({
  storage: memoryStorage,
})

module.exports = {
  uploadDisk,
  uploadMemory
}


