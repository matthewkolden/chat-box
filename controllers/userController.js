const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.get('/', (req, res) => {
  res.render('Index', { title: 'Login' })
})

router.get('/signup', (req, res) => {
  res.render('Signup', { title: 'Signup' })
})

router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))

    const createdUser = await User.create({
      username,
      password: hashedPassword,
    })
    console.log(createdUser)
    res.redirect('/')
    // res.json(req.body)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/', async (req, res) => {
  const { username, password } = req.body
  try {
    const foundUser = await User.findOne({ username })
    const result = await bcrypt.compare(password, foundUser.password)

    if (result) {
      req.session.username = foundUser.username
      req.session.loggedIn = true
    } else {
      res.json({ error: "password doesn't match" })
    }
    res.redirect('/')
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    console.error(err)
    res.redirect('/')
  })
})

module.exports = router
