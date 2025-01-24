const express = require("express");
const router = express.Router();
const admissionController = require("./../controllers/admissionController");
// const authController = require("./../controllers/authController");

router.route("/").get().post(
  //  authController.protected,
  //  authController.restrictTo("Instructor", "Admin"),
  admissionController.uploadUserPhoto,
  admissionController.newAdmission
);

module.exports = router;
