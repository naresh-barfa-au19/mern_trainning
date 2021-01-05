const express = require("express");
const app = express();
const port = 3004;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  console.log("this is main page");
  res.sendFile(__dirname + "/public/index2.html");
});

app.get("/index-html", function (req, res) {
  res.sendFile(__dirname + "/public/index3.html");
});

app.get("/about", function (req, res) {
  res.send(req.protocol + "//:" + req.hostname + port);
});

app.listen(port);
