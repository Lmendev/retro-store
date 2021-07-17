const { Router } = require("express");
var nftController = require("../controllers/nftController");
var userController = require("../controllers/userController");
const router = Router();

router.get("/api/v1/nfts", nftController.listNft);
router.post("/api/v1/nfts", nftController.saveNft);
router.get("/api/v1/nfts/:id", nftController.searchNft);
router.delete("/api/v1/nfts/:id", nftController.deleteNft);
router.put("/api/v1/nfts/:id", nftController.updateNft);

router.get("/api/v1/users", userController.listUser);
router.post("/api/v1/users", userController.saveUser);
router.get("/api/v1/users/:id", userController.searchUser);
router.delete("/api/v1/users/:id", userController.deleteUser);
router.put("/api/v1/users/:id", userController.updateUser);

module.exports = router;
