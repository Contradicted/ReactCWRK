let mongoose = require('mongoose')
const CovidScheme = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true
    },
    PubYear: Number,
    author: String,
    Topic: String,
    formate: String

})

module.exports = mongoose.model('covidsystem', CovidScheme, 'Data') 