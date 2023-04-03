const express = require('express');

const router = express.Router();

const theatreController = require('../../src/controllers/theatres.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');

router
  .route('/')
  .get(theatreController.getAllTheatres)
  .post([validReqBody.validTheatreBody, validReqBody.duplicateTheatre], theatreController.addTheatres)
  .delete(theatreController.deleteTheatres)

router
  .route('/:id')
  .get(theatreController.getTheatresById)
  .put(theatreController.updateTheatres)
  .delete(theatreController.deleteTheatres)

router
  .route('/:id/movies')
  .put(theatreController.updateMoviesInTheatre)

router
  .route('/:theatreId/movie/:movieId')
  .get(theatreController.checkRunningMovies)

module.exports = router;