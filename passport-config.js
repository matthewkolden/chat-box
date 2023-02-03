const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('./models/User')

const initialize = (passport) => {
  const authenticateUser = async (username, password, done) => {
    const user = await User.findOne({ username })

    if (user === null) {
      return done(null, false, { message: 'No user with that username' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (error) {
      return done(error)
    }
  }
  passport.use(
    new localStrategy({ usernameField: 'username' }, authenticateUser)
  )
  passport.serializeUser((user, done) => done(null, user._id))
  passport.deserializeUser((userId, done) => {
    User.findById(userId, (err, user) => {
      return done(null, user)
    })
  })
}

module.exports = initialize
