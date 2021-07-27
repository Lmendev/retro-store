const { Router } = require("express");
const router = Router();
const nftController = require("../controllers/nftController");
const checkAuth = require("../middleware/check-auth");

router.get("/", nftController.listNft);
router.post("/", checkAuth, nftController.saveNft);
router.get("/:id", nftController.searchNft);
router.put("/:id", checkAuth, nftController.updateNft);
router.delete("/:id", checkAuth, nftController.deleteNft);

module.exports = router;
