const express = require('express');

const router = express.Router();

const bookingController = require('../../src/controllers/booking.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');
const authValidator = require('../../src/middlewares/auth.middleware');

router
  .route('/')
  .get(authValidator.verifyToken, bookingController.getAllBooking)
  .post([authValidator.verifyToken, validReqBody.validateBookingReqBody], bookingController.createBooking)

router
  .route('/:id')
  .get(authValidator.verifyToken, bookingController.getBookingById)
  .put([authValidator.verifyToken, authValidator.isAuthorized, validReqBody.validateBookingReqBody], bookingController.updateBookingById)

module.exports = router;