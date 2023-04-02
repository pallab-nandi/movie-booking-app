const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a valid Movie Name']
  },
  description: {
    type: String,
    required: [true, 'Please enter a valid description']
  },
  casts: {
    type: [String],
    required: [true, 'Please enter cast/casts']
  },
  trailerUrl: {
    type: String,
    required: [true, 'Please enter a trailer URL']
  },
  posterUrl: {
    type: String,
    required: [true, 'Please enter a Poster URL']
  },
  language: {
    type: String,
    required: true,
    default: "Hindi"
  },
  releaseDate: {
    type: String,
    required: [true, 'Please enter a Release Date']
  },
  director: {
    type: String,
    required: [true, 'Enter the name of the director of the Movie']
  },
  releaseStatus: {
    type: String,
    required: true,
    enum: [
      'RELEASED',
      'UNRELEASED',
      'BLOCKED'
    ],
    default: "RELEASED"
    //Other possible values could be UNRELEASED | BLOCKED
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

const movieModel = mongoose.model('movies', movieSchema);

module.exports = { movieModel }