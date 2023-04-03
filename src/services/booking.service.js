const { db } = require('../models/index.model');

class BookingService {
  schema;
  constructor() {
    this.schema = db.bookings;
  }

  createBooking(ticket) {
    return this
      .schema
      .create(ticket);
  }
}

const bookingService = new BookingService();

module.exports = { bookingService }