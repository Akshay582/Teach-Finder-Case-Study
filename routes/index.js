const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UsersController");
const HomeController = require("../controllers/HomeController");

// Route of a signup page
router.get("/user/signupPage", UsersController.signUpPage);

// Route of a signin page
router.get("/user/signinPage", UsersController.signInPage);

// Route for the sign up information
router.post("/user/signup", UsersController.signUp);

// Route for the sign in information
router.post("/user/signin", UsersController.signIn);

// Route for the homepage
router.get("/", HomeController.home);

module.exports = router;
