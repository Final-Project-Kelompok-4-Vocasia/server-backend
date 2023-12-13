const menuController = require("../../controllers/menuController");
const router = require("express").Router();
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");

router.get("/menu", menuController.getMenu);
router.post("/menu/addMenu", authentication, isAdmin, menuController.addMenu);
router.get('/menu/:id', menuController.getMenuId);
module.exports = router;