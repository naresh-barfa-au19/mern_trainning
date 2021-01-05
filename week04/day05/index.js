const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const hbs = require("hbs");

app.use(express.static("public"));
app.set("view engine", "hbs");

var tweetDb = [
  {
    name: "vidhi ",
    tweet: "today,weather is beautiful  :) ",
  },
  {
    name: "deepak ",
    tweet: "corona disease is spreading all over world  :) ",
  },
  {
    name: "prakash",
    tweet: "IT industary growing fastly :) ",
  },
];

app.get("/", function (req, res) {
  res.render("tweet.hbs");
});
app.use("/", bodyParser.urlencoded({ extended: false }));

app.post("/tweetPgae", function (req, res) {
  console.log(req.body.name, req.body.tweet);
  let tweetInfo = {
    name: req.body.name,
    tweet: req.body.tweet,
  };
  console.log(tweetInfo);
  tweetDb.push(tweetInfo);
  console.log(tweetInfo);
  res.json({ success: req.body.name + "'s tweet is added" });
});

app.get("/allTweets", (req, res) => {
  res.render("tweetBox.hbs", {
    title: "All Tweets",
    data: tweetDb,
    script: "/allTweets.js",
    style: "/tweetBox.css",
  });
});

app.get("/getTweet", function (req, res) {
  res.json(tweetDb);
});

app.listen(port);
