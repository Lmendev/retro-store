const { Router } = require("express");
var nftController = require("../controllers/nftController");
const router = Router();

router.post("/api/v1/newnft", nftController.saveNft);

module.exports = router;
