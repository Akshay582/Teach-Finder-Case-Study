const Note = require("../models/Notes");
const User = require("../models/Users");

// Rendering home page
module.exports.home = function (req, res) {
  Note.find({})
    .populate("username")
    .exec(function (error, notes) {
      if (error) {
        return console.error(error);
      }
      User.find({}, function (error, users) {
        if (error) {
          return console.error(error);
        }
        return res.render("home", {
          title: "TeachFinder | Home",
          notes: notes,
          all_users: users,
        });
      });
    });
};
