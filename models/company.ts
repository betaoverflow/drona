const mongooseCompany = require('mongoose')

var question = mongooseCompany.model('question', {
    url: { type: String },
    tag: { type: String },
    company: { type: String },
    role: { type: String },
    isApproved: { type: Boolean, default: false },
})

module.exports = { question }
