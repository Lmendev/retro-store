const { Router } = require("express");
const router = Router();
const nftController = require("../controllers/nftController");

router.get("/", nftController.listNft);
router.post("/", nftController.saveNft);
router.get("/:id", nftController.searchNft);
router.put("/:id", nftController.updateNft);
router.delete("/:id", nftController.deleteNft);

module.exports = router;
