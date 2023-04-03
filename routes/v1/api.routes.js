const express = require('express');

const router = express.Router();

const moviesRoute = require('./movies.routes');
const theatreRoute = require('./theatres.routes');
const userRoute = require('./users.routes');

router.use('/movie', moviesRoute);
router.use('/theatre', theatreRoute);
router.use('/user', userRoute);

module.exports = router;