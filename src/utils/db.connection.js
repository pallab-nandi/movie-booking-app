const mongoose = require('mongoose');
const dbConfig = require('../configs/db.config');

const connect = () => {
  mongoose.connect(dbConfig.DB_URI)
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch(err => {
      console.log('Error while connecting database', err);
    })
}

module.exports = { connect }