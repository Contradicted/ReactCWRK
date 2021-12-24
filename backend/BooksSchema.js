let mongoose = require('mongoose')
const CovidScheme = new mongoose.Schema({
    state: String,
    deaths: Number,
    cases: Number,
    date: String,
})

module.exports = mongoose.model('covidsystem', CovidScheme, 'Data') 