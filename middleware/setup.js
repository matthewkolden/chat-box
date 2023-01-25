const methodOverride = require('method-override')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const express = require('express')

const setupMiddleware = (app) => {
  app.use(express.static('public'))

  app.use(methodOverride('_method'))
  app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })

  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(
    session({
      secret: process.env.SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: true,
      resave: true,
    })
  )
}

module.exports = setupMiddleware
