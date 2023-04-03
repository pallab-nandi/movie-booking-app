const ObjectId = require('mongoose').Types.ObjectId;
const { theatreService } = require("../services/theatres.service");

function validTheatreBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.description
    || !req.body.city
    || !req.body.pinCode
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

async function duplicateTheatre(req, res, next) {
  let theatre = req.body;
  let exist = await theatreService.getAllTheatres(theatre);

  if (exist) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Such theatre already exists in the area'
    }))
  } else next();
}

function validUserBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.email
    || !req.body.userId
    || !req.body.password
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

function validMovieBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.description
    || !req.body.casts
    || !req.body.releaseDate
    || !req.body.director
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

async function validateBookingReqBody(req, res, next) {
  if (!req.body.theatreId) {
    return res.status(400).send({
      msg: 'theatreId is required'
    })
  }

  if (!ObjectId.isValid(req.body.theatreId)) {
    return res.status(400).send({
      msg: 'theatreId format is not correct'
    })
  }

  const theatre = await theatreService.getTheatresById(req.body.theatreId)

  if (!theatre) {
    return res.status(400).send({
      msg: 'This theatre does not exist in DB'
    })
  }

  if (!req.body.movieId) {
    return res.status(400).send({
      msg: 'movieId is required'
    })
  }

  if (!ObjectId.isValid(req.body.movieId)) {
    return res.status(400).send({
      msg: 'movieId format is not correct'
    })
  }

  if (!theatre.movies.includes(req.body.movieId)) {
    return res.status(400).send({
      msg: `This movieId ${req.body.movieId} does not 
          exist in this theatreId ${req.body.theatreId}`
    })
  }

  if (!req.body.timing) {
    return res.status(400).send({
      msg: 'timing is required'
    })
  }

  if (!req.body.noOfSeats) {
    return res.status(400).send({
      msg: 'noOfSeats is required'
    })
  }

  next();
}

module.exports = {
  validMovieBody,
  validTheatreBody,
  validUserBody,
  duplicateTheatre,
  validateBookingReqBody
}