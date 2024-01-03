const express = require("express");
const upload = require("../Utils/upload");
const uploadData = require("../Controllers/Controller");
const router = express.Router();

router.post("/upload", upload.single("file"), uploadData);

module.exports = router;
