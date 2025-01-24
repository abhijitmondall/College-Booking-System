const Admission = require("../models/admissionModel");
const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");

// Get New Admission Data from user
const getNewAdmissionData = (req) => {
  return ({ candidateName, subject, email, phone, address, dob, collegeId } =
    req.body);
};

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

exports.uploadUserPhoto = upload.single("image");

exports.newAdmission = catchAsync(async (req, res, next) => {
  const { candidateName, subject, email, phone, address, dob, collegeId } =
    req.body;
  // Validate input data
  if (
    !candidateName ||
    !subject ||
    !email ||
    !phone ||
    !address ||
    !dob ||
    !collegeId
  ) {
    return next(new AppError(`All fields are required!`, 404));
  }
  const newAdmission = await Admission.create({
    candidateName,
    subject,
    email,
    phone,
    address,
    dob,
    collegeId,
    image: req.file ? `/uploads/${req.file.filename}` : null,
  });

  res.status(201).json({
    status: "success",
    admission: newAdmission,
  });
});

exports.getAdmissions = catchAsync(async (req, res, next) => {
  const admissions = await Admission.find().select("-__v");

  if (!admissions)
    return next(new AppError(`No Admissions history found.`, 404));

  res.status(200).json({
    status: "success",
    results: admissions.length,
    data: {
      admissions,
    },
  });
});
