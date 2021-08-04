const multer = require("multer");

const MIME_TYPES = {
  "image/png": "image/png",
  "image/jpeg": "image/jpeg",
  "image/jpg": "image/jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPES[file.mimetype];
    let error = new Error("El tipo de archivo no es valido");
    if (isValid) {
      error = null;
    }
    cb(error, "src/files");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-")
      .split(".");

    const ext = MIME_TYPES[file.mimetype].split("/");
    const fileName = name[0] + "-" + Date.now() + "." + ext[1];
    cb(null, fileName);
  },
});

module.exports = multer({ storage: storage }).single("image");
