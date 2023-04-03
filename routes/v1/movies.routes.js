const express = require('express');

const router = express.Router();

const movieController = require('../../src/controllers/movies.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');
const authValidator = require('../../src/middlewares/auth.middleware');

router
  .route('/')
  .get(movieController.getAllMovies)
  .post([authValidator.verifyToken, authValidator.isAdmin, validReqBody.validMovieBody], movieController.addMovies)
  .delete([authValidator.verifyToken, authValidator.isAdmin], movieController.deleteMovies)

router
  .route('/:id')
  .get(movieController.getMoviesById)
  .put([authValidator.verifyToken, authValidator.isAdmin], movieController.updateMovies)
  .delete([authValidator.verifyToken, authValidator.isAdmin], movieController.deleteMovies)

module.exports = router;