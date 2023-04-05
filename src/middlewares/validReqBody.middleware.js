const ObjectId = require('mongoose').Types.ObjectId;
const { bookingService } = require('../services/booking.service');
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
  let existTheatre = await theatreService.getAllTheatres(theatre);

  if (existTheatre.length !== 0) {
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
      status: 'fail',
      message: 'theatreId is required'
    })
  }

  if (!ObjectId.isValid(req.body.theatreId)) {
    return res.status(400).send({
      status: 'fail',
      message: 'theatreId format is not correct'
    })
  }

  const theatre = await theatreService.getTheatresById(req.body.theatreId)

  if (!theatre) {
    return res.status(400).send({
      status: 'fail',
      message: 'This theatre does not exist'
    })
  }

  if (!req.body.movieId) {
    return res.status(400).send({
      status: 'fail',
      message: 'movieId is required'
    })
  }

  if (!ObjectId.isValid(req.body.movieId)) {
    return res.status(400).send({
      status: 'fail',
      message: 'movieId format is not correct'
    })
  }

  if (!theatre.movies.includes(req.body.movieId)) {
    return res.status(400).send({
      status: 'fail',
      message: `This movieId ${req.body.movieId} does not 
          exist in this theatreId ${req.body.theatreId}`
    })
  }

  if (!req.body.timing) {
    return res.status(400).send({
      status: 'fail',
      message: 'timing is required'
    })
  }

  if (!req.body.noOfSeats) {
    return res.status(400).send({
      status: 'fail',
      message: 'noOfSeats is required'
    })
  }

  next();
}

async function validatePaymentReqBody(req, res, next) {
  if (!req.body.bookingId) {
    return res.status(400).send({
      status: 'fail',
      message: 'bookingId is required'
    })
  }

  if (!ObjectId.isValid(req.body.bookingId)) {
    return res.status(400).send({
      status: 'fail',
      message: 'bookingId format is not correct'
    })
  }

  const booking = await bookingService.getBookingById(req.body.bookingId)

  if (!booking) {
    return res.status(400).send({
      status: 'fail',
      message: 'This Booking does not exist in DB'
    })
  }

  if (req.body.amount !== booking.totalCost) {
    return res.status(400).send({
      status: 'fail',
      message: 'please enter correct amount which is Rs.' + booking.totalCost
    })
  }

  next();
}

module.exports = {
  validMovieBody,
  validTheatreBody,
  validUserBody,
  duplicateTheatre,
  validateBookingReqBody,
  validatePaymentReqBody
}