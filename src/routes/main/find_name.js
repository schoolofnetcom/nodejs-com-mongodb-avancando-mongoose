const Person = require('./../../schemas/Person')

module.exports = (req, res) => {
    Person
        .findByName('Luiz', 'Carlos', (err, person) => {
            return res.json({ person })
        })
}