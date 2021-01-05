const express = require("express");
const { static } = require("express");
const app = express();
const port = 4000;
app.use(express.static(__dirname + "/public"));
var arrObject = [
  { name: "naresh barfa", age: 24, job: "no" },
  { name: "dinesh kag", age: 25, job: "yes" },
];
app.get("/", function (request, response) {
  response.send(`
    
    <h2>this is home page</h2>
    <a href="/about">about</a>
    <a href="/contact">contact</a>
    <a href="/html">html page</a>
  `);
});

app.get("/about", function (request, response) {
  response.send(`<h2> about us</h2>
  <ul>
  <li>name = naresh barfa</li>
  <li>profile = software engineer</li>
  <li> mobile no. = 7219995596</li></ul>`);
});
app.get("/html", function (request, response) {
  response.sendFile(__dirname + "/public/example.html");
});

app.get("/contact", function (request, response) {
  response.send("this is my CONTACT US page of my expressExample page");
});

app.listen(port);
