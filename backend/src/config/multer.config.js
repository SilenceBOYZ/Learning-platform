'use strict';
const multer = require("multer");

const memoryStorage = multer.memoryStorage()
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/videos')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const userDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/user-image')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const courseDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/course')
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

const uploadUserImage = multer({
  storage: userDiskStorage,
})

const uploadCourseThumbnail = multer({
  storage: courseDiskStorage,
})

module.exports = {
  uploadDisk,
  uploadMemory,
  uploadUserImage,
  uploadCourseThumbnail
}


