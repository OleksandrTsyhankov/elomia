const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  sex: String,
  age: Number,
  country: String
})

const User = mongoose.model('User', userSchema)
module.exports = User
