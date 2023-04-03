const express = require('express');

const router = express.Router();

const bookingController = require('../../src/controllers/booking.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

router
  .route('/')
  .post(validReqBody.validateBookingReqBody, bookingController.createBooking);

module.exports = router;