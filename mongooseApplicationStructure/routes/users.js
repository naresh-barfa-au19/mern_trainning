const express = require('express');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken')
const { Users } = require("./../models/userSchema");



const functionValidateRegister = require("./../validations/register")



const router = express.Router();



router.get("/login", function (req, res) {
    res.send(`<h1>login page </h1>
    <form action="/login" method=post>
      <label for="email">Email :</label>
      <input type="email"  name="email" ><br><br><br>
        <label for="password">password :</label>
      <input type="password"  name="password" ><br><br><br>
       <input type="submit" value="login">
    </form>
    `)
})

router.post("/login", function (req, res) {
    const isError = functionValidateRegister(req.body)
    if (Object.keys(isError).length === 0) {

        Users.findOne({ email: req.body.email }).then(function (data) {
            if (data && data.email == req.body.email) {
                console.log({
                    status: false,
                    message: "email already exsit"
                });
                res.redirect("/mainPage")
            } else {
                const hashPassword = bcrypt.hashSync(req.body.password, 12);
                const userData = new Users({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword
                });
                try {
                    userData.save();

                    res.status(200).json({
                        success: true,
                        message: "inserted data",
                        userData
                    })

                }
                catch (error) {
                    console.log(error)
                    res.status(400).json({
                        success: false,
                        message: "error while inserting data"
                    })
                }


            }
        })




    } else {
        res.send(isError)
    }

})


module.exports = router