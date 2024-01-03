const multer = require("multer");

const uplaod = multer({ dest: "uploads" });

module.exports = uplaod;
