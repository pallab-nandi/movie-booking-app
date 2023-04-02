const { db } = require('../models/index.model');

class TheatreService {
  schema;
  constructor() {
    this.schema = db.theatres;
  }

  getAllTheatres(queryObj) {
    return this
      .schema
      .find(queryObj);
  }

  getTheatresById(id) {
    return this
      .schema
      .findOne({ _id: id });
  }

  addTheatres(theatre) {
    return this
      .schema
      .create(theatre);
  }

  updateTheatres(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update);
  }

  deleteTheatres(id) {
    return this
      .schema
      .deleteOne({ _id: id });
  }
}

const theatreService = new TheatreService();

module.exports = { theatreService }