mongoose = require('mongoose');
const MONG_URL = 'mongodb://localhost:27017/onlinelibrary';

mongoose.connect(MONG_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db = mongoose.connection;
db.on('error', function (err) {
    console.log('Error occured' + err)
})

db.once('connected', function () {
    console.log('connection is successful to ' + MONG_URL);
})

module.exports = db;