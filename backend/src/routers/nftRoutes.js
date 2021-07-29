const { Router } = require("express");
const multer = require("multer");
const router = Router();
const nftController = require("../controllers/nftController");
const checkAuth = require("../middleware/check-auth");

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

router.get("/", nftController.listNft);
router.post(
  "/",
  checkAuth,
  multer({ storage: storage }).single("image"),
  nftController.saveNft
);
router.get("/:id", nftController.searchNft);
router.put("/:id", checkAuth, nftController.updateNft);
router.delete("/:id", checkAuth, nftController.deleteNft);

module.exports = router;
