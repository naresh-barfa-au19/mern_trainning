const express = require('express');
const bodyParser = require("body-parser")
const app = express();

require("./db");

const authRoutes = require("./routes/users");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRoutes)

app.get("/", (req, res) => {
    console.log(req.session, req.sessionID)
    res.json({
        status: true,
        message: "home page"
    })
})

app.listen(3700)