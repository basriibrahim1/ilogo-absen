const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp");
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().toISOString().replace(/:/g, "-")}${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * Math.pow(1024, 4) },
});

module.exports = upload;