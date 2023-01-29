require('dotenv').config()

/**
 * Requirements
 */
const mongoose = require('mongoose')
const express = require('express')
const logger = require('morgan')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const methodOverride = require('method-override')

const PORT = process.env.PORT || '3000'

// Controllers
chatroomController = require('./controllers/chatroomController')
userController = require('./controllers/userController')

// Mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// Middleware
app.use(logger('dev'))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// View engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controller middlewares
app.set('socketio', io)
app.use('/chatroom', chatroomController)
app.use('/', userController)

// Socket.io setup
io.on('connection', (socket) => {
  console.log('connected')
  // socket.broadcast.emit('hello', 'world')
  io.emit('hello', 'world')
  socket.on('chat', (data) => {
    console.log('data', data)
    io.emit('sent message', data)
    // io.emit('chat', { user: data.user, msg: data.msg })
  })
})

// Listen on the port
server.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`)
})
