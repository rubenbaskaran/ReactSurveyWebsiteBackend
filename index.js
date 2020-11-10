var express = require("express");
var bodyParser = require("body-parser");
var token = require("./token");
var axios = require("axios");
var FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Started on port 3000");
});

app.post("/", function (req, res) {
  res.send("Hello there!");
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  console.log("Fullname: " + firstname + " " + lastname);

  ////////////////////
  // REDCAP REQUEST //
  ////////////////////
  let url =
    "https://cors-anywhere.herokuapp.com/https://open.rsyd.dk/redcap_uddannelse/api/"; // TODO: Remember to remove proxy in production

  let data = new FormData();
  data.append("token", token);
  data.append("content", "record");
  data.append("format", "json");
  data.append("type", "flat");
  data.append("overwriteBehavior", "overwrite");
  data.append("forceAutoNumber", "false");
  data.append(
    "data",
    '[{"record_id":"3", "firstname":"TestName1", "lastname": "TestName2","age":"3","my_first_instrument_complete":"0" }]'
  );
  data.append("returnContent", "count");
  data.append("returnFormat", "json");

  console.log("URL: " + url);
  console.log("DATA: " + data);

  async function start() {
    try {
      // let response = await axios.post(url, data);
      let response = await axios.post("http://localhost:3000/feg"); // TODO: Try with above line instead
      console.log("RESPONSE:");
      console.log(response);
    } catch (err) {
      console.log("ERROR:");
      console.log(err.message);
    }
  }
  start();

  ////////////////////
  // REDCAP REQUEST //
  ////////////////////
});

app.get("*", function (req, res) {
  res.send("This is the default GET route");
});

app.post("*", function (req, res) {
  res.send("This is the default POST route");
});
