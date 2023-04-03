const express = require('express');

const router = express.Router();

const moviesRoute = require('./movies.routes');
const theatreRoute = require('./theatres.routes');
const userRoute = require('./users.routes');
const authRoute = require('./auth.routes');
const bookingRoute = require('./booking.routes');

router.use('/movie', moviesRoute);
router.use('/theatre', theatreRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/booking', bookingRoute);

module.exports = router;