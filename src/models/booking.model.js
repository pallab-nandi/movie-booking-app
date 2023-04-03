const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  theatreId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Theatre"
  },
  movieId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Movie"
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User"
  },
  timing: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "IN_PROGRESS"
  },
  noOfSeats: {
    type: Number,
    required: true,
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


const bookingModel = mongoose.model("Booking", bookingSchema);

module.exports = { bookingModel }