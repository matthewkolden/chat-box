const RESOURCE_PATH = '/chat'

const viewController = {
  index(req, res) {
    res.render('Index', res.locals.data)
  },
  chatroom(req, res) {
    res.render('Chatroom', res.locals.data)
  },
  create(req, res) {
    res.redirect(RESOURCE_PATH)
  },
  edit(req, res) {
    const { chat, user } = res.locals.data
    if (chat.user !== user) {
      res.redirect(RESOURCE_PATH)
    } else {
      res.render('Edit', res.locals.data)
    }
  },
  update(req, res) {
    res.redirect(RESOURCE_PATH + `/edit/${req.params.id}`)
  },
  destroy(req, res) {
    res.redirect(RESOURCE_PATH)
  },
  join(req, res) {
    res.redirect(RESOURCE_PATH + `/${res.locals.data.id}`)
  },
}

module.exports = viewController
