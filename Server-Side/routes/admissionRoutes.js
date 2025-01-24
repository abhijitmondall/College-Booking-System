const express = require("express");
const router = express.Router();
const admissionController = require("./../controllers/admissionController");
// const authController = require("./../controllers/authController");

router.route("/").get(admissionController.getAdmissions).post(
  //  authController.protected,
  //  authController.restrictTo("Instructor", "Admin"),
  // admissionController.uploadUserPhoto,
  admissionController.newAdmission
);

router.route("/:id").patch(admissionController.updateAdmission);
module.exports = router;
