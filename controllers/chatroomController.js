const express = require('express')
const router = express.Router()
const { checkAuthenticated } = require('../middleware/checkAuthentication')

const Chatroom = require('../models/Chatroom')
const User = require('../models/User')

// Index
router.get('/', checkAuthenticated, async (req, res) => {
  Chatroom.find({}, async (err, chats) => {
    const currentUser = await User.findById(req.session.passport.user)
    res.render('Dashboard', { user: currentUser.username })
    console.log(currentUser.username)
  })
})

// Chatroom
router.get('/:id', async (req, res) => {
  try {
    Chatroom.findById(req.params.id, (err, chatroom) => {
      res.render('Chatroom', {
        chat: chatroom,
        id: String(chatroom._id),
      })
    })
  } catch (error) {
    console.log(error)
  }
})

// Create
router.post('/', async (req, res) => {
  try {
    const newChatroom = await Chatroom.create(req.body)
    res.redirect(`chat/${newChatroom._id}`)
  } catch (error) {
    console.log(error)
  }
})

// Create
// router.post('/', async (req, res) => {
//   const newMessage = await Message.create(req.body)
//   // res.status(201).json({ newMessage })

//   // Emit new message to all clients
//   // req.app.get('socketio').emit('new message', newMessage)
// })

module.exports = router
