const express = require("express");
const router = express.Router();
const collegeController = require("./../controllers/collegeController");
// const authController = require("./../controllers/authController");

router.route("/").get(collegeController.getAllColleges).post(
  //  authController.protected,
  //  authController.restrictTo("Instructor", "Admin"),
  collegeController.createCollege
);

router
  .route("/:id")
  .get(collegeController.getCollege)
  .patch(collegeController.updateCollege)
  .delete(
    //  authController.protected,
    //  authController.restrictTo("Instructor", "Admin"),
    collegeController.deleteCollege
  );

module.exports = router;
