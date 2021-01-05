const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

require("./db")

const Users = require('./userSchema/userSchema')

const app = express();
//use session as a middleware

//using body parser as a middleware

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



app.use(session({
    name: "sessionId",
    secret: 'barfa',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: "/",
        httpOnly: true,
        secure: false,
        sameSite: 'strict',

    }
}))



//creating home page

app.get('/', function (req, res) {
    console.log(req.session, req.sessionID)
    res.send(`<h1>home page</h1>`)
});

//creating register page
app.post("/register", function (req, res) {
    let userData = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    userData.save();
    res.send({
        status: "success",
        message: "data sent to the users colletion"
    })
})

//creating login page

app.get("/login", function (req, res) {

    let form = `
        <form action='/login'  method='POST' >
         <input required type="email"  name="email" placeholder="email"/> <br><br>
         <input required type="password"  name="password" placeholder='password' /><br><br>
        <input type="submit" value="login" />
         </form>`;
    console.log("this is form")
    res.send(form)
});

//creating post route for login page

app.post("/login", function (req, res) {
    console.log("login post")
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        res.redirect("/login");
    }
    Users.find({ email: req.body.email }).then(function (data) {
        req.session.userEmail = data.email;
        console.log(" successfully logged in")
        return res.redirect('/deshBoard')
    })

})

//creating deshboard page

app.get('/deshBoard', function (req, res) {
    res.status(200).send(`<h1>deshboard page</h1>`)
})


app.listen(3000)