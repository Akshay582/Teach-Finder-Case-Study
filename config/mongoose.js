const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/TeachFinder");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB."));

db.once("open", function () {
  console.log("Connected to mongoose :: MongoDB");
});

module.exports = db;
