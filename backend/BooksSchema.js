let mongoose = require('mongoose');
const covidSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },
    cases: Number,
    death: Number,
    date: Date,
})
module.exports = mongoose.model('covidsystem', covidSchema, 'Data');