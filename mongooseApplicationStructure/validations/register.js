const validator = require('validator');

function functionValidateRegister(input) {
    const isError = {}

    if (validator.isEmpty(input.name)) {
        isError.name = "name is empty . name is require ....."
    }
    if (!validator.isEmail(input.email)) {
        isError.email = "email is invalid....."
    }
    if (validator.isEmpty(input.password)) {
        isError.password = 'enter password'
    }
    if (input.password.length <= 5) {
        isError.password = 'enter password grater then 6 charactor'
    }

    return isError
}


module.exports = functionValidateRegister