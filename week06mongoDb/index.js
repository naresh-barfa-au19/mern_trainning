const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

const port = 8080;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const url = "mongodb://localhost:27017"

const dbName = 'mydb';

let db;

MongoClient.connect(url, {
  useUnifiedTopology: true
}, function(err, client) {
  if(err) throw err
  db = client.db(dbName)
  console.log('connected to database ' + dbName)
});


app.get('/getUsers', (req, res) => {
  db.collection('users')
  .find({})
  .toArray()
  .then(data => {
    res.send(data)
  })
})

app.post("/registration",function(req,res) {
  let userData = req.body
  console.log(userData, typeof userData)
  db.collection('users').insertMany(userData).then(data => {
    res.send(data)
  })
})

app.post("/update",function(req,res){
  let userData = req.body;
  console.log(userData ,typeof userData);
  db.collection("users").updateMany({name:"raju rastogi"},{ $set :userData}).then(data =>{
    res.json(data)
  })
})

app.post("/deleteData",function(req,res){
  let deleteData = req.body;
  console.log(deleteData)

  db.collection("users").remove(deleteData ,1).then(function(data){
    res.send(data )
  })
})

app.post("/oneValueDelete",function(req,res){
  var deleteData = req.body;
  console.log(deleteData)
  db.collection("users").updateOne({name:"raju rastogi"},{$unset:deleteData}).then(function(data){
    res.send(data)
  })
})



app.get("/", function (req, res) {

  res.send("hello data base");
});
app.listen(port);
