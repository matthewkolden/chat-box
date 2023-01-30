const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}

const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect('/chatroom')
  }
  next()
}

module.exports = { checkAuthenticated, checkNotAuthenticated }
