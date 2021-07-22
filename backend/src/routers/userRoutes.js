const { Router } = require("express");
const router = Router();
var userController = require("../controllers/userController");

router.get("/", userController.listUser);
router.post("/", userController.saveUser);
router.get("/:id", userController.searchUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;
