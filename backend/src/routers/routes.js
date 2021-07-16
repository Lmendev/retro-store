const { Router } = require("express");
var nftController = require("../controllers/nftController");
const router = Router();

router.get("/api/v1/nfts", nftController.listNft);
router.post("/api/v1/nfts", nftController.saveNft);
router.get("/api/v1/nfts/:id", nftController.searchNft);
router.delete("/api/v1/nfts/:id", nftController.deleteNft);
router.put("/api/v1/nfts/:id", nftController.updateNft);

module.exports = router;
