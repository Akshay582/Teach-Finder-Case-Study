const express = require("express");
const router = express.Router();
const passport = require("passport");

const UsersController = require("../controllers/UsersController");

// Route of a signup page
router.get("/signupPage", UsersController.signUpPage);

// Route of a signin page
router.get("/signinPage", UsersController.signInPage);

// Route for the sign up information
router.post("/signup", UsersController.signUp);

// Route for the sign in information
router.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/user/signinPage" }),
  UsersController.signIn
);

router.get("/logout", UsersController.logout);

module.exports = router;
