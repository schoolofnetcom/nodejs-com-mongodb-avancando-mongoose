const mongoose = require('mongoose')
const created = require('./plugins/created')

const Car = new mongoose.Schema({
    name: String
})

Car.plugin(created, {})

module.exports = mongoose.model('Car', Car)