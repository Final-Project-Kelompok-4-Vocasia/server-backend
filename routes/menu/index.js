const menuController = require("../../controllers/menuController");
const router = require("express").Router();
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");


router.get("/", menuController.getMenu);
router.post("/addMenu", authentication, isAdmin, menuController.addMenu);
router.put('/updateMenu/:id', authentication, isAdmin, menuController.updateMenuByID);
router.get('/:id', menuController.getMenuId);
router.delete('/deleteMenu/:id', authentication, isAdmin, menuController.deleteMovie);

module.exports = router;