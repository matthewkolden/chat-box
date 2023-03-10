require('dotenv').config()

// Requirements
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

// Controllers
const chatroomController = require('./controllers/chatroom/chatroomController')
const userController = require('./controllers/user/userController')

// Configuration
const PORT = process.env.PORT || 3000

const app = express()
const server = http.Server(app)
const io = socketIo(server)

// Connect to database
const db = require('./db')
db.once('open', () => {
  console.log('Connected to MongoDB')
})

// Middleware
const setupMiddleware = require('./middleware/setupMiddleware')
setupMiddleware(app)

// View engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controllers
app.use('/chat', chatroomController)
app.use('/', userController)

// Socket.io server-side setup

io.on('connection', (socket) => {
  const users = {}
  let id
  socket.on('new-user', (user) => {
    users[socket.id] = user
  })

  socket.on('join-room', (roomId) => {
    id = roomId
    socket.join(id)
    io.to(id).emit('user-connected', users[socket.id])
  })

  socket.on('chat', (data) => {
    socket.join(data.id)
    io.to(data.id).emit('sent message', {
      message: data.msg,
      user: data.name,
    })
  })

  socket.on('disconnect', () => {
    socket.broadcast.to(id).emit('user-disconnected', users[socket.id])
  })
})

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/`)
})
