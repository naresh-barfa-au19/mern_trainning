const express = require("express");
const app = express();
const port = 9000;
var post1 = express();
var post2 = express();

var userDb = [];
app.get("/", function (req, res) {
  console.log("console at home page ");
  res.send("welcome to  home page");
});

app.get("/add/:num1/:num2", function (req, res) {
  console.log("console at addition page ");
  var a = parseInt(req.params.num1);
  var b = parseInt(req.params.num2);
  var c = a + b;
  res.send("add num1 + num2 =" + c);
});

app.get("/multi/:num1/:num2", function (req, res) {
  console.log("console at mutiplication page ");
  var a = parseInt(req.params.num1);
  var b = parseInt(req.params.num2);
  var c = a * b;
  res.send("mutiplication num1 + num2 =" + c);
});
app.get("/divide/:num1/:num2", function (req, res) {
  console.log("console at dividation page ");
  var a = parseInt(req.params.num1);
  var b = parseInt(req.params.num2);
  var c = a / b;
  res.send("dividation num1 + num2 =" + c);
});
app.get("/sub/:num1/:num2", function (req, res) {
  console.log("console at subtraction page ");
  var a = parseInt(req.params.num1);
  var b = parseInt(req.params.num2);
  var c = a - b;
  res.send("subtraction num1 + num2 =" + c);
});

app.get("/add", function (req, res) {
  console.log("console at query addtion page");
  var a = parseInt(req.query.num1);
  var b = parseInt(req.query.num2);
  var c = a + b;
  res.send("addition num1 + num2 =" + c);
});

app.get("/sub", function (req, res) {
  console.log("console at query addtion page");
  var a = parseInt(req.query.num1);
  var b = parseInt(req.query.num2);
  var c = a - b;
  res.send("subraction num1 + num2 =" + c);
});
app.get("/multi", function (req, res) {
  console.log("console at query addtion page");
  var a = parseInt(req.query.num1);
  var b = parseInt(req.query.num2);
  var c = a * b;
  res.send("multiplication num1 + num2 =" + c);
});
app.get("/div", function (req, res) {
  console.log("console at query addtion page");
  var a = parseInt(req.query.num1);
  var b = parseInt(req.query.num2);
  var c = a / b;
  res.send("division num1 + num2 =" + c);
});

// app
//   .post("/login", function (req, res) {
//     console.log("console at post home route");

//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;
//     var confirmPassword = req.body.confirmPassword;
//     userDb.push(name);
//     userDb.push(email);
//     userDb.push(password);
//   })
//   .use(/\/req.body.password|\/req.body.confirmPassword/, function (
//     req,
//     res,
//     next
//   ) {
//     res.json(userDb);

//     next();
//   });

app.use(express.urlencoded({ extended: true }));
post1.use(express.urlencoded({ extended: true }));
post2.use(express.urlencoded({ extended: true }));

post1.post("/login", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  userDb.push({
    name: name,
    email: email,
    password: password,
  });
  if (req.body.password === req.body.confirmPassword) {
    console.log("post1 , both password is same");
    res.json(userDb);
  }
  next();
});
post2.post("/login", function (req, res, next) {
  console.log("post2, password is incorrect");
  if (req.body.password !== req.body.confirmPassword) {
    res.send("password is incorrect");
  }
  next();
});
app.use(post1, post2);

app.listen(port);
