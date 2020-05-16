const express = require("express");
const app = express();
const sassMiddleware = require("node-sass-middleware");

const ConnectMongoDB = require("./config/mongoose");
const PORT = 8000;

app.use(express.urlencoded());

app.use(express.static("./assets"));

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
