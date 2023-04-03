const express = require('express');

const router = express.Router();

const movieController = require('../../src/controllers/movies.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

router
  .route('/')
  .get(movieController.getAllMovies)
  .post(validReqBody.validMovieBody, movieController.addMovies)
  .delete(movieController.deleteMovies)

router
  .route('/:id')
  .get(movieController.getMoviesById)
  .put(movieController.updateMovies)
  .delete(movieController.deleteMovies)

module.exports = router;