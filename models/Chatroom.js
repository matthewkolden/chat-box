const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: 'Name is required',
  },
  user: {
    type: String,
  },
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom
