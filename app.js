/** Simple demo Express app. */

const express = require("express");
const app = express();

// useful error class to throw
const { NotFoundError } = require("./expressError");

const MISSING = "Expected key `nums` with comma-separated list of numbers.";

// import stats functions
const { findMean, findMedian, findMode } = require('./stats')
const { convertStrNums } = require("./utils")


/** Finds mean of nums in qs: returns {operation: "mean", result } */
app.get("/mean", function (req, res) {
  const convertedNums = convertStrNums(req.query.nums);
  const meanResult = findMean(convertedNums);

  return res.json({ response: { operation: "mean", value: meanResult } });
})

/** Finds median of nums in qs: returns {operation: "median", result } */
app.get("/median", function (req, res) {
  const convertedNums = convertStrNums(req.query.nums);
  const medianResult = findMedian(convertedNums);

  return res.json({ response: { operation: "median", value: medianResult } });
})

/** Finds mode of nums in qs: returns {operation: "mode", result } */
app.get("/mode", function (req, res) {
  const convertedNums = convertStrNums(req.query.nums);
  const modeResult = findMode(convertedNums);

  return res.json({ response: { operation: "mode", value: modeResult } });
})

app.get(":method")

/** 404 handler: matches unmatched routes; raises NotFoundError. */
app.use(function (req, res) {
  throw new NotFoundError();
});

/** Error handler: logs stacktrace and returns JSON error message. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  if (process.env.NODE_ENV !== "test") console.error(status, err.stack);
  return res.status(status).json({ error: { message, status } });
});

module.exports = app;