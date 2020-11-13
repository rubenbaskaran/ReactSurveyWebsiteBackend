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
  // res.send("Hello there!");
  // let firstname = req.body.firstname;
  // let lastname = req.body.lastname;
  // console.log("Fullname: " + firstname + " " + lastname);

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

  let config = {
    headers: {
      connection: "keep-alive",
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36",
      origin: "http://localhost:3001",
      "sec-fetch-site": "same-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "http://localhost:3001/",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "da,en-US;q=0.9,en;q=0.8",
    },
  };

  axios
    .post(url, data, config)
    .then(function (response) {
      console.log("RESPONSE:");
      console.log(response);
    })
    .catch(function (error) {
      console.log("ERROR:");
      console.log(error);
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
