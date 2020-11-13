const express = require("express");
const bodyParser = require("body-parser");
const token = require("./token");
const axios = require("axios");
const FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Started on port 3001");
  let url = "https://open.rsyd.dk/redcap_uddannelse/api/";
  let data = new FormData();
  data.append("token", token);
  data.append("content", "record");
  data.append("format", "json");

  axios
    .post(url, data, { headers: data.getHeaders() })
    .then(function (response) {
      console.log(
        "RESPONSE - " + response.status + " - " + response.statusText
      );
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(
        "ERROR - " + error.response.status + " - " + error.response.statusText
      );
      console.log(error.response.data);
    });
});

app.get("/", function (req, res) {
  // res.send("Hello there!");
  // let firstname = req.body.firstname;
  // let lastname = req.body.lastname;
  // console.log("Fullname: " + firstname + " " + lastname);
});

app.get("*", function (req, res) {
  res.send("This is the default GET route");
});

app.post("*", function (req, res) {
  res.send("This is the default POST route");
});
