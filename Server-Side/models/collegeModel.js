const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: true,
      trim: true,
    },
    collegeImage: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    admissionDates: {
      type: String,
      required: true,
    },
    researchCount: {
      type: Number,
      min: 0,
    },
    events: {
      type: [String],
      default: [],
    },
    sports: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const College = mongoose.model("College", collegeSchema);

module.exports = College;
