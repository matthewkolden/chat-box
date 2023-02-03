const Chatroom = require('../../models/Chatroom')
const User = require('../../models/User')
const crypto = require('crypto')

const dataController = {
  async index(req, res, next) {
    try {
      const currentUser = await User.findById(req.session.passport.user)
      const allChats = await Chatroom.find({ user: currentUser.username })
      res.locals.data.user = currentUser.username
      res.locals.data.chats = allChats
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async chatroom(req, res, next) {
    try {
      const currentUser = await User.findById(req.session.passport.user)
      const chatroom = await Chatroom.findById(req.params.id)
      res.locals.data.chat = chatroom
      res.locals.data.id = String(chatroom._id)
      res.locals.data.user = currentUser.username
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async create(req, res, next) {
    try {
      const currentUser = await User.findById(req.session.passport.user)
      req.body.user = currentUser.username
      const { user, name } = req.body
      const newChatroom = await Chatroom.create({
        user,
        name,
        code: crypto.randomBytes(3).toString('hex'),
      })
      res.locals.data.id = newChatroom._id
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async edit(req, res, next) {
    try {
      const currentUser = await User.findById(req.session.passport.user)
      const chatroom = await Chatroom.findById(req.params.id)
      res.locals.data.chat = chatroom
      res.locals.data.user = currentUser.username
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async update(req, res, next) {
    try {
      await Chatroom.findByIdAndUpdate(req.params.id, req.body)
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async destroy(req, res, next) {
    try {
      await Chatroom.findByIdAndRemove(req.params.id)
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },

  async join(req, res, next) {
    try {
      const { code } = req.body
      const chatroom = await Chatroom.findOne({ code: code })
      res.locals.data.id = chatroom._id
      next()
    } catch (error) {
      res.status(404).send({
        msg: error.message,
      })
    }
  },
}

module.exports = dataController
