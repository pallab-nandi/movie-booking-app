const express = require('express');

const router = express.Router();

const theatreController = require('../../src/controllers/theatres.controller');

router
  .route('/')
  .get(theatreController.getAllTheatres)
  .post(theatreController.addTheatres)
  .delete(theatreController.deleteTheatres)

router
  .route('/:id')
  .get(theatreController.getTheatresById)
  .put(theatreController.updateTheatres)
  .delete(theatreController.deleteTheatres)

module.exports = router;