const express = require('express');

const router = express.Router();

const movieController = require('../../src/controllers/movies.controller');

router
  .route('/')
  .get(movieController.getAllMovies)
  .post(movieController.addMovies)
  .delete(movieController.deleteMovies)

router
  .route('/:id')
  .get(movieController.getMoviesById)
  .put(movieController.updateMovies)
  .delete(movieController.deleteMovies)

module.exports = router;