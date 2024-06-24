const { uploadImageFromUrl, uploadImageFromLocalFile, uploadImageFromLocalFiles } = require("../services/upload.service");

class UploadController {
  uploadFile = async (req, res, next) => {
    try {
      const result = await uploadImageFromUrl();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  };
  uploadToLocalFile = async (req, res, next) => {
    const { file } = req;
    if (!file) {
      throw new Error("No file have found");
    }
    try {
      const result = await uploadImageFromLocalFile({ path: file.path });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  };
  uploadToLocalFiles = async (req, res, next) => {
    const { files } = req;
    if (!files.length) {
      throw new Error("No file have found");
    }
    try {
      const result = await uploadImageFromLocalFiles({ files });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new UploadController;