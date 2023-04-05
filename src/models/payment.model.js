const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

  bookingId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "bookings"
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "PENDING"
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => {
      return Date.now();
    }
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    }
  }


})


const paymentModel = mongoose.model('payments', paymentSchema);

module.exports = { paymentModel };