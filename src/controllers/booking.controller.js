const { bookingService } = require('../services/booking.service');
const errorHandler = require('../utils/errorHandler');

async function createBooking(req, res) {
  let ticket = req.body;

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

module.exports = {
  createBooking
}