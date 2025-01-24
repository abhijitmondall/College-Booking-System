const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Admission = require("../models/admissionModel");

// Get New Admission Data from user

// Configure Multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save uploaded files in the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// exports.uploadUserPhoto = upload.single("image");

exports.newAdmission = catchAsync(async (req, res, next) => {
  const {
    candidateName,
    subject,
    email,
    phone,
    address,
    dob,
    collegeId,
    collegeName,
    collegeImage,
    review,
  } = req.body;
  // Validate input data

  if (
    !candidateName ||
    !subject ||
    !email ||
    !phone ||
    !address ||
    !dob ||
    !collegeId ||
    !collegeName
  ) {
    return next(new AppError(`All fields are required!`, 404));
  }

  const newAdmission = await Admission.create(req.body);

  res.status(201).json({
    status: "success",
    admission: newAdmission,
  });
});

exports.getAdmissions = catchAsync(async (req, res, next) => {
  const userEmail = req.user.email;
  console.log(req.user);
  const admissions = await Admission.find({ email: userEmail }).select("-__v");

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

exports.updateAdmission = catchAsync(async (req, res, next) => {
  const admission = await Admission.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    admission,
  });
});
