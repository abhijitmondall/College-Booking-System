const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  collegeName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  userEmail: {
    type: String,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
