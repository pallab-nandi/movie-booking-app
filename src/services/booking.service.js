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

  async getAllBooking(id, queryObj) {
    let user = await db.users.findOne({ _id: id });
    if (user.userType !== 'ADMIN') {
      queryObj.userId = id;
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
      .findOneAndUpdate({ _id: id }, update, { new: true });
  }
}

const bookingService = new BookingService();

module.exports = { bookingService }