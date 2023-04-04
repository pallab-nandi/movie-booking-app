const express = require('express');

const router = express.Router();

const theatreController = require('../../src/controllers/theatres.controller');
const validReqBody = require('../../src/middlewares/validReqBody.middleware');
const authValidator = require('../../src/middlewares/auth.middleware');

router
  .route('/')
  .get(authValidator.verifyToken, theatreController.getAllTheatres)
  .post([authValidator.verifyToken, authValidator.isAuthorized, validReqBody.validTheatreBody, validReqBody.duplicateTheatre], theatreController.addTheatres)
  .delete([authValidator.verifyToken, authValidator.isAuthorized], theatreController.deleteTheatres)

router
  .route('/:id')
  .get([authValidator.verifyToken], theatreController.getTheatresById)
  .put([authValidator.verifyToken, authValidator.isAuthorized], theatreController.updateTheatres)
  .delete([authValidator.verifyToken, authValidator.isAuthorized], theatreController.deleteTheatres)

router
  .route('/:id/movies')
  .put([authValidator.verifyToken, authValidator.isAuthorized], theatreController.updateMoviesInTheatre)

router
  .route('/:theatreId/movie/:movieId')
  .get([authValidator.verifyToken], theatreController.checkRunningMovies)

module.exports = router;