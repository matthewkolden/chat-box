const express = require('express')
const crypto = require('crypto')
const router = express.Router()
const { checkAuthenticated } = require('../middleware/checkAuthentication')

const Chatroom = require('../models/Chatroom')
const User = require('../models/User')

// Index
router.get('/', checkAuthenticated, async (req, res) => {
  const currentUser = await User.findById(req.session.passport.user)
  Chatroom.find({ user: currentUser.username }, async (err, allChats) => {
    console.log(allChats)
    res.render('Dashboard', {
      user: currentUser.username,
      chats: allChats,
    })
  })
})

// Chatroom
router.get('/:id', async (req, res) => {
  try {
    await Chatroom.findById(req.params.id, (err, chatroom) => {
      res.render('Chatroom', {
        chat: chatroom,
        id: String(chatroom._id),
      })
    })
  } catch (error) {
    console.log(error)
  }
})

router.get('/join', async (req, res) => {
  try {
  } catch (error) {}
})

// Create
router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.passport.user)
    req.body.user = currentUser.username
    const { user, name } = req.body
    const newChatroom = await Chatroom.create({
      user,
      name,
      code: crypto.randomBytes(3).toString('hex'),
    })
    res.redirect(`chat/${newChatroom._id}`)
  } catch (error) {
    console.log(error)
  }
})

// Delete
router.delete('/:id', (req, res) => {
  Chatroom.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/chat')
  })
})

// Join Chatroom
router.post('/join', async (req, res) => {
  try {
    const { code } = req.body
    const chatrooms = await Chatroom.find({ code: code })
    if (chatrooms.length === 0) {
      console.log('No chatroom found with code', code)
      return
    }
    const chatroom = chatrooms[0]
    res.redirect(`/chat/${chatroom._id}`)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
