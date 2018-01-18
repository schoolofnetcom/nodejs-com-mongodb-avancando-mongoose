module.exports = function(schema, options) {
    schema.add({ created: Date })

    schema.pre('save', function(next) {
        this.created = new Date()
        next()
    })
}