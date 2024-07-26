const { organizeSection, getSectionInformation, updateSectionTitle, removeSection } = require("../services/section.service");

let createSection = async (req, res) => {
  let courseId = req.params.courseId;
  let { title } = req.body;
  let result = await organizeSection(title, parseInt(courseId));
  res.status(200).json(result);
}

let getSectionTitle = async (req, res) => {
  let sectionId = req.params.sectionId;
  let result = await getSectionInformation(parseInt(sectionId));
  res.status(200).json(result);
}

let updateSection = async (req, res) => {
  let sectionId = req.params.sectionId;
  let newTitle = req.body.title;
  let result = await updateSectionTitle(parseInt(sectionId), newTitle);
  res.status(200).json(result);
}

let deleteSection = async (req, res) => {
  let sectionId = req.params.sectionId;
  let result = await removeSection(parseInt(sectionId));
  res.status(200).json(result);
}

module.exports = {
  createSection,
  getSectionTitle,
  updateSection,
  deleteSection
}