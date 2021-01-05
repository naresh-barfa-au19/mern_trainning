const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/my_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, function (error, connection) {
    if (error) throw error
    else {
        console.log({
            status: "success",
            message: "database is conneted ",
        })
    }
});

