const { bookingService } = require('../services/booking.service');
const errorHandler = require('../utils/errorHandler');

async function createBooking(req, res) {
  let ticket = req.body;
  ticket.userId = req._id;

  ticket.totalCost = ticket.noOfSeats * 200;

  return await bookingService
    .createBooking(ticket)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Ticket booked successfully',
        ticket: data
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function getAllBooking(req, res) {
  const userId = req._id;

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await bookingService
    .getAllBooking(userId, queryObj)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No Booking data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All Booking are fetched successfully',
          data: data
        }))
      }
    })
    .catch(err => errorHandler.serverError(err));
}

async function getBookingById(req, res) {
  const id = req.params.id;

  return await bookingService
    .getBookingById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: `Such Booking doesn't exist`
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'Booking fetched successfully',
          data: data
        }))
      }
    })
    .catch(err => errorHandler.serverError(err));
}

async function updateBookingById(req, res) {
  const id = req.params.id;
  let update = req.body;

  if (update.totalCost) {
    delete update.totalCost;
  }

  if (update.noOfSeats) {
    update.totalCost = update.noOfSeats * 200; // constant ticket price - Rs.200
  }

  let booking = await bookingService.getBookingById(id);
  if (!booking || booking.length === 0) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: `Such Booking doesn't exist`
    }))
    return;
  }

  return await bookingService
    .updateBookingById(id, update)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Booking updated successfully'
      }))
    })
    .catch(err => errorHandler.serverError(err));
}

module.exports = {
  createBooking,
  getAllBooking,
  getBookingById,
  updateBookingById
}