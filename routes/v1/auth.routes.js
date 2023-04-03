const express = require('express');

const router = express.Router();

const authController = require('../../src/controllers/auth.controller');


router
  .route('/signUp')
  .post(authController.signUp)

router
  .route('/signIn')
  .post(authController.signIn)

module.exports = router;