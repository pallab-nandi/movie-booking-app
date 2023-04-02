const express = require('express');

const router = express.Router();

const moviesRoute = require('./movies.routes');

router.use('/movie', moviesRoute);

module.exports = router;