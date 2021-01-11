const express = require("express");
const bodyParser = require("body-parser");
const token = require("./token");
const axios = require("axios");
const FormData = require("form-data");

var app = express();
app.use(bodyParser.json());

// Add headers (TODO: remove in production)
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
  let data = new FormData();
  CallRedcapApi(req, res, data);
});

app.post("/create", function (req, res) {
  let question_1 = req.body.question_1;
  let question_2 = req.body.question_2;
  let question_3 = req.body.question_3;
  let question_4 = req.body.question_4;
  let question_5 = req.body.question_5;
  let question_6 = req.body.question_6;
  let question_7 = req.body.question_7;
  let question_8 = req.body.question_8;
  let question_9 = req.body.question_9;
  let question_10 = req.body.question_10;
  let question_11 = req.body.question_11;
  let question_12 = req.body.question_12;
  let question_13 = req.body.question_13;
  let question_14 = req.body.question_14;
  let question_15 = req.body.question_15;
  let question_16 = req.body.question_16;
  let question_17 = req.body.question_17;
  let question_18 = req.body.question_18;
  let question_19 = req.body.question_19;
  let question_20 = req.body.question_20;
  let question_21 = req.body.question_21;
  let question_22 = req.body.question_22;
  let question_23 = req.body.question_23;
  let question_24 = req.body.question_24;
  let question_25 = req.body.question_25;
  let question_26 = req.body.question_26;
  let question_27 = req.body.question_27;
  let question_28 = req.body.question_28;
  let question_29 = req.body.question_29;
  let question_30 = req.body.question_30;
  let question_31 = req.body.question_31;
  let question_32 = req.body.question_32;
  let question_33 = req.body.question_33;
  let question_34 = req.body.question_34;
  let question_35 = req.body.question_35;
  let question_36 = req.body.question_36;
  let question_37 = req.body.question_37;
  let question_38 = req.body.question_38;
  let question_39 = req.body.question_39;
  let question_40 = req.body.question_40;
  let question_41 = req.body.question_41;
  let question_42 = req.body.question_42;
  let question_43 = req.body.question_43;
  let question_44 = req.body.question_44;
  let question_45 = req.body.question_45;
  let question_46 = req.body.question_46;
  let question_47 = req.body.question_47;
  let question_48 = req.body.question_48;
  let question_49 = req.body.question_49;
  let question_50 = req.body.question_50;
  let question_51 = req.body.question_51;
  let question_52 = req.body.question_52;
  let question_53 = req.body.question_53;
  let question_54 = req.body.question_54;
  let question_55 = req.body.question_55;
  let question_56 = req.body.question_56;
  let question_57 = req.body.question_57;
  let question_58 = req.body.question_58;
  const record = [
    {
      question_1: question_1,
      question_2: question_2,
      question_3: question_3,
      question_4: question_4,
      question_5: question_5,
      question_6: question_6,
      question_7: question_7,
      question_8: question_8,
      question_9: question_9,
      question_10: question_10,
      question_11: question_11,
      question_12: question_12,
      question_13: question_13,
      question_14: question_14,
      question_15: question_15,
      question_16: question_16,
      question_17: question_17,
      question_18: question_18,
      question_19: question_19,
      question_20: question_20,
      question_21: question_21,
      question_22: question_22,
      question_23: question_23,
      question_24: question_24,
      question_25: question_25,
      question_26: question_26,
      question_27: question_27,
      question_28: question_28,
      question_29: question_29,
      question_30: question_30,
      question_31: question_31,
      question_32: question_32,
      question_33: question_33,
      question_34: question_34,
      question_35: question_35,
      question_36: question_36,
      question_37: question_37,
      question_38: question_38,
      question_39: question_39,
      question_40: question_40,
      question_41: question_41,
      question_42: question_42,
      question_43: question_43,
      question_44: question_44,
      question_45: question_45,
      question_46: question_46,
      question_47: question_47,
      question_48: question_48,
      question_49: question_49,
      question_50: question_50,
      question_51: question_51,
      question_52: question_52,
      question_53: question_53,
      question_54: question_54,
      question_55: question_55,
      question_56: question_56,
      question_57: question_57,
      question_58: question_58,
    },
  ];

  let data = new FormData();
  data.append("forceAutoNumber", "true");
  data.append("returnContent", "auto_ids");
  data.append("data", JSON.stringify(record));

  CallRedcapApi(req, res, data);
});

app.post("/update", function (req, res) {
  let record_id = req.body.record_id;
  let question_1 = req.body.question_1;
  let question_2 = req.body.question_2;
  let question_3 = req.body.question_3;
  let question_4 = req.body.question_4;
  let question_5 = req.body.question_5;
  let question_6 = req.body.question_6;
  let question_7 = req.body.question_7;
  let question_8 = req.body.question_8;
  let question_9 = req.body.question_9;
  let question_10 = req.body.question_10;
  let question_11 = req.body.question_11;
  let question_12 = req.body.question_12;
  let question_13 = req.body.question_13;
  let question_14 = req.body.question_14;
  let question_15 = req.body.question_15;
  let question_16 = req.body.question_16;
  let question_17 = req.body.question_17;
  let question_18 = req.body.question_18;
  let question_19 = req.body.question_19;
  let question_20 = req.body.question_20;
  let question_21 = req.body.question_21;
  let question_22 = req.body.question_22;
  let question_23 = req.body.question_23;
  let question_24 = req.body.question_24;
  let question_25 = req.body.question_25;
  let question_26 = req.body.question_26;
  let question_27 = req.body.question_27;
  let question_28 = req.body.question_28;
  let question_29 = req.body.question_29;
  let question_30 = req.body.question_30;
  let question_31 = req.body.question_31;
  let question_32 = req.body.question_32;
  let question_33 = req.body.question_33;
  let question_34 = req.body.question_34;
  let question_35 = req.body.question_35;
  let question_36 = req.body.question_36;
  let question_37 = req.body.question_37;
  let question_38 = req.body.question_38;
  let question_39 = req.body.question_39;
  let question_40 = req.body.question_40;
  let question_41 = req.body.question_41;
  let question_42 = req.body.question_42;
  let question_43 = req.body.question_43;
  let question_44 = req.body.question_44;
  let question_45 = req.body.question_45;
  let question_46 = req.body.question_46;
  let question_47 = req.body.question_47;
  let question_48 = req.body.question_48;
  let question_49 = req.body.question_49;
  let question_50 = req.body.question_50;
  let question_51 = req.body.question_51;
  let question_52 = req.body.question_52;
  let question_53 = req.body.question_53;
  let question_54 = req.body.question_54;
  let question_55 = req.body.question_55;
  let question_56 = req.body.question_56;
  let question_57 = req.body.question_57;
  let question_58 = req.body.question_58;
  const record = [
    {
      record_id: record_id,
      question_1: question_1,
      question_2: question_2,
      question_3: question_3,
      question_4: question_4,
      question_5: question_5,
      question_6: question_6,
      question_7: question_7,
      question_8: question_8,
      question_9: question_9,
      question_10: question_10,
      question_11: question_11,
      question_12: question_12,
      question_13: question_13,
      question_14: question_14,
      question_15: question_15,
      question_16: question_16,
      question_17: question_17,
      question_18: question_18,
      question_19: question_19,
      question_20: question_20,
      question_21: question_21,
      question_22: question_22,
      question_23: question_23,
      question_24: question_24,
      question_25: question_25,
      question_26: question_26,
      question_27: question_27,
      question_28: question_28,
      question_29: question_29,
      question_30: question_30,
      question_31: question_31,
      question_32: question_32,
      question_33: question_33,
      question_34: question_34,
      question_35: question_35,
      question_36: question_36,
      question_37: question_37,
      question_38: question_38,
      question_39: question_39,
      question_40: question_40,
      question_41: question_41,
      question_42: question_42,
      question_43: question_43,
      question_44: question_44,
      question_45: question_45,
      question_46: question_46,
      question_47: question_47,
      question_48: question_48,
      question_49: question_49,
      question_50: question_50,
      question_51: question_51,
      question_52: question_52,
      question_53: question_53,
      question_54: question_54,
      question_55: question_55,
      question_56: question_56,
      question_57: question_57,
      question_58: question_58,
    },
  ];

  let data = new FormData();
  data.append("data", JSON.stringify(record));

  CallRedcapApi(req, res, data);
});

function CallRedcapApi(req, res, data) {
  const url = "https://open.rsyd.dk/redcap/api/";
  data.append("token", token);
  data.append("content", "record");
  data.append("format", "json");

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
