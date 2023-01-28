const express = require('express')
const router = express.Router()

const Message = require('../models/Message')

// Index
router.get('/', async (req, res) => {
  Message.find({}, (err, messages) => {
    res.render('Chatroom', { messages })

    // emit initial messages to client
    req.app.get('socketio').emit('initial messages', messages)
  })
})
// Create
router.post('/', async (req, res) => {
  const newMessage = await Message.create(req.body)
  // res.status(201).json({ newMessage })

  // Emit new message to all clients
  req.app.get('socketio').emit('new message', newMessage)
})

module.exports = router
