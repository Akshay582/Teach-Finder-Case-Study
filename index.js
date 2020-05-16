const express = require("express");
const app = express();

const PORT = 8000;

app.listen(PORT, function (error) {
  if (error) {
    return console.log(error);
  }
  console.log("The server is running at: " + PORT);
});
