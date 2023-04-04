const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  theatreId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "theatres"
  },
  movieId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "movies"
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "users"
  },
  timing: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: [
      'BOOKED',
      'CANCELLED',
      'IN_PROGRESS',
      'EXPIRED'
    ],
    default: "IN_PROGRESS"
  },
  noOfSeats: {
    type: Number,
    required: true
  },
  totalCost: {
    type: Number
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


const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = { bookingModel }