const File = require("../Models/File.js");

const uploadData = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = uploadData;
