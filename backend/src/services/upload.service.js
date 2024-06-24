'use strict'

const cloudinary = require("../config/cloudinary.config");

// 1. upload from url image

const uploadImageFromUrl = async () => {
  try {
    const urlImage = 'https://i.ytimg.com/vi/xtdzr5vPPJA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBkmbkrq_JM8lPc1HYLtxKRwHWoAg';
    const folderName = 'product/shopId', newFileName = 'testDemo';
    const result = await cloudinary.uploader.upload(urlImage, {
      public_id: newFileName, //fileName
      folder: folderName, // folderName
    });
    return result;
  } catch (error) {
    console.error("Error uploading images::", error);
  }
}

// 2. upload image local
const uploadImageFromLocalFile = async ({ path, folderName = 'product/8402' }) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      public_id: 'thumb', //fileName
      folder: folderName, // folderName
    });
    console.log(result);
    return {
      image_url: result.secure_url,
      shopId: 8402,
      thumb_url: await cloudinary.url(result.public_id, {
        height: 100,
        width: 100,
        format: "jpg",
      })
    };
  } catch (error) {
    console.error("Error uploading images::", error);
  }
}

// 2. upload from images local
const uploadImageFromLocalFiles = async ({ files, folderName = 'product/8402' }) => {
  try {
    console.log(`files::`, files, folderName);
    if (!files.length) throw Error("File are missing");
    const uploadedUrls = [];
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: folderName, // folderName
      });
      uploadedUrls.push({
        image_url: result.secure_url,
        shopId: 8402,
        thumb_url: await cloudinary.url(result.public_id, {
          height: 100,
          width: 100,
          format: "jpg",
        })
      })
    }
    return uploadedUrls;
  } catch (error) {
    console.error("Error uploading images::", error);
  }
}



module.exports = {
  uploadImageFromUrl,
  uploadImageFromLocalFile,
  uploadImageFromLocalFiles
}