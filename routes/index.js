const router = require("express").Router();
const userRouter = require("./user/index");
const menuRouter = require("./menu/index");
const ordermenuRouter = require("./ordermenu/index");

router.use("/menu", menuRouter);
router.use(userRouter);

module.exports = router;
