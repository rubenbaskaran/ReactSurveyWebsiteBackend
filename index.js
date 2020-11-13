const express = require("express");
const bodyParser = require("body-parser");
const token = require("./token");
const axios = require("axios");
const FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Started on port 3001");
});

app.get("/", function (req, res) {
  ////////////////////
  // REDCAP REQUEST //
  ////////////////////
  let url = "https://open.rsyd.dk/redcap_uddannelse/api/";

  let data = new FormData();
  data.append("token", token);
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

  axios
    .post(url, data)
    .then(function (response) {
      console.log("**RESPONSE**");
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
    .catch(function (error) {
      console.log("**ERROR**");
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(error.response.headers);
    });

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
