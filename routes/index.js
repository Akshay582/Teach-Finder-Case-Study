const express = require("express");
const router = express.Router();

const NotesController = require("../controllers/NotesController");
const HomeController = require("../controllers/HomeController");

router.use("/user", require("./user"));

// Route for the homepage
router.get("/", HomeController.home);

router.post("/notes/create", NotesController.create);

module.exports = router;
