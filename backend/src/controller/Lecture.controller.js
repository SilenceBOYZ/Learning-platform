const { getVideoDurationInSeconds } = require('get-video-duration');
const { uploadLecture, getLectureById } = require('../services/lecture.service');
const fs = require('fs');
const directoryName = require('../config/filepath.config');

let createLecture = async (req, res) => {
  let sectionId = req.params.sectionId;
  let title = req.body.title;
  const file = req.file;
  if (!file) {
    res.status(403).json("Error in upload video");
  }
  let durationInSeconds = await getVideoDurationInSeconds(file.path);
  let durationInMinutes = `${Math.round(durationInSeconds / 60)} mins`;
  let videoUrl = file.filename;
  let result = await uploadLecture(title, videoUrl, durationInMinutes, sectionId);
  res.status(200).json(result);
}

let getLectureToWatch = async (req, res) => {
  let lectureId = req.params.lectureId;
  let result = await getLectureById(parseInt(lectureId));
  let { data: { videoUrl } } = result;
  const filePath = `${directoryName}\\videos\\uploads\\video-lecture\\${videoUrl}`
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(filePath, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head);
    fs.createReadStream(filePath).pipe(res);
  }
}

module.exports = {
  createLecture,
  getLectureToWatch
}