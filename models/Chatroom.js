const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  code: {
    type: String,
    required: 'Code is required',
  },
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom
