const express = require("express");
const router = express.Router();
const UploadController = require("../controller/upload.controller");
const { uploadDisk } = require("../config/multer.config");

router.post("/product", UploadController.uploadFile);
router.post("/product/thumb", uploadDisk.single('file'), UploadController.uploadToLocalFile);
router.post("/product/multiple", uploadDisk.array('files', 3), UploadController.uploadToLocalFiles);

module.exports = router;