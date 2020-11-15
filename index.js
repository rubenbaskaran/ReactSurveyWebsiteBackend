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

// TODO: Call right before saving the record, and then return ID to client
app.get("/nextid", function (req, res) {
  let data = new FormData();
  data.append("content", "generateNextRecordName");

  CallRedcapApi(req, res, data);
});

app.get("/getall", function (req, res) {
  let data = new FormData();
  data.append("content", "record");

  CallRedcapApi(req, res, data);
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

  let data = new FormData();
  data.append("content", "record");
  data.append("data", JSON.stringify(payload));

  CallRedcapApi(req, res, data);
});

function CallRedcapApi(req, res, data) {
  const url = "https://open.rsyd.dk/redcap_uddannelse/api/";
  data.append("token", token);
  data.append("format", "json");
  // data.append("overwriteBehavior", "overwrite");
  // data.append("forceAutoNumber", "false");

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
      res.json({ responseData: response.data });
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
      res.json({ errorData: error.response.data });
    });
}

app.get("*", function (req, res) {
  res.send("This is the default GET route");
});

app.post("*", function (req, res) {
  res.send("This is the default POST route");
});
