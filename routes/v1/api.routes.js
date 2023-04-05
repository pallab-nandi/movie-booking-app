const express = require('express');

const router = express.Router();

const moviesRoute = require('./movies.routes');
const theatreRoute = require('./theatres.routes');
const userRoute = require('./users.routes');
const authRoute = require('./auth.routes');
const bookingRoute = require('./booking.routes');
const paymentRoute = require('./payment.routes');

router.use('/movie', moviesRoute);
router.use('/theatre', theatreRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/booking', bookingRoute);
router.use('/payment', paymentRoute);

module.exports = router;