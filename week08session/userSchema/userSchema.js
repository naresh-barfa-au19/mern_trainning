const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    }

});
const Users = mongoose.model('users', userSchema);

module.exports = Users;