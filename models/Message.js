const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  msg: {
    type: String,
    // required: 'Message required',
  },
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
