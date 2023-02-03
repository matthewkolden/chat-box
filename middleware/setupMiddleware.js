const express = require('express')
const logger = require('morgan')
const session = require('express-session')
const connectMongo = require('connect-mongo')
const flash = require('express-flash')
const methodOverride = require('method-override')
const passport = require('passport')

const initializePassport = require('../passport-config')

const setupMiddleware = (app) => {
  initializePassport(passport)
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
      store: connectMongo.create({ mongoUrl: process.env.MONGO_URI }),
      saveUninitialized: false,
      resave: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
}

module.exports = setupMiddleware
