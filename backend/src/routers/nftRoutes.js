const { Router } = require("express");
const router = Router();
const nftController = require("../controllers/nftController");
const checkAuth = require("../middleware/check-auth");
const storageFile = require("../storage/storage");

router.get("/", nftController.listNft);
router.post("/", checkAuth, storageFile, nftController.saveNft);
router.get("/:id", nftController.searchNft);
router.put("/:id", checkAuth, storageFile, nftController.updateNft);
router.delete("/:id", checkAuth, nftController.deleteNft);

module.exports = router;
