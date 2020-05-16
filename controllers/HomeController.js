const User = require("../models/Users");

// Rendering home page
module.exports.home = function (req, res) {
  res.send("<h1> This is the homepage </h1>");
};
