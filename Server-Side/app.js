const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const collegeRouter = require("./routes/collegeRoutes");
const admissionRouter = require("./routes/admissionRoutes");
const reviewRouter = require("./routes/reviewRoutes");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

console.log(process.env.NODE_ENV);

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

// User Route
app.use("/api/v1/users", userRouter);

// College Route
app.use("/api/v1/colleges", collegeRouter);

// Admission Route
app.use("/api/v1/admissions", admissionRouter);

// Review Route
app.use("/api/v1/reviews", reviewRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

// Global Error Handler Middleware
app.use(globalErrorHandler);

module.exports = app;
