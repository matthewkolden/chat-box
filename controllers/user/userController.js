const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')
const {
  checkNotAuthenticated,
} = require('../../middleware/checkAuthentication')

const User = require('../../models/User')

router.get('/', checkNotAuthenticated, (req, res) => {
  res.render('Login')
})

router.get('/signup', checkNotAuthenticated, (req, res) => {
  res.render('Signup')
})

router.post('/signup', checkNotAuthenticated, async (req, res) => {
  const { username, password } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const createdUser = await User.create({
      username,
      password: hashedPassword,
    })
    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
})

// Login
router.post(
  '/',
  checkNotAuthenticated,
  passport.authenticate('local', {
    successRedirect: '/chat',
    failureRedirect: '/',
    failureFlash: true,
  })
)

router.delete('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

module.exports = router
