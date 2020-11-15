const express = require("express");
const bodyParser = require("body-parser");
const token = require("./token");
const axios = require("axios");
const FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.listen(3001, () => {
  console.log("Started on port 3001");
});

app.get("/getall", function (req, res) {
  CallRedcapApi(req, res, null);
});

app.post("/update", function (req, res) {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  const payload = [
    {
      record_id: "3",
      firstname: firstname,
      lastname: lastname,
      age: "3",
      my_first_instrument_complete: "2",
    },
  ];

  CallRedcapApi(req, res, payload);
});

function CallRedcapApi(req, res, payload) {
  const url = "https://open.rsyd.dk/redcap_uddannelse/api/";
  let data = new FormData();
  data.append("token", token);
  data.append("content", "record");
  data.append("format", "json");
  // data.append("overwriteBehavior", "overwrite");
  // data.append("forceAutoNumber", "false");

  if (payload !== undefined && payload !== null) {
    data.append("data", JSON.stringify(payload));
  }

  axios
    .post(url, data, { headers: data.getHeaders() })
    .then(function (response) {
      console.log(
        "REQUEST - " +
          req.route.path +
          " - RESPONSE - " +
          response.status +
          " - " +
          response.statusText
      );
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(
        "REQUEST - " +
          req.route.path +
          " - ERROR - " +
          error.response.status +
          " - " +
          error.response.statusText
      );
      console.log(error.response.data);
      res.send(error.response.data);
    });
}

app.get("*", function (req, res) {
  res.send("This is the default GET route");
});

app.post("*", function (req, res) {
  res.send("This is the default POST route");
});
