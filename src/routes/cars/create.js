const Car  = require('./../../schemas/Car')

module.exports = (req, res) => {
    Car
        .create(req.body)
        .then((car) => {
            return res.json({ car })
        })
}