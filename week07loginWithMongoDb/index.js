const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const { validateSignUp } = require("./validations/signUp");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const url = "mongodb://localhost:27017";

const dbname = "signDb";

MongoClient.connect(
    url,
    {
        useUnifiedTopology: true,
    },
    function (err, client) {
        if (err) {
            throw err;
        } else {
            db = client.db(dbname);
            console.log("now express is connected to the mongoDb -signdb");
        }
    }
);

app.get("/", function (req, res, next) {
    console.log("home page");
    db.collection("users")
        .find({})
        .toArray()
        .then(data => res.send(data));
});

app.post("/signUp", function (req, res, next) {
    console.log("signUp page");
    let isError = validateSignUp(req.body);
    if (Object.keys(isError).length === 0) {
        db.collection("users")
            .find({ email: req.body.email })
            .toArray()
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    isError = {
                        email: "Email already exist",
                    };
                    res.send(isError);
                } else {
                    const tempUserData = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 12),
                    };

                    db.collection("users")
                        .insertOne(tempUserData)
                        .then(function (data) {
                            res.send(data);
                        });
                }
            });
    } else {
        return res.send(isError);
    }
});

app.post("/login", async function (req, res) {
    let massage = {};
    var userData = await db
        .collection("users")
        .find({ email: req.body.email })
        .toArray();

    if (userData.length <= 0) {
        massage = { email: "email not found , first signUp" };
    } else {
        const hashPass = bcrypt.compareSync(req.body.password, userData[0].password);
        if (hashPass === false) {
            massage = { password: "Password incorrect" }
        } else {
            massage = { success: "Login SUccess" }
        }
        var tokenData = jwt.sign({
            data: { userData }
        }, 'secret', { expiresIn: 60 * 60 });

        tokenObj = {
            success: "token created",
            token: tokenData,
        }

        console.log("token created", tokenObj)
    }
    res.json(massage.length > 0 ? massage : tokenObj);
});

app.listen(3000);
