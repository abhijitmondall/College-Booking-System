const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    candidateName: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    collegeImage: {
      type: String,
      //  required: true,
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    collegeName: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
      },
      comment: {
        type: String,
        default: "",
      },
      isReviewed: {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Admission = mongoose.model("Admission", admissionSchema);
module.exports = Admission;
