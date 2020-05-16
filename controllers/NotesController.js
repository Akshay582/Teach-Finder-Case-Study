const Note = require("../models/Notes");

module.exports.create = function (req, res) {
  Note.create(
    {
      content: req.body.content,
      username: req.user._id,
    },
    function (error, note) {
      if (error) {
        return console.error("Error in creating a note: ", error);
      }
    }
  );
  return res.redirect("/");
};
