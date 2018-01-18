const mongoose = require('mongoose')
const createdPlugin = require('./plugins/created')

const Person = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    age: {
        type: mongoose.SchemaTypes.Mixed
    }
})

Person.virtual('name.fullname').get(function() {
    return this.name.firstName + ' ' + this.name.lastName
})
Person.virtual('name.fullname').set(function(name) {
    this.name.firstName = name.firstName
    this.name.lastName  = name.lastName
})

Person.statics.findByName = function(firstName, lastName, cb) {
    let PersonInst = mongoose.model('Person', Person)
    return PersonInst.findOne({ 'name.firstName': firstName, 'name.lastName': lastName }, cb)
}

Person.methods.ageGreaterThan20 = function(age, cb) {
    if (age > 20) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

Person.plugin(createdPlugin, {})

module.exports = mongoose.model('Person', Person)