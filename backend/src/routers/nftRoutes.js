const { Router } = require("express");
const router = Router();
const nftController = require("../controllers/nftController");

router.get("/", nftController.listNft);
router.post("/", nftController.saveNft);
router.get("/:id", nftController.searchNft);
router.delete("/:id", nftController.deleteNft);
router.put("/:id", nftController.updateNft);

module.exports = router;
