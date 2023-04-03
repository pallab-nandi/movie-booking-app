const express = require('express');

const router = express.Router();

const authController = require('../../src/controllers/auth.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

router
  .route('/signUp')
  .post(validReqBody.validUserBody, authController.signUp)

router
  .route('/signIn')
  .post(authController.signIn)

module.exports = router;