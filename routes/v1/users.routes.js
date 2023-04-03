const express = require('express');

const router = express.Router();

const userController = require('../../src/controllers/users.controller');


router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.addUsers)
  .delete(userController.deleteUsers)

router
  .route('/:id')
  .get(userController.getUsersById)
  .put(userController.updateUser)
  .delete(userController.deleteUsers)

module.exports = router;