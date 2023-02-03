const express = require('express')
const router = express.Router()

const { checkAuthenticated } = require('../../middleware/checkAuthentication')

// Controllers
const dataController = require('./dataController')
const viewsController = require('./viewsController')

// Index
router.get('/', checkAuthenticated, dataController.index, viewsController.index)

// Chatroom
router.get(
  '/:id',
  checkAuthenticated,
  dataController.chatroom,
  viewsController.chatroom
)

// Create
router.post(
  '/',
  checkAuthenticated,
  dataController.create,
  viewsController.create
)

// Delete
router.delete(
  '/:id',
  checkAuthenticated,
  dataController.destroy,
  viewsController.destroy
)

// Edit
router.get(
  '/edit/:id',
  checkAuthenticated,
  dataController.edit,
  viewsController.edit
)

// Update
router.put(
  '/edit/:id',
  checkAuthenticated,
  dataController.update,
  viewsController.update
)

// Join Chatroom
router.post(
  '/join',
  checkAuthenticated,
  dataController.join,
  viewsController.join
)

module.exports = router
