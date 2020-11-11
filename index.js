var express = require("express");
var bodyParser = require("body-parser");
var token = require("./token");
var axios = require("axios");
var FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Started on port 3001");
});

app.get("/", function (req, res) {
  // res.send("Hello there!");
  // let firstname = req.body.firstname;
  // let lastname = req.body.lastname;
  // console.log("Fullname: " + firstname + " " + lastname);

  ////////////////////
  // REDCAP REQUEST //
  ////////////////////
  let url = "https://open.rsyd.dk/redcap_uddannelse/api/";

  let data = new FormData();
  data.append("token", "token");
  data.append("content", "record");
  data.append("format", "json");
  data.append("type", "flat");
  data.append("overwriteBehavior", "overwrite");
  data.append("forceAutoNumber", "false");
  data.append(
    "data",
    '[{"record_id":"3", "firstname":"TestName1", "lastname": "TestName2","age":"3","my_first_instrument_complete":"2" }]'
  );
  data.append("returnContent", "count");
  data.append("returnFormat", "json");

  let config = {
    headers: {
      Accept: "application/json, text/plain, */*",
      "x-requested-with": "application/json",
    },
  };

  async function start() {
    try {
      let response = await axios.post(url, data, config);
      console.log("RESPONSE:");
      console.log(response);
    } catch (err) {
      console.log("ERROR:");
      console.log(err);
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
