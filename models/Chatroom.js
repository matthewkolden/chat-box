const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  code: {
    type: String,
    unique: true,
  },
  user: {
    type: String,
  },
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom
