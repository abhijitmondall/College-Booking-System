const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email address"],
      lowercase: true,
      unique: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    //  password: {
    //    type: String,
    //    required: [true, "Please enter a password"],
    //    minlength: 8,
    //    select: false,
    //  },
    //  confirmPassword: {
    //    type: String,
    //    required: true,
    //    validate: {
    //      validator: function (value) {
    //        return value === this.password;
    //      },
    //      message: "Passwords do not match",
    //    },
    //  },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    photo: {
      type: String,
      default: "default.png",
    },
    address: {
      type: String,
      trim: true,
    },
    college: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
