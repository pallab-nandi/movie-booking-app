const express = require('express');

const router = express.Router();

const paymentController = require('../../src/controllers/payment.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');
const authValidator = require('../../src/middlewares/auth.middleware');

router
  .route('/')
  .get(authValidator.verifyToken, paymentController.getAllPayment)
  .post([authValidator.verifyToken, validReqBody.validatePaymentReqBody], paymentController.createPayment)

router
  .route('/:id')
  .get(authValidator.verifyToken, paymentController.getPaymentsById)


module.exports = router;