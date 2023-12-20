const router = require("express").Router();
const userRouter = require("./user/index");
const menusRouter = require("./menu/index");
const orderMenuRouter = require("./ordermenu/index");

router.use("/menu", menusRouter);
router.use("/ordermenu", orderMenuRouter);
router.use(userRouter);

module.exports = router;
