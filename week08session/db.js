const mongoose = require('mongoose')


//url of database
url = 'mongodb://localhost:27017/sessionDataBase';

// database connection mongoose 
module.exports = mongoose.connect(url, {
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


