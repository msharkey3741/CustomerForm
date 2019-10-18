const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const customerRoute = require("./api/routes/customers");
const mongoose = require("mongoose");
// const sql = require("mssql");
// const config = require("dotenv");
// const http = require("http");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://admin:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0-nboez.mongodb.net/test?retryWrites=true&w=majority"
);
/* CORS */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

/* route for customers */
app.use("/customers", customerRoute);

/* Error Catch */
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
