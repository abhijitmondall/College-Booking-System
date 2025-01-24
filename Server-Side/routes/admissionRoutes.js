const express = require("express");
const router = express.Router();
const admissionController = require("./../controllers/admissionController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.protected, admissionController.getAdmissions)
  .post(authController.protected, admissionController.newAdmission);

router
  .route("/:id")
  .patch(authController.protected, admissionController.updateAdmission);
module.exports = router;
