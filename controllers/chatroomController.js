const express = require('express')
const router = express.Router()
const { checkAuthenticated } = require('../middleware/checkAuthentication')

const Message = require('../models/Message')

// Index
router.get('/', checkAuthenticated, async (req, res) => {
  Message.find({}, (err, messages) => {
    console.log(res.locals.data)
    res.render('Chatroom', res.locals.data)

    // emit initial messages to client
    // req.app.get('socketio').emit('initial messages', messages)
  })
})
// Create
router.post('/', checkAuthenticated, async (req, res) => {
  const newMessage = await Message.create(req.body)
  // res.status(201).json({ newMessage })

  // Emit new message to all clients
  // req.app.get('socketio').emit('new message', newMessage)
})

module.exports = router
