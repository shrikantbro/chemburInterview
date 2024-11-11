const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

userSchema.index({name: 'text'})

const User = mongoose.model('user', userSchema)

module.exports = User