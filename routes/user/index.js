const UserController = require("../../controllers/userController");
const passport = require("../../middlewares/passport");
const router = require("express").Router();
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");

router.use(passport.initialize());
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);
router.get("/profile", passport.authenticate("jwt", { session: false }), UserController.getUserProfile);
router.put("/profile/edit", passport.authenticate("jwt", { session: false }), UserController.updateUserProfile);
router.get("/users", authentication, isAdmin, UserController.getUser);
router.delete("/users/delete/:id", authentication, isAdmin, UserController.deleteUser);

module.exports = router;
