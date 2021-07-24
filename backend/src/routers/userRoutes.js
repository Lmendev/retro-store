const { Router } = require("express");
const router = Router();
var userController = require("../controllers/userController");

router.get("/", userController.listUser);
router.post("/", userController.saveUser);
router.get("/:id", userController.searchUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
