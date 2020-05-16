const express = require("express");
const app = express();
const sassMiddleware = require("node-sass-middleware");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const passportLocalStrategy = require("./config/passport-local-strategy");
const db = require("./config/mongoose");
const PORT = 8000;

app.use(express.urlencoded());

app.use(express.static("./assets"));
app.use(cookieParser());
app.use(bodyParser());
app.use(
  session({
    name: "TeachFinder",
    secret: "anything",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "extended",
    prefix: "/css",
  })
);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(PORT, function (error) {
  if (error) {
    return console.log(error);
  }
  console.log("The server is running at: " + PORT);
});
