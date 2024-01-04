const express = require("express");
const upload = require("../Utils/upload");
const { uploadData, getData } = require("../Controllers/Controller");
const router = express.Router();

router.post("/upload", upload.single("file"), uploadData);
router.get("/file/:fileId", getData);
module.exports = router;
