const mongooseCompany = require('mongoose')

var company = mongooseCompany.model('company', {
    url: { type: String },
    tag: { type: String },
    company: { type: String },
    role: { type: String },
    logo: { type: String },
    isApproved: { type: Boolean, default: false },
})

module.exports = { company }
