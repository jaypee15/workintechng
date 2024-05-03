require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const ErrorHandler = require("./middlewares/error-handler");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const companyRouter = require("./routes/company");

const app = express();

const { MONGO_URI } = process.env;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", companyRouter);
app.use("/users", usersRouter);

app.use("*", (req, res, next) => {
  console.log(`route ${req.baseUrl} not found`);
  res.status(404).json({ message: "not found" });
});

app.use(ErrorHandler);

module.exports = app;
