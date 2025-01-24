const College = require("../models/collegeModel");
const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const getReqBodyData = (req) => {
  return {
    collegeName: req.body.collegeName,
    collegeImage: req.body.collegeImage,
    rating: req.body.rating,
    admissionDates: req.body.admissionDates,
    researchCount: req.body.researchCount,
    events: req.body.events,
    sports: req.body.sports,
  };
};

// Get All colleges With Query
exports.getAllColleges = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(College.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .search();

  const colleges = await features.query;

  res.status(200).json({
    status: "success",
    results: colleges.length,
    colleges,
  });
});

// Get college By IDs
exports.getCollege = catchAsync(async (req, res, next) => {
  const college = await College.findById(req.params.id).select("-__v");

  if (!college)
    return next(
      new AppError(`No College found with this ID: ${req.params.id}`, 404)
    );

  res.status(200).json({
    status: "success",
    college,
  });
});

// Create college
exports.createCollege = catchAsync(async (req, res, next) => {
  const newCollege = await College.create(getReqBodyData(req));

  res.status(201).json({
    status: "success",
    college: newCollege,
  });
});

// Update college
exports.updateCollege = catchAsync(async (req, res, next) => {
  const college = await College.findByIdAndUpdate(
    req.params.id,
    getReqBodyData(req),
    {
      new: true,
      runValidators: true,
    }
  );

  if (!college)
    return next(
      new AppError(`No College found with this ID: ${req.params.id}`, 404)
    );

  res.status(200).json({
    status: "success",
    college,
  });
});

// Delete college
exports.deleteCollege = catchAsync(async (req, res, next) => {
  const college = await College.findByIdAndDelete(req.params.id);

  if (!college) {
    return next(
      new AppError(`No College found with this ID: ${req.params.id}`, 404)
    );
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
