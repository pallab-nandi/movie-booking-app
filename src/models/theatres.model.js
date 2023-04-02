const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a valid Theatre Name']
  },
  description: {
    type: String,
    required: [true, 'Please enter a valid description']
  },
  movies: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "movies"
  },
  city: {
    type: String,
    required: [true, 'Enter the name of the City']
  },
  pinCode: {
    type: Number,
    required: [true, 'Enter valid PIN code']
  },
  createdAt: {
    // I want to default to a new date
    type: Date,
    immutable: true,  // This will ensure the createdAt column is never updated but once in the start
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

const theatreModel = mongoose.model('theatres', theatreSchema);

module.exports = { theatreModel }