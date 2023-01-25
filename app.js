require('dotenv').config()

const createError = require('http-errors')
const express = require('express')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

const db = require('./db')
db.once('open', () => {
  console.log('connected to mongo')
})

// Middleware
const setupMiddleware = require('./middleware/setup')

setupMiddleware(app)

// view engine setup
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
