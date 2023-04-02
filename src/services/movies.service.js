const { db } = require('../models/index.model');

class MovieService {
  schema;
  constructor() {
    this.schema = db.movies;
  }

  getAllMovies(queryObj) {
    return this
      .schema
      .find(queryObj);
  }

  getMoviesById(id) {
    return this
      .schema
      .findOne({ _id: id });
  }

  addMovies(movie) {
    return this
      .schema
      .create(movie);
  }

  updateMovies(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update);
  }

  deleteMovies(id) {
    return this
      .schema
      .deleteOne({ _id: id });
  }
}

const movieService = new MovieService();

module.exports = { movieService }