require('dotenv').config()
const User = require('./models/User')

/**
 * Requirements
 */
const mongoose = require('mongoose')
const express = require('express')
const logger = require('morgan')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const session = require('express-session')
const flash = require('express-flash')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const passport = require('passport')

const initializePassport = require('./middleware/passport-config')

initializePassport(passport)

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
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(flash())
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: false,
    resave: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())

// View engine
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Controller middlewares
app.set('socketio', io)
app.use('/chat', chatroomController)
app.use('/', userController)

// Socket.io setup

const users = {}

io.on('connection', (socket) => {
  socket.on('new-user', (user) => {
    users[socket.id] = user
    socket.broadcast.emit('user-connected', user)
  })
  // socket.broadcast.emit('hello', 'world')
  socket.on('chat', (data) => {
    socket.join(data.id)
    console.log(data.name, data.id, data.msg)
    io.to(data.id).emit('sent message', {
      message: data.msg,
      user: data.name,
    })
    // io.emit('sent message', data)
    // io.emit('chat', { user: data.user, msg: data.msg })
  })
  socket.on('join-room', (data, roomId) => {
    socket.join(roomId)
    io.to(roomId).emit('chat')
  })
})

// Listen on the port
server.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`)
})
