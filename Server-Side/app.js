const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

console.log(process.env.NODE_ENV);

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

app.use("/api/v1/colleges", (req, res, next) => {
  res.status(200).json({
    data: "test",
  });
});

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
// });

// Global Error Handler Middleware
// app.use(globalErrorHandler);

module.exports = app;
