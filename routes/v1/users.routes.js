const express = require('express');

const router = express.Router();

const userController = require('../../src/controllers/users.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');
const authValidator = require('../../src/middlewares/auth.middleware');


router
  .route('/')
  .get([authValidator.verifyToken, authValidator.isAdmin], userController.getAllUsers)
  .post([authValidator.verifyToken, authValidator.isAdmin, validReqBody.validUserBody], userController.addUsers)
  .delete([authValidator.verifyToken, authValidator.isAdmin], userController.deleteUsers)

router
  .route('/:id')
  .get([authValidator.verifyToken, authValidator.isAdmin], userController.getUsersById)
  .put([authValidator.verifyToken, authValidator.isAdmin], userController.updateUser)
  .delete([authValidator.verifyToken, authValidator.isAdmin], userController.deleteUsers)

module.exports = router;