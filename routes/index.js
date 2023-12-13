const router = require("express").Router();
const userRouter = require("./user/index");
const menusRouter = require("./menu/index");

router.use(menusRouter);
router.use(userRouter);

module.exports = router;
