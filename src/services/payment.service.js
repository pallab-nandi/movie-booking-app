const { db } = require('../models/index.model');

class PaymentService {
  schema;
  constructor() {
    this.schema = db.payments;
  }

  async getAllPayment(userId, queryObj) {
    let user = await db.users.findOne({ _id: userId });
    if (user.userType !== 'ADMIN') {
      let bookings = await db.bookings.find({ userId: user._id });

      let bookingIds = bookings.map(book => book._id);
      queryObj.bookingId = { $in: bookingIds };
    }

    return this
      .schema
      .find(queryObj)
  }

  getPaymentById(id) {
    return this
      .schema
      .findOne({ _id: id })
  }

  async createPayment(paymentBody) {
    let booking = await db.bookings.findOne({ _id: paymentBody.bookingId });

    if (booking.status !== 'IN_PROGRESS') {
      return {
        statusCode: 400,
        status: 'fail',
        message: 'Error! Make a new booking'
      }
    }

    let bookedTime = booking.createdAt;
    let currentTime = Date.now();

    let timeInMins = Math.floor(((currentTime - bookedTime) / 1000) / 60);

    //checking if booking time passed 5 minutes
    if (timeInMins > 5) {
      booking.status = 'EXPIRED';
      await booking.save();

      return {
        statusCode: 400,
        status: 'expired',
        message: 'Request time out. Make a new booking'
      }
    } else {
      booking.status = 'BOOKED';
      await booking.save();

      paymentBody.status = 'SUCCESS';

      const payment = await this.schema.create(paymentBody);
      console.log(payment);
      return {
        statusCode: 200,
        status: 'success',
        message: 'Payment done successfully',
        payment: payment
      }
    }
  }
}

const paymentService = new PaymentService();

module.exports = { paymentService }