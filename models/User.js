const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required',
    unique: true,
  },
  password: {
    type: String,
    required: 'Password is required',
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
