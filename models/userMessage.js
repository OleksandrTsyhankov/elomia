const mongoose = require('mongoose')

const userMessageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    message : String
})

const UserMessage = mongoose.model('UserMessage', userMessageSchema)
module.exports = UserMessage