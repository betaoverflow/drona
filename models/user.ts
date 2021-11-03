const mongooseUser = require('mongoose')

const User = new mongooseUser.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { collection: 'user-data' }
)

const model = mongooseUser.model('UserData', User)

module.exports = model
