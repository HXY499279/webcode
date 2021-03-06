const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users')

var Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

User = mongoose.model('User',userSchema)

module.exports = User
