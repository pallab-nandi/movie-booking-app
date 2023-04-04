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

  async getAllBooking(queryObj) {
    let user = await db.users.findOne({ _id: req._id });
    if (user.userType !== 'ADMIN') {
      queryObj.userId = req._id;
    }

    return this
      .schema
      .find(queryObj)
  }

  getBookingById(id) {
    return this
      .schema
      .findOne({ _id: id })
  }

  updateBookingById(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update);
  }
}

const bookingService = new BookingService();

module.exports = { bookingService }