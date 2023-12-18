const router = require("express").Router();
const userRouter = require("./user/index");
const menusRouter = require("./menu/index");

router.use('/menu', menusRouter);
router.use(userRouter);

module.exports = router;

