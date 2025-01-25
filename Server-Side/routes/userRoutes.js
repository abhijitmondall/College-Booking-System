const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const router = express.Router();

// router.post("/signup", authController.signup);
// router.post("/login", authController.login);
router.route("/jwt/:email").get(authController.jwt);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .patch(authController.protected, userController.updateUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(
    authController.protected,
    // authController.restrictTo("Admin"),
    userController.updateUser
  )
  .delete(
    authController.protected,
    authController.restrictTo("Admin"),
    userController.deleteUser
  );

module.exports = router;
