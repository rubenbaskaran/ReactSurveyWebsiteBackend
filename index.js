var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Started on port 3000");
});

app.get("/", function (req, res) {
  res.send("Hello there!");

  //   let firstname = req.body.firstname;
  //   let lastname = req.body.lastname;
});

app.get("*", function (req, res) {
  res.send("This is the default route");
});
