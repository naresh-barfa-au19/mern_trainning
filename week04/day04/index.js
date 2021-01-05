const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

var userDb = [
  { userName: "naresh barfa", password: "1234barfa007" },
  { userName: "dinesh kag", password: "kag007" },
  { userName: "pravin", password: "paru007" },
];

// app.get("/user", (req, res) => {
//   res.send(userDb);
// });

app.post("/user", function (req, res) {
  let reqUser = req.body.name;
  console.log(reqUser);
  let userData = userDb.find(function (item) {
    if (item.userName === reqUser) {
      return item;
    }
  });
  if (userData) {
    res.send({
      status: "User Available",
      userData,
    });
  } else {
    res.send({
      status: "user not available",
    });
  }
});

app.listen(port);
