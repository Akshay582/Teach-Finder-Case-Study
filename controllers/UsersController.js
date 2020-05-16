const User = require("../models/Users");

// Rendering Sign Up page
module.exports.signUpPage = function (req, res) {
  return res.render("signup", {
    title: "App | Sign Up",
  });
};

// Rendering Sign In page
module.exports.signInPage = function (req, res) {
  return res.render("signin", {
    title: "App | Sign In",
  });
};

// Sign Up for the user
module.exports.signUp = function (req, res) {
  let username = req.body.name;
  let password = req.body.password;
  User.findOne({ username }, function (err, user) {
    if (err) {
      return console.error(err);
    }
    if (!user) {
      User.create({ username, password }, function (err, user) {
        if (err) {
          return console.error("Encountered an error: ", err);
        }
      });
    }
    res.redirect("/user/signinPage");
  });
};

// Sign In for the user
module.exports.signIn = function (req, res) {
  // check for both username and password
  let username = req.body.name;
  let password = req.body.password;
  User.findOne({ username }, function (error, user) {
    if (error) {
      return console.error("Encountered an error: ", error);
    }
    if (!user) {
      return res.redirect("/user/signupPage");
    } else if (user.password !== password) {
      return res.redirect("/user/signinPage");
    } else {
      return res.redirect("/");
    }
  });
};

// Log Out by the user
module.exports.logout = function (req, res) {};
